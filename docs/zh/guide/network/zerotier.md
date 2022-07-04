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

## 下载ZeroTierOne客户端

请访问官网下载客户端，下载链接为

[https://www.zerotier.com/download/](https://www.zerotier.com/download/)

安装完成后，会在任务栏显示角标。右键点击`Open Control Panel`，即可打开主界面。

![ZeroTierOne控制面板](/assets/net-zerotier-1.jpg)

在底部输入`Network ID`即可加入网络。

加入网络后，点击可以查看网络相关信息。

![网络信息](/assets/net-zerotier-2.jpg)

需要记下`Managed Ips`，该IP使用的是CIDR记法，子网掩码包含在其中。