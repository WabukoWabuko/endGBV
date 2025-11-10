# EndGBV - Gender-Based Violence Prevention and Support Platform

> **Note**: For comprehensive documentation about the EndGBV project, features, and roadmap, please see [README_GBV.md](./README_GBV.md).

## Quick Start

This is a **React 18 + TypeScript + Vite** project for the EndGBV platform.

### Prerequisites
- Node.js v16.0.0 or higher
- npm v7.0.0 or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Type check with TypeScript

## Project Structure

See [README_GBV.md](./README_GBV.md) for detailed project structure and documentation.

## Technology Stack

- **React 18+** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality
- **Prettier** - Code formatting

## Development Recommendations

### ESLint Configuration

For a production application, enable type-aware lint rules in `eslint.config.js`:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      tseslint.configs.recommendedTypeChecked,
      // Or for stricter rules:
      tseslint.configs.strictTypeChecked,
      // Optional stylistic rules:
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### React Plugins

For enhanced React development, consider installing:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react) - React-specific lint rules
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react) - React DOM lint rules

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
