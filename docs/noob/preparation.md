---
order: 1
---

# :floppy_disk: 安装前的准备

>凡事预则立，不预则废。

本节将会介绍运行游戏的系统需求、硬件配置、运行环境安装等要素。

::: note
本教程介绍的是运行 **EXCEED GEAR** `HDD`的准备，如果你想阅读官方EAC版的购买与安装方法，

请前往[EAC版教程](../eacsdvx)<Badge text="WIP"/>
:::

::: warning
请时刻提醒自己，`HDD`是盗版游戏，能够接触到街机盗版游戏并**不是天经地义**的事，运行游戏即构成对科乐美公司的**侵权**。
:::

## 系统需求

::: tabs

@tab NVIDIA显卡

系统：Windows 10 x64 或 Windows 11 x64

显卡：最低为开普勒架构 (>=GTX 7xx)

存储空间：~18GB

@tab AMD显卡

系统：Windows 10 x64 >=20H1 或 Windows 11 x64

显卡：至少支持 DirectX 12 或 Vulkan (>= Radeon HD 7000)

存储空间：~18GB

@tab Intel显卡

系统：Windows 10 x64 或 Windows 11 x64

显卡：>=UHD 630

存储空间：~18GB

:::

为什么要这样区分？这是因为在开发EXCEED GEAR时，科乐美将游戏与N卡绑定，调用了`CUDA`以及`CUVID`等硬件加速库，AMD玩家直接运行游戏时会发生图形错误。下文中会介绍如何解决这个问题。

## 运行环境

游戏的运行依赖于`Visual C++` `DirectX 9 June 2010` 运行库，你可以通过以下方式获取：
1. 手动下载
   + [VCRedist AIO](https://github.com/abbodi1406/vcredist/releases/) ([镜像](https://ghproxy.com/https://github.com/abbodi1406/vcredist/releases/))
   + [DirectX End-User Runtimes (June 2010)](https://www.microsoft.com/zh-cn/download/details.aspx?id=8109)
2. 自动修复工具
   + [DirectX修复工具](https://blog.csdn.net/vbcom/article/details/7245186)

## 下载文本编辑器

因为涉及到修改游戏配置文件，所以最好下载一个文本编辑器。系统自带的记事本虽然也能用，但是可能会产生不可预料的编码错误。
+ [Visual Studio Code](https://code.visualstudio.com/download)
+ [Sublime Text](https://www.sublimetext.com/)
+ [Notepad3](https://www.rizonesoft.com/downloads/notepad3/)

## 下载游戏

本文档不提供任何下载，如果你手上已经有了，请继续阅读下一节。