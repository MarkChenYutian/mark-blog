---
layout: post
tags: Neural_Network
excerpt_separator: <!--more-->
title: "深度学习的梯度下降方法 | Gradient Descent Methods in Deep Learning"
---

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            }
        });
    </script>
</head>
神经网络的训练本质上是通过调节参数来最小化模型输出的损失函数。然而如何调节参数看似简单实际却有许多技巧和方法来优化。这篇文章会介绍最基本的随机梯度下降，采用一阶动量的SGD with momentum，和采用自适应学习率的AdaGrad, RMS Prop, 和集大成者 Adam。这些模型各自有各自的特点，并且在不同的场景中各有优劣。
<!--more-->

# 深度学习中的梯度下降方法

上回（[神经网络是如何工作的](https://markchenyutian.github.io/Markchen_Blog/2020/07/31/How-do-Neural-Network-Work.html)）中，我们提到模型的训练过程本质上就是通过调节模型参数使得模型输出的损失函数降低。由于神经网络的参数太多，我们几乎不可能求出损失函数极小值的解析解。为此，普遍使用的是数值计算的方法来减小损失函数的取值。这篇文章会介绍随机梯度下降 (Stochastic Gradient Descent, SGD)，RMS Prop, AdaGrad (Adaptive Gradient), 和 Adam(Adaptive Moment Estimation)这四种常简的梯度下降方法。

## 符号定义

$\eta$ 学习速率

$\nabla C$ 损失函数梯度

$w$待优化参数

$m_t$ 损失函数梯度的一阶动量

$v_t$ 损失函数梯度的二阶动量

## 朴素的梯度下降法
### 批量梯度下降  |  Batch Gradient Descent
对于一个有 $N$ 个数据的数据集 $\{x_1, x_2, \cdots x_N\}$，批量梯度下降要求先计算出每一个数据的输出 $\{y_1, y_2, \cdots y_N\}$，然后计算出每个输入单独的损失函数及梯度 $\nabla C_1(x_1, y_1), \nabla C_2(x_2, y_2), \cdots, \nabla C_N(x_N, y_N)$。计算完一整个数据集后，模型会取所有损失函数的平均，然后更新模型的参数

$$
w \leftarrow w + \frac{1}{N}\sum_{i=0}^{N}{\nabla C_i}\cdot \eta
$$

这样的梯度下降有好处也有坏处：好处是对于一个和实际生产环境相符的数据集，使用批量梯度下降可以得到更加稳定健壮的模型，模型不会受到特殊数据的影响。坏处也同样明显：当数据集很大的时候需要使用海量的内存，遍历整个数据集会耗费大量的时间。这使得使用批量梯度下降成为一种近乎奢侈的选择。还有一个限制是使用批量梯度下降的模型不能“在线学习”，必须在一个固定的数据集中训练。

### 小批量梯度下降  |  Mini-batch Gradient Descent
小批量梯度下降使用的方法与批量梯度下降相似，唯一的不同是小批量梯度下降将整个数据集分为若干个包含$b$个数据的 batch，每次模型处理完一个 batch 就对模型参数进行一次更新

$$
w \leftarrow w + \frac{1}{b}\sum_{i=0}^{b}{\nabla C_i}\cdot \eta
$$

### 随机梯度下降  |  Stocastic Gradient Descent
随机梯度下降是当 batch 大小为1时的小批量梯度下降。随机梯度下降可以做到“在线学习” - 每有一个新的数据被上传到数据集，模型就可以根据这个新的数据进行一次实时权重更新。

$$
w \leftarrow w + \nabla C \cdot \eta
$$

### 朴素梯度下降的问题
朴素的梯度下降会出现模型在局部最优解和鞍点上震荡的问题。当模型在局部最优解和鞍点的时候，损失函数的梯度为0，模型不会继续更新参数。

## 一阶动量梯度下降

### SGD with Momentum  |  带动量的随机梯度下降
这种梯度下降方法引入了“动量”的概念。动量由模型历史上的梯度决定，并且受到衰减参数$\beta$的控制。

$$
m_t = m_{t-1} \cdot \beta + \nabla C \cdot (1 - \beta)
$$

$$
w \leftarrow w + m_t \cdot \eta
$$

一般我们会设定$\beta$为0.9， 也就是说每计算一个新的样本只会轻微的改动自己的权重更新方向。通过这种方法，我们可以有效的越过一些局部最优解的“陷阱”。一个较大的$\beta$值也可以避免模型被一些极端样本影响。

## 二阶动量梯度下降（自适应学习率）

二阶动量梯度下降通过引入“二阶动量”的概念来做到 - 经常更新的参数学习速率较低，不常更新的参数学习速率较高 的自动调节。这在处理一些样本分布稀疏的数据集时尤为重要。

### AdaGrad - Adaptive Gradient 自适应梯度下降法
自适应梯度下降中将二阶动量定义为**历史上参数所有梯度的平方和**

$$
v_t = \sum_{i = 0}^{t}{\nabla C_i^2}
$$

一个参数更新的越频繁， 其二阶动量就越大，更新速度就越小，在Adagrad中，模型参数的更新公式如下：

$$
w \leftarrow w + m_t \cdot \frac{\eta}{\sqrt{v_t}}
$$

但是 AdaGrad 的缺点也非常明显：有的时候学习速率收敛的过快会导致模型在训练到局部最优解前就停止参数更新。为了解决这个问题，人们提出了RMS Prop梯度下降法

### RMS Prop
RMS Prop 本质上是对AdaGrad激进的学习速率调节机制做出的调整。为了避免学习速率过快的下降，RMS Prop 仿照一阶动量计算方法，给二阶动量也设计了衰减参数 $\beta_2$。在RMS Prop中，二阶动量的计算公式如下：

$$
v_t = \beta_2 v_{t - 1} + (1 - \beta_2) \nabla C_t^2
$$

使用衰减因子 $\beta_2$可以有效防止参数学习速率收敛到0，导致模型提前停止训练。

### Adam (Adaptive Momentum Estimation)
Adam是上述所有梯度下降方法的“集大成者”，它在使用了一阶动量来调节模型参数的调整方向的同时也使用二阶动量自动调节参数单独的学习速率。

$$
m_t = m_{t-1} \cdot \beta_1 + \nabla C \cdot (1 - \beta_1)
$$

$$
v_t = v_{t - 1}\cdot \beta_2 + \nabla C_t^2\cdot (1 - \beta_2)
$$

$$
w \leftarrow w + m_t \cdot \frac{\eta}{v_t}
$$

对于绝大多数的英语场景，我们都可以直接运用Adam优化器作为梯度下降的调参模型，并且由于自适应学习率的存在，学习速率作为超参数对于Adam的影响其实相对有限。所以使用Adam可以极大的降低调参工作量。