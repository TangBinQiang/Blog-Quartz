### 用户管理

#### 新增用户

- 新增用户命令：

```shell
useradd 选项 用户名

# 说明
- 选项:
    -c comment 指定一段注释性描述。
    -d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。
    -g 用户组 指定用户所属的用户组。
    -G 用户组，用户组 指定用户所属的附加组。
    -s Shell文件 指定用户的登录Shell。
    -u 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。
- 用户名:
    指定新账号的登录名。
```

示例：

```shell
# 创建一个用户名为zs的用户，并在home目录下为其创建一个叫zs的目录作为该用户的主目录
useradd -d /home/zs -m zs
```

![](2023-07-17155333.png)

> Linux默认会给每个新添加的用户生成一个组（如果新增时不指定组）通过 id 用户名或者 cat /etc/passwd 命令可以查看用户的信息

![](2023-07-17160551.png)

创建一个用户ls，分配到1000组

```shell
useradd -g 1000 ls
```

![](2023-07-17160825.png)

> 增加用户账号会在/etc/passwd文件中为新用户增加一条记录

![](2023-07-17161053.png)

#### 删除账号

```shell
#删除账号ls 
userdel -r ls
```

> -r 删除用户ls在系统文件中（主要是/etc/passwd, /etc/shadow, /etc/group等）的记录，同时删除用户的主目录

#### 修改账号

> 修改用户账号就是根据实际情况更改用户的有关属性，如用户号、主目录、用户组、登录Shell等。

```shell
# 选项与新增基本相同
usermod 选项 用户名
```

示例

```shell
# 修改zs账号的主目录和用户组
usermod -d /home/zhangsan –g 1000 zs
```

#### 用户可令(密码)管理

```shell
passwd 选项 用户名

# 选项
-l 锁定口令，即禁用账号。
-u 口令解锁。
-d 使账号无口令。
-f 强迫用户下次登录时修改口令
```

> 超级管理员可以修改其他账号的口令，普通用户只能修改自己的口令

实例

![](2023-07-17164753.png)

>可以无视密码规则，输入两次密码一样就可以

#### 切换账号

```shell
su - 账户名
```

示例

![](2023-07-17165633.png)

> root账号切换普通账号不需要口令

### 用户组管理

#### 新增用户组

```shell
groupadd 选项 用户组

# 选项
- g GID指定新用户组的组标识号（GID）
- o 表示新用户组的GID可以与系统已有用户组的GID相同
```

示例

```shell
# 创建一个名称是testgroup的组，如果不指定组ID,默认会在最大组标识号上自增1
groupadd testgroup

# 指定组标号
groupadd -g 10000 testgroup
```

>可以通过 cat /etc/group 命令查询现有的组

#### 删除用户组

```shell
groupdel testgroup
```

#### 修改用户组

```shell
groupmod 选项 组名

# 修改组名为zs的组标号为1003
groupmod -g 1003 zs

#选项与新增一致
```

#### 用户组切换

```shell
newgrp 组名
```

>如果一个用户同时属于多个用户组，那么用户可以在用户组之间切换

### 文件属性

>Linux 系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限。为了保护系统的安全性，Linux 系统对不同的用户访问同一文件（包括目录文件）的权限做了不同的规定。

#### 属性查看

```shell
ls -l
#或者
ll
```

![](2023-07-18105950.png)

#### 文件类型

>d：是目录
>-： 是文件
>l： 表示为链接文档(link file)
>b：表示为装置文件里面的可供储存的接口设备(可随机存取装置)
>c：表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。

#### 属主和属组

> 属主：文件所有者
> 属组：文件属于哪个用户组

> 说明：文件的属主和属组的作用是给文件规定不同对象权限用的。比如你可以规定文件属主(所有者)对该文件有什么权限，文件属组(某一用户组)对该文件有什么权限。

##### 修改属主和属组

```shell
chown [–R] 属主名 文件名
chown [-R] 属主名：属组名 文件名
```

> -R 表示递归，目录下的所有文件也跟着改

示例1

```shell
chown zs data
```

![](2023-07-18140159.png)

示例2：

```shell
chown -R root:root ls
```

![](2023-07-18141350.png)

>可以看到 ls 目录的属主和属组有原来的 ls : zs 改成了 root : root ，同时 ls 目录下的文件也改了。

#### 文件权限

> Linux的文件权限有形如 “rwxr-xr--” 九个字母决定。其中， r 代表可读(read)、 w 代表可写(write)、 x 代表可执行(execute)，- 字符表示，则没有执行权限。其中三个字母为一组，九个字母从前到后分成三组分别对应不同角色对其拥有的权限，三组对应的角色顺序为 owner/group/others (属主/属组/其他)，字母顺序不可变，r第一w第二x第三，如果没有权限就用字符 - 代替。

示例：

>“rwxr-xr--” 分成三组：rwx（属主），r-x（属组），r--（其他）。表明该文件，属主有读写执行权限，属组有读和执行权限，没有写权限，其他用户有读权限，没有写和执行权限。

#### 文件权限修改

