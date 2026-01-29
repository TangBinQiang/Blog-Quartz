### 创建Shell脚本

> #!/bin/sh 和 #!/bin/bash 都是脚本文件的开头，用来指定脚本文件的解释器。其中 #!/bin/sh 指定的是 Bourne shell 解释器，而 #!/bin/bash 指定的是 Bash shell 解释器。
> Bash shell 是 Bourne shell 的增强版，它支持更多的特性和语法。因此，如果脚本中需要使用 Bash shell 特有的语法或特性，就需要使用 #!/bin/bash 来指定解释器。

```shell
#shell解释器查看
[root@hadoop101 ~]# cat /etc/shells
/bin/sh
/bin/bash
/usr/bin/sh
/usr/bin/bash
/bin/tcsh
/bin/csh

#查看系统默认解析器
[root@hadoop101 ~]# echo $SHELL
/bin/bash

```
#### Hello World

```shell
#创建一个.sh后缀的文件，即shell脚本
[root@centos home]# vim test.sh

#编辑test.sh脚本，#!/bin/bash是所有shell脚本都有的写在脚本的第一行，表示这个脚本用什么解释器执行。

#!/bin/bash
echo "Hello World!"

#编辑完保存后，我们看到test.sh不具备执行权限，我们给他设置执行权限
[root@centos home]# ll
总用量 206492
drwxr-xr-x. 2 zs   root         6 7月  18 10:57 data
-rw-r--r--. 1 root root      8790 7月  19 09:57 history.log
drwx------. 2 root root       144 7月  18 15:45 ls
-rw-r--r--. 1 root root 211426850 7月  18 15:57 ls.tar.gz
-rw-r--r--. 1 root root        32 7月  21 10:14 test.sh
-rw-r--r--. 1 root root        26 7月  20 14:13 test.txt
drwxr-xr-x. 2 root root         6 7月  19 14:51 zs

# chmod +x test.sh 语句给test.sh加上执行权限
[root@centos home]# chmod +x test.sh 
[root@centos home]# ll
总用量 206492
drwxr-xr-x. 2 zs   root         6 7月  18 10:57 data
-rw-r--r--. 1 root root      8790 7月  19 09:57 history.log
drwx------. 2 root root       144 7月  18 15:45 ls
-rw-r--r--. 1 root root 211426850 7月  18 15:57 ls.tar.gz
-rwxr-xr-x. 1 root root        32 7月  21 10:14 test.sh
-rw-r--r--. 1 root root        26 7月  20 14:13 test.txt
drwxr-xr-x. 2 root root         6 7月  19 14:51 zs

#执行sh脚本，./test.sh需要执行权限，其他几种不需要执行权限
[root@centos home]# ./test.sh 
Hello World!

[root@centos home]# sh test.sh 
Hello World!

[root@centos home]# bash test.sh 
Hello World!

[root@centos home]# source test.sh 
Hello World!
```
#### 案例二
> 在/home 目录下创建一个hello.txt，添加内容“你好，张三”

```shell
#!/bin/bash
cd /home
touch hello.txt
echo "你好，张三" >> hello.txt
```

### 变量

#### 变量定义

```shell
#!/bin/bash
name="张三"
```

变量命名规则：

> **变量名和等号之间不能有空格**
>命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
>中间不能有空格，可以使用下划线 _。
>不能使用标点符号。
>不能使用bash里的关键字（可用help命令查看保留关键字）。

#### 变量使用

```shell
#变量使用两种方式，推荐第二种方式,第二种给变量提供了一个边界，如果echo "${name}Hello!"变量不加{}，解释器就无法辨认你的变量到底叫什么名字，nameHe ? nameHello ?
#!/bin/bash
name="张三"
echo $name
echo "${name}Hello!"

[root@centos home]# ./test.sh 
张三
张三Hello!

#变量改变，如果想让变量不可变可以这样设置 readonly name
#!/bin/bash
name="张三"
echo $name
name="李四"
echo $name

[root@centos home]# ./test.sh 
张三
李四

#变量删除（unset 变量名）,readonly 类型变量不能删除
#!/bin/bash
name="张三"
echo $name
name="李四"
#删除变量name
unset name
echo $name

[root@centos home]# ./test.sh 
张三

# 把局部变量提升为全局变量，export 变量名

```

```shell
#!/bin/bash
name="张三"
age=20
echo "姓名:${name},age:${age}"

[root@centos home]# ./test.sh 
姓名:张三,age:20
```

