@echo off
cd my-app
echo * Changed directory to "\react\my-app"

call npm run build
echo * Built react app

cd ..\..
echo * Changed directory to "\"

rd /s /q ..\cubicle
rd /s /q ..\playerpixel
rd /s /q ..\static
del ..\asset-manifest.json
del ..\favicon.ico
del ..\index.html
del ..\logo192.png
del ..\logo512.png
del ..\manifest.json
del ..\robots.txt
del ..\*.js
echo * Deleted previous react files

xcopy /e "C:\Users\firen\OneDrive\Documents\GitHub\outmodedchip64.github.io\react\my-app\build" "C:\Users\firen\OneDrive\Documents\GitHub\outmodedchip64.github.io"
echo * Copied new react files to root directory

echo * J O B S   F I N I S H E D *

pause