# Design System

A modern, accessible, and reusable component library built with React and Storybook.

## Features

- 🎨 Consistent design system with predefined styles and components
- 📚 Comprehensive documentation with Storybook
- 🧪 Tested components with Jest and React Testing Library
- 🚀 Built with Vite for fast development and production builds
- 📦 Published to GitLab Package Registry for easy consumption

## Getting Started

### Installation

```bash
# Install the package from GitLab
npm install @your-org/design-system
```

### Usage

```tsx
import { Button } from '@your-org/design-system';

function App() {
  return (
    <Button
      label="Click me"
      variant="primary"
      size="medium"
      onClick={() => console.log('Clicked!')}
    />
  );
}
```

## Development

### Prerequisites

- Node.js 18+
- npm 7+

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run build` - Build the component library
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Publishing

1. Update the version in `package.json`
2. Build the package:
   ```bash
   npm run build
   ```
3. Publish to GitLab:
   ```bash
   npm publish
   ```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Add tests for your changes
4. Update documentation
5. Submit a merge request

## License

MIT 