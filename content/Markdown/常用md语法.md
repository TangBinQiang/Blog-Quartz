## 左图片右文字布局
<img src="https://cn.sli.dev/logo-title.png" alt="Logo" 
     style="float: left; width: 100px; margin-right: 20px;">

**标题文字** <br>
这里是描述文字,图片会浮动在左侧,文字环绕在右边。
<div style="clear: both;"></div>

```md
<img src="https://cn.sli.dev/logo-title.png" alt="Logo" 
     style="float: left; width: 100px; margin-right: 20px;">

**标题文字** <br>
这里是描述文字,图片会浮动在左侧,文字环绕在右边。
<div style="clear: both;"></div>
```
---

## 修改代码的高亮
```diff title="styles/toc.css"
.toc {
  ...
! flex: 0 1 auto;    // 修改
- flex: 0 0.5 auto;  // 删除 
+ flex: 0 1 auto;    // 增加
  ...
}
```

```` c
```diff title="styles/toc.css"
.toc {
  ...
! flex: 0 1 auto;    // 修改
- flex: 0 0.5 auto;  // 删除 
+ flex: 0 1 auto;    // 增加
  ...
}
```
````
> 嵌套规则： 外层反应号个数>内层反引号个数
---

## 图片代理
![](https://images.weserv.nl/?url=mmbiz.qpic.cn/sz_mmbiz_jpg/KPsod7HPbJD1jC7xhjILXyI8X2c6eqk85hgWtdc5ftYlbLzX7e5Db7EV8L1iaw3rW80xSs8cGaiaGO1gS3ZNZK9g/640?wx_fmt=jpeg&from=appmsg)
``` md
![](https://images.weserv.nl/?url= )
```
> https://images.weserv.nl/?url= 图片链接

## 标注
> [!NOTE]
> 注释或提示信息
``` md
> [!NOTE]     
> 注释或提示信息
```

> [!INFO]
> 内容
``` md
> [!NOTE]     
> 内容或消息
```

> [!TIP]
> 建议或技巧
``` md
> [!TIP]
> 建议或技巧
```

> [!IMPORTANT]
> 重要信息
``` md
> [!IMPORTANT]
> 重要信息
```

> [!WARNING]
> 警告信息
``` md
> [!WARNING]
> 警告信息
```

> [!CAUTION]
> 需要谨慎注意的内容
``` md
> [!CAUTION]
> 需要谨慎注意的内容
```



