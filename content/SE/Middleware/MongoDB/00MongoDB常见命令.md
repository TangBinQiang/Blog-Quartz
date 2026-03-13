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
MongoDB的文档（document）相当于关系型数据库的行（row）<br>
文档（document）的数据结构和 JSON 基本一样<br>
MongoDB 在存储和传输数据时，并不是直接存储 JSON 文本，而是将其转换为 BSON 格式存储。（BSON 是 **Binary JSON** 的缩写，即二进制格式的 JSON）<br>
MongoDB写入 JSON 格式的数据，MongoDB 自动转换为 BSON 存储，读取时再自动转回来原JSON是文本格式）<br>

```shell
db.集合名.insert(文档)
```

>向集合插入一条文档数据 <br>
>如果数据库中该集合不存在，自动创建该集合再插入数据

【示例】
```shell
db.comment.insert({"articleid":"100000","content":"今天天气真好，阳光明 媚","userid":"1001","nickname":"Rose","createdatetime":new Date(),"likenum":NumberInt(10),"state":null})
```