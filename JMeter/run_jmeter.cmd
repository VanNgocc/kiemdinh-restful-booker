@echo off
rem ===========================================================
rem  Chay kich ban JMeter cho Restful-booker (che do khong giao dien)
rem  Cach dung:  run_jmeter.cmd <smoke|load|stress|spike|concurrency> [lan_chay]
rem  Chay tu thu muc JMeter\ . Yeu cau: jmeter trong PATH, he thong dang chay.
rem  Ket qua: thu muc results\ (file .jtl va bao cao HTML cho moi lan chay).
rem ===========================================================
setlocal EnableDelayedExpansion
set MODE=%1
set RUN=%2
if "%RUN%"=="" set RUN=1
if "%MODE%"=="" goto usage
if not exist results mkdir results

if /i "%MODE%"=="smoke"       goto smoke
if /i "%MODE%"=="load"        goto load
if /i "%MODE%"=="stress"      goto stress
if /i "%MODE%"=="spike"       goto spike
if /i "%MODE%"=="concurrency" goto concurrency
goto usage

:smoke
rem Chay thu 2 nguoi dung, 15 giay de kiem tra ket noi va cu phap
call :one 01-room-load-stress.jmx smoke-room "-Jusers=2" "-Jrampup=1" "-Jduration=15" "-Jport=3001"
call :one 02a-booking-load-stress-with-contact.jmx smoke-booking "-Jusers=2" "-Jrampup=1" "-Jduration=15" "-Jport=3000"
goto end

:load
rem TC-PERF-01, TC-PERF-02: 50 nguoi dung, ramp-up 30 giay, duy tri 5 phut
call :one 01-room-load-stress.jmx room-load-50-r%RUN% "-Jusers=50" "-Jrampup=30" "-Jduration=300" "-Jport=3001"
call :one 02a-booking-load-stress-with-contact.jmx booking-load-50-r%RUN% "-Jusers=50" "-Jrampup=30" "-Jduration=300" "-Jport=3000"
goto end

:stress
rem TC-PERF-03: tang dan 50, 100, 200, 400 nguoi dung (moi muc 3 phut)
for %%U in (50 100 200 400) do (
  call :one 01-room-load-stress.jmx room-stress-%%U-r%RUN% "-Jusers=%%U" "-Jrampup=60" "-Jduration=180" "-Jport=3001"
)
set IDX=0
for %%U in (50 100 200 400) do (
  set /a SEQ=!IDX!*60000+1
  set /a IDX+=1
  call :one 02a-booking-load-stress-with-contact.jmx booking-stress-%%U-r%RUN% "-Jusers=%%U" "-Jrampup=60" "-Jduration=180" "-Jport=3000" "-JseqStart=!SEQ!"
)
goto end

:spike
rem TC-PERF-04: nen 10 nguoi dung, sau 60 giay them 190 nguoi dung trong 5 giay, giu 60 giay
call :one 03-room-spike.jmx room-spike-r%RUN% "-Jduration=180" "-Jport=3001"
goto end

:concurrency
rem TC-PERF-05: 50 luong cung dat mot phong, cung khoang ngay
set /a OFF=400+%RANDOM%
call :one 04-booking-concurrency.jmx concurrency-r%RUN% "-Jusers=50" "-Jport=3000" "-JoffsetDays=!OFF!"
powershell -NoProfile -Command "$r=Import-Csv 'results\concurrency-r%RUN%.jtl'; 'Tong so yeu cau: ' + $r.Count; 'Phan hoi 201: ' + ($r | Where-Object responseCode -eq '201').Count; 'Phan hoi 409: ' + ($r | Where-Object responseCode -eq '409').Count; 'Ma khac: ' + ($r | Where-Object { $_.responseCode -ne '201' -and $_.responseCode -ne '409' }).Count"
goto end

:one
rem %1 = file jmx, %2 = ten lan chay, %3... = tham so -J
echo.
echo === Chay %~1 (%~2) ===
if exist "results\%~2.jtl" del "results\%~2.jtl"
if exist "results\%~2" rmdir /s /q "results\%~2"
jmeter -n -t "%~1" %~3 %~4 %~5 %~6 %~7 %~8 -l "results\%~2.jtl" -e -o "results\%~2"
exit /b

:usage
echo Cach dung: run_jmeter.cmd ^<smoke^|load^|stress^|spike^|concurrency^> [lan_chay]
goto end

:end
endlocal
