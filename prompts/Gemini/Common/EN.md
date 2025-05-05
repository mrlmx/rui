# Role: Expert Frontend Build Engineer & Library Architect
Task: Initialize and Configure a React UI Component Library Project (`rui`)

## Goal
Create the foundational setup for a new React UI component library named **`rui`**, similar in concept to Ant Design, using Vite. The setup must prioritize excellent developer experience for library maintainers and end-users, focusing on tree-shaking, easy style customization, and automatic style loading.

## Core Requirements:

1.  **Project Structure:**
    * Place all component source code directly within a top-level `components` directory (e.g., `components/Button/Button.tsx`).
    * The main library entry point should export components from this directory (e.g., `components/index.ts`).

2.  **Technology Stack:**
    * Framework: React (v18+)
    * Language: TypeScript
    * Build Tool: Vite
    * Styling:
        * Tailwind CSS: For base styles, utility classes, and optional theming. Set up `tailwind.config.js` and `postcss.config.js`.
        * Less: For writing component-specific styles. **Use standard `.less` files (e.g., `Button.less` or `style/index.less` within a component folder), explicitly AVOIDING CSS Modules (`.module.less`)** to facilitate easier style overriding by consumers.

3.  **Build Output (Vite Configuration - `vite.config.ts`):**
    * **Library Mode:** Configure Vite for library mode.
    * **Library Name:** Set the library name appropriately, potentially for UMD builds (`name: 'Rui'`).
    * **Formats:** Generate builds for ESM (`es`), CJS (`cjs`), and UMD (`umd`).
    * **Entry Point:** Use `components/index.ts` as the main entry point.
    * **External Dependencies:** Ensure `react` and `react-dom` are externalized.
    * **Output Structure:** Configure output directories (e.g., `dist/es`, `dist/lib`, `dist/umd`). Ensure generated type definitions (`.d.ts`) are included correctly, likely alongside the JS files in `dist/es` and `dist/lib`.

4.  **Styling Handling & Consumption:**
    * **Automatic Style Loading:** When an end-user imports a component (e.g., `import { Button } from 'rui';`), the necessary CSS for that component **must be loaded automatically**. Users **should NOT** need to manually import any separate CSS files (like `import 'rui/dist/style.css'`).
    * **Implementation Strategy:** Achieve automatic loading by importing the Less file directly within the component's `.tsx` file (e.g., `import './style.less';`). Configure Vite (`build.cssCodeSplit: true`) to process these imports, splitting CSS into chunks corresponding to the JS components. The consuming application's bundler (like Vite or Webpack) will typically handle linking the JS and CSS together.
    * **No Global CSS Bundle:** Avoid generating a single, monolithic CSS file containing styles for all components in the `dist` folder.
    * **User Overrides:** The use of standard Less/CSS selectors (due to *not* using CSS Modules) should allow users to easily override component styles with their own CSS rules targeting the component's class names or structure. Define clear, stable class names for components.

5.  **Optimization & DX:**
    * **True Tree Shaking & Code Splitting:** The library structure and build output must ensure that if a user imports only the `Button` component, their final application bundle includes *only* the JavaScript and CSS related to `Button` (and its direct dependencies), not the code/styles for other unused components in `rui`.
    * **TypeScript Configuration:** Provide a robust `tsconfig.json` for the library (target: `components` directory, declaration output).
    * **Example Component (`Button`):** Include a simple `Button` component demonstrating the structure:
        * Component: `components/Button/Button.tsx` (includes `import './style.less';`)
        * Style: `components/Button/style.less` (uses standard CSS class selectors, e.g., `.rui-button`)
        * Export: `components/Button/index.ts` (exports `Button` component)
        * Main Export: Re-export `Button` from `components/index.ts`.
    * **Package Configuration (`package.json`):**
        * Set `"name": "rui"`.
        * Define `main` (CJS), `module` (ESM), and `types` entry points pointing to the correct files in `dist`.
        * Include `"sideEffects": false` or list CSS files (`"sideEffects": ["**/*.css", "**/*.less"]`) to aid tree shaking, especially for CSS. (Vite handles CSS side effects well with imports, but explicit listing can be clearer).
        * Basic scripts: `dev` (optional demo), `build` (library build), `typecheck`.

## Deliverables:

Please provide the following based *specifically* on these updated requirements:

1.  A suggested **project directory structure** (reflecting `components` as the source root).
2.  The complete configuration code for `vite.config.ts`.
3.  The configuration code for `tsconfig.json`.
4.  The configuration code for `tailwind.config.js` and `postcss.config.js`.
5.  The code for the example `Button` component (`Button.tsx`, `style.less`, `index.ts`).
6.  The main library entry point (`components/index.ts`).
7.  Relevant fields and scripts for `package.json` (including `name`, `main`, `module`, `types`, `sideEffects`, `scripts`).
8.  **Explanation:** Briefly explain the key parts of `vite.config.ts` and the chosen strategy for CSS handling (automatic loading via JS import, splitting, non-use of CSS Modules) and how it enables easy user overrides and avoids separate CSS imports.

