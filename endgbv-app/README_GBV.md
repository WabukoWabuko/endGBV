# EndGBV - Gender-Based Violence Prevention and Support Platform

## 🌍 Project Overview

**EndGBV** is a comprehensive web application designed to combat gender-based violence (GBV) through awareness, prevention, resource sharing, and community support. This project leverages modern web technologies built with **React** and **TypeScript** to provide a user-friendly, accessible, and responsive platform for survivors, advocates, and organizations working to end GBV.

### Mission Statement
To create a digital ecosystem that empowers survivors of gender-based violence, connects them with vital resources, raises community awareness, and facilitates collaboration among organizations and volunteers dedicated to ending all forms of GBV.

---

## 🎯 Key Features

### 1. **Resource Directory**
   - Comprehensive database of support organizations, hotlines, and services
   - Filterable by location, service type, and language
   - Emergency contact information readily accessible
   - Direct links to professional counseling services

### 2. **Educational Content Hub**
   - Articles, videos, and interactive modules on GBV awareness
   - Prevention strategies and risk factor identification
   - Survivor support guides and recovery resources
   - Information in multiple languages

### 3. **Community Support Forum**
   - Moderated discussion boards for survivors and advocates
   - Anonymous posting options for privacy
   - Peer support group matchmaking
   - Expert Q&A sessions with trained professionals

### 4. **Crisis Response Tools**
   - Emergency hotline locator (location-based)
   - Quick-access safety plan creator
   - Secure messaging system with counselors
   - Personal safety check-in reminders

### 5. **Organization Dashboard**
   - For non-profits and government organizations
   - Event management and volunteer coordination
   - Resource sharing and collaboration tools
   - Impact tracking and reporting

### 6. **Mobile-First Responsive Design**
   - Fully responsive across all devices
   - Offline capabilities for critical features
   - Accessibility compliance (WCAG 2.1 Level AA)
   - Multiple language support

---

## 🛠️ Technology Stack

### Frontend Technologies
- **React 18+**: UI library for building interactive components
- **TypeScript**: Static type checking for improved code quality and maintainability
- **Vite**: Next-generation frontend build tool for fast development and optimized production builds
- **React Router**: Client-side routing for single-page application navigation
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Zustand or Redux**: State management for complex application state

### Development Tools
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Vitest**: Unit and component testing
- **Cypress/Playwright**: End-to-end testing
- **TypeScript Compiler**: Type checking and compilation

### Backend (To be integrated)
- **Node.js with Express**: RESTful API server
- **MongoDB/PostgreSQL**: Database for user and content management
- **JWT Authentication**: Secure user authentication
- **Firebase**: Real-time messaging and notifications (optional)

### DevOps & Deployment
- **Docker**: Containerization for consistent deployment
- **GitHub Actions**: CI/CD pipeline automation
- **Vercel/Netlify**: Frontend hosting and deployment
- **AWS/Google Cloud**: Backend infrastructure (scalable)

---

## 📋 Project Structure

```
endgbv-app/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── common/           # Shared components (Button, Modal, Card, etc.)
│   │   ├── layout/           # Layout components (Header, Footer, Sidebar)
│   │   ├── features/         # Feature-specific components
│   │   │   ├── Resources/
│   │   │   ├── Forum/
│   │   │   ├── Education/
│   │   │   ├── Crisis/
│   │   │   └── Dashboard/
│   │   └── forms/            # Form components
│   ├── pages/                # Page-level components
│   │   ├── Home.tsx
│   │   ├── Resources.tsx
│   │   ├── Forum.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── services/             # API calls and external services
│   │   ├── api.ts           # API client configuration
│   │   ├── auth.ts          # Authentication service
│   │   ├── resources.ts     # Resource-related API calls
│   │   └── forum.ts         # Forum-related API calls
│   ├── stores/               # State management (Zustand/Redux)
│   │   ├── authStore.ts
│   │   ├── resourceStore.ts
│   │   └── uiStore.ts
│   ├── types/                # TypeScript type definitions
│   │   ├── index.ts
│   │   ├── user.ts
│   │   ├── resource.ts
│   │   └── forum.ts
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   └── useLocation.ts
│   ├── utils/                # Utility functions
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── styles/               # Global styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── i18n/                 # Internationalization
│   │   ├── en.json
│   │   ├── es.json
│   │   ├── fr.json
│   │   └── config.ts
│   ├── App.tsx               # Main App component
│   ├── main.tsx              # Application entry point
│   └── vite-env.d.ts         # Vite environment types
├── public/                   # Static assets
├── tests/                    # Test files
├── .env.example              # Environment variables template
├── .eslintrc.cjs             # ESLint configuration
├── .prettierrc                # Prettier configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # TypeScript app configuration
├── tsconfig.node.json        # TypeScript node configuration
├── vite.config.ts            # Vite configuration
├── package.json              # Project dependencies
├── package-lock.json         # Dependency lock file
├── index.html                # HTML entry point
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)
- Git for version control
- Text editor (VS Code recommended)

### Installation Steps

#### 1. **Clone the Repository**
```bash
git clone https://github.com/WabukoWabuko/endGBV.git
cd endGBV/endgbv-app
```

#### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

#### 3. **Environment Configuration**
Create a `.env.local` file in the project root:
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000

# Authentication
VITE_AUTH_PROVIDER=jwt

# Features
VITE_ENABLE_FORUM=true
VITE_ENABLE_CRISIS_TOOLS=true
VITE_ENABLE_DARK_MODE=true

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID=

# Map Services (Optional)
VITE_MAPBOX_TOKEN=
```

