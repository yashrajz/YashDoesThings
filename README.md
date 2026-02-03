# Mark Portfolio Website

A modern, professional portfolio website built with React Router and Tailwind CSS.

## Project Structure

```
mark-portfolio/
├── public/              # Static assets
├── src/                 # Source code
│   ├── app/            # Application routes and layouts
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # CSS and styling files
│   └── utils/          # Utility functions
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   
   Or use the provided script:
   ```bash
   ./run-dev.ps1
   ```

3. **Access the website**
   - Local: http://localhost:4000/
   - Network: http://10.204.209.2:4000/

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## Technology Stack

- **Framework**: React Router 7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)

## Features

- ⚡ Fast development with Vite HMR
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔧 TypeScript for type safety
- 🚀 Optimized production builds
- 📁 Clean, professional file structure

## Deployment

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.