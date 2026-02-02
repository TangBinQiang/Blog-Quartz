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