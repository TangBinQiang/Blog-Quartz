## 简介
### 项目开发框架
- 后端框架：Springboot + MyBatisPlus
- 前端框架：Vue + ElementU
- 项目部署：集成打包 + 云部署
### BS 架构原理
![[SpringBoot+Vue全栈开发.png]]
### 开发环境准备
- JDK下载安装
- Maven安装配置
- IDEA 开发工具安装使用
- HoppStoch/Postman/ApiPost测试工具安装

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
## SpringBoot Controller
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

![[SpringBoot+Vue全栈开发-7.png]]

#### 新建getTest02接口
```java
    @RequestMapping(value = "/getTest02",method = RequestMethod.GET)
    public String getTest02(String nickName, String phone) {
        System.out.println("nickname:"+nickName);
        System.out.println("phone:"+phone);
        return "Get请求";
    }
```

![[SpringBoot+Vue全栈开发-8.png]]
![[SpringBoot+Vue全栈开发-9.png]]

#### 新建getTest03接口
>`@RequestParam` 参数名映射；`required = false` 无需一定要传参
```java
    @RequestMapping(value = "/getTest03",method = RequestMethod.GET)
    public String getTest03(@RequestParam(value = "nickname",required = false) String name) {
        System.out.println("nickname:"+name);
        return "Get请求";
    }
```

![[SpringBoot+Vue全栈开发-10.png]]
![[SpringBoot+Vue全栈开发-11.png]]

#### 新建postTest01接口
```java
    @RequestMapping(value = "/postTest01",method = RequestMethod.POST)
    public String postTest01 () {
        return "Post请求";
    }
```

![[SpringBoot+Vue全栈开发-12.png]]

#### 新建postTest02接口
```java
    @RequestMapping(value = "/postTest02",method = RequestMethod.POST)
    public String postTest02 (String username, String password) {
        System.out.println("nickname:"+username);
        System.out.println("phone:"+password);
        return "Post请求";
    }
```
请求体方式请求接口
![[SpringBoot+Vue全栈开发-13.png]]
url后面接参数请求接口
![[SpringBoot+Vue全栈开发-14.png]]
![[SpringBoot+Vue全栈开发-15.png]]

#### 新建postTest03接口
>`@ModelAttribute` 表单接受提交对象 不写也可；
```java
    @RequestMapping(value = "/postTest03",method = RequestMethod.POST)
    public String postTest03 (User user){
        System.out.println(user);
        return "Post请求";
    }
```

新建`entity`包 → 新建User类
```java
package com.example.demo01.entity;

public class User {

    private String username;

    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
```

![[SpringBoot+Vue全栈开发-16.png]]
![[SpringBoot+Vue全栈开发-17.png]]

#### 新建postTest04接口
> ``
```java
    @RequestMapping(value = "/postTest04",method = RequestMethod.POST)
    public String postTest04 (@RequestBody User user){
        System.out.println(user);
        return "Post请求";
    }
```
![[SpringBoot+Vue全栈开发-18.png]]
![[SpringBoot+Vue全栈开发-19.png]]

