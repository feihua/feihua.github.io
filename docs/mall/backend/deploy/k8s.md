# 在k8s上部署

## 1.效果

### 1.1项目预览

![image-20231227094812485](k8s.assets/image-20231227094812485.png)

### 1.2项目概览

![image-20231227094934471](k8s.assets/image-20231227094934471.png)

### 1.3项目服务

![image-20231227095009680](k8s.assets/image-20231227095009680.png)

### 1.4工作负载

![image-20231227095052928](k8s.assets/image-20231227095052928.png)

### 1.5容器组

![image-20231227095111216](k8s.assets/image-20231227095111216.png)

### 1.6front-api的deployments

![image-20231227095234237](k8s.assets/image-20231227095234237.png)

### 1.7front-api的pods

![image-20231227095328574](k8s.assets/image-20231227095328574.png)

### 1.8front-api的日志

![image-20231227095837116](k8s.assets/image-20231227095837116.png)

## 2.脚本

<font face="宋体" color=red size=5>具体脚本在zero-admin\script\目录</font>

### 2.1执行顺序

```shell
kubectl apply -f service-account.yaml(可选,如果把K8s作为注册中心这个就是必须的)
kubectl apply -f register.yaml(可选,如果把K8s作为注册中心这个就是必须的)

kubectl apply -f sys-rpc.yaml
kubectl apply -f ums-rpc.yaml
kubectl apply -f sms-rpc.yaml
kubectl apply -f pms-rpc.yaml
kubectl apply -f oms-rpc.yaml
kubectl apply -f cms-rpc.yaml

kubectl apply -f admin-api.yaml
kubectl apply -f front-api.yaml
```

::: tip
serviceaccount.yaml是获取k8s api的权限

register.yaml 是注册中心(etcd或者k8s),如果不配置,注册中心默认为etcd
:::
