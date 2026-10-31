@echo off
chcp 65001 >nul
rem ===========================================================
rem  Chay bo kiem thu giao dien (Selenium) cho Restful-booker
rem  Cach dung: run_selenium.cmd <chrome^|firefox^|all^|locators^|dump>
rem  Chay tu thu muc Selenium\ . Yeu cau: Java, Maven, he thong dang chay (run_locally.cmd).
rem    locators : kiem tra dinh danh phan tu (nen chay dau tien)
rem    dump     : luu HTML va anh tung trang vao target\dom (de xac nhan dinh danh)
rem    chrome / firefox : chay 17 test case TC-UI-01 den TC-UI-17 tren trinh duyet do
rem    all      : chay lan luot hai trinh duyet roi so sanh ket qua (TC-UI-18)
rem  Ket qua: target\ui-results-<trinh duyet>.csv, target\screenshots, thu muc results\
rem ===========================================================
setlocal
set B=%1
if "%B%"=="" goto usage
if /i "%B%"=="locators" goto locators
if /i "%B%"=="dump" goto dump
if /i "%B%"=="all" goto all
call :run %B%
goto end

:locators
call mvn -q test "-Dtest=LocatorSmoke" "-Dbrowser=chrome" "-Dsurefire.failIfNoSpecifiedTests=false"
goto end

:dump
call mvn -q test "-Dtest=DomDump" "-Dbrowser=chrome" "-Dsurefire.failIfNoSpecifiedTests=false"
echo Da luu vao target\dom (gom tep .html va .png). Gui cac tep nay neu can bo sung dinh danh.
goto end

:all
call :run chrome
call :run firefox
powershell -NoProfile -Command "$all=@(); foreach($b in 'chrome','firefox'){ $f='results\ui-results-'+$b+'.csv'; if(Test-Path $f){ $all += Import-Csv $f } }; $all | Group-Object tc | ForEach-Object { $s=@($_.Group | Select-Object -ExpandProperty status -Unique); if($s.Count -gt 1){ 'KHAC NHAU: ' + $_.Name + ' -> ' + (($_.Group | ForEach-Object { $_.browser + '=' + $_.status }) -join ', ') } }; 'Da so sanh xong ket qua hai trinh duyet.'"
goto end

:run
echo.
echo === Chay bo test giao dien tren %1 ===
if exist "target\ui-results-%1.csv" del "target\ui-results-%1.csv"
call mvn -q test "-Dbrowser=%1" "-Dmaven.test.failure.ignore=true"
if not exist results mkdir results
if exist "target\ui-results-%1.csv" copy /y "target\ui-results-%1.csv" "results\ui-results-%1.csv" >nul
exit /b

:usage
echo Cach dung: run_selenium.cmd ^<chrome^|firefox^|all^|locators^|dump^>
goto end

:end
endlocal
