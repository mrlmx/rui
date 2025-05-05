# Role: Expert Frontend Build Engineer & Library Architect

# Task: Initialize and Configure a React UI Component Library Project (`rui`) with Docs & Testing

## Goal
Create the foundational setup for a new React UI component library named **`rui`**, similar in concept to Ant Design, using Vite. The setup must prioritize excellent developer experience for library maintainers and end-users, focusing on tree-shaking, easy style customization, automatic style loading, integrated documentation (using **Dumi**), and robust testing (using **Vitest** and **React Testing Library**).

## Core Requirements:

1.  **Project Structure:**
    * Place all component source code directly within a top-level `components` directory (e.g., `components/Button/Button.tsx`).
    * The main library entry point should export components from this directory (`components/index.ts`).
    * Include necessary configuration/directories for Dumi documentation (e.g., `.umirc.ts` or `config/config.ts`, potentially docs within component folders or a separate `docs` root).
    * Include test files alongside components (e.g., `components/Button/Button.test.tsx`).

2.  **Technology Stack:**
    * Framework: React (v18+)
    * Language: TypeScript
    * Build Tool: Vite
    * Styling:
        * Tailwind CSS: For base styles, utility classes, optional theming (`tailwind.config.js`, `postcss.config.js`).
        * Less: For component-specific styles (**standard `.less` files, NOT CSS Modules**) to facilitate overriding (`Button.less`).
    * **Documentation:** **Dumi** (https://d.umijs.org) for interactive docs and API generation.
    * **Testing:** **Vitest** (test runner & assertions) + **React Testing Library** (for component interaction testing).

3.  **Build Output (Vite Configuration - `vite.config.ts`):**
    * **Library Mode:** Configure Vite for library mode.
    * **Library Name:** Set UMD name to `Rui`.
    * **Formats:** Generate builds for ESM (`es`), CJS (`cjs`), and UMD (`umd`).
    * **Entry Point:** `components/index.ts`.
    * **Externals:** Externalize `react`, `react-dom`.
    * **Output Structure:** `dist/es`, `dist/lib`, `dist/umd`. Include `.d.ts` files.

4.  **Styling Handling & Consumption:**
    * **Automatic Style Loading:** Component CSS loads automatically on import (`import { Button } from 'rui';`) without manual CSS imports by the user.
    * **Implementation:** Achieved via `import './style.less';` within component `.tsx` files + Vite's `build.cssCodeSplit: true`.
    * **No Global CSS Bundle:** Avoid a single monolithic CSS file.
    * **User Overrides:** Easy style overriding via standard CSS selectors due to non-use of CSS Modules. Use stable class names (e.g., `.rui-button`).

5.  **Documentation & Developer Experience (Dumi & TS):**
    * **Interactive Docs:** Set up Dumi to generate documentation with component usage examples, interactive playgrounds, and API specifications. Configure it to find components within the `components` directory.
    * **API Generation:** Leverage TypeScript types for generating API documentation within Dumi.
    * **TypeScript Support:** Ensure robust `tsconfig.json` for the library (`components` dir), generating accurate `.d.ts` declaration files in the `dist` output. This provides first-class TS support for consumers with proper type hints for props and events.

6.  **Testing & Quality Assurance (Vitest & RTL):**
    * **Framework Setup:** Configure Vitest for the Vite project (`vitest.config.ts` or integrated into `vite.config.ts`). Set up necessary helpers for React Testing Library (e.g., `setupTests.ts`).
    * **Example Tests:** Provide a basic unit/component test example for the `Button` component (`Button.test.tsx`) using Vitest and React Testing Library, demonstrating basic rendering and interaction checks.
    * **Test Coverage:** Configure Vitest for test coverage reporting. While the goal is >80%, the setup should enable running coverage checks.
    * **Goal:** Ensure comprehensive unit and integration tests can be easily written to guarantee component logic correctness and UI stability.

7.  **Optimization & DX:**
    * **True Tree Shaking:** Ensure only imported components' JS and CSS are bundled by end-users.
    * **Package Configuration (`package.json`):**
        * `"name": "rui"`.
        * `main`, `module`, `types` entry points.
        * `"sideEffects": ["**/*.css", "**/*.less"]` (or review if `false` is appropriate with JS imports).
        * **Scripts:**
            * `dev` (optional demo environment).
            * `build` (library build).
            * `typecheck`.
            * `test`: Run tests via Vitest.
            * `test:watch`: Run tests in watch mode.
            * `coverage`: Generate test coverage report.
            * `docs:dev`: Start Dumi development server.
            * `docs:build`: Build Dumi documentation site.

## Deliverables:

Please provide the following based *specifically* on all these requirements:

1.  A suggested **project directory structure** (including `components`, potential `docs` setup, test file locations).
2.  Complete config code for `vite.config.ts` (potentially including Vitest config).
3.  If separate, `vitest.config.ts`.
4.  Config code for `tsconfig.json`.
5.  Config code for `tailwind.config.js` and `postcss.config.js`.
6.  Config code for Dumi (`.umirc.ts` or `config/config.ts`).
7.  Code for the example `Button` component (`Button.tsx`, `style.less`, `index.ts`).
8.  Code for the example `Button` test (`Button.test.tsx`).
9.  The main library entry point (`components/index.ts`).
10. Relevant fields and **all specified scripts** for `package.json`.
11. **Explanation:** Briefly explain key config choices for Vite (library mode, formats, CSS), Dumi setup strategy, Vitest/RTL configuration, and how the styling approach meets the requirements.

Let's build the complete `rui` component library foundation with documentation and testing!