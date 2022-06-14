---
order: 8
---

# :pinched_fingers: 一键启动

当前启动游戏需要先开离线服务器，再开spice，但这二者实际上是可以用批处理整合的。

如果你严格按照之前的教程设置，目录结构完全一致的话，可以使用以下脚本来一键运行游戏：

``` batch
@echo off
cd /d %~dp0/contents

start ../asphyxia-core/asphyxia-core-x64.exe
start spice64.exe
```

在上层目录中新建一个文本文件，命名为`startgame.bat`，将上面的脚本拷贝到该文件中即可。

目录结构应该是这样的：

```
.. → 上层文件夹
├── contents → 游戏根目录
├── asphyxia-core → 离线服务器
└── startgame.bat → 一键启动脚本
```

::: warning 注意
请注意资源管理器是否显示文件扩展名。
:::

::: info
spice64.exe 支持从命令行传入参数，你可以在`spicecfg`的`options`中看到每个选项对应的命令行参数。你可以根据你的需求进行自定义，比如窗口模式开/关，网络服务器切换等。
:::