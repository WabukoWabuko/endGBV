# EndGBV TypeScript React Setup Guide

## ✅ Installation Complete!

Your React + TypeScript project for the EndGBV platform has been successfully created using **Vite**.

---

## 📋 What Was Installed

### Core Dependencies
- **React 19.2.0** - UI library with modern hooks
- **React-DOM 19.2.0** - React rendering for web
- **TypeScript 4.9.5** - Static type checking
- **Vite** - Fast build tool and dev server
- **Node v16+** - JavaScript runtime

### Development Dependencies
- **@testing-library/react** - Component testing utilities
- **@testing-library/jest-dom** - DOM matchers for testing
- **@types/react** - TypeScript types for React
- **@types/react-dom** - TypeScript types for React-DOM
- **ESLint** - Code quality analysis
- **Prettier** - Code formatting

---

## 🎯 Quick Start

### 1. Start Development Server
```bash
npm run dev
```
Your app will be available at `http://localhost:5173`

### 2. Build for Production
```bash
npm run build
```
Output will be in the `dist/` directory

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Files

- **`src/main.tsx`** - Application entry point
- **`src/App.tsx`** - Main App component
- **`src/App.css`** - App styles
- **`index.html`** - HTML template
- **`vite.config.ts`** - Vite configuration
- **`tsconfig.json`** - TypeScript configuration
- **`package.json`** - Dependencies and scripts

---

## 🔧 Configuration Files

### `vite.config.ts`
Configures Vite build tool:
- React plugin for JSX support
- HMR (Hot Module Replacement) settings
- Build optimization options

### `tsconfig.json`
TypeScript compiler options:
- Target: ES2020
- Module: ESNext
- JSX: React-JSX
- Strict mode enabled

### `tsconfig.app.json` & `tsconfig.node.json`
Separate TypeScript configs for:
- App source code
- Node.js configuration files

---

## 📚 Next Steps

### 1. **Install Additional Dependencies** (Optional)

#### For Styling
```bash
npm install tailwindcss postcss autoprefixer
npm install -D tailwindcss-auto-scroll
```

#### For State Management
```bash
npm install zustand
# or
npm install redux @reduxjs/toolkit react-redux
```

#### For Routing
```bash
npm install react-router-dom
```

#### For API Calls
```bash
npm install axios
# or
npm install @tanstack/react-query
```

#### For Form Handling
```bash
npm install react-hook-form
npm install zod # for validation
```

#### For UI Components
```bash
npm install @shadcn/ui
npm install @mui/material @emotion/react @emotion/styled
```

### 2. **Remove Default Files**
```bash
rm src/App.css src/index.css
rm src/assets/ -r
```

### 3. **Update `src/App.tsx`**
```typescript
import React from 'react'

function App(): JSX.Element {
  return (
    <div className="container">
      <h1>Welcome to EndGBV</h1>
      <p>Gender-Based Violence Prevention Platform</p>
    </div>
  )
}

export default App
```

### 4. **Create Your Directory Structure**
```bash
mkdir src/components
mkdir src/pages
mkdir src/types
mkdir src/utils
mkdir src/hooks
mkdir src/services
mkdir src/stores
```

### 5. **Add Environment File**
Create `.env.local`:
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000
VITE_ENABLE_FORUM=true
VITE_ENABLE_DARK_MODE=true
```

---

## 💻 Development Workflow

### Code Quality Commands
```bash
# Check TypeScript types
npm run type-check

# Lint code
npm run lint

# Format code
npm run format

# Run tests
npm run test
```

### Best Practices

#### 1. **Use TypeScript Strict Mode**
```typescript
// ✅ Good - Full type annotations
interface User {
  id: number
  name: string
  email: string
}

const user: User = {
  id: 1,
  name: 'John',
  email: 'john@example.com'
}

// ❌ Avoid - Using `any`
const user: any = { /* ... */ }
```

#### 2. **Component Composition**
```typescript
// src/components/UserProfile.tsx
interface UserProfileProps {
  userId: string
  onUpdate?: (user: User) => void
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  onUpdate
}) => {
  return <div>User Profile</div>
}
```

#### 3. **Custom Hooks**
```typescript
// src/hooks/useFetch.ts
import { useState, useEffect } from 'react'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
```

---

## 🧪 Testing Setup

### Running Tests
```bash
npm run test          # Watch mode
npm run test:coverage # With coverage
```

### Example Test
```typescript
// src/App.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders header', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
```

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for React)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/endgbv-app",
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Option 4: Docker
```bash
docker build -t endgbv-app .
docker run -p 3000:3000 endgbv-app
```

---

## 🔍 Debugging

### React DevTools
Install browser extension:
- Chrome: [React DevTools](https://chromewebstore.google.com/detail/react-developer-tools/)
- Firefox: [React DevTools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### VS Code Debugging
Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

---

## 📖 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [React Query](https://tanstack.com/query/latest)
- [Testing Library](https://testing-library.com)

---

## 🐛 Common Issues & Solutions

### Issue: Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Issue: TypeScript Errors in VS Code
```bash
# Restart TypeScript server
Ctrl + Shift + P (Cmd + Shift + P on Mac)
# Type: "TypeScript: Restart TS Server"
```

### Issue: Module Not Found
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### Issue: Build Fails
```bash
# Check for TypeScript errors
npm run type-check

# Check ESLint errors
npm run lint
```

---

## 📞 Support & Help

- **Documentation**: See [README_GBV.md](./README_GBV.md)
- **GitHub Issues**: Create an issue for bugs
- **Discussions**: Ask questions in GitHub Discussions
- **Email**: support@endgbv.org

---

## 🎓 Environment Setup Checklist

- [x] Node.js installed (v16+)
- [x] npm/yarn installed
- [x] React project created with TypeScript
- [x] Vite build tool configured
- [x] Dependencies installed
- [x] Development server ready
- [ ] Additional dependencies installed (optional)
- [ ] Environment variables configured
- [ ] Project structure created
- [ ] README reviewed

---

## 📝 Version Info

```
Project: endgbv-app v0.0.0
React: 19.2.0
TypeScript: 4.9.5
Vite: Latest
Node: v16+
Created: November 2025
```

---

**Happy coding! 🚀 Let's work together to end gender-based violence.**
