# Contributing Guidelines

Thank you for contributing to the **Ingenjörssektionen Flemingsberg (IsF)** Chapter Website!

---

## Code Standards & Best Practices

### 1. Theming & Colors

- **Primary Color:** The official chapter color is **OKRARÖD (`#90302C`)**. It must remain the primary identity color for headers, highlights, and primary accents.
- Never hardcode raw hex colors directly into page components unless strictly necessary. Utilize MUI's theme tokens (`theme.palette.primary.main`, `theme.palette.background.paper`, `text.secondary`, etc.).
- Both **Light** and **Dark** modes must be supported seamlessly. Test all UI additions in both modes.

### 2. Component Reusability

- Avoid duplicating entire page structures. When adding a new committee (_organ/nämnd_) or informational page, use shared layouts and data templates rather than copy-pasting JSX.
- Keep components modular, focused, and typed with TypeScript interfaces.

### 3. Typography & Spacing

- Use standard Material UI typography variants (`h1` through `h6`, `body1`, `body2`, `caption`).
- Use MUI spacing multipliers (`p={2}`, `gap={3}`, `my={4}`) to maintain visual consistency across all viewports.
- Avoid removing system scrollbars or breaking mobile accessibility.

### 4. Route Code-Splitting

- When adding new routes to `src/AppRoutes.tsx`, use dynamic `React.lazy()` imports to prevent bloating the initial bundle.

---

## Development Workflow

1. **Branching:** Create a descriptive branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Local Testing:**
   - Check types and build:
     ```bash
     npm run build
     ```
   - Run linter:
     ```bash
     npm run lint
     ```
   - Format:
     ```bash
     npm run format
     ```
3. **Pull Request:** Open a pull request against `main` with a clear description and screenshots of UI changes in both light and dark mode.