#### 字符串变量

```shell
#单引号和双引号都可以定义字符串变量，但是单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的
#!/bin/bash
name="张三"
str1="你好$name"
str2='你好$name'
echo $str1
echo $str2

[root@centos home]# ./test.sh 
你好张三
你好$name


#双引号支持转义
#!/bin/bash
str="你好:\"张三\""
str2="第一行\n第二行"
echo -e $str
echo -e $str2

[root@centos home]# ./test.sh 
你好"张三"
第一行
第二行

#获取字符串长度
#!/bin/bash
str="hello"
echo ${#str}

[root@centos home]# ./test.sh 
5

```

#### 数组

```shell
#!/bin/bash
arr_score=(60 90 78 85)
arr_name=()
arr_name[0]="张三"
arr_name[1]="李四"
#获取某个下标元素
echo ${arr_score[2]}
#获取所有
echo ${arr_name[@]}
#获取区间
echo ${arr_score[@]:1:3}
#获取属组长度
echo ${#arr_score[@]}

[root@centos home]# ./test.sh 
78
张三 李四
90 78 85
4
```

#### 特殊变量

##### $n（参数传递）

>我们可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：**$n**。**n** 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……

```shell
#!/bin/bash
echo "第一个参数：$1"
echo "第二个参数：$2"

[root@centos home]# ./test.sh 你好 20
第一个参数：你好
第二个参数：20
```
##### $# (获取参数个数)

```shell
#!/bin/bash
echo "$1 $2 $3"
echo "$#"
[root@hadoop101 home]# sh demo2.sh 10 20 30
10 20 30
3
[root@hadoop101 home]# sh demo2.sh 10 20 30 40
10 20 30
4
[root@hadoop101 home]# sh demo2.sh 10 20 30 40 50
10 20 30
5
```
##### \$\*和$@
> $* 获取命令行中所有参数，\$\*会把所有参数看成一个整体
> $@ 获取命令行中所有参数，\$\@会把每个参数区分对待

```shell
[root@hadoop101 home]# cat demo2.sh 
#!/bin/bash
echo "$1 $2 $3"
echo "$#"
echo "$*"
echo "$@"
[root@hadoop101 home]# sh demo2.sh 10 20 30
10 20 30
3
10 20 30
10 20 30
```
##### $?

>判断上一条命令是否正确执行，正确执行返回0，不正确返回其他数

```shell
[root@hadoop101 home]# cat demo2.sh 
#!/bin/bash
echo "$1 $2 $3"
echo "$#"
echo "$*"
echo "$@"
[root@hadoop101 home]# echo $?
0
[root@hadoop101 home]# cat demo3.sh 
cat: demo3.sh: 没有那个文件或目录
[root@hadoop101 home]# echo $?
1
```
### 运算

>shell不能直接进行运算，num=1+1，这是错的。需要这样，num=\`expr 1 + 1\`   注意：运算符与参数直接要空格隔开，1+1不行，必须 1 + 1 
>注意：expr只支持整数运算

#### 基本运算

##### expr

```shell
#!/bin/bash
a=2
b=3

val=`expr $a + $b`
echo "$a +  $b: $val"

val=`expr $a - $b`
echo "$a - $b : $val"

val=`expr $a \* $b`
echo "$a * $b : $val"
 
val=`expr $b / $a`
echo "$b / $a : $val"
 
val=`expr $b % $a`
echo "$b % $a : $val"

[root@centos home]# ./test.sh 
2 + 3: 5
2 - 3 : -1
2 * 3 : 6
3 / 2 : 1
3 % 2 : 1

```
###### 小括号(优先级)

```shell
#!/bin/bash
a=2
b=3
# val = (a+b)*2
val=`expr \( $a + $b \) \* 2`
echo $val

[root@centos home]# ./test.sh 
10
```
##### $((运算式))或\$\[运算式]

```shell
[root@hadoop101 home]# cat demo3.sh 
#!/bin/bash
a=2
b=3
echo $(($a+$b))
echo $((($a+$b)*2))
echo $[$a+$b]
echo $[($a+$b)*2]
[root@hadoop101 home]# sh demo3.sh 
5
10
5
10
```

###### 小数运算(bc计算器)

```shell
#!/bin/bash
a=5.3
b=3.2

echo "$a + $b" | bc
#保留两位小数
echo "scale=2;$a / $b" | bc
#赋值
val=`echo "$a * $b" | bc`
echo $val