Let's build the `rui` component library foundation!
# Role: Expert Frontend Build Engineer & Library Architect

# Task: Initialize and Configure a React UI Component Library Project (`rui`)

## Goal
Create the foundational setup for a new React UI component library named **`rui`**, similar in concept to Ant Design, using Vite. The setup must prioritize excellent developer experience for library maintainers and end-users, focusing on tree-shaking, easy style customization, and automatic style loading.

## Core Requirements:

1.  **Project Structure:**
    * Place all component source code directly within a top-level `components` directory (e.g., `components/Button/Button.tsx`).
    * The main library entry point should export components from this directory (e.g., `components/index.ts`).

2.  **Technology Stack:**
    * Framework: React (v18+)
    * Language: TypeScript
    * Build Tool: Vite
    * Styling:
        * Tailwind CSS: For base styles, utility classes, and optional theming. Set up `tailwind.config.js` and `postcss.config.js`.
        * Less: For writing component-specific styles. **Use standard `.less` files (e.g., `Button.less` or `style/index.less` within a component folder), explicitly AVOIDING CSS Modules (`.module.less`)** to facilitate easier style overriding by consumers.

3.  **Build Output (Vite Configuration - `vite.config.ts`):**
    * **Library Mode:** Configure Vite for library mode.
    * **Library Name:** Set the library name appropriately, potentially for UMD builds (`name: 'Rui'`).
    * **Formats:** Generate builds for ESM (`es`), CJS (`cjs`), and UMD (`umd`).
    * **Entry Point:** Use `components/index.ts` as the main entry point.
    * **External Dependencies:** Ensure `react` and `react-dom` are externalized.
    * **Output Structure:** Configure output directories (e.g., `dist/es`, `dist/lib`, `dist/umd`). Ensure generated type definitions (`.d.ts`) are included correctly, likely alongside the JS files in `dist/es` and `dist/lib`.

4.  **Styling Handling & Consumption:**
    * **Automatic Style Loading:** When an end-user imports a component (e.g., `import { Button } from 'rui';`), the necessary CSS for that component **must be loaded automatically**. Users **should NOT** need to manually import any separate CSS files (like `import 'rui/dist/style.css'`).
    * **Implementation Strategy:** Achieve automatic loading by importing the Less file directly within the component's `.tsx` file (e.g., `import './style.less';`). Configure Vite (`build.cssCodeSplit: true`) to process these imports, splitting CSS into chunks corresponding to the JS components. The consuming application's bundler (like Vite or Webpack) will typically handle linking the JS and CSS together.
    * **No Global CSS Bundle:** Avoid generating a single, monolithic CSS file containing styles for all components in the `dist` folder.
    * **User Overrides:** The use of standard Less/CSS selectors (due to *not* using CSS Modules) should allow users to easily override component styles with their own CSS rules targeting the component's class names or structure. Define clear, stable class names for components.

5.  **Optimization & DX:**
    * **True Tree Shaking & Code Splitting:** The library structure and build output must ensure that if a user imports only the `Button` component, their final application bundle includes *only* the JavaScript and CSS related to `Button` (and its direct dependencies), not the code/styles for other unused components in `rui`.
    * **TypeScript Configuration:** Provide a robust `tsconfig.json` for the library (target: `components` directory, declaration output).
    * **Example Component (`Button`):** Include a simple `Button` component demonstrating the structure:
        * Component: `components/Button/Button.tsx` (includes `import './style.less';`)
        * Style: `components/Button/style.less` (uses standard CSS class selectors, e.g., `.rui-button`)
        * Export: `components/Button/index.ts` (exports `Button` component)
        * Main Export: Re-export `Button` from `components/index.ts`.
    * **Package Configuration (`package.json`):**
        * Set `"name": "rui"`.
        * Define `main` (CJS), `module` (ESM), and `types` entry points pointing to the correct files in `dist`.
        * Include `"sideEffects": false` or list CSS files (`"sideEffects": ["**/*.css", "**/*.less"]`) to aid tree shaking, especially for CSS. (Vite handles CSS side effects well with imports, but explicit listing can be clearer).
        * Basic scripts: `dev` (optional demo), `build` (library build), `typecheck`.

## Deliverables:

Please provide the following based *specifically* on these updated requirements:

1.  A suggested **project directory structure** (reflecting `components` as the source root).
2.  The complete configuration code for `vite.config.ts`.
3.  The configuration code for `tsconfig.json`.
4.  The configuration code for `tailwind.config.js` and `postcss.config.js`.
5.  The code for the example `Button` component (`Button.tsx`, `style.less`, `index.ts`).
6.  The main library entry point (`components/index.ts`).
7.  Relevant fields and scripts for `package.json` (including `name`, `main`, `module`, `types`, `sideEffects`, `scripts`).
8.  **Explanation:** Briefly explain the key parts of `vite.config.ts` and the chosen strategy for CSS handling (automatic loading via JS import, splitting, non-use of CSS Modules) and how it enables easy user overrides and avoids separate CSS imports.

Let's build the `rui` component library foundation!


