@echo off
cd C:\Users\firen\OneDrive\Documents\GitHub\outmodedchip64.github.io\react\my-app
echo * Changed directory to "\react\my-app"
echo.

call npm run build
echo * Built react app
echo.

cd C:\Users\firen\OneDrive\Documents\GitHub\outmodedchip64.github.io
echo * Changed directory to "\"
echo.

rd /s /q cubicle
rd /s /q playerpixel
rd /s /q static
del asset-manifest.json
del favicon.ico
del index.html
del logo192.png
del logo512.png
del manifest.json
del robots.txt
del *.js
echo * Deleted previous react files
echo.

xcopy /e "C:\Users\firen\OneDrive\Documents\GitHub\outmodedchip64.github.io\react\my-app\build" "C:\Users\firen\OneDrive\Documents\GitHub\outmodedchip64.github.io"
echo * Copied new react files to root directory
echo.

cd C:\Users\firen\OneDrive\Documents\GitHub\outmodedchip64.github.io\react
echo * J O B S   F I N I S H E D *
echo.

pause
echo.