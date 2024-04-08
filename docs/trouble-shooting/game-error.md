---
order: 2
---

# 游戏内错误

:::tip 文档施工中
:construction:本文档有十个甚至九个部分没有完成，请窒息。
:::

## 标题画面错误提示

![离线模式运营中](/assets/err-net-offline.png =300x)

![服务器维护中](/assets/err-net-server_mainte.png =300x)

如果出现了这样的错误提示，请检查你所连接到的服务器状态是否正常。

::: info 提示
如果你使用`Asphyxia CORE`作为离线服务器的话，确保其版本与插件都是最新的。参考[**这里**](../noob/server.md#下载离线服务器)

有些懒人包中服务器与插件版本可能有所落后，这会导致较新的游戏无法正常通信。
:::

可以参考以下几个方面进行检查：

+ spicecfg中，将`EA Maintenance`选项置为0或清空
+ 在`Asphyxia CORE`的WebUI中，关闭`Maintenance mode`开关
+ 询问服务器提供方的维护状态

## 无法刷卡/刷卡无反应

请确保`ea3-config.xml`中，版本号中的“筐体型号”标记为`G`或是`F`。

::: note
`G`代表Valkyrie Model，`F`代表旧筐。
:::

::: info 信息
版本号为`J:H:A`或是`A:H:A`，即中间的“筐体型号”标记为`H`的版本，是已经被废弃的，请使用`G`或是`F`。
:::

## 回线混杂/网络错误

如果使用的是离线服务器的话，确保你的`Asphyxia`插件是正确的；
如果是在线服务器，请联系服务器提供方。


## 游戏内轨道与激光消失

+ 如果是AMD显卡，请检查`spicecfg`中`DirectX 9 on 12`选项是否开启
+ 如果是NVIDIA显卡，请尝试重装显卡驱动

## 考段闪退

如果你正在使用`20221018`及之后的版本，在patch `soundvoltex.dll`时**不要**勾选Unlock All Songs/Difficulties。如果已经patch，请再patch一遍。作为替代，可以用`Asphyxia`来完成歌曲全解。

## 进入选曲界面时闪退

`20230425`开始的Year3版本修改了部分网络请求，需要氧无插件进行适配。

## 选曲后开始游戏时闪退

对于`20231024`，不要勾选Hide premium guide banner，此patch会导致游戏闪退。

## 游戏帧数低

考虑关闭`spice64.exe`的全屏优化。具体操作为右键 > 属性 > 兼容性 > 勾选禁用全屏优化。