# RUI

## 技术栈

- pnpm 10.10.0
- Nodejs 22.x
- React 19.x

## 打包

```sh
pnpm run build
```

执行 build 命令后，会生成 cjs 和 esm 两种格式。

但是会有 3 个关于样式的问题：
- 目前 less 文件是单独打包的，并且需要指定对应组件和输出目录
- 使用组件时，需要手动引入 css 文件
- 每个组件中，都会引入一遍 style/index.less 文件，会造成重复打包


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