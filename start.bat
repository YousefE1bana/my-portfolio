@echo off
setlocal
title Yousef Elbana - Portfolio
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [!] Node.js was not found. Install it from https://nodejs.org and run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo [*] Installing dependencies (first run only)...
  call npm ci
  if errorlevel 1 (
    echo [!] npm ci failed.
    pause
    exit /b 1
  )
) else (
  echo [*] Dependencies already installed.
)

echo [*] Starting the dev server on http://localhost:5173/my-portfolio/ ...
start "" "http://localhost:5173/my-portfolio/"
call npm run dev
endlocal
