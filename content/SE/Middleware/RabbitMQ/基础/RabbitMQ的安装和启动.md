## Docker 安装 

### 第一步：创建网络
```bash
docker network create hmall
```

> `network hmall` 只是把容器加入自定义网络，方便**多个容器之间互相通信**。
> 只跑 RabbitMQ，不需要和其他容器通信。 不需要创建；
> 后续还要跑 MySQL、Nacos 等容器，需要互相通信 需要创建；

### 第二步：创建运行容器（自动下载镜像）
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

![[SE/Middleware/RabbitMQ/附件/RabbitMQ的安装/RabbitMQ的安装.png]]
![[RabbitMQ的安装 1.png]]

### 第五步：下次运行RabbitMQ
```shell
docker start mq
```

>docker ps | grep mq 确认容器是否正常运行


## 其它
### 删除旧容器，重新创建
如果旧容器有问题想重建，先删除再运行：
```bash
# 先停止
docker stop mq

# 再删除
docker rm mq

# 然后重新执行你的 docker run 命令
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

确认容器是否正常运行
```bash
docker ps | grep mq
```

>如果能看到 mq 容器且状态是 `Up`，说明运行成功，然后访问 `http://你的服务器IP:15672` 即可。

>你用的是 `master` 服务器，所以管理界面地址是 `http://master的IP:15672`，用 `itheima / 123321` 登录。
