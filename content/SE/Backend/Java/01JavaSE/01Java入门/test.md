---
title:
description:
permalink:
aliases:
draft:
date: 2026-01-25
tags:
  - JavaSE
---
> [!Quote]- 课程介绍【PPT】
> <div class="iframe-wrapper">
> <iframe src="https://show.zohopublic.com/publish/q30k5da6f2004ed5f46b9970499b221e8636c" width="100%" style="height: 50vh; border: none;"></iframe>
> </div>

> [!TIP] Title
>要学会使用AI辅助编程，时代变了
> 提示词要写的专业，表明设定自己身份，再问AI问题

## **Java 简介**
Java 是一种广泛使用的高级编程语言，由 Sun Microsystems 于 1995 年发布（现属 Oracle）。其核心设计理念是 **“一次编写，到处运行”（Write Once, Run Anywhere）**，依托 Java 虚拟机（JVM）实现跨平台兼容。**Java 之父：詹姆斯·高斯林（James Gosling）**

**关键特性：**

- **面向对象**：支持封装、继承、多态
- **平台无关**：编译为字节码，在任何安装 JVM 的设备上运行
- **内存安全**：自动垃圾回收，减少内存泄漏风险
- **丰富标准库**：涵盖 I/O、网络、并发、集合等常用功能
- **强类型 & 静态检查**：编译期捕获多数错误，提升稳定性

**典型用途：**  
企业后端服务｜Android 应用（历史主流）｜大数据工具（如 Hadoop）｜桌面应用开发｜嵌入式系统 | 大数据、云计算 | 游戏开发 | 科学计算 | 移动端App开发

> 这些用途不一定用Java开发，也可以用其它语言，比如Python，这是由市场决定的。但Java仍占据企业内部管理服务端软件开发的90%以上市场份额。

**当前主流 LTS 版本：** Java8、Java、Java 17、Java 21（含虚拟线程等现代并发特性）

> 安装JDK推荐使用LTS版本（long-term support长期支持版本）

简洁、稳定、生态成熟——Java 至今仍是全球最主流的编程语言之一。
 
## **Java 三大技术平台**

1. **Java SE（Standard Edition）**
    
    - **定位**：标准版，Java 的核心基础
    - **功能**：提供基本语法、核心类库（如集合、IO、多线程）、JVM 和开发工具（JDK）
    - **用途**：桌面应用、命令行工具、学习入门及所有 Java 平台的根基
2. **Java EE（Enterprise Edition）** → 现为 **Jakarta EE**
    
    - **定位**：企业版，构建大型分布式系统
    - **功能**：在 SE 基础上扩展 Web 容器（Servlet/JSP）、EJB、JPA、JMS 等企业级 API
    - **用途**：电商后台、银行系统、微服务等高并发、高可靠服务
3. **Java ME（Micro Edition）**
    
    - **定位**：微型版，面向资源受限设备比如旧式移动设备
    - **功能**：精简版 Java 运行环境，支持基础 UI 与网络
    - **用途**：旧式功能机、嵌入式设备（如机顶盒、传感器）——**现已基本淘汰**

> **关系**：SE 是根基，EE 扩展企业能力，ME 针对轻量设备。  
> **学习路径**：从 **Java SE** 入手，再进阶 EE（Jakarta EE）或相关框架（如 Spring）。


> [!NOTE] 总结
> Java主要应用于Web服务开发

## **如何安装 JDK（Java 开发工具包）**

---

### 1. **下载 JDK**

- 推荐版本：**OpenJDK 17 或 21**（免费、开源、长期支持）
- 官方下载地址：  
    🔗 [https://adoptium.net/](https://adoptium.net/)（Eclipse Temurin 发行版，稳定可靠）

> 避免使用 Oracle JDK 商业版本（需登录账号，部分用途收费）

---

### 2. **安装步骤**

#### **Windows**

1. 下载 `.msi` 安装包（如 `OpenJDK17U-jdk_x64_windows_hotspot_*.msi`）
2. 双击运行，按向导默认选项安装
3. 安装完成后自动配置环境变量（通常无需手动设置）

#### **macOS**

- **方式一（推荐）**：下载 `.pkg` 文件，双击安装，按提示完成
- **方式二**：用 Homebrew
    
    ```bash
    brew install openjdk@17
    ```
    

#### **Linux（Ubuntu/Debian）**

```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

---

### 3. **验证安装**

打开终端（命令提示符 / Terminal），执行：

```bash
java -version
javac -version
```

若显示版本信息（如 `17.0.x` 或 `21.0.x`），说明安装成功。

---

### 4. **（可选）配置环境变量**

多数现代安装包已自动配置。若命令未识别，需手动设置 `JAVA_HOME`：

- **Windows**：  
    `系统属性 → 高级 → 环境变量 → 新建 JAVA_HOME = JDK安装路径`  
    并将 `%JAVA_HOME%\bin` 加入 `Path`
    
- **macOS / Linux**：  
    在 `~/.bashrc` 或 `~/.zshrc` 中添加：
    
    ```bash
    export JAVA_HOME=/path/to/jdk
    export PATH=$JAVA_HOME/bin:$PATH
    ```
    
    然后运行 `source ~/.zshrc`（或对应 shell 配置文件）
    

---

> 可以使用 IntelliJ IDEA编写和运行 Java 程序，省去命令行操作。

>说明：我们写好的va程序都是高级语言，计算机底层是硬件
不能识别这些语言，必须先通过javac编译工具进行翻译，然后
再通过java执行工具执行才可以驱动机器干活。

 
