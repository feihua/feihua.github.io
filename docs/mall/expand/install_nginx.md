# Ubuntu22.04上安装和使用nginx

## 1.安装
```shell
apt install nginx
```

## 2.配置文件路径
```shell
vim /etc/nginx/sites-enabled/default
```

```shell

server {
	listen 80 default_server;
	listen [::]:80 default_server;


	root /var/www/html;

	# Add index.php to the list if you are using PHP
	index index.html index.htm index.nginx-debian.html;

	server_name _;


	location /api {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header REMOTE-HOST $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_pass http://127.0.0.1:8888;
	}

	location /app {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header REMOTE-HOST $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_pass http://127.0.0.1:9999/;
	}
	location /web {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header REMOTE-HOST $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_pass http://127.0.0.1:7777/;
	}
	location /salvo/interview/ {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header REMOTE-HOST $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_pass http://127.0.0.1:8100/;
	}
	location /hertz/ {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header REMOTE-HOST $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_pass http://127.0.0.1:6666/;
	}
	location /simple/ {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header REMOTE-HOST $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_pass http://127.0.0.1:6677/;
	}
	location ^~ /mall{
		alias html/mall;
		index index.html; 
		try_files $uri $uri/ /mall/index.html;
		}
	location ^~ /pc{
		alias html/pc;
		index index.html; 
		try_files $uri $uri/ /pc/index.html;
		}
	location ^~ /salvo{
		alias html/salvo;
		index index.html; 
		try_files $uri $uri/ /salvo/index.html;
		}

}

```
## 3.静态文件路径
```shell
/usr/share/nginx/html
```