#bc计算器不需要\转义
val=$(echo "( $a + $b ) * 2" | bc)
echo $val

[root@centos home]# ./test.sh 
8.5
1.65
16.9
17.0

```

> $ 和  \`  通常用于表达式赋值

#### 关系运算符

| 操作 | 描述  | 示例  |
|---|---|---|
|**-eq**|检查两个操作数的值是否相等；如果是，则条件变为真。|[ $a -eq $b ] 不正确。|
|**-ne**|检查两个操作数的值是否相等；如果值不相等，则条件为真。|[ $a -ne $b ] 是真的。|
|**-gt**|检查左操作数的值是否大于右操作数的值；如果是，则条件变为真。|[ $a -gt $b ] 不正确。|
|**-lt**|检查左操作数的值是否小于右操作数的值；如果是，则条件变为真。|[ $a -lt $b ] 是真的。|
|**-ge**|检查左操作数的值是否大于或等于右操作数的值；如果是，则条件变为真。|[ $a -ge $b ] 不正确。|
|**-le**|检查左操作数的值是否小于或等于右操作数的值；如果是，则条件变为真。|[ $a -le $b ] 是真的。|

>所有条件表达式都应该放在方括号内并在它们周围有空格是非常重要的。例如，**[ $a -gt $b ]** 是正确的，而 **[$a -gt $b]** 是不正确的。

```shell
1 #!/bin/bash
2 a=5
3 b=3
4 if [ $a -gt $b ]
5 then
6    echo "a > b"
7 else
8    echo "a < b"
9 fi
```
##### 权限判断

```shell
[root@hadoop101 home]# cat demo4.sh 
#!/bin/bash
if [ -x demo3.sh ]
then
  echo "有"
else
  echo "没有"
fi
[root@hadoop101 home]# ll demo4.sh 
-rw-r--r--. 1 root root 73 9月  17 21:46 demo4.sh
[root@hadoop101 home]# sh demo4.sh 
没有
```
##### 判断文件是否存在

```shell
[root@hadoop101 home]# cat demo4.sh 
#!/bin/bash
if [ -e demo5.sh ]
then
  echo "存在"
else
  echo "不存在"
fi
[root@hadoop101 home]# bash demo4.sh 
不存在
```


#### 逻辑运算符

|  操作 | 描述  | 示例  |
|---|---|---|
|&&|逻辑的 AND|\[[ $a -lt 100 && $b -gt 100 ]] 返回 false|
|\||逻辑的 OR| \[[ $a -lt 100 \| $b -gt 100 ]] 返回 true|

#### 字符串比较

|运算符|说明|举例|
|---|---|---|
|=|检测两个字符串是否相等，相等返回 true。|[ $a = $b ] 返回 false。|
|!=|检测两个字符串是否不相等，不相等返回 true。|[ $a != $b ] 返回 true。|
|-z|检测字符串长度是否为0，为0返回 true。|[ -z $a ] 返回 false。|
|-n|检测字符串长度是否不为 0，不为 0 返回 true。|[ -n "$a" ] 返回 true。|
|$|检测字符串是否不为空，不为空返回 true。|[ $a ] 返回 true。|

### 流程控制

#### if else

```shell
1 #!/bin/bash
2 a=5
3 b=8
4 # if
5 if [ $a -gt $b ]
6 then
7    echo "a > b"
8 fi
9 echo "---------------------------"
10 # if else
11 if [ $a -gt $b ]
12 then
13    echo "a > b"
14 else
15    echo "a < b"
16 fi
17 echo "----------------------------"
18 #if elseif
19 if [ $a -gt $b ]
20 then
21    echo "a > b"
22 elif [ $a -lt $b ]
23 then
24    echo "a < b"
25 else
26    echo "a = b"
27 fi

[root@centos home]# ./test.sh 
---------------------------
a < b
----------------------------
a < b


