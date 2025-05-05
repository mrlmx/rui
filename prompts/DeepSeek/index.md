请按照以下要求使用Vite搭建React组件库：

1. **技术栈配置**
- 使用React + TypeScript模板初始化项目
- 集成Tailwind CSS（需配置postcss.config.js和tailwind.config.js）
- 添加Less预处理器支持（同时保留Tailwind功能）
- 安装必需的react、typescript、vite依赖

2. **组件架构规范**
- 创建src/components目录作为组件根目录
- 每个组件独立文件夹结构：
  ComponentName/
  ├─ index.ts       // 组件入口
  ├─ ComponentName.tsx  // 组件逻辑
  ├─ ComponentName.less // 组件样式
  └─ types.ts       // 类型定义

3. **构建配置要求**
- 配置vite.config.ts实现：
  a: 生成ESM、CJS、UMD三种格式
  b: 输出目录结构：
     dist/
     ├─ es/
     ├─ lib/
     └─ umd/
  c: 按组件自动拆分样式文件到对应格式目录
  d: 使用rollupOptions进行分包优化

4. **样式处理方案**
- 每个组件的Less文件需要：
  a: 编译为独立CSS文件
  b: 自动注入Tailwind基础样式
  c: 通过CSS Modules处理类名隔离
  d: 与JS构建产物保持相同目录结构

5. **导出优化**
- 配置package.json确保：
  a: 设置"sideEffects": false
  b: 声明module、main、unpkg字段
  c: 包含types声明文件
  d: 导出映射支持按需加载：
    "exports": {
      "./*": {
        "import": "./es/*/index.js",
        "require": "./lib/*/index.js"
      }
    }

6. **开发调试支持**
- 创建演示环境：
  a: 配置dev目录作为开发调试环境
  b: 实现热更新功能
  c: 添加文档示例生成能力

请逐步生成以下内容：
1. 完整的项目结构树
2. 关键配置文件内容（vite.config.ts、tailwind配置等）
3. 示例组件实现（如Button组件）
4. 构建脚本和导出逻辑
5. 样式处理的具体实现方式