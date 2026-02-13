[Built At Lightspeed - 4000+ 主题、模板与界面套件](https://www.builtatlightspeed.com/)!

![icon](notebook-pen.svg) 
[Built At Lightspeed](https://www.builtatlightspeed.com/)

![icon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW5vdGVib29rLXBlbi1pY29uIGx1Y2lkZS1ub3RlYm9vay1wZW4iPjxwYXRoIGQ9Ik0xMy40IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMnYtNy40Ii8+PHBhdGggZD0iTTIgNmg0Ii8+PHBhdGggZD0iTTIgMTBoNCIvPjxwYXRoIGQ9Ik0yIDE0aDQiLz48cGF0aCBkPSJNMiAxOGg0Ii8+PHBhdGggZD0iTTIxLjM3OCA1LjYyNmExIDEgMCAxIDAtMy4wMDQtMy4wMDRsLTUuMDEgNS4wMTJhMiAyIDAgMCAwLS41MDYuODU0bC0uODM3IDIuODdhLjUuNSAwIDAgMCAuNjIuNjJsMi44Ny0uODM3YTIgMiAwIDAgMCAuODU0LS41MDZ6Ii8+PC9zdmc+) [Built At Lightspeed](https://www.builtatlightspeed.com/)

# 大叔大婶


![icon](notebook-pen.svg)   [Built At Lightspeed](https://www.builtatlightspeed.com/)


<img src="浙江专升本高数.svg" >

---

![](https://images.weserv.nl/?url=https://mmbiz.qpic.cn/sz_mmbiz_png/KPsod7HPbJAUGHiaPn9Y0Zytic1wibmTQorozpFzszX18HgawU2TT69Q4ITtouOklZEiaUyiar2IicTQc12o6KjNvKvQ/640?wx_fmt=png&amp;from=appmsg)







```mermaid
flowchart LR
  A[test]
  A --> B[分支主题 1]
	  B --> B01[分支主题 1-1]
	  B --> B02[分支主题 1-1]
	  B --> B03[分支主题 1-1]
	  B --> B04[分支主题 1-1]
	  B --> B05[分支主题 1-1]
	  B --> B06[分支主题 1-1]
	  B --> B07[分支主题 1-1]
	  B --> B08[分支主题 1-1]
  A --> C[分支主题 2]
	  C --> C01[分支主题 1-1]
	  C --> C02[分支主题 1-1]
  A --> D[分支主题 3]
  A --> E[分支主题 4]

style A stroke-width:3px
```


```mermaid

graph LR

    Browser{{Browser}} --> Window{{Body}} & LinkElement{{Link Element}}

    Window --"getFullSlug()"--> FullSlug[Full Slug]

    LinkElement --".href"--> Relative[Relative URL]

    FullSlug --"simplifySlug()" --> SimpleSlug[Simple Slug]

    SimpleSlug --"pathToRoot()"--> Relative

    SimpleSlug --"resolveRelative()" --> Relative

    MD{{Markdown File}} --> FilePath{{File Path}} & Links[Markdown links]

    Links --"transformLink()"--> Relative

    FilePath --"slugifyFilePath()"--> FullSlug[Full Slug]

    style FullSlug stroke-width:4px

```

```mermaid
flowchart LR
  A[test]

  A --> B[分支主题 1]
    B --> B01[分支主题 1-1]
    B --> B02[分支主题 1-2]

  A --> C[分支主题 2]
    C --> C01[分支主题 2-1]
    C --> C02[分支主题 2-2]

  A --> D[分支主题 3]
  A --> E[分支主题 4]

  %% 样式定义
  style A fill:#ffffff,stroke:#1f2a6d,stroke-width:3px,color:#1f2a6d

  style B fill:#f7c948,color:#000
  style C fill:#e86f5a,color:#fff
  style D fill:#1f3c88,color:#fff
  style E fill:#f7c948,color:#000

  style B01 fill:#fff3cd,stroke:#f7c948
  style B02 fill:#fff3cd,stroke:#f7c948

  style C01 fill:#fdecea,stroke:#e86f5a
  style C02 fill:#fdecea,stroke:#e86f5a
```

``` mermaid
flowchart LR
  A([圆角])
  B((圆))
  C{{菱形}}
  D[/平行四边形/]

```


```mermaid
---
config:
  logLevel: 'debug'
  theme: 'base'
  gitGraph:
    showBranches: false
---
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:"ash" tag:"abc"
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release

```


```mermaid
timeline
    title 项目发展历程
    2020 : 项目启动
         : 团队组建
    2021 : 完成需求分析
         : 开始系统设计
    2022 : 核心功能开发
         : 第一版发布
    2023 : 用户突破10万
         : 推出移动端应用
    2024 : 获得A轮融资
         : 国际化扩张
    2025 : 持续优化迭代
         : 探索AI集成
```


```mermaid
timeline
    title Java基础
    第一阶段：Java基础  : 完成需求分析
         : 开始系统设计
    2022 : 核心功能开发
         : 第一版发布
```
