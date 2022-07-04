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