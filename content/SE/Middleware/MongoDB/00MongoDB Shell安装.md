---
title:
protected: true
password: 5438
description:
permalink:
aliases:
draft:
date: 2026-03-11
tags:
  -
---
> [!tip] 技巧
> 我直接下载MongoDB Shell的zip包，将里面的mongosh.exe直接拖到    C:\Program Files\MongoDB\Server\8.0\bin目录下。其实不安装也没事，MongoDB Campass上就有。

**方法一：添加环境变量（推荐，一劳永逸）**

1. 找到 mongosh 的安装路径，一般在：
    
    ```
    C:\Program Files\MongoDB\Server\8.0\bin
    ```
    
2. 按 `Win + S` 搜索 **"编辑系统环境变量"** → 打开
3. 点击 **"环境变量"** → 找到 **Path** → 点击 **"编辑"**
4. 点击 **"新建"**，粘贴上面的路径
5. 一路点确定，**重新打开 cmd**，再输入 `mongosh`

---

**方法二：直接用完整路径运行（临时）**

在 cmd 中输入完整路径：

```cmd
"C:\Program Files\MongoDB\Server\8.0\bin\mongosh.exe"
```

---

**如果以上路径不存在，说明 MongoDB Shell 未安装**，需要先安装：

1. 访问 [https://www.mongodb.com/try/download/shell](https://www.mongodb.com/try/download/shell)
2. 下载 **MongoDB Shell（mongosh）** Windows 版本
3. 安装时勾选 **"Add to PATH"**，安装完重启 cmd
