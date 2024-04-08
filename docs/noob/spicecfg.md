---
order: 5
---

# :gear: 配置spicecfg

这是正式开始游戏前的最后一步。恭喜你，旅程即将走到尽头。

::: warning 注意
请时刻铭记这是一个**街机游戏**，原本设计为在**街机上运行**，不要用普通电脑游戏的观点去看待。
:::

## 什么是SpiceTools

**SpiceTools** 是一个用来运行科乐美街机游戏的工具，它可以在普通电脑上启动本应只能在街机基板上运行的游戏。

你可以将其称为*模拟器*，但是由于现代街机基板与普通电脑架构无异，所以其起到的更多是封装的作用。

### 什么是Spice2x

**Spice2x** 是原版SpiceTools的一个分支版本，添加了很多有用的功能与修复，也是目前唯一公开积极维护的版本。

### 下载Spice2x
+ [Spice2x](https://spice2x.github.io/)

## 将SpiceTools放入游戏目录

1. 将`spice64.exe`、`spicecfg.exe`，以及`stubs`文件夹放入游戏根目录`contents`下，其他文件是不需要的。
2. 双击`spicecfg.exe`打开，检查标题栏的日期版本。以下操作均基于Spice2x版本号为`2024-02-13`的情况进行。

## 按键绑定

1. 将标签页切换到`Buttons`
2. 你需要绑定的按键如下所示，请根据你的游玩设备来选择：

::: tabs

@tab 手台

+ Test → 选择键盘上的某个键，或者手台提供的附加按键（不推荐）
+ BT-A
+ BT-B
+ BT-C
+ BT-D
+ FX-L
+ FX-R
+ Start

@tab 键盘

+ Test
+ BT-A
+ BT-B
+ BT-C
+ BT-D
+ FX-L
+ FX-R
+ Start
+ VOL-L Left
+ VOL-L Right
+ VOL-R Left
+ VOL-R Right

:::
3. 单击对应按键右侧的`Bind`来绑定。

### 绑定对应图示
![手台图示](/assets/sample-controller.png)

### 数字键与刷卡键改绑

::: info 信息
如果你的电脑键盘没有小键盘，你可以选择将数字键改绑到主键盘区域，也可以选择在游戏内使用<kbd>F5</kbd>来显示虚拟小键盘。

如果你的电脑有小键盘，请直接跳到[#旋钮绑定](#旋钮绑定)。
:::

![绑定图示](/assets/spicecfg-2.png)

推荐绑定：
+ 将0-9键绑定到主键盘0-9
+ 将刷卡键绑定到退格键<kbd>Backspace</kbd>

## 旋钮绑定

::: info 提示
如果你打算只使用键盘来操作，可以跳过这一部分。
:::

1. 将标签页切换到`Analogs`
2. 单击VOL-L右侧的`Bind`
   ![旋钮绑定](/assets/spicecfg-1.jpg)
3. 在Device中选择一个设备，然后旋转**两个**旋钮，查看底部`Preview`是否有变化。重复操作到有变化为止
4. 若左旋钮对应的是X轴，则选择X轴，反之选择Y轴
5. 调整灵敏度，大小为真实旋转一圈=程序内显示一圈为宜
6. 选择`Close`关闭，继续绑定右旋钮
7. 右旋钮步骤同理

## 卡号生成

::: info 提示
原游戏是街机游戏，用户登录的方式是使用游戏卡，所以此处也得相应生成一个卡号。
:::

1. 将标签页切换到`Cards`
2. 在`Player 1`组中单击`Generate`

## 选项设置

1. 将标签页切换到`Options`
2. 开启/填写以下选项：

+ Service URL: 填入 `http://localhost:8083`
+ [x] SDVX Disable Cameras

全部完成后，就可以关闭窗口了，设置会自动保存。