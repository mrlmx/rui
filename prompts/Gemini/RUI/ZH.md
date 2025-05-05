# 角色：资深前端构建工程师与库架构师
任务：初始化并配置一个React UI组件库项目（`rui`）

## 目标
使用Vite为一个名为**`rui`**的全新React UI组件库创建基础设置，其概念与Ant Design类似。该设置必须优先为库维护者和终端用户提供出色的开发体验，重点关注摇树优化、轻松的样式定制以及自动样式加载。

## 核心要求：
1. **项目结构：**
    - 将所有组件源代码直接放置在顶级`components`目录中（例如，`components/Button/Button.tsx`）。
    - 主库入口点应从该目录导出组件（例如，`components/index.ts`）。
2. **技术栈：**
    - **框架**：React（v18+）
    - **语言**：TypeScript
    - **构建工具**：Vite
    - **样式**：
        - **Tailwind CSS**：用于基础样式、实用类和可选主题。设置`tailwind.config.js`和`postcss.config.js`。
        - **Less**：用于编写特定于组件的样式。**使用标准的`.less`文件（例如，组件文件夹内的`Button.less`或`style/index.less`），明确避免使用CSS Modules（`.module.less`）**，以便消费者更轻松地覆盖样式。
3. **构建输出（Vite配置 - `vite.config.ts`）：**
    - **库模式**：为库模式配置Vite。
    - **库名称**：适当设置库名称，可能用于UMD构建（`name: 'Rui'`）。
    - **格式**：生成ESM（`es`）、CJS（`cjs`）和UMD（`umd`）的构建版本。
    - **入口点**：使用`components/index.ts`作为主入口点。
    - **外部依赖**：确保将`react`和`react-dom`设为外部依赖。
    - **输出结构**：配置输出目录（例如，`dist/es`、`dist/lib`、`dist/umd`）。确保正确包含生成的类型定义（`.d.ts`），可能与`dist/es`和`dist/lib`中的JS文件放在一起。
4. **样式处理与使用：**
    - **自动样式加载**：当终端用户导入一个组件（例如，`import { Button } from 'rui';`）时，该组件所需的CSS **必须自动加载**。用户 **不应** 需要手动导入任何单独的CSS文件（如`import 'rui/dist/style.css'`）。
    - **实现策略**：通过在组件的`.tsx`文件中直接导入Less文件来实现自动加载（例如，`import './style.less';`）。配置Vite（`build.cssCodeSplit: true`）来处理这些导入，将CSS分割成与JS组件对应的块。使用该库的应用程序的打包器（如Vite或Webpack）通常会处理将JS和CSS链接在一起的操作。
    - **无全局CSS捆绑包**：避免在`dist`文件夹中生成一个包含所有组件样式的单一、整体的CSS文件。
    - **用户覆盖**：由于 **不** 使用CSS Modules，使用标准的Less/CSS选择器应允许用户轻松地使用针对组件类名或结构的自定义CSS规则覆盖组件样式。为组件定义清晰、稳定的类名。
5. **优化与开发体验（DX）：**
    - **真正的摇树优化与代码分割**：库结构和构建输出必须确保，如果用户仅导入`Button`组件，其最终应用程序捆绑包仅包含与`Button`（及其直接依赖项）相关的JavaScript和CSS，而不包含`rui`中其他未使用组件的代码/样式。
    - **TypeScript配置**：为库提供一个健壮的`tsconfig.json`（目标：`components`目录，声明输出）。
    - **示例组件（`Button`）**：包含一个简单的`Button`组件以展示结构：
        - **组件**：`components/Button/Button.tsx`（包含`import './style.less';`）
        - **样式**：`components/Button/style.less`（使用标准CSS类选择器，例如`.rui - button`）
        - **导出**：`components/Button/index.ts`（导出`Button`组件）
        - **主导出**：从`components/index.ts`重新导出`Button`。
    - **包配置（`package.json`）**：
        - 设置`"name": "rui"`。
        - 定义`main`（CJS）、`module`（ESM）和`types`入口点，指向`dist`中的正确文件。
        - 包含`"sideEffects": false`或列出CSS文件（`"sideEffects": ["**/*.css", "**/*.less"]`）以辅助摇树优化，特别是对于CSS。（Vite通过导入能很好地处理CSS副作用，但明确列出可能更清晰。）
        - 基本脚本：`dev`（可选的演示）、`build`（库构建）、`typecheck`。

## 交付内容：
请根据这些具体更新的要求提供以下内容：
1. 建议的 **项目目录结构**（以`components`作为源根目录）。
2. `vite.config.ts`的完整配置代码。
3. `tsconfig.json`的配置代码。
4. `tailwind.config.js`和`postcss.config.js`的配置代码。
5. 示例`Button`组件的代码（`Button.tsx`、`style.less`、`index.ts`）。
6. 主库入口点（`components/index.ts`）。
7. `package.json`的相关字段和脚本（包括`name`、`main`、`module`、`types`、`sideEffects`、`scripts`）。
8. **解释**：简要解释`vite.config.ts`的关键部分以及所选的CSS处理策略（通过JS导入实现自动加载、分割、不使用CSS Modules），以及它如何实现轻松的用户覆盖并避免单独的CSS导入。
让我们构建`rui`组件库基础！