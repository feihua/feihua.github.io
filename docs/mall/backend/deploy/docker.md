# 在docker上部署

## 构建服务

```shell
docker build -t sys-rpc:0.0.1 -f rpc/sys/Dockerfile .
docker build -t ums-rpc:0.0.1 -f rpc/ums/Dockerfile .
docker build -t oms-rpc:0.0.1 -f rpc/oms/Dockerfile .
docker build -t pms-rpc:0.0.1 -f rpc/pms/Dockerfile .
docker build -t sms-rpc:0.0.1 -f rpc/sms/Dockerfile .
docker build -t cms-rpc:0.0.1 -f rpc/cms/Dockerfile .
docker build -t admin-api:0.0.1 -f api/Dockerfile .
docker build -t front-api:0.0.1 -f front-api/Dockerfile .
```

## 启动服务

```shell
docker run -itd --net=host --name=sys sys-rpc:0.0.1
docker run -itd --net=host --name=ums ums-rpc:0.0.1
docker run -itd --net=host --name=oms oms-rpc:0.0.1
docker run -itd --net=host --name=pms pms-rpc:0.0.1
docker run -itd --net=host --name=sms sms-rpc:0.0.1
docker run -itd --net=host --name=cms cms-rpc:0.0.1
docker run -itd --net=host --name=admin-api admin-api:0.0.1
docker run -itd --net=host --name=front-api front-api:0.0.1
```

::: tip
**具体脚本在zero-admin\deployment-shell.sh**。
:::
