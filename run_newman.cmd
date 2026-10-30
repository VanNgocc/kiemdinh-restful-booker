@echo off
chcp 65001 >nul
REM Chay bo Postman bang Newman va xuat ket qua lam bang chung (dat file nay o thu muc goc repo).
REM Yeu cau: Node.js; cai mot lan: npm install -g newman newman-reporter-htmlextra
REM TRUOC KHI CHAY: tat he thong, chay lai run_locally.cmd (khong kem "true") de co du lieu sach.

set COLLECTION=Postman\RestfulBooker_postman_collection.json
set ENVIRONMENT=Postman\RestfulBooker_postman_environment.json
set OUT=Postman\reports
if not exist "%OUT%" mkdir "%OUT%"

newman run "%COLLECTION%" -e "%ENVIRONMENT%" ^
  -r cli,json,htmlextra ^
  --reporter-json-export "%OUT%\newman-result.json" ^
  --reporter-htmlextra-export "%OUT%\newman-report.html" ^
  --reporter-htmlextra-title "Restful-booker - Ket qua kiem thu API"

echo.
echo Xong. Bao cao: %OUT%\newman-report.html va %OUT%\newman-result.json
pause
