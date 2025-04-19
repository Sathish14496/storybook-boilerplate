# Development Guide

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start Storybook development server:
```bash
npm run storybook
```

## Pre-commit Checks

This project uses Husky and lint-staged to run pre-commit checks. The following checks are performed before each commit:

### TypeScript/TSX Files
- ESLint will check for:
  - TypeScript errors
  - React best practices
  - Import order
  - Code style consistency
- Prettier will format the code

### CSS/MD/JSON Files
- Prettier will format these files

### Known Issues and Solutions

1. **Import/Order Errors**
   - These are currently ignored in the ESLint config
   - You can safely commit changes with these warnings

2. **TypeScript Resolver Errors**
   - The following errors are ignored:
     - `import/order`
     - `import/no-duplicates`
     - `import/export`

## Development Workflow

1. Make your changes
2. Stage your changes: `git add <files>`
3. Commit your changes: `git commit -m "type: description"`
   - The pre-commit hooks will automatically run
   - If any checks fail, fix the issues and try committing again
   - If all checks pass, your commit will be created

## Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build` - Build the library
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run validate` - Run all checks (lint, format, type-check)

## Component Development

When creating or modifying components:
1. Follow the existing component structure
2. Add proper TypeScript types and documentation
3. Create/update Storybook stories
4. Test in Storybook before committing

## Best Practices

1. Keep components focused and reusable
2. Document props using JSDoc comments
3. Follow the established code style
4. Write meaningful commit messages
5. Test your changes in Storybook 