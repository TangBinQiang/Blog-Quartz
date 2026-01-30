### 重定向

>正常情况下，我们在Linux的终端用鼠标键盘输入命令(标准输入stdin=0)，命令执行结果会打印在终端显示器上(标准输出stdout=1)。错误信息也会打印在终端显示器上（标准错误stderr=2）。
>所谓重定向：我们可以把命令的执行结果输出到文本等其他文件设备中（输出重定向）。我们可以不用鼠标键盘等输入设备输入命令需要的参数，而是把文件的内容作为参数给到命令执行，此时的输入设备就变成文件（输入重定向）。

> 输入重定向：指的是重新指定设备来代替键盘作为新的输入设备；
> 输出重定向：指的是重新指定设备来代替显示器作为新的输出设备;

#### 输出重定向

```shell
#标准输出
[root@centos home]# ls -l
总用量 206492
drwxr-xr-x. 2 zs   root         6 7月  18 10:57 data
-rw-r--r--. 1 root root      8790 7月  19 09:57 history.log
drwx------. 2 root root       144 7月  18 15:45 ls
-rw-r--r--. 1 root root 211426850 7月  18 15:57 ls.tar.gz
-rw-r--r--. 1 root root       412 7月  20 09:33 test2.txt
-rw-r--r--. 1 root root       745 7月  19 14:14 test.txt
drwxr-xr-x. 2 root root         6 7月  19 14:51 zs

#重定向输出 命令 > 文件
#通过cat命令我们可以看到ls -l > test2.txt将ls -l产生的结果写入到了test2.txt文件中
#如果要追加写入结果用 >>
[root@centos home]# ls -l > test2.txt
[root@centos home]# cat test2.txt
总用量 206488
drwxr-xr-x. 2 zs   root         6 7月  18 10:57 data
-rw-r--r--. 1 root root      8790 7月  19 09:57 history.log
drwx------. 2 root root       144 7月  18 15:45 ls
-rw-r--r--. 1 root root 211426850 7月  18 15:57 ls.tar.gz
-rw-r--r--. 1 root root         0 7月  20 10:43 test2.txt
-rw-r--r--. 1 root root       745 7月  19 14:14 test.txt
drwxr-xr-x. 2 root root         6 7月  19 14:51 zs

#标准错误输出
#jd.txt不存在说一执行cat msg.txt jd.txt这个命令的时候，msg.txt内容会正常读取，但是jd.txt会报错
#2代表标准错误输出，我们把错误信息打印到err.log文件中，把正确的打印到my.log中
[root@centos home]# ls
data  history.log  ls  ls.tar.gz  msg.txt  test.txt  zs
[root@centos home]# cat msg.txt jd.txt 2> err.log 1> my.log
[root@centos home]# cat err.log 
cat: jd.txt: 没有那个文件或目录
[root@centos home]# cat my.log 
你好

#把错误和正确都输出到一个文件中2>&1表错误输出合并到标准输出中
[root@centos home]# cat msg.txt jd.txt > my.log 2>&1
[root@centos home]# cat my.log 
你好
cat: jd.txt: 没有那个文件或目录
[root@centos home]# 

```
#### 输入重定向

```shell
# 输入重定向 <
#此时会将test.txt文本的内容作为输入内容给到命令执行
[root@centos home]# grep -c "你好" < test.txt
2
[root@centos home]# cat test.txt 
张三你好
你好李四

[root@hadoop101 home]# cat out.txt 
/home/
[root@hadoop101 home]# ls < out.txt 
at.txt  cron.txt  demo1.sh  demo2.sh  demo3.sh  demo4.sh  hello.txt  jinmin  lisi  out.txt  s.txt  test.txt  zhangsan

#输入输出结合起来用
#将test.txt文件作为输入文件给到命令，命令执行后将结果打印到test3.txt文件
[root@centos home]# grep -c "你好" < test.txt > test3.txt
[root@centos home]# cat test3.txt 
2

```

### 进程管理

#### 进程优先级

>进程优先级是操作系统中用于确定进程执行顺序和资源分配的一个重要概念。每个进程都被赋予一个优先级，优先级教高的进程在竞争资源时更有可能被调度执行。不同的操作系统有不同的进程调度算法和优先级策略，但是一般来说，较高优先级的进程会获得更多的CPU时间片，并在资源分配方面享有更高的优先权。这可以确保重要的任务及时处理，并且可以提高系统的响应性能。

>优先级取值范围为（-20,19），Linux 提供的优先级的范围为 -20 ～ 19，启动一个进程时，默认的优先级为 0，其中 -20 的优先级为最大或者说最高


查看进程优先级

```shell
[root@centos home]# ps -el
F S   UID    PID   PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
4 S     0      1      0  0  80   0 - 48421 ep_pol ?        00:00:02 systemd
1 S     0      2      0  0  80   0 -     0 kthrea ?        00:00:00 kthreadd
1 S     0      4      2  0  60 -20 -     0 worker ?        00:00:00 kworker/0:0H
1 S     0      6      2  0  80   0 -     0 smpboo ?        00:00:00 ksoftirqd/0
1 S     0      7      2  0 -40   - -     0 smpboo ?        00:00:00 migration/0
1 S     0      8      2  0  80   0 -     0 rcu_gp ?        00:00:00 rcu_bh
1 S     0      9      2  0  80   0 -     0 rcu_gp ?        00:00:05 rcu_sched
1 S     0     10      2  0  60 -20 -     0 rescue ?        00:00:00 lru-add-drain

```

>说明：Linux命令是前台运行，用户在它完成之前不能执行另一个命令。如果在命令的最后加一个 &，可以让命令同步运行，即后台运行

- 进程挂起：Ctrl+z
- 进程终止：Ctrl+c

