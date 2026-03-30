# Dify的安装指南

Dify 是一个基于大语言模型（LLM）的开放平台，支持多种部署方式。以下是2026年最新的安装指南：

## 1. 环境准备
- **系统要求**：Linux/Windows/macOS（推荐Linux）
- **Python版本**：3.11+（建议使用3.12+）
- **依赖库**：
  - `dify-core`
  - `dify-llm`
  - `dify-ui`
  - `dify-embedding`
  - `dify-vectorstore`

## 2. 安装步骤

```bash
# 更新系统包
sudo apt update && sudo apt upgrade -y  # Linux
# 或
brew update && brew upgrade          # macOS

# 安装Python 3.12
# Linux:
#   sudo apt install python3.12 python3.12-venv python3.12-dev
# macOS:
#   brew install python@3.12

# 创建虚拟环境
python3.12 -m venv venv
source venv/bin/activate  # Linux/macOS
# venv\Scripts\activate  # Windows

# 安装Dify
pip install dify
```

## 3. 部署方式

**方式一：本地部署**
```bash
dify run local
```
- 启动后访问：`http://localhost:8000`

**方式二：Docker部署**
```bash
# 下载Dify镜像
docker pull dify/dify:latest

# 运行容器
docker run -p 8000:8000 dify/dify:latest
```

**方式三：Kubernetes部署**
```bash
# 部署到K8s集群
kubectl apply -f deployment.yaml
```

## 4. 配置说明
- **配置文件**：`dify/config.yaml`
- **模型配置**：支持本地模型（如LLaMA2）和云端模型（如OpenAI）
- **数据存储**：支持SQLite、PostgreSQL、MongoDB等

## 5. 开发者指南
- [官方文档](https://docs.dify.dev/)
- [GitHub仓库](https://github.com/dify-org/dify)
- [社区论坛](https://discuss.dify.dev/)

> 以上内容基于2026年最新信息整理。如需更详细的步骤或特定版本的安装说明，建议参考官方文档或GitHub最新版本。