# http隧道
Notr的HTTP隧道使用非常简单，只需要运行

> notr -http 80

一条命令即可，与其他反向代理软件不一样的是，Notr的http隧道使用的是默认的80端口，这点在微信公众号开发调试非常重要，微信公众号开发设置的回调函数要求必须是80端口或者443端口。所以如果您希望调试微信公众号，不妨尝试Notr的http隧道。
