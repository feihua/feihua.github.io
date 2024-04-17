# Ubuntu22.04上安装和使用Go

## 1.下载和解压
```shell
wget https://studygolang.com/dl/golang/go1.22.0.linux-amd64.tar.gz

tar xfz go1.22.0.linux-amd64.tar.gz -C /usr/local
```

## 2.配置环境变量
```shell
vim /etc/profile
```
添加如下：
```shell
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GOBIN=$GOPATH/bin
export PATH=$GOPATH:$GOBIN:$GOROOT/bin:$PATH
export GOPROXY=https://goproxy.cn,direct

```

## 3.验证
```shell
source /etc/profile
go version
```