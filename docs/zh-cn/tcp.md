# tcp隧道

tcp是当前普遍使用的一种传输层协议，无论是http，https均是基于tcp之上的应用层协议。除了http和https之外，还有其他非常多的应用是基于tcp协议。

目前tcp隧道仅针对付费用户开放，非付费用户暂时无tcp隧道权限。相比较http和https协议而言，tcp更加底层，所以针对tcp隧道也有一些额外的要求。

> notr -tcp 22 -auth "你的授权码"

运行之后会出现如下结果:

```
➜  ~ notr -tcp 22
Notr By ICKelin
状态        	 已连接
授权码       	 *********************
用户名       	 username
域名        	 username.notr.tech
剩余时间      	 42天17小时35分钟
延时        	 23ms
本地页面      	 http://localhost:4396

转发列表:
=============================================================
01. tcp://username.notr.tech:10001 => 127.0.0.1:22
```

> ssh username@username.notr.tech -p 10001

即可使用内网ssh服务


