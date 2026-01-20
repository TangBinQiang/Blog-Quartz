## 左图片右文字布局
```md
<img src="https://cn.sli.dev/logo-title.png" alt="Logo" 
     style="float: left; width: 200px; margin-right: 20px;">

### 标题文字
这里是描述文字,图片会浮动在左侧,文字环绕在右边。
<div style="clear: both;"></div>
```

## 修改代码的高亮
```diff
.toc {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  min-height: 1.4rem;
- flex: 0 0.5 auto;
+ flex: 0 1 auto;
  &:has(button.toc-header.collapsed) {
    flex: 0 1 1.4rem;
  }
}
```

```css
.toc {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  min-height: 1.4rem;
  flex: 0 0.5 auto; // [!code --]
  flex: 0 1 auto; // [!code ++]
  &:has(button.toc-header.collapsed) {
    flex: 0 1 1.4rem;
  }
}
```