##### 查看服务的进程pid

```shell
[root@hadoop101 bin]# ps -ef | grep "app.py" | grep -v grep | awk '{print $2}'
```

设置进程的优先级

```shell
#可以看到wc命令的优先级被设置为-20
[root@centos home]# nice -n -20 wc &
[root@centos home]# ps -el
F S   UID    PID   PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
4 S     0      1      0  0  80   0 - 48421 ep_pol ?        00:00:02 systemd
1 S     0      2      0  0  80   0 -     0 kthrea ?        00:00:00 kthreadd
1 S     0      4      2  0  60 -20 -     0 worker ?        00:00:00 kworker/0:0H
1 S     0   1781      2  0  80   0 -     0 worker ?        00:00:00 kworker/3:1
4 T     0   1782   1502  0  60 -20 - 27069 do_sig pts/0    00:00:00 wc
0 R     0   1783   1502  0  80   0 - 38331 -      pts/0    00:00:00 ps

#改变进程优先级
[root@centos home]# renice -19 1782
1782 (进程 ID) 旧优先级为 -20，新优先级为 -19
[root@centos home]# ps -el
F S   UID    PID   PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
4 S     0      1      0  0  80   0 - 48421 ep_pol ?        00:00:02 systemd
1 S     0      2      0  0  80   0 -     0 kthrea ?        00:00:00 kthreadd
1 S     0      4      2  0  60 -20 -     0 worker ?        00:00:00 kworker/0:0H
1 S     0   1781      2  0  80   0 -     0 worker ?        00:00:00 kworker/3:1
4 T     0   1782   1502  0  61 -19 - 27069 do_sig pts/0    00:00:00 wc
1 S     0   1785      2  0  80   0 -     0 worker ?        00:00:00 kworker/3:0
0 R     0   1787   1502  0  80   0 - 38331 -      pts/0    00:00:00 ps

```

##### 进程挂起与恢复

>top命令开启一个实时查看资源占用的进程

![](2023-07-20151013.png)

> Ctrl+z挂起top进程

```shell
#jobs命令可以查看被挂起的进程
[root@centos home]# jobs
[1]+  已停止               top

#fg恢复被挂起的进程到前台运行
[root@centos home]# jobs
[1]+  已停止               top
[2]-  已停止               tail -f my.log
[root@centos home]# fg 1

#bg将一个被挂起的进程激活在后台继续运行
[root@centos home]# jobs
[1]+  已停止               top
[2]-  已停止               tail -f my.log
[root@centos home]# bg 1
```

### 定时调度

#### 执行一次的调度

>at：是个可以处理仅执行一次就结束调度的指令。要执行 at 时，必须要有 atd 服务的支持

```shell
#查看at状态
[root@hadoop101 home]# systemctl status atd
#启用atd服务
[root@centos home]# systemctl start atd
#将atd服务设置为开机自启
[root@centos home]# systemctl enable atd
#查看是否开机自启
[root@hadoop101 home]# systemctl is-enabled atd
```

>at命令的时间格式

```shell
HH:MM，如“04:00”
HH:MM YYYY-MM-DD，如“04:00 2015-07-30”
HH:MM[am|pm] [Month] [Date]，如“04pm July 30”
HH:MM[am|pm] + number [minutes|hours|days|weeks]， 如“now + 5 minutes” 与“04pm + 3days”
```

示例：

```shell
#输入完命令回车，Ctrl+d退出
[root@centos home]# at 15:51
at> echo '12344' > at.txt
at> <EOT>
job 3 at Thu Jul 20 15:51:00 2023
#时间到后可以看到at.txt
[root@centos home]# cat at.txt 
12344

#写法2
#将要执行的命令通过echo的方式写给at
[root@centos home]# echo "echo '你好' > at.txt" | at 15:57
job 5 at Thu Jul 20 15:57:00 2023

[root@centos home]# cat at.txt 
你好

#查看at任务
[root@centos home]# atq
4	Thu Jul 20 15:53:00 2023 a root

#删除at任务
[root@centos home]# atrm 4
```

#### 周期性调度

> crontab 是一个定时执行任务的工具，在 Linux 系统中广泛使用。它可以让用户在指定的时间自动执行某个指令或脚本，例如自动备份数据、清除日志、定时运行程序等。

```shell
#语法
m h dom mon dow command
#说明
m 表示分钟，h 表示小时，dom 表示一个月份中的第几日，mon 表示月份，dow 表示一个星期中的第几天。command 表示要执行的程序。
当 m 为 * 时，表示每分钟都要执行；当 h 为 * 时，表示每小时都要执行程序。其余以此类推。
当 m 为 a-b 时，表示从第 a 分钟到第 b 分钟这段时间内要执行；当 h 为 a-b 时，表示从第 a 小时到第 b小时都要执行。其余以此类推。
当 m 为 */n 时，表示每 n 分钟时间间隔执行一次；当 h 为 */n 时，表示每 n 小时时间间隔执行一次。其余以此类推。
当 m 为 a、b、c……时，表示第 a、b、c……分钟要执行；当 h 为 a、b、c……时，表示第 a、b、c……个小时要执行。其余以此类推。

#时间示例

#每分钟执行一次
*/1 * * * *

#每天00:05执行
5 0 * * *

#每月1号14:15
15 14 1 * *

#每周从周一到周五 22:00
0 22 * * 1-5

示例：
#进入定时任务编辑
[root@centos home]# crontab -e

#在编辑窗口输入
*/1 * * * * echo "你好" >> /home/cron.txt

#查看定时任务
[root@centos home]# crontab -l
*/1 * * * * echo "你好" >> /home/cron.txt

#几分钟后可以查看cron.txt
[root@centos home]# cat cron.txt 
你好
你好
你好
你好
你好

```