>Linux文件属性有两种设置方法，一种是数字，一种是符号。符合即rwx
>符号与数字对应：r : 4，w : 2，x : 1，-  : 0
>所以“rwxr-xr--”的权限值：rwx = 4+2+1 = 7，r-x = 4+0+1 = 5，r-- = 4+0+0 = 4，即 rwxr-xr-- = 754

修改语法

```shell
chmod [-R] 权限值 文件或目录
```

示例

>下图中把text.txt的权限右 rw-r--r-- (644) 改成 rw-rw-r-- (664)，即给属组赋上写的权限

```shell
#方式一
chmod 664 test.txt

# 方式二
chmod u=rw,g=rw,o=r  test.txt
```

![](2023-07-18144724.png)

### 文件与目录管理

#### mkdir(创建目录)

```shell
mkdir 目录名

#创建一个名为test的目录
mkdir test

#一次创建多级目录
mkdir -p test/test1/test2
```

#### rmdir(删除空目录)

```shell
rmdir 目录名

#删除test目录
rmdir test
```

#### cp(复制文件目录)

```shell
cp 老文件 新文件

#复制test.txt到zs目录下
cp test.txt zs

#复制test.txt到zs目录下同时改名成test2.txt
cp test.txt zs/test2.txt

#复制test目录下的所有东西到zs目录下
cp -r test zs
```

#### rm(删除文件目录)

```shell
# 删除文件test.txt
rm test.txt

#删除test目录, 这个命令很危险，删除前请确认好
rm -rf test
```

#### mv(移动文件)

```shell
mv 文件 新地址

#把test.txt文件移动到zs目录下
mv test.txt zs

#把test目录移动到zs目录下，并改名为test2
mv test zs/test2
```

#### cat(查看文件内容)

```shell
#查看test.txt的内容
cat test.txt
```

#### head(查看前几行)

```shell
#查看前10行
head -n 10 test.txt
```

#### tail(查看后几行)

```shell
#查看文件后3行
tail -n 3 test.txt
#实时动态查看文件后10行，Ctrl+C退出
tail -f -n 10 test.txt
```

#### find(查找)

```shell
find 搜索路径 [选项] 搜索内容
选项：
-name：按照文件名搜索
-iname：按照文件名搜索，不区分文件名大小写
-type：按照类型搜索
-size: 按照大小搜索

示例
[root@centos home]# find /var/log/ -name "*.log"
/var/log/tuned/tuned.log
/var/log/audit/audit.log
/var/log/anaconda/anaconda.log
/var/log/anaconda/X.log
/var/log/anaconda/program.log
/var/log/anaconda/packaging.log
/var/log/anaconda/storage.log
...

[root@centos home]# find /home -type d
/home
/home/ls
/home/data
/home/zs

#在home目录下搜索大于10k的文件
[root@centos home]# find /home -size +10k
/home/ls/QQ9.7.12.29103.exe
/home/ls.tar.gz
/home/.test2.txt.swp

```

#### grep(查找内容)

```shell

[root@centos home]# grep "你好" test.txt 
你好张三
u 撤销你好
w 保存不退出你好
q 不保存退出你好
! 强制性操作你好

#-i忽略大小写
[root@centos home]# grep -i "SET" test.txt
命令行模式下 :set nu显示行数，:set nonu 不显示行数

#查询出现次数
[root@centos home]# grep -c "你好" test.txt
5

#查询行号
[root@centos home]# grep -n "你好" test.txt
2:你好张三
12:u 撤销你好
13:w 保存不退出你好
14:q 不保存退出你好
15:! 强制性操作你好

```

#### wget(远程下载)

```shell
#下载腾讯QQ
wget https://dldir1.qq.com/qqfile/qq/PCQQ9.7.12/QQ9.7.12.29103.exe
```

#### tar(压缩打包命令)

```shell
#把zs目录打包成zs.tar.gz
tar -zcvf zs.tar.gz zs/

#解压zs.tar.gz
tar -zxvf zs.tar.gz
```

#### gzip(压缩打包命令)

```shell
#压缩test.txt
gzip test.txt

#解压
gzip -dv test.txt.gz
```

### 磁盘管理

#### df命令
>列出文件系统的整体磁盘使用

将系统内所有的文件系统列出来
![](2023-07-18164651.png)

列出某个目录的容量
![](2023-07-18165241.png)

#### du命令

>检查磁盘空间使用量

查看当前目录下文件占用的磁盘空间
```shell
[root@centos home]# du -h
202M	./ls
0	    ./data
404M	.

```

递归列出所有文件
```shell
[root@centos home]# du -ah
4.0K	./ls/.bash_logout
4.0K	./ls/.bash_profile
4.0K	./ls/.bashrc
0	    ./ls/names.txt
4.0K	./ls/.bash_history
4.0K	./ls/index.html
202M	./ls/QQ9.7.12.29103.exe
202M	./ls
0	    ./data
202M	./ls.tar.gz
404M	.

```

查看具体目录
```shell
[root@centos home]# du -h /home
202M	/home/ls
0	    /home/data
404M	/home

```

#### fdisk

> 用于磁盘分区

```shell
#列出所有分区信息
fdisk l

```

