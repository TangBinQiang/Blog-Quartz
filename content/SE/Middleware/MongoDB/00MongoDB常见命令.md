### 数据库的查看

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

### 数据库的删除

```shell
db.dropDatabase()
```

>删除当前使用的数据库<br>
>返回结果{ ok: 1, dropped: '数据库名' } 表示成功删除数据库

---
### 集合的查看

```shell
show collections
```

>查看当前数据库下的所有集合

### 集合的创建

```shell
db.createCollection('集合名')
```

>在当前使用的数据库中创建集合<br>
>MongoDB中的集合相当于关系型数据库中的表

### 集合的删除

``` shell
db.集合名.drop()
```

>删除指定的集合 返回true 表示成功删除集合

---
### 文档的插入

```shell
db.集合名.insert(文档)
```

>向集合插入一条文档数据 <br>
>如果数据库中该集合不存在，自动创建该集合再插入数据

#### 【示例】

```shell
db.comment.insert({"articleid":"100000","content":"今天天气真好，阳光明 媚","userid":"1001","nickname":"Rose","createdatetime":new Date(),"likenum":NumberInt(10),"state":null})
```