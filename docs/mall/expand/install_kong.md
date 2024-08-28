# kong网关安装

**安装环境**

| 软件                       | 版本    |
|--------------------------|-------|
| Red Hat Enterprise Linux | 8     |
| postgresql               | 16    |
| kong                     | 3.7.1 |

kong安装主要涉及存储和它本身

## 1.postgresql 数据库

### 1.1安装
```shell
1.安装
yum module install postgresql:16/server

2.初始化
postgresql-setup --initdb

3.启动
systemctl start postgresql.service

4.开机启动
systemctl enable postgresql.service

5.状态查看
systemctl status postgresql
```

### 2.配置远程访问
```shell
vim /var/lib/pgsql/data/postgresql.conf


将 listen_addresses 设置为 * 以监听所有接口，或者指定具体的 IP 地址
```
```shell
vim /var/lib/pgsql/data/pg_hba.conf 文件，添加允许远程连接的行

host    all             all             0.0.0.0/0               md5

```

<span  style="color: red;">配置完后（要重启）</span>


### 3.连接数据库
```shell
sudo -u postgres psql
```

### 4.kong相关
```sql
CREATE USER kong WITH PASSWORD 'super_secret'; 
CREATE DATABASE kong OWNER kong;
```
<span  style="color: red;">这个配置后面kong配置的时候要用</span>

## 2.kong安装

### 2.1安装
```shell
1. 下载
curl -Lo kong-3.7.1.rpm $(rpm --eval https://packages.konghq.com/public/gateway-37/rpm/el/%{rhel}/%{_arch}/kong-3.7.1.el%{rhel}.%{_arch}.rpm)
sudo yum install -y kong-3.7.1.rpm

2. 配置存储
cp /etc/kong/kong.conf.default /etc/kong/kong.conf
vim /etc/kong/kong.conf 修改pg配置即可

3. 初始化
kong migrations bootstrap -c /etc/kong/kong.conf

4. 启动
kong start -c /etc/kong/kong.conf

5. 验证
curl -i http://localhost:8001

```