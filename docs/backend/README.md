# 项目介绍

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





