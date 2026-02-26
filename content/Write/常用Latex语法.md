$$
p = (s - a) \tan \frac{\alpha}{2} = (s - b) \tan \frac{\beta}{2} = (s - c) \tan \frac{\gamma}{2}
$$

$$p = 4r \sin \frac{\alpha}{2} \sin \frac{\beta}{2} \sin \frac{\gamma}{2} = s \tan \frac{\alpha}{2} \tan \frac{\beta}{2} \tan \frac{\gamma}{2}$$

$$p = r (\cos \alpha + \cos \beta + \cos \gamma - 1)$$

$$p = \frac{F}{s} = \frac{abc}{4rs}$$

$$p = \sqrt{\frac{(s - a)(s - b)(s - c)}{s}} = \frac{1}{2} \sqrt{\frac{(b + c - a)(c + a - b)(a + b - c)}{a + b + c}}$$

$$p = \frac{a}{\cot \frac{\beta}{2} + \cot \frac{\gamma}{2}} = \frac{b}{\cot \frac{\gamma}{2} + \cot \frac{\alpha}{2}} = \frac{c}{\cot \frac{\alpha}{2} + \cot \frac{\beta}{2}}$$

$$ab + bc + ca = s^2 + p^2 + 4pr$$

34.求极限$\lim\limits_{t \to \pi} \dfrac{\sin mt}{\sin nt}$

解:原式$=\lim\limits_{t \to \pi} \dfrac{m \cdot \cos mt}{n \cdot \cos nt}$

$=\lim\limits_{t \to \pi} \dfrac{m \cdot (-1)^m}{n \cdot (-1)^n}$

$= (-1)^{m-n} \cdot \dfrac{m}{n}$

---
设函数$f(x)$在$[0,\pi]$上连续，且$\int_{0}^{\pi}f(x)\mathrm{d}x=0$，$\int_{0}^{\pi}f(x)\cos x\mathrm{d}x=0$。求证：在$(0,\pi)$内至少存在两个不同的点$\xi_{1},\xi_{2}$，使$f(\xi_{1})=f(\xi_{2})=0$。

---
34.求极限$\lim\limits_{t \to \pi} \dfrac{\sin mt}{\sin nt}$ 
解:原式$=\lim\limits_{t \to \pi} \dfrac{m \cdot \cos mt}{n \cdot \cos nt}$ $=\lim\limits_{t \to \pi} \dfrac{m \cdot (-1)^m}{n \cdot (-1)^n}$
$= (-1)^{m-n} \cdot \dfrac{m}{n}$

---






27. 求极限 $\lim_{n \to \infty}\left(\frac{n}{n^2+e}+\frac{n}{n^2+2e}+\dots+\frac{n}{n^2+ne}\right)$.

解：令 $M(n) = \frac{n}{n^2+e} + \frac{n}{n^2+e} + \dots + \frac{n}{n^2+e} = \frac{n^2}{n^2+e}$,
则 $\lim_{n \to \infty} M(n) = \lim_{n \to \infty} \frac{n^2}{n^2+ne} = 1$.

又令 $N(n) = \frac{n}{n^2+ne} + \frac{n}{n^2+ne} + \dots + \frac{n}{n^2+ne} = \frac{n^2}{n^2+e}$,
则 $\lim_{n \to \infty} N(n) = \lim_{n \to \infty} \frac{n^2}{n^2+e} = 1$.

由夹逼准则，有 $\lim_{n \to \infty} N(n) \leq \lim_{n \to \infty} f(n) \leq \lim_{n \to \infty} M(n)$,
即 $1 \leq \lim_{n \to \infty} f(n) \leq 1$,
故 $\lim_{n \to \infty} f(n) = 1$.

因此，原式 $= 1$.

---

29. 求极限 $\lim_{n \to \infty}n\left[\left(\frac{n+1}{n}\right)^n - e\right]$.

解：原式 $= \lim_{n \to \infty} n\left[ e^{n\ln\left(1+\frac{1}{n}\right)} - e \right]$

$= \lim_{n \to \infty} n \cdot e \left[ e^{n\ln\left(1+\frac{1}{n}\right)-1} - 1 \right]$

$= \lim_{n \to \infty} n \cdot e \left[ n\ln\left(1+\frac{1}{n}\right) - 1 \right]$

$= \lim_{n \to \infty} n^2 \cdot e \left[ \ln\left(1+\frac{1}{n}\right) - \frac{1}{n} \right]$

$= \lim_{n \to \infty} n^2 \cdot e \cdot \left(-\frac{1}{2}\right) \cdot \left(\frac{1}{n}\right)^2$

$= -\frac{e}{2}$



29.求极限 $\lim\limits_{n \to \infty}n\left[\left(\frac{n+1}{n}\right)^n - e\right]$. 

解：原式 $= \lim\limits_{n \to \infty} n\left[ e^{n\ln\left(1+\frac{1}{n}\right)} - e \right]$ 

$= \lim\limits_{n \to \infty} n \cdot e \left[ e^{n\ln\left(1+\frac{1}{n}\right)-1} - 1 \right]$ 

$= \lim\limits_{n \to \infty} n \cdot e \left[ n\ln\left(1+\frac{1}{n}\right) - 1 \right]$ 

$= \lim\limits_{n \to \infty} n^2 \cdot e \left[ \ln\left(1+\frac{1}{n}\right) - \frac{1}{n} \right]$ 

$= \lim\limits_{n \to \infty} n^2 \cdot e \cdot \left(-\frac{1}{2}\right) \cdot \left(\frac{1}{n}\right)^2$ 

$= -\frac{e}{2}$

30.求极限 $\lim\limits_{x \to +\infty}\left[\frac{x^{1+x}}{(1+x)^x} - \frac{x}{e}\right]$.

解：原式 $= \lim\limits_{x \to +\infty} x \left[ \frac{x^x}{(1+x)^x} - \frac{1}{e} \right]$

$= \lim\limits_{x \to +\infty} x \left[ \left(\frac{x}{1+x}\right)^x - \frac{1}{e} \right]$   // 这样仔细

$= \lim\limits_{x \to +\infty} x \cdot \frac{1}{e} \left[ e^{x\ln\left(\frac{x}{1+x}\right)+1} - 1 \right]$

$= \lim\limits_{x \to +\infty} x \cdot \frac{1}{e} \left[ x\ln\left(\frac{x}{1+x}\right) + 1 \right]$

$= \lim\limits_{x \to +\infty} x^2 \cdot \frac{1}{e} \left[ \ln\left(\frac{x}{1+x}\right) + \frac{1}{x} \right]$

$= \lim\limits_{x \to +\infty} x^2 \cdot \frac{1}{e} \left[ -\ln\left(\frac{1+x}{x}\right) + \frac{1}{x} \right]$

$= \lim\limits_{x \to +\infty} x^2 \cdot \frac{1}{e} \left[ \frac{1}{x} - \ln\left(1+\frac{1}{x}\right) \right]$

$= \lim\limits_{x \to +\infty} x^2 \cdot \frac{1}{e} \cdot \frac{1}{2} \cdot \left(\frac{1}{x}\right)^2$

$= \frac{1}{2e}$
