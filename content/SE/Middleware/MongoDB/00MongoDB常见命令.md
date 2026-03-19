### 数据库的查询

```shell
show dbs
```

>`show dbs`  查看所有数据库

```shell
db
```

>`db` 查看当前数据库<br>
>MongoDB默认使用的数据库是test

### 数据库的创建

```shell
use 数据库名
```

>注意：`use` 只是切换，不会立即创建。必须插入数据后数据库才真正存在<br>
>只用`use` 数据库名，数据库只存在内存中，没有持久化。需要在数据库内插入数据，数据存在磁盘中，数据持久化

【示例】

```shell
use articledb
```

### 数据库的删除

```shell
db.dropDatabase()
```

>删除当前使用的数据库<br>
>返回结果{ ok: 1, dropped: '数据库名' } 表示成功删除数据库

---
### 集合的查询

```shell
show collections
```

>查看当前数据库下的所有集合

### 集合的创建

```shell
db.createCollection('集合名')
```

>在当前使用的数据库中显式创建集合 插入数据的同时可以隐式创建集合<br>
>MongoDB中的集合相当于关系型数据库中的表

### 集合的删除

``` shell
db.集合名.drop()
```

>删除指定的集合 返回true 表示成功删除集合

---
### 文档的查询

```shell
db.集合名.find()
```

>查看当前集合下的所有文档数据

```shell
db.集合名.find({key: value})
```

>根据条件查询当前集合下的所有文档数据

```shell
db.集合名.findOne()
```

>查看当前集合下的一条文档数据

```shell
db.集合名.findOne({key: value})
```

>根据条件查询当前集合下的一条文档数据

```shell
db.集合名.find(
	{key: value},        #过滤条件
	{key: 1, key: 0})    #指定字段
```

>投影查询指定查询显示结构；默认_id会显示；key: 1显示该字短，key: 0不显示该字段<br>
>注意：投影查询需要添加在`find()`添加过滤条件语句。即使无过滤条件，也要写上`{}`

```shell
db.集合名.find(/正则表达式/)
```

>MongoDB的模糊查询是通过正则表达式的方式实现

```shell
db.集合名称.find({ key : { $gt: value }}) // 大于: key > value 
db.集合名称.find({ key : { $lt: value }}) // 小于: key < value 
db.集合名称.find({ key : { $gte: value }}) // 大于等于: key >= value 
db.集合名称.find({ key : { $lte: value }}) // 小于等于: key <= value 
db.集合名称.find({ key : { $ne: value }}) // 不等于: key != value
```

>文档的比较查询
### 文档的插入

```shell
db.集合名.insert(文档)
```

>向集合插入一条文档数据  文档相当于关系型数据库的一行数据（row）<br>
>如果数据库中该集合不存在，自动创建该集合再插入数据

```shell title="【示例一】"
db.comment.insert({"articleid":"100000","content":"今天天气真好，阳光明 媚","userid":"1001","nickname":"Rose","createdatetime":new Date(),"likenum":NumberInt(10),"state":null})
```

```
db.集合名.insertMany([文档,文档,...,文档])
```

>批量插入多条文档数据

```shell title="【示例二】"
db.comment.insertMany([ {"_id":"1","articleid":"100001","content":"我们不应该把清晨浪费在手机上，健康很重要，一杯温水幸福你我 他。","userid":"1002","nickname":"相忘于江湖","createdatetime":new Date("2019-08- 05T22:08:15.522Z"),"likenum":NumberInt(1000),"state":"1"}, {"_id":"2","articleid":"100001","content":"我夏天空腹喝凉开水，冬天喝温开水","userid":"1005","nickname":"伊人憔 悴","createdatetime":new Date("2019-08-05T23:58:51.485Z"),"likenum":NumberInt(888),"state":"1"}, {"_id":"3","articleid":"100001","content":"我一直喝凉开水，冬天夏天都喝。","userid":"1004","nickname":"杰克船 长","createdatetime":new Date("2019-08-06T01:05:06.321Z"),"likenum":NumberInt(666),"state":"1"}, {"_id":"4","articleid":"100001","content":"专家说不能空腹吃饭，影响健康。","userid":"1003","nickname":"凯 撒","createdatetime":new Date("2019-08-06T08:18:35.288Z"),"likenum":NumberInt(2000),"state":"1"}, {"_id":"5","articleid":"100001","content":"研究表明，刚烧开的水千万不能喝，因为烫 嘴。","userid":"1003","nickname":"凯撒","createdatetime":new Date("2019-08- 06T11:01:02.521Z"),"likenum":NumberInt(3000),"state":"1"} ]);
```

### 文档的修改

```shell
db.集合名.updateOne(
	{key: value},         # 过滤条件
	{$set: {key:value}}   # 修改语句
)  
```

>根据条件修改一条数据指定的字段

```shell title="示例"
db.comment.updateOne(
	{_id: "1"},
	{$set: {nickname: "李四"}}
)
```

```shell
db.集合名.updateMany(
	{key: value},         # 过滤条件
	{$set: {key:value}}   # 修改语句
)  
```

>根据条件修改所有数据的指定字段

```shell title="示例"
db.comment.updateMany(
	{userid: "1003"},
	{$set: {nickname: "李四"}}
)
```


---
### 文档的删除

```shell
db.集合名.remove(
	{key: value}  #过滤条件
)
```

>根据条件删除文档数据

```shell
db.集合名.remove({})
```

>注意：删除所有数据。请慎用

### 文档的统计

```shell
db.集合名.countDocuments()    
```

>统计所有文档数量

```shell
db.集合名.countDocuments(
	{key: value}  #过滤条件
)
```

>按条件统计所有文档数量

### 文档的分页

```shell
db.集合名.find().skip().limit()
```

>`skip()`  跳过指定数量的数据  `limit()` 限制返回查询结果的数量  

### 文档的排序

```shell
db.集合名.find().sort({key: value})
```

> `key: 1` 升序；`key: -1` 降序

### 索引的查询

```shell
db.comment.getIndexes()
```

>返回一个集合中的所有索引的数组。