#### 4. **Start Development Server**
```bash
npm run dev
```
The application will open at `http://localhost:5173`

---

## 📦 Available Scripts

### Development
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check with TypeScript
npm run type-check
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format

# Format and lint together
npm run format:check
```

### Testing
```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

### Build & Deploy
```bash
# Build for production
npm run build

# Build and preview production
npm run build && npm run preview

# Deploy to production
npm run deploy
```

---

## 🔒 Security & Privacy

### Data Protection Measures
- **End-to-End Encryption**: Sensitive communications are encrypted
- **HTTPS Only**: All connections use secure HTTPS protocol
- **Privacy by Design**: Minimal data collection principle
- **GDPR Compliance**: Compliance with European data protection regulations
- **User Consent**: Explicit user consent for data processing

### Authentication & Authorization
- **Secure JWT Tokens**: JSON Web Token-based authentication
- **Two-Factor Authentication (2FA)**: Optional for sensitive accounts
- **Role-Based Access Control (RBAC)**: Different permission levels
- **Session Management**: Automatic logout after inactivity
- **Password Security**: Bcrypt hashing with salt rounds

### Anonymity Features
- **Anonymous Forum Posts**: Option to post without revealing identity
- **Anonymous Resources**: Browse resources without creating account
- **VPN Support**: Compatible with privacy-focused networks
- **No Tracking**: Minimal analytics, user privacy-first approach

---

## ♿ Accessibility

The EndGBV platform is committed to digital accessibility:

- **WCAG 2.1 Level AA** compliance
- **Screen Reader Support**: Full compatibility with assistive technologies
- **Keyboard Navigation**: Complete navigation without mouse
- **Color Contrast**: High contrast color schemes
- **Alt Text**: Descriptive alt text for all images
- **Captions**: Video captions and transcripts
- **Font Scaling**: Adjustable font sizes
- **Responsive Design**: Works on all screen sizes

---

## 🌐 Internationalization (i18n)

Currently supported languages:
- English (EN)
- Spanish (ES)
- French (FR)
- Portuguese (PT)
- Swahili (SW)

To add a new language:

1. Create a new translation file in `src/i18n/`:
```json
// src/i18n/de.json
{
  "common": {
    "home": "Startseite",
    "about": "Über uns"
  }
}
```

2. Update the configuration in `src/i18n/config.ts`

---

## 🧪 Testing Strategy

