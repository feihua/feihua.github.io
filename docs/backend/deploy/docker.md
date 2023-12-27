# 在docker上部署

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

::: tip
MySQL 如果提供至线上使用个人不建议使用 Docker 部署，有来线上使用的是阿里云轻量服务器，总结下来通过 Docker 部署有时会出现查询连接很慢的情况，当然这里只是个人建议，容器部署非常简便。
:::