#(()) 表达式可以用 > < 号判断，并且变量不需要加 $
1 #!/bin/bash
2 a=18
3 b=18
4 # if
5 if (( a > b ))
6 then
7    echo "a > b"
8 elif (( a < b ))
9 then
10    echo "a < b"
11 else
12    echo "a = b"
13 fi
14 echo "-----------------------"
```
#### 控制台输入

```shell
[root@hadoop101 home]# cat demo5.sh 
#1/bin/bash
read -p "请输入您的姓名：" name
echo "您的姓名是：$name"
[root@hadoop101 home]# bash demo5.sh 
请输入您的姓名：张三
您的姓名是：张三
```
#### case

```shell
echo '输入 1 到 4 之间的数字:'  
read -p "你输入的数字为:" aNum  
case $aNum in  
    1)  echo '你选择了 1'  
    ;;  
    2)  echo '你选择了 2'  
    ;;  
    3)  echo '你选择了 3'  
    ;;  
    4)  echo '你选择了 4'  
    ;;  
    *)  echo '你没有输入 1 到 4 之间的数字'  
    ;;  
esac
```
#### for循环

```shell
1 #!/bin/bash
2 #方式一
3 for ((i=0;i<5;i++))
4 do
5   echo "$i"
6 done
7 
8 echo "---------------------"
9 
10 #方式二
11 for item in 1 2 3 4
12 do
13   echo "$item"
14 done
15 
16 echo "--------------------"
17 #示例
18 for item in Hello World
19 do
20  echo "$item"
21 done

[root@centos home]# ./test.sh 
0
1
2
3
4
---------------------
1
2
3
4
--------------------
Hello
World
```
#### while循环

```shell
# i=$[ $i + 1 ] 对i进行自增
1 #!/bin/bash
2 i=0
3 while (( i < 5 ))
4 do
5   echo "你好"
6   i=$[ $i + 1 ]
7 done

[root@centos home]# ./test.sh 
你好
你好
你好
你好
你好

#控制台输入
1 #!/bin/bash
2 echo '按下CTRL+D退出'
3 echo -n '输入你喜欢的水果: '
4 while read fruit
5 do
6   echo "${fruit}:很好吃"
7 done

[root@centos home]# ./test.sh 
按下CTRL+D退出
输入你喜欢的水果: 苹果
苹果:很好吃
香蕉
香蕉:很好吃

```

#### until循环

>until 循环执行一系列命令直至条件为 true 时停止。
>until 循环与 while 循环在处理方式上刚好相反。

```shell
1 #!/bin/bash
2 a=0
3 until [ $a -gt 5 ]
4 do
5   echo $a
6   a=`expr $a + 1`
7 done

[root@centos home]# ./test.sh 
0
1
2
3
4
5

```

#### 跳出循环

```shell
 #输出第一个偶数
3 i=1
4 while true
5 do
6   if (( i % 2 == 0 ))
7   then
8     echo "$i"
9     break
10   fi
11   i=`expr $i + 1`
12 done
13 echo "结束"

[root@centos home]# ./test.sh 
2
结束

#!/bin/bash
2 #输出小于10的数
3 i=0
4 while true
5 do
6    i=`expr $i + 1`
7    if [ $i -lt 10 ]
8    then
9       echo "$i"
10       continue
11    fi
12 break
13 done

[root@centos home]# ./test.sh 
1
2
3
4
5
6
7
8
9


```
### 函数

#### 函数定义

```shell
1 #!/bin/bash
2 
3 testFun(){
4   echo "我的第一shell函数"
5 }
6 
7 echo "开始调用函数"
8 testFun
9 echo "函数调用结束"
```

>注意：调用函数必须在函数定义之后，即shell的函数被加载到了之后，才能用。

#### 函数返回值

>`return` 语句：仅能返回 `[0, 255]` 之间的整数，常用于表示返回函数的执行结果状态。
  `echo` 语句：能返回任何数字、任何字符串，常用于表示返回函数的执行结果。

```shell
1 #!/bin/bash
2 
3 testFun(){
4   echo "我的第一shelll函数"
5   return 10
6 }
7 
8 testFun2(){
9   echo "成功"
10 }
11 
12 testFun
13 echo "函数testFun返回值：$?"
14 val=$(testFun2)
15 echo "函数testFun2的返回值：$val"

[root@centos home]# ./test.sh 
我的第一shelll函数
函数testFun返回值：10
函数testFun2的返回值：成功

```

> result 返回用 $? 接收，必须在调用函数后下一句立刻接收。

#### 函数参数

```shell
1 #!/bin/bash
2 
3 testFun(){
4   echo "第一个参数：$1"
5   echo "第二个参数：$2"
6   echo "参数的个数：$#"
7   echo "所有参数：$*"
8 }
9 
10 testFun 2 "你好" 45

[root@centos home]# ./test.sh 
第一个参数：2
第二个参数：你好
参数的个数：3
所有参数：2 你好 45

```