### Unit Tests (Vitest)
```typescript
// Example: src/components/Button.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Component Tests
- Component rendering and user interactions
- Props validation and type checking
- Event handling and callbacks
- State management integration

### E2E Tests (Cypress/Playwright)
- Critical user workflows
- Navigation and routing
- Form submissions
- API integration

---

## 📊 Performance Optimization

### Code Splitting
- Route-based lazy loading
- Component-level code splitting
- Dynamic imports for large libraries

### Bundle Optimization
- Tree-shaking unused code
- Minification and compression
- Image optimization and lazy loading
- CSS purging with Tailwind

### Runtime Performance
- React.memo for preventing unnecessary re-renders
- useCallback for memoized callbacks
- useMemo for expensive computations
- Virtual scrolling for large lists

### Build Metrics
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

---

## 🚀 Deployment Guide

### Development Deployment
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

### Docker Deployment
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build and run:
```bash
docker build -t endgbv-app .
docker run -p 3000:3000 endgbv-app
```

---

## 🤝 Contributing Guidelines

### Code of Conduct
All contributors must adhere to our Code of Conduct promoting a safe, inclusive, and respectful environment.

### Before Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Follow the coding standards and guidelines

### Contribution Process
1. **Make Changes**: Implement your feature or fix
2. **Write Tests**: Ensure tests cover your changes
3. **Run Quality Checks**:
   ```bash
   npm run lint
   npm run format
   npm run type-check
   npm run test
   ```
4. **Commit with Conventional Commits**:
   ```bash
   git commit -m "feat: add new feature description"
   git commit -m "fix: resolve issue with component"
   git commit -m "docs: update documentation"
   ```
5. **Push to Your Fork**: `git push origin feature/your-feature`
6. **Create Pull Request**: Provide clear description of changes

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Pull Request Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] ESLint passes
- [ ] TypeScript type checking passes
- [ ] No breaking changes (or documented)
- [ ] Commits follow conventional format

---

## 🐛 Bug Reports

Found a bug? Please report it:

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear title describing the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Environment details (OS, browser, Node version)
   - Screenshots/logs if applicable

---

## 💡 Feature Requests

Have a great idea? We'd love to hear it!

1. **Check existing issues and discussions** first
2. **Create a new discussion** with:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach
   - Mockups/wireframes if applicable

---

## 📚 Documentation

- [Component Documentation](./docs/COMPONENTS.md)
- [API Documentation](./docs/API.md)
- [Styling Guide](./docs/STYLING.md)
- [TypeScript Guide](./docs/TYPESCRIPT.md)
- [Development Workflow](./docs/WORKFLOW.md)

---

## 🗺️ Roadmap

### Phase 1 (MVP - Q1 2025)
- [ ] User authentication system
- [ ] Resource directory with search
- [ ] Basic forum functionality
- [ ] Crisis hotline locator
- [ ] Mobile responsive design

### Phase 2 (Q2 2025)
- [ ] Advanced search and filtering
- [ ] User profiles and preferences
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Accessibility improvements

### Phase 3 (Q3 2025)
- [ ] Organization dashboard
- [ ] Volunteer management
- [ ] Event creation and promotion
- [ ] Analytics and reporting
- [ ] API for third-party integration

### Phase 4 (Q4 2025)
- [ ] AI-powered resource recommendations
- [ ] Peer support matching
- [ ] Advanced crisis intervention tools
- [ ] Mobile application
- [ ] Community marketplace

---

## 📞 Support & Contact

### Getting Help
- **Documentation**: Read our [docs](./docs)
- **GitHub Issues**: [Report a bug](https://github.com/WabukoWabuko/endGBV/issues)
- **Discussions**: [Community discussions](https://github.com/WabukoWabuko/endGBV/discussions)
- **Email**: support@endgbv.org

### Community
- **Discord Server**: [Join our community](https://discord.gg/endgbv)
- **Twitter**: [@endgbv_org](https://twitter.com/endgbv_org)
- **LinkedIn**: [EndGBV Organization](https://linkedin.com/company/endgbv)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](../LICENSE) file for details.

MIT License grants you the freedom to use, modify, and distribute this software with minimal restrictions.

---

## 🙏 Acknowledgments

### Contributors
Special thanks to all contributors who have invested time and effort in improving this project.

### Organizations & Partners
- [Global Network Against Violence](https://example.org)
- [International Women's Rights Organizations](https://example.org)
- Community advocates and survivors

### Resources Used
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)

---

## 📈 Project Statistics

- **Repository**: [endGBV on GitHub](https://github.com/WabukoWabuko/endGBV)
- **Active Contributors**: Growing community
- **Open Issues**: Check GitHub for current status
- **Last Updated**: November 2025

---

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
- [Testing Library](https://testing-library.com)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

## ⚖️ Legal Notice

EndGBV is not a substitute for professional mental health care or emergency services. If you or someone you know is in immediate danger, please contact local emergency services or call the National Domestic Violence Hotline.

---

**Made with ❤️ to combat gender-based violence and support survivors worldwide.**

*Last Updated: November 2025*
*Version: 1.0.0*
