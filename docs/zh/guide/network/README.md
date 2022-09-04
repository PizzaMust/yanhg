---
index: false
---

# 网络联机

本页将会简介`EXCEED GEAR`实现*店内匹配*联机的方法。

::: note
当前由`Asphyxia CORE`插件提供的服务器并没有实现全国匹配对战，而且不支持`Arena Battle`模式，仅支持`Friend`模式进行局域网内的店内匹配。
:::

## 确认当前所属的局域网

本文假设你已经加入了某一个局域网，并完成了地址分配。如果你没有与他人组成局域网，或者想搭建虚拟局域网，可以查看[使用ZeroTier搭建虚拟局域网](./zerotier.md)。

你可以在`Spice`设置中强制指定游戏使用的IP与子网掩码，如果有效的话，游戏会自动从指定IP对应的适配器进行联网。你所需要的信息有：

+ IP地址
+ 子网掩码

::: info
如果你分配到的IP地址使用的是CIDR记法来分割网络号与主机号的话，请将其转换为子网掩码的形式。

例：

xxx.xxx.xxx.x/18 即

**11111111 11111111 11**000000 00000000

子网掩码即为

255.255.192.0

:::

## 将信息填入`SpiceCfg`中

![SpiceCfg配置](/assets/net-spicecfg.jpg)

+ 将`IP地址`填入`Adapter Network`
+ 将`子网掩码`填入`Adapter Subnet`

完成后，就可以关闭窗口了，设置会自动保存。

## 检查版本配置文件

版本配置文件的路径如下：

```
.. → 上层文件夹
└── contents → 游戏根目录
    └── prop → 游戏版本配置
        └── ea3-config.xml → 版本配置文件
```

要与他人联机，需要保证参与联机的游戏版本号完全一致，请检查版本配置文件（`ea3-config.xml`）中以下高亮行中内容完全一致：

``` xml {9-12}
<?xml version='1.0' encoding='UTF-8'?>
<ea3>
    <id>
        <pcbid __type="str">00100240630506070809</pcbid>
        <hardid __type="str">00100240630506070809</hardid>
    </id>
    <soft>
        <model __type="str">KFC</model>
        <dest __type="str">J</dest>
        <spec __type="str">G</spec>
        <rev __type="str">A</rev>
        <ext __type="str">当前游戏版本日期</ext>
    </soft>
```

## 启动游戏并检查

启动游戏后，按<kbd>TEST</kbd>进入测试模式


进入 `NETWORK OPTIONS` 在子菜单中选择 `NETWORK CHECK`

![network check](/assets/net-check.jpg)

检查`IP ADDRESS`与`SUBNET MASK`的内容是否与你填写的一致。如果是的话，则网络已配置成功。

---

现在，你可以和你的*Rival*进入`FRIEND`模式中匹配游玩了。