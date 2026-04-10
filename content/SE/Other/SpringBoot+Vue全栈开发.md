## 简介
### 项目开发框架
- 后端框架：Springboot + MyBatisPlus
- 前端框架：Vue + ElementUI
- 项目部署：集成打包 + 云部署
### BS 架构原理
![[SpringBoot+Vue全栈开发.png]]

---
## 开发环境准备
- JDK下载安装
- Maven安装配置
- IDEA 开发工具安装使用
- HoppStoch/Postman测试工具安装

---
## SpringBoot快速上手
### 创建项目
#### 创建项目方式选择Spring Initializr 
![[SpringBoot+Vue全栈开发-1.png]]

#### 勾选Lombok和Spring Web后创建
![[SpringBoot+Vue全栈开发-2.png]]

#### 项目创建后，等依赖下载完成
![[SpringBoot+Vue全栈开发-3.png]]

### 创建接口
#### 新建hello测试接口
新建名为Controller的包->创建DemoController.java
```java
package com.example.demo01.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
	// http://localhost:8080/hello
    @GetMapping("/hello")  
    public String hello() {
        return "hello world";
    }
}
```

>`@RestController` 只返回给前端数据 ；`@Controller` 返回给前端页面和数据 ;
>`@GetMapping` 路由注解，只接受浏览器的Get请求

#### 运行项目访问接口
![[SpringBoot+Vue全栈开发-4.png]]

### 配置项目热部署（可选）
#### 配置pom.xml添加devtools依赖
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-devtools</artifactId>
	<optional>true</optional>
</dependency>
```

#### 配置application.properties
```properties
# 热部署生效
spring.devtools.restart.enabled=true
# 设置重启目录
spring.devtools.restart.additional-paths=src/main/java
# 设置classpath目录下的WEB-INF文件夹内容修改不重启
spring.devtools.restart.exclude=static/**
```

#### IDEA开启自动编译
`Settings` → `Build, Execution, Deployment` → `Compiler` → 勾选Build project automatically
![[SpringBoot+Vue全栈开发-5.png]]

####  IDEA开启运行时自动构建
`Settings` → `Advanced Settings` → 勾选 **Allow auto-make to start even if developed application is currently running**
![[SpringBoot+Vue全栈开发-6.png]]

---
## Web开发基础
### 新建ParamsController
#### 新建getTest01接口
```java
package com.example.demo01.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ParamsController {

    @RequestMapping(value = "/getTest01",method = RequestMethod.GET)
    public String getTest01() {
        return "Get请求";
    }

}
```

