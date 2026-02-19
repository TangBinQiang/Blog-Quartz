---
title: Python 基础语法
date: 2026-02-19
tags:
  - python
  - programming
  - basics
categories:
  - 编程语言
---

# Python 基础语法

> [!info] 概述
> Python 是一种高级编程语言，以简洁易读的语法著称。本文档涵盖了 Python 的核心语法知识。

## 基本语法结构

### Hello World

```python
print("Hello, World!")
```

### 注释

```python
# 单行注释
print("Hello")  # 行尾注释

"""
多行注释
可以使用三引号
"""

'''
另一种多行注释方式
'''
```

## 变量与数据类型

### 变量赋值

```python
# 变量命名：小写字母和下划线
name = "Alice"
age = 25
height = 1.75
is_student = True
```

### 基本数据类型

| 类型 | 示例 | 说明 |
|------|------|------|
| `int` | `42` | 整数 |
| `float` | `3.14` | 浮点数 |
| `str` | `"hello"` | 字符串 |
| `bool` | `True` | 布尔值 |
| `None` | `None` | 空值 |

```python
# 类型检查与转换
x = 42
print(type(x))        # <class 'int'>
print(float(x))       # 42.0
print(str(x))         # "42"
```

### 字符串操作

```python
# 字符串定义
s1 = "双引号"
s2 = '单引号'
s3 = """多行
字符串"""

# 字符串格式化
name = "Bob"
age = 30
print(f"我叫{name}，今年{age}岁")  # f-string (推荐)
print("我叫{}，今年{}岁".format(name, age))

# 字符串方法
text = "Hello World"
print(text.lower())    # "hello world"
print(text.upper())    # "HELLO WORLD"
print(text.split())    # ["Hello", "World"]
print(len(text))       # 11
```

## 运算符

### 算术运算符

```python
a, b = 10, 3

print(a + b)   # 加法: 13
print(a - b)   # 减法: 7
print(a * b)   # 乘法: 30
print(a / b)   # 除法: 3.333...
print(a // b)  # 整除: 3
print(a % b)   # 取余: 1
print(a ** b)  # 幂运算: 1000
```

### 比较运算符

```python
x, y = 5, 10

print(x == y)  # False
print(x != y)  # True
print(x < y)   # True
print(x > y)   # False
print(x <= y)  # True
print(x >= y)  # False
```

### 逻辑运算符

```python
a, b = True, False

print(a and b)  # False
print(a or b)   # True
print(not a)    # False
```

## 控制流

### 条件语句

```python
age = 18

if age < 18:
    print("未成年")
elif age == 18:
    print("刚成年")
else:
    print("成年人")

# 三元运算符
status = "成年" if age >= 18 else "未成年"
```

### for 循环

```python
# 遍历列表
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# 使用 range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(1, 6, 2):
    print(i)  # 1, 3, 5

# 遍历字典
person = {"name": "Alice", "age": 25}
for key, value in person.items():
    print(f"{key}: {value}")
```

### while 循环

```python
count = 0
while count < 5:
    print(count)
    count += 1

# break 和 continue
i = 0
while i < 10:
    if i == 3:
        i += 1
        continue  # 跳过本次
    if i == 7:
        break     # 退出循环
    print(i)
    i += 1
```

## 数据结构

### 列表 (List)

```python
# 创建列表
numbers = [1, 2, 3, 4, 5]
empty_list = []

# 常用操作
numbers.append(6)        # 添加元素: [1,2,3,4,5,6]
numbers.insert(0, 0)     # 插入: [0,1,2,3,4,5,6]
numbers.remove(3)        # 删除值3
numbers.pop()            # 删除最后一个
numbers[0] = 99          # 修改元素

# 切片
print(numbers[1:4])      # [1, 2, 4]
print(numbers[:3])       # [99, 1, 2]
print(numbers[-2:])      # [5, 6]
print(numbers[::2])      # 每隔一个取值

# 列表推导式
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]
```

### 字典 (Dict)

