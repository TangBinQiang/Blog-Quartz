## Docker 安装 RabbitMQ

### 第一步：创建网络
```bash
docker network create hmall
```
> `network hmall` 只是把容器加入自定义网络，方便**多个容器之间互相通信**。
> 只跑 RabbitMQ，不需要和其他容器通信。 不需要创建；
> 后续还要跑 MySQL、Nacos 等容器，需要互相通信 需要创建；

### 第二步：运行容器（自动下载镜像）
```bash
docker run -d \
 --name mq \
 --hostname mq \
 -p 15672:15672 \
 -p 5672:5672 \
 -e RABBITMQ_DEFAULT_USER=itheima \
 -e RABBITMQ_DEFAULT_PASS=123321 \
 -v mq-plugins:/plugins \
 --network hmall \
 rabbitmq:3.8-management
```

### 第三步：验证
```bash
docker ps
```

### 第四步：浏览器访问
```
http://192.168.17.125:15672
```
用户名：`itheima` 密码：`123321`

![[RabbitMQ的安装.png]]
![[RabbitMQ的安装 1.png]]