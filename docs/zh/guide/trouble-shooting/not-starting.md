---
order: 1
---

# 游戏无法启动

:::tip 文档施工中
:construction:本文档有十个甚至九个部分没有完成，请窒息。
:::

## module auto detection failed

这是因为`SpiceTools`找不到主入口文件(`soundvoltex.dll`)。请确保你的游戏文件完整。

::: info 提示
`SpiceTools`在启动游戏时，会优先在`游戏根目录/modules/`下寻找主入口文件(`soundvoltex.dll`)。如果没有找到，则会尝试在`游戏根目录/`下寻找。找到之后，会在主入口文件的相同目录下寻找其它运行库DLL。
:::

## `soundvoltex.dll` 找不到指定模块

这是因为你没有正确[安装游戏必要的运行库](../noob/preparation.md#运行环境)。

如果你是非NVIDIA用户的话，你也可能没有[补充DLL](../noob/structure.md#补充DLL)。

如果你是N卡用户，但还是出现了这个错误，请尝试更新GPU驱动。如果更新了之后还是出现了这个错误，说明你的显卡没有达到运行游戏的最低需求。

## `avs*.dll` `lib*.dll` 找不到指定模块

你可能没有正确的**目录结构**。本文档在每处都十分强调目录结构，就是为了避免此类事件的发生。

::: info 提示
`SpiceTools`在启动游戏时，会优先在`游戏根目录/modules/`下寻找主入口文件(`soundvoltex.dll`)。如果没有找到，则会尝试在`游戏根目录/`下寻找。找到之后，会在**主入口文件的相同目录**下寻找其它的运行库DLL。
:::

如果你的游戏根目录下有DLL文件，而modules目录下也有DLL文件，那么请把全部的DLL文件都移动到modules目录下，或者把所有DLL文件都移动到根目录下，然后删除`moudles`文件夹。

## EXCEPTION_ACCESS_VIOLATION

这种情况可能是由多方面导致的，这里只能给出一些大概的解决方式：

+ 音频设备问题，这是**最常见的问题**。其原因可能是部分外置声卡/DAC无法正确处理WASAPI独占模式导致的。可尝试使用主板自带声卡，或者尝试在[修改主入口文件](../noob/structure.md#主入口文件的修改)时开启`Shared mode WASAPI`与`Shared mode WASAPI Valkyrie`
+ `soundvoltex.dll` 与游戏资源版本不对应，请用对应版本的dll匹配对应的资源

## unable to find Direct3DCreate9On12Ex

出现这种错误说明你的操作系统版本过低。Windows仅在`20H1`及以后的版本中支持`dx9on12`，请尝试升级操作系统。

如果你是N卡用户，那么可能是因为在`spicecfg`中不小心开启了`DirectX 9 On 12`，请将其关闭。

::: info 提示

有些教程/A卡解决方案会要求把一个文件`d3d9.dll`放入游戏根目录，这个文件正是对`dx9on12`的封装。

这是原作者的[repo](https://github.com/Joshua-Ashton/neun-auf-zwoelf)，也有可能是这个[repo](https://github.com/narzoul/ForceD3D9On12)

现在`SpiceTools`已经集成了`DirectX 9 On 12`的功能，理论上这些外部文件都已经不需要了。
:::

## 无法定位程序输入点`cuvidGetDecodeStatus`

显卡驱动版本过低。更新，请。

## 自检后闪退

未禁用摄像头，可在`spicecfg`中打开`SDVX Disable Cameras`选项

::: info 说明

现在`SpiceTools`已经修复了这个问题，如果出现闪退的话，可能是因为版本太老了。

:::

## `fscache-server: bind failed. retry.`

检查以下几个端口是否被占用：

| 类型  | 端口号 |
| :---: | :----: |
|  TCP  |  5703  |
|  UDP  |  5854  |
|  UDP  | 64106  |

请参考[##排除端口占用](misc.md#排除端口占用问题)来解决问题。