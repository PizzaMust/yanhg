---
order: 4
---

# :person_fencing: 配置离线服务器

::: info 为什么要用离线服务器
你不可能连接到科乐美的官方服务器，所以你需要自己配置一个服务器。

当然，你也可以选择连到其他人开设的私服，但前提是你知道连接的方法。
:::

## 下载离线服务器

目前最流行的KONAMI游戏通用离线服务器为`Asphyxia CORE`，这是一个私有软件，由服务器本体与插件两部分组成，对应游戏的插件是社区维护的。

+ [Asphyxia CORE](https://github.com/asphyxia-core/asphyxia-core.github.io/releases/latest)
  + 选择`asphyxia-core-win-x64.zip`下载
+ [社区插件](https://github.com/22vv0/asphyxia_plugins/archive/stable.zip)

## 配置Asphyxia CORE

现在，你应该得到了两个压缩文件

+ asphyxia-core-win-x64.zip
+ plugins-stable.zip

还记得上文中，在游戏的根目录`contents`外层还创建了一个目录吗？现在，在外层目录里新建一个`asphyxia-core`文件夹，目录结构应该是这样的：

```
.. → 上层文件夹
├── contents → 游戏根目录
└── asphyxia-core → 离线服务器
```

::: note
有些懒人包会将离线服务器放进游戏根目录，这样做虽然带来了一定程度上的便利，但也会使后期维护变得更加繁杂。本文档推荐将游戏与离线服务器分开放置。
:::

1. 将`asphyxia-core-win-x64.zip`**内的文件**解压到`asphyxia-core`文件夹中。
2. 将`plugins-stable.zip`中的`plugins-stable`**文件夹内的文件**解压到`asphyxia-core\plugins`中，若有提示选择全部覆盖。注意该压缩文件有嵌套的文件夹，不要在解压的时候产生重复文件夹。

如果你的操作正确，现在的目录结构应该是这样的：

```
.. → 上层文件夹
├── contents → 游戏根目录
└── asphyxia-core → 离线服务器
    ├── plugins → 插件目录
    |   ├── *@* → 其他游戏的插件
    |   ├── sdvx@asphyxia → SDVX的插件
    |   └── *.*
    └── asphyxia-core-x64.exe → 离线服务器本体
```

如果检查完成后确实没有问题，那么现在就可以双击`asphyxia-core-x64.exe`启动服务器了。