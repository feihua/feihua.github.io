# 环境准备

<font size=5>1.mysql</font>
```shell
docker run --network=host --name mysql --restart=always --privileged=true -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
```

**参数说明**：--MYSQL_ROOT_PASSWORD是密码

<font size=5>2.redis</font>
```shell
docker run -itd --name redis --network=host redis --requirepass 123456
```

**参数说明**：--requirepass是密码

<font size=5>3.etcd</font>
```shell
docker run -itd --network=host quay.io/coreos/etcd:latest
```

::: tip
**如果提供至线上使用,个人不建议使用 Docker 部署**。
:::




