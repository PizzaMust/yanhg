---
order: 3
---

# 其他错误

:::tip 文档施工中
:construction:本文档有十个甚至九个部分没有完成，请窒息。
:::

## CPU占用率100%

这是因为你使用了未经修改的`soundvoltex.dll`，即原版dll启动游戏。请确保在修改DLL时，勾选了
+ [x] Disable power change → 阻止更改电源计划

要恢复电源计划，请在命令行`cmd`中执行以下命令。

或者，你也可以将批处理命令复制到一个新建的`bat`文件中，然后右键用管理员身份运行。

::: warning 注意
请注意资源管理器是否显示文件扩展名。
:::

::: code-tabs

@tab 命令行

```batch
PowerCfg /SETACVALUEINDEX SCHEME_CURRENT SUB_PROCESSOR IDLEDISABLE 000
PowerCfg /SETDCVALUEINDEX SCHEME_CURRENT SUB_PROCESSOR IDLEDISABLE 000
PowerCfg /SETACTIVE SCHEME_CURRENT
```

@tab 批处理

```batch
@echo off

PowerCfg /SETACVALUEINDEX SCHEME_CURRENT SUB_PROCESSOR IDLEDISABLE 000
PowerCfg /SETDCVALUEINDEX SCHEME_CURRENT SUB_PROCESSOR IDLEDISABLE 000
PowerCfg /SETACTIVE SCHEME_CURRENT
```

:::

## `Asphyxia CORE` 无法正常启动

<Badge text="TODO" />

## 排除端口占用问题

1. 首先，打开一个CMD/Powershell/你喜欢的Shell；
2. 输入`netstat -aon | findstr <你要寻找的端口>`
3. 如果有输出的话，最后一列为进程PID号；
4. 输入`taskkill /F /P <PID>`强行停止占用端口的进程。

::: tip
Windows 10/11 的 Hyper-V 功能有时会不正确地占用低位端口。如果你发现以上命令没有返回任何东西，并且你开启了 Hyper-V ，可以尝试排除这方面的问题。[见此（站外链接）](https://zhaoji.wang/solve-the-problem-of-windows-10-ports-being-randomly-reserved-occupied-by-hyper-v/)