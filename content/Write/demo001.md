# LaTeX 数学公式示例

## 基础数学公式

### 线性方程
$$
y = mx + b
$$

### 二次方程
$$
ax^2 + bx + c = 0
$$

### 二次公式
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### 三角函数
$$
\sin^2\theta + \cos^2\theta = 1
$$

$$
\tan\theta = \frac{\sin\theta}{\cos\theta}
$$

## 微积分

### 导数
$$
\frac{d}{dx}[x^n] = nx^{n-1}
$$

### 积分
$$
\int x^n dx = \frac{x^{n+1}}{n+1} + C
$$

### 定积分
$$
\int_a^b f(x) dx = F(b) - F(a)
$$

### 偏导数
$$
\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}
$$

## 矩阵和向量

### 矩阵
$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

### 向量
$$
\vec{v} = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}
$$

### 矩阵乘法
$$
C = AB = \begin{pmatrix}
\sum_{k=1}^n a_{1k}b_{k1} & \sum_{k=1}^n a_{1k}b_{k2} \\
\sum_{k=1}^n a_{2k}b_{k1} & \sum_{k=1}^n a_{2k}b_{k2}
\end{pmatrix}
$$

## 集合论

### 集合运算
$$
A \cup B = \{x \mid x \in A \text{ 或 } x \in B\}
$$

$$
A \cap B = \{x \mid x \in A \text{ 且 } x \in B\}
$$

### 子集
$$
A \subseteq B \iff \forall x (x \in A \rightarrow x \in B)
$$

## 极限和级数

### 极限定义
$$
\lim_{x \to a} f(x) = L \iff \forall \epsilon > 0, \exists \delta > 0 : 0 < |x - a| < \delta \implies |f(x) - L| < \epsilon
$$

### 泰勒级数
$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

### 傅里叶级数
$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right)
$$

## 概率统计

### 正态分布
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$

### 期望值
$$
E[X] = \sum_{i} x_i p_i
$$

### 方差
$$
\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2
$$

## 图形学

### 旋转矩阵
$$
R(\theta) = \begin{pmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{pmatrix}
$$

### 缩放矩阵
$$
S(s_x, s_y) = \begin{pmatrix}
s_x & 0 \\
0 & s_y
\end{pmatrix}
$$

### 变换组合
$$
T = T_n \circ T_{n-1} \circ \cdots \circ T_1
$$

## 物理学公式

### 牛顿第二定律
$$
F = ma
$$

### 万有引力
$$
F = G\frac{m_1 m_2}{r^2}
$$

### 薛定谔方程
$$
i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi
$$

### 爱因斯坦质能方程
$$
E = mc^2
$$

## 复杂公式示例

### 多重积分
$$
\iiint_V f(x,y,z)  dx  dy  dz
$$

### 偏微分方程
$$
\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}
$$

### 贝塞尔函数
$$
J_n(x) = \frac{1}{\pi} \int_0^\pi \cos(n\theta - x\sin\theta)  d\theta
$$

### 伽马函数
$$
\Gamma(z) = \int_0^\infty t^{z-1} e^{-t}  dt
$$

## LaTeX 语法说明

### 上标和下标
- 上标：`x^2` → $x^2$
- 下标：`x_1` → $x_1$
- 同时使用：`x_i^2` → $x_i^2$

### 分数
- 简单分数：`\frac{a}{b}` → $\frac{a}{b}$
- 复杂分数：`\frac{\frac{a}{b}}{c}` → $\frac{\frac{a}{b}}{c}$

### 根号
- 平方根：`\sqrt{x}` → $\sqrt{x}$
- n次方根：`\sqrt[n]{x}` → $\sqrt[n]{x}$

### 求和和积分
- 求和：`\sum_{i=1}^n x_i` → $\sum_{i=1}^n x_i$
- 积分：`\int_a^b f(x) dx` → $\int_a^b f(x) dx$

### 矩阵
```latex
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
```

### 多行公式
```latex
\begin{align}
f(x) &= x^2 + 2x + 1 \\
g(x) &= (x+1)^2
\end{align}
```

## 图片分析及LaTeX代码

### 1. 线性回归与最小二乘法
![Pasted image 20260114213313.png](Pasted image 20260114213313.png)

**LaTeX代码：**
```latex
\documentclass{article}
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{tikz}

\begin{document}

\section*{线性回归与最小二乘法}

\subsection*{线性回归模型}
假设我们有 $n$ 个数据点 $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$，我们希望找到一条直线 $y = ax + b$ 最好地拟合这些数据。

\subsection*{最小二乘法}
最小二乘法的目标是最小化误差平方和：
$$E = \sum_{i=1}^{n} (y_i - (ax_i + b))^2$$

对 $a$ 和 $b$ 求偏导并令其为零，得到：
$$
\begin{cases}
\frac{\partial E}{\partial a} = -2\sum_{i=1}^{n} x_i(y_i - ax_i - b) = 0 \\
\frac{\partial E}{\partial b} = -2\sum_{i=1}^{n} (y_i - ax_i - b) = 0
\end{cases}
$$

解得：
$$
\begin{cases}
a = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2} \\
b = \frac{\sum y_i - a\sum x_i}{n}
\end{cases}
$$

\end{document}
```

### 2. 矩阵运算基础
![Pasted image 20260209162724.png](Pasted image 20260209162724.png)

**LaTeX代码：**
```latex
\documentclass{article}
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{array}

\begin{document}

\section*{矩阵运算基础}

\subsection*{矩阵乘法}
设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times p$ 矩阵，则 $C = AB$ 是 $m \times p$ 矩阵，其中：
$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$

\subsection*{矩阵乘法示例}
$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{pmatrix}
\begin{pmatrix}
7 & 8 \\
9 & 10 \\
11 & 12
\end{pmatrix}
=
\begin{pmatrix}
58 & 64 \\
139 & 154
\end{pmatrix}
$$

\subsection*{行列式}
$2 \times 2$ 行列式：
$$\det \begin{pmatrix}
a & b \\
c & d
\end{pmatrix} = ad - bc$$

$3 \times 3$ 行列式：
$$
\det \begin{pmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{pmatrix}
= a(ei - fh) - b(di - fg) + c(dh - eg)
$$

\end{document}
```

### 3. 正态分布（高斯分布）
![Pasted image 20260209162740.png](Pasted image 20260209162740.png)

**LaTeX代码：**
```latex
\documentclass{article}
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{tikz}
\pgfplotsset{compat=1.18}

\begin{document}

\section*{正态分布（高斯分布）}

\subsection*{概率密度函数}
正态分布的概率密度函数为：
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$

其中：
\begin{itemize}
\item $\mu$ 是均值（期望）
\item $\sigma$ 是标准差
\item $\sigma^2$ 是方差
\end{itemize}

\subsection*{标准正态分布}
当 $\mu = 0$ 且 $\sigma = 1$ 时，称为标准正态分布：
$$\phi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$$

\subsection*{68-95-99.7法则}
对于正态分布：
\begin{itemize}
\item 约 68\% 的数据落在 $\mu \pm \sigma$ 范围内
\item 约 95\% 的数据落在 $\mu \pm 2\sigma$ 范围内
\item 约 99.7\% 的数据落在 $\mu \pm 3\sigma$ 范围内
\end{itemize}

\end{document}
```

### 4. 梯度下降算法
![whiteboard_exported_image.png](whiteboard_exported_image.png)

**LaTeX代码：**
```latex
\documentclass{article}
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{tikz}
\pgfplotsset{compat=1.18}

\begin{document}

\section*{梯度下降算法}

\subsection*{目标函数}
假设我们要最小化目标函数 $J(\theta)$，其中 $\theta$ 是参数向量。

\subsection*{梯度下降更新规则}
参数更新公式：
$$\theta := \theta - \alpha \nabla_\theta J(\theta)$$

其中：
\begin{itemize}
\item $\alpha$ 是学习率（learning rate）
\item $\nabla_\theta J(\theta)$ 是目标函数关于参数 $\theta$ 的梯度
\end{itemize}

\subsection*{线性回归的梯度下降}
对于线性回归 $h_\theta(x) = \theta_0 + \theta_1 x$，代价函数为：
$$J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2$$

参数更新：
\begin{align}
\theta_0 &:= \theta_0 - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) \\
\theta_1 &:= \theta_1 - \alpha \frac{1}{m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)}) x^{(i)}
\end{align}

\subsection*{学习率的选择}
\begin{itemize}
\item 学习率太大：可能震荡或发散
\item 学习率太小：收敛速度慢
\item 可以使用学习率衰减策略
\end{itemize}

\end{document}
```

\documentclass{article} \usepackage{amsmath} \begin{document} 34. 求极限 \(\lim_{t \to \pi} \frac{\sin mt}{\sin nt}\). 解: 原式 \(= \lim_{t \to \pi} \frac{m \cdot \cos mt}{n \cdot \cos nt}\) \(= \lim_{t \to \pi} \frac{m \cdot (-1)^m}{n \cdot (-1)^n}\) \(= (-1)^{m-n} \cdot \frac{m}{n}\) \end{document}