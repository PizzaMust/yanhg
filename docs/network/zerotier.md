---
order: 1
---

# 使用ZeroTier搭建虚拟局域网

本页将会介绍如何使用ZeroTier搭建虚拟局域网。如果你想加入别人创建的网络，请直接跳到[#下载ZeroTier客户端](#下载zerotier客户端)

## ZeroTier帐号与创建网络

你需要注册一个帐号才能创建网络。访问[这里](https://accounts.zerotier.com/auth/realms/zerotier/protocol/openid-connect/registrations?client_id=zt-central&redirect_uri=https%3A%2F%2Fmy.zerotier.com%2Fapi%2F_auth%2Foidc%2Fcallback&response_type=code&scope=openid+profile+email+offline_access&state=state)创建账号。

::: info
加入他人创建的网络是不需要账号的。如果你想加入别人创建的网络，请直接跳到[#下载ZeroTier客户端](#下载zerotier客户端)
:::

注册完成后，应该会自动跳转至[my.zerotier.com](https://my.zerotier.com/)。在这里可以管理自己创建的网络。

点击上部的大黄色按钮`CREATE A NETWORK`，网络就创建好了。怎么样，是不是很简单？

点击这条信息进入设置，将`Access Control`改为`PUBLIC`，他人就可以随意加入了。接下来，记好`Network ID`会很有用。

## 配置 ZeroTierOne 客户端

1. 请访问官网下载客户端，下载链接为

[https://www.zerotier.com/download/](https://www.zerotier.com/download/)


2. 安装完成后，会在任务栏显示角标。~~右键点击`Open Control Panel`，即可打开主界面。~~

::: warning
新版本的ZeroTier One已经去掉了控制面板，需要直接从托盘右键菜单中管理。
:::

3. 在右键弹出的菜单中，选择“Join New Network...”
4. 输入`Network ID`，即可加入网络
5. 加入网络后，在右键菜单对应网络的二级菜单中可以查看网络相关信息
6. 进入`Managed Addresses`，记住IP斜杠`/`后的数字
7. 单击分配到的IP，IP地址就自动复制到剪贴板中了
8. 子网掩码计算方法为：二进制32位，每8位分为1组；从前往后数n位，对应斜杠后数字位数，填上1；其余位填上0。随后将每组分别转换为十进制即可

::: note
例：

xxx.xxx.xxx.x/18 即

**11111111 11111111 11**000000 00000000

子网掩码即为

255.255.192.0

:::