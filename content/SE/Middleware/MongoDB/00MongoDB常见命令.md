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

### 集合的创建

```shell
db.createCollection('集合名')
```

>在当前使用的数据库中创建集合<br>
>MongoDB中的集合相当于关系型数据库中的表

### 集合的查看

```shell
show collections
```

>查看当前数据库下的所有集合

### 集合的删除
``` 
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

import style from "./styles/backlinks.scss"

import { resolveRelative, simplifySlug } from "../util/path"

import { i18n } from "../i18n"

import { classNames } from "../util/lang"

import OverflowListFactory from "./OverflowList"

  

interface BacklinksOptions {

  hideWhenEmpty: boolean

}

  

const defaultOptions: BacklinksOptions = {

  hideWhenEmpty: true,

}
```