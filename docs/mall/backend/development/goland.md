# 二次开发(重点)

<font face="宋体" color=red size=5>二次开发主要是根据goctl工具生成新的接口代码</font>

**1.安装goctl**
```shell
go get -u github.com/zeromicro/go-zero
go get -u github.com/zeromicro/go-zero/tools/goctl
```
**2.进到api/doc/目录执行,生成api代码**


```shell
goctl api go -api admin.api -dir ../../
```
**3.进到front-api/doc/目录执行,生成front-api代码**


```shell
goctl api go -api front.api -dir ../
```
**4.进到rpc/sys/目录操作,生成sys-rpc代码**


```shell
goctl rpc protoc sys.proto --go_out=./ --go-grpc_out=./ --zrpc_out=. -m
```
**5.进到rpc/ums/目录操作,生成ums-rpc代码**


```shell

goctl rpc protoc ums.proto --go_out=./ --go-grpc_out=./ --zrpc_out=. -m
```
**6.进到rpc/pms/目录操作,pms-rpc代码**

```shell

goctl rpc protoc pms.proto --go_out=./ --go-grpc_out=./ --zrpc_out=. -m
```
**7.进到rpc/oms/目录操作,生成oms-rpc代码**


```shell

goctl rpc protoc oms.proto --go_out=./ --go-grpc_out=./ --zrpc_out=. -m
```
**8.进到rpc/sms/目录操作,生成sms-rpc代码**


```shell

goctl rpc protoc sms.proto --go_out=./ --go-grpc_out=./ --zrpc_out=. -m
```

**9.进到rpc/cms/目录操作,生成cms-rpc代码**


```shell

goctl rpc protoc cms.proto --go_out=./ --go-grpc_out=./ --zrpc_out=. -m
```
**10.进到rpc/目录操作,生成model代码**


```shell
goctl model mysql datasource -url="root:123456@tcp(127.0.0.1:3306)/gozero" -table="sys*" -dir ./model/sysmodel
goctl model mysql datasource -url="root:123456@tcp(127.0.0.1:3306)/gozero" -table="ums*" -dir ./model/umsmodel
goctl model mysql datasource -url="root:123456@tcp(127.0.0.1:3306)/gozero" -table="pms*" -dir ./model/pmsmodel
goctl model mysql datasource -url="root:123456@tcp(127.0.0.1:3306)/gozero" -table="oms*" -dir=./model/omsmodel
goctl model mysql datasource -url="root:123456@tcp(127.0.0.1:3306)/gozero" -table="sms*" -dir ./model/smsmodel
goctl model mysql datasource -url="root:123456@tcp(127.0.0.1:3306)/gozero" -table="cms*" -dir ./model/cmsmodel

```

::: tip
**为了减少生成代码复杂度,不进行模板定制,和官方的一样**。
:::

