## 左图片右文字布局
```md
<img src="https://cn.sli.dev/logo-title.png" alt="Logo" 
     style="float: left; width: 200px; margin-right: 20px;">

### 标题文字
这里是描述文字,图片会浮动在左侧,文字环绕在右边。
<div style="clear: both;"></div>
```

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
>可添加 title="styles/toc.css" 指示代码所在路径

## 标注

> [!NOTE]
> 注释或提示信息
``` md
> [!NOTE]
> 注释或提示信息
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



