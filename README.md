# RUI

## 技术栈

- pnpm 10.10.0
- Nodejs 22.x
- React 19.x

## 打包

```sh
pnpm run build
```

执行 build 命令后，会生成 esm、cjs、umd 三种格式。

但是会有 2 个关于样式的问题：

- 样式文件没有拆分
- 用户需要手动引入 css 文件

## 常用命令

## Node
```sh
# 启用 corepack
corepack enable
```

## PNPM
```sh
# 新增 peerDependencies
pnpm add react --save-peer
```