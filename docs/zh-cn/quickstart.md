# 快速开始
Notr对用户非常友好，简单易入门，只需两三分钟即可成功使用。

在执行之前需要进行进行三个步骤

* [下载notr](http://www.notr.tech:8000)
> wget http://www.notr.tech:8000/notr-linux-amd64

* 下载文件赋予可执行权限(以Linux为例)
> chmod +x notr-linux-amd64

* 执行

> ./notr-linux-amd64 -http 80

执行成功之后，在终端当中会显示当前用户信息，使用时长信息以及转发隧道相关的信息

```
➜  ~ ./notr-linux-amd64 -http 80
Notr By ICKelin
状态        	 已连接
授权码       	 **********************
用户名       	 username
域名        	 username.notr.tech
剩余时间      	 42天17小时53分钟
延时        	 24ms
本地页面      	 http://localhost:4396

转发列表:
=============================================================
01. http://username.notr.tech => 127.0.0.1:80
```

通过```http://username.notr.tech```即可在任何地方访问127.0.0.1:80

notr-linux-amd64 -h 即可查看更多的使用选项

```
➜  ~ notr -h
./notr [OPTIONS]
Options:

  -auth string
    	authorize token
  -http int
    	local http server port
  -https int
    	local https server port
  -tcp string
    	local tcp port list, seperate by,
  -v	print version

example:
   ./notr -http 8000
   ./notr -https 443
   ./notr -tcp 22,25
   ./notr -http 8000 -https 443 -tcp 22,25
   ./notr -https 443 -auth "YOUR AUTH TOKEN"

```

除了指定命令行参数之外，也可以使用交互式的方式输入授权码和端口信息

```

➜  ~ notr

欢迎使用Notr(http://www.notr.tech)内网穿透服务
通过以下四个步骤完成基本配置
-----------------------------------------------------
	1、填写授权码
	2、填写本地http服务监听的端口
	3、填写本地https服务监听的端口
	4、填写本地tcp服务监听的端口
-----------------------------------------------------

1、输入授权码(不设置直接回车):
2、本地HTTP端口(不设置直接回车):80
3、本地HTTPS端口(不设置直接回车):
4、本地TCP端口(不设置直接回车):
配置成功，正在连接....
Notr By ICKelin
状态        	 已连接
授权码       	 **********************
用户名       	 username
域名        	 username.notr.tech
剩余时间      	 42天17小时49分钟
延时        	 22ms
本地页面      	 http://localhost:4396

转发列表:
=============================================================
01. http://username.notr.tech => 127.0.0.1:80

```