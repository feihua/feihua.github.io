# 快速开始

## 环境准备
### redis中间件

```bash
docker run -itd --name redis -p 6379:6379 redis --requirepass 123456
```

参数说明：--name是启动容器的名字， -p是映射端口，--requirepass是密码

### etcd注册中心

```bash
下载二进制文件
wget https://github.com/etcd-io/etcd/releases/download/v3.5.9/etcd-v3.5.9-linux-amd64.tar.gz

tar -zxvf etcd-v3.5.9-linux-amd64.tar.gz && cd etcd-v3.5.9-linux-amd64 && nohup ./etcd &
```



### mysql数据库

```bash
docker run -p 3306:3306 --name mysql --restart=always \
--privileged=true -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
```

参数说明：--name是启动容器的名字， -p是映射端口，--MYSQL_ROOT_PASSWORD是密码



## 后端项目
```bash
mkdir helloworld 
cd helloworld 

go mod init helloworld
```

### HelloWorld
```Go
package main

import (
   "github.com/gin-gonic/gin"
   "github.com/gotomicro/ego"
   "github.com/gotomicro/ego/core/elog"
   "github.com/gotomicro/ego/server/egin"
)
//export EGO_DEBUG=true && go run main.go --config=config.toml
func main() {
   if err := ego.New().Serve(func() *egin.Component {
      server := egin.Load("server.http").Build()
      server.GET("/hello", func(ctx *gin.Context) {
         ctx.JSON(200, "Hello Ego")
         return
      })
      return server
   }()).Run(); err != nil {
      elog.Panic("startup", elog.Any("err", err))
   }
}
```

### 安装依赖
```Go
go get ./...

go mod download
```

### 添加配置
* 在项目中增加config.toml配置文件，内容如下
```toml
[server.http]
    port = 9001
    host = "0.0.0.0"
```

### 使用命令行运行
```bash
export EGO_DEBUG=true # 默认日志输出到logs目录，开启后日志输出到终端
go run main.go --config=config.toml
```

如下所示



这个时候我们可以发送一个指令，得到如下结果

```bash
➜  helloworld git:(master) ✗ curl http://127.0.0.1:9001/hello
"Hello Ego"%  
```


## 前端项目
<Vssue title="quickStart" />