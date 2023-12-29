# 本地启动

## 1.下载代码
```shell
git clone https://github.com/feihua/zero-admin.git
```
## 2.导入sql脚本

脚本位置在项目的 zero-admin\rpc\doc\sql 目录下
## 3.修改配置
**3.1修改redis配置**

配置信息目录：zero-admin\api\etc\admin-api.yaml
```yaml
Redis:
  Address: 127.0.0.1:6379
  Pass: 62956dh5k9ed
```

<font color=Red>把上面信息修改为你自己的redis配置信息</font>

**3.2修改mysql配置**

mysql配置主要在rpc服务下面
```yaml
Mysql:
  Datasource: root:123456@tcp(127.0.0.1:3306)/gozero?charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai

```
<font color=Red>把上面信息修改为你自己的mysql配置信息</font>

## 3.启动etcd

![image-20231229094421149](start.assets/image-20231229094421149.png)
::: tip
**在window下开发的如上,根据自己的实际情况而定。**
:::

## 4.启动项目

![image-20231229095416570](start.assets/image-20231229095416570.png)

## 4.验证服务
**4.1后端接口验证**
zero-admin\api\doc\http\sys\user.http
```yaml
###用户登录
  POST {{host}}/api/sys/user/login
Content-Type: application/json

  {
    "userName": "admin",
    "password": "123456"
  }
  > {% client.global.set("token", response.body.token); %}

```
**4.1移动端接口验证**
zero-admin\front-api\doc\http\member.http
```yaml
### app会员登录
POST {{host}}/api/member/login
Content-Type: application/json

{
  "mobile": "18613030352",
  "password": "123456"
}
> {% client.global.set("token", response.body.data.token); %}

```
::: tip
**记得修改上面的host变量为你自己的ip**

<font color=Red>测试其它脚本之前,必须执行上面二个接口先登录拿到token,再测其它接口</font>
:::

