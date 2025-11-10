# EndGBV - Gender-Based Violence Prevention and Support Platform# Getting Started with Create React App



> **Note**: For comprehensive documentation about the EndGBV project, features, and roadmap, please see [README_GBV.md](./README_GBV.md).This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## 🚀 Quick Start## Available Scripts



This is a **React 18 + TypeScript + Vite** project for the EndGBV platform.In the project directory, you can run:



### Prerequisites### `npm start`

- Node.js v16.0.0 or higher

- npm v7.0.0 or higherRuns the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Installation

The page will reload if you make edits.\

```bashYou will also see any lint errors in the console.

# Install dependencies

npm install### `npm test`



# Start development serverLaunches the test runner in the interactive watch mode.\

npm run devSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



# Build for production### `npm run build`

npm run build

```Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

## 📋 Available Scripts

The build is minified and the filenames include the hashes.\

- `npm run dev` - Start development server with hot reloadYour app is ready to be deployed!

- `npm run build` - Build for production

- `npm run preview` - Preview production buildSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- `npm run lint` - Run ESLint

- `npm run lint:fix` - Fix ESLint issues### `npm run eject`

- `npm run type-check` - Type check with TypeScript

- `npm run test` - Run tests**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

- `npm run test:watch` - Run tests in watch mode

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 📁 Project Structure

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

See [README_GBV.md](./README_GBV.md) for detailed project structure and documentation.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 🛠️ Technology Stack

## Learn More

- **React 18+** - Modern UI library

- **TypeScript** - Type-safe developmentYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- **Vite** - Fast, modern build tool

- **Tailwind CSS** - Utility-first CSS framework (coming soon)To learn React, check out the [React documentation](https://reactjs.org/).

- **ESLint** - Code quality enforcement
- **Prettier** - Automatic code formatting
- **React Router** - Client-side routing (to add)
- **Testing Library** - Component testing utilities

## 🎯 Getting Started with Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

4. **Start coding**
   Edit `src/App.tsx` to begin development

## 📖 Documentation

- **[README_GBV.md](./README_GBV.md)** - Comprehensive project documentation
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Detailed setup and configuration guide
- **[React Documentation](https://react.dev)** - React official documentation
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - TypeScript learning resources
- **[Vite Documentation](https://vitejs.dev)** - Vite build tool documentation

## ✨ Key Features (In Development)

- 🌍 Comprehensive Resource Directory
- 📚 Educational Content Hub
- 💬 Community Support Forum
- 🚨 Crisis Response Tools
- 📊 Organization Dashboard
- 📱 Mobile-First Responsive Design
- ♿ WCAG 2.1 Level AA Accessibility
- 🌐 Multi-Language Support

## 🔒 Security & Privacy

- End-to-End Encryption for communications
- HTTPS-only connections
- GDPR compliant
- Privacy-by-design approach
- Anonymous forum posting options
- User consent-based data collection

## 🤝 Contributing

We welcome contributions! Please see [README_GBV.md](./README_GBV.md) for detailed contributing guidelines.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run quality checks:
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```
5. Commit with conventional format: `git commit -m "feat: description"`
6. Push to your fork
7. Create a Pull Request

## 📋 Development Best Practices

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Format with Prettier
- Write tests for new features

### Component Guidelines
```typescript
// Use clear, descriptive names
interface ComponentProps {
  title: string
  onClick?: () => void
}

export const MyComponent: React.FC<ComponentProps> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>
}
```

### TypeScript Tips
- Enable strict mode
- Use explicit return types
- Avoid `any` type
- Create interfaces for data structures

## 🧪 Testing

Run tests with:
```bash
npm run test          # Single run
npm run test:watch   # Watch mode
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### Docker
```bash
docker build -t endgbv-app .
docker run -p 3000:3000 endgbv-app
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### TypeScript Errors in VS Code
- Restart TS Server: `Ctrl + Shift + P` → "TypeScript: Restart TS Server"

### Module Not Found
```bash
rm -r node_modules package-lock.json
npm install
```

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/WabukoWabuko/endGBV/issues)
- **Discussions**: [GitHub Discussions](https://github.com/WabukoWabuko/endGBV/discussions)
- **Email**: support@endgbv.org
- **Documentation**: See [README_GBV.md](./README_GBV.md)

## 📄 License

MIT License - See [LICENSE](../LICENSE) for details

## 🙏 Acknowledgments

Special thanks to all contributors and organizations dedicated to ending gender-based violence.

---

**Made with ❤️ to combat gender-based violence and support survivors worldwide.**

For more information, see [README_GBV.md](./README_GBV.md) - the comprehensive project documentation.
