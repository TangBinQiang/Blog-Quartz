## Docker的下载安装

### 第一步：备份旧源
```bash
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
```

### 第二步：下载阿里云源
```bash
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

### 第三步：清理缓存并重建
```bash
yum clean all
yum makecache
```

### 第四步：安装依赖
```bash
yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 第五步：添加 Docker 源
```bash
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 第六步：安装 Docker
```bash
yum install -y docker-ce docker-ce-cli containerd.io
```

### 第七步：启动并设置开机自启
```bash
systemctl start docker
systemctl enable docker
```

### 第八步：验证
```bash
docker version
```

---
## Docker 配置国内镜像源
### 第一步：配置国内镜像源
```bash
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://docker.1ms.run",
    "https://hub.1panel.dev",
    "https://docker.1panel.live"
  ]
}
EOF
```

### 第二步：重启 Docker
```bash
systemctl daemon-reload
systemctl restart docker
```

### 第三步：验证配置
```bash
docker info | grep -A 3 "Registry Mirrors"
```
看到阿里云地址说明配置成功 ✅

---
## Docker 删除代理配置

### 第一步：删除配置文件
```bash
rm -f /etc/docker/daemon.json
```

### 第二步：重启 Docker
```bash
systemctl daemon-reload
systemctl restart docker
```

### 第三步：验证已清除
```bash
docker info | grep -A 3 "Registry Mirrors"
```
>没有任何代理地址输出说明已清除 