```python
# 创建字典
person = {
    "name": "Alice",
    "age": 25,
    "city": "Beijing"
}

# 访问和修改
print(person["name"])        # "Alice"
print(person.get("email", "未设置"))  # "未设置" (默认值)
person["age"] = 26
person["email"] = "alice@example.com"

# 常用方法
print(person.keys())         # dict_keys([...])
print(person.values())       # dict_values([...])
print(person.items())        # dict_items([...])
del person["city"]           # 删除键
person.pop("email")          # 删除并返回值
```

### 集合 (Set)

```python
# 创建集合
numbers = {1, 2, 3, 4}
numbers.add(5)
numbers.discard(2)

# 集合运算
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)   # 并集: {1, 2, 3, 4, 5}
print(a & b)   # 交集: {3}
print(a - b)   # 差集: {1, 2}
print(a ^ b)   # 对称差: {1, 2, 4, 5}
```

### 元组 (Tuple)

```python
# 元组是不可变的
point = (3, 4)
single = (42,)  # 单元素元组需要逗号

# 解包
x, y = point
print(x, y)  # 3 4
```

## 函数

### 定义和调用

```python
def greet(name):
    """向某人打招呼"""
    return f"Hello, {name}!"

message = greet("Alice")
print(message)  # "Hello, Alice!"
```

### 参数

```python
# 默认参数
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9
print(power(3, 3))   # 27

# 可变参数
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))  # 10

# 关键字参数
def create_user(name, **kwargs):
    user = {"name": name}
    user.update(kwargs)
    return user

user = create_user("Alice", age=25, city="Beijing")
```

### Lambda 函数

```python
# 简单的匿名函数
square = lambda x: x ** 2
print(square(5))  # 25

# 常用于函数式编程
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

## 异常处理

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零")
except Exception as e:
    print(f"发生错误: {e}")
else:
    print("没有错误")
finally:
    print("总是执行")

# 自定义异常
class CustomError(Exception):
    pass

try:
    raise CustomError("自定义错误")
except CustomError as e:
    print(f"捕获到: {e}")
```

## 类与对象

### 基本类定义

```python
class Person:
    def __init__(self, name, age):
        self.name = name  # 实例属性
        self.age = age

    def greet(self):
        return f"我是 {self.name}，{self.age} 岁"

    @classmethod
    def from_birth_year(cls, name, birth_year):
        age = 2026 - birth_year
        return cls(name, age)

# 使用类
person = Person("Alice", 25)
print(person.greet())

# 使用类方法
bob = Person.from_birth_year("Bob", 1990)
print(bob.age)  # 36
```

### 继承

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} 说: 汪汪!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} 说: 喵喵!"

dog = Dog("旺财")
cat = Cat("咪咪")

print(dog.speak())  # 旺财 说: 汪汪!
print(cat.speak())  # 咪咪 说: 喵喵!
```

## 文件操作

### 读写文件

```python
# 写入文件
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("Hello, World!\n")
    f.write("你好，世界！")

# 读取文件
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()      # 读取全部
    print(content)

# 逐行读取
with open("example.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())  # 去除换行符
```

## 常用内置函数

```python
# 类型转换
int("42")           # 42
float("3.14")       # 3.14
str(42)             # "42"
list("abc")         # ['a', 'b', 'c']

# 序列操作
len([1, 2, 3])      # 3
max([1, 2, 3])      # 3
min([1, 2, 3])      # 1
sum([1, 2, 3])      # 6
sorted([3, 1, 2])   # [1, 2, 3]

# 输入输出
name = input("请输入名字: ")
print(f"你好, {name}!")
```

## 导入模块

```python
# 导入整个模块
import math
print(math.sqrt(16))  # 4.0

# 导入特定函数
from math import sqrt, pi
print(sqrt(16))       # 4.0
print(pi)             # 3.14159...

# 使用别名
import numpy as np
import pandas as pd
```

> [!tip] 学习建议
> - 多动手练习，边学边写代码
> - 阅读 Python 官方文档
> - 参与开源项目积累经验

> [!warning] 注意事项
> - Python 使用**缩进**表示代码块（通常是4个空格）
> - 变量命名避免使用 Python 关键字
> - 注意列表的可变性（深拷贝 vs 浅拷贝）

## 相关资源

- [[Python 进阶]]
- [[Python 实战项目]]
- [[Python 标准库]]
