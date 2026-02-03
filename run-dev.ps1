# Development Server Startup Script
# This script starts the web development server

$rootPath = "C:\Users\Yash Raj\Downloads\Mark portfolio Hero Section"

Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "Project directory: $rootPath" -ForegroundColor Yellow

# Navigate to project root and start dev server
Set-Location $rootPath
npm install
npm run dev