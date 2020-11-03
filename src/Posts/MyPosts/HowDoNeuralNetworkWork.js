import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, PageHeader, Typography, Space, Tag, Divider } from 'antd';

import ReactMarkdown from 'react-markdown';
import math from 'remark-math';
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import FailImage from '../../PublicComponent/FailImage';
import AppPageHeader from '../../PublicComponent/PageHeader';

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout
const PhotoLink = process.env.PUBLIC_URL + '/Assets/'
const ReactMarkdownWithHtml = require('react-markdown/with-html')
const markdownRender = {
    inlineMath: ({value}) => <InlineMath math={value} />,
    math: ({value}) => <BlockMath math={value} />
};

function HowDoNeuralNetworkWork(props){
    window.scrollTo(0,0);
    return(
<Layout>
        <AppHeader select="2"/>
        <Content className="site-layout" style={{ padding: '0 24px', marginTop: 64 }}>
        <AppPageHeader title="How Do Neural Network Work"/>
          <div className="site-layout-background" style={{ padding: 16 }}>
              <PostContent/>
          </div>
        </Content>
        <AppFooter/>
      </Layout>
    );
}

export default HowDoNeuralNetworkWork;

function PostContent(){
    return (
        <Layout style={{ backgroundColor: "white", padding: "0"}}>
        <div>
        <Tag color="blue">Neural Network</Tag> <Tag color="blue">Artificial Intelligence</Tag><Tag color="blue">Machine Learning</Tag>
        </div>
        <Divider></Divider>
        <Paragraph>神经网络作为一种新兴的计算机技术被许多人称为一种全新的“编程范式”，与往常的算法编写不同，神经网络是一种“数据驱动”的编程方法。在往常的算法编写中，人们需要手动编写算法的逻辑，而在神经网络中，人们只需要为网络提供海量数据和参考答案，网络就会自动生成算法。那么神经网络到底是怎么工作的呢？</Paragraph>

        <Paragraph>这篇文章会对机器学习中的神经网络为什么可以被训练&输出正确预测做出<Text strong>不严谨但直观</Text>的解释。</Paragraph>

        <Title level={3}>0. 模型是一个函数</Title>
        <Paragraph>我们可以将一个深度学习中的模型看做一个映射关系：</Paragraph>
        <BlockMath math="\text{Perception} \rightarrow \text{Output}"/>
        <Paragraph>对于一个深度学习模型是“感知”（模型可以获得的所有信息的总和）与一个“数字”或者 “决策"之间的映射关系。所以我们可以将模型看作一个函数<InlineMath math="F(x)"/>.</Paragraph>
        <Paragraph>那么模型就可以被表示为：<InlineMath math="F(\text{Perception}) =\text{Output}"/></Paragraph>
        <Paragraph type="secondary">Example: Alpha Go 可以被表示为 <InlineMath math="F(\text{Chess State}) = \text{Best Position for Next Chess}"/> 这样一个函数</Paragraph>
        <Paragraph>现在我们假设有这样的一个函数：对于<Text strong>任何定义域内的输入都一定会给出此时的最优输出</Text>。这样的一个理想函数我们记作<InlineMath math="G(x)"/>(Ground Truth)。 当我们“训练”模型<InlineMath math="F(x)"/>的时候，我们的目标就是让模型尽可能拟合<InlineMath math="G(x)"/>。也就是说，我们想要通过训练使得我们的模型<InlineMath math="F(x)"/> 的输出与事实（最优函数）<InlineMath math="G(x)"/>的差距最小化。</Paragraph>

        <Title level={3}>1. 什么是神经网络</Title>
        <Paragraph>要知道为什么”神经网络“可以被用来拟合函数呢？首先我们先了解一下什么是“神经网络”。</Paragraph>
        <Paragraph>神经网络由许多神经元相互连接而组成，每个神经元都有自己的参数<InlineMath math="\theta"/> 。我们可以将神经元描绘为一个函数 <InlineMath math=" f(\theta_i, x) = y"/>。那么对于下面一个模型（<InlineMath math="F(\Theta, x), \quad \Theta=\lbrace \theta_1, \theta_2, \dots, \theta_n\rbrace"/>），我们可以写出它的数学表达式：</Paragraph>
        <center><Image
            width="350px"
            src={`${PhotoLink}HowDoNeuralNetworkWork4.png`}
            fallback={FailImage}
        /></center>
        <BlockMath math="F(\Theta, x) = f(\theta_5, (f(\theta_3, f(\theta_2, x_2) + f(\theta_1, x_1)), f(\theta_4, f(\theta_2, x_2))))"/>

        <Title level={3}>2. 神经网络可以拟合函数</Title>
        <Paragraph>神经网络的本质建立在这样一个事实上：简单非线性函数的重复的迭代与叠加可以在拥有适当参数的情况下<Text strong>有限精度的拟合任何连续函数</Text>。下面的例子会给出一个<Text type="warning">直观但不严谨的</Text>，对神经网络拟合二元函数的证明：</Paragraph>
        <Paragraph>首先，我们可以用5个使用sigmoid函数的神经元来构建一个“高台”函数。(代码是具体的实现)</Paragraph>
        <center><Space>
        <Image
            width="200px"
            src={`${PhotoLink}HowDoNeuralNetworkWork1.png`}
            fallback={FailImage}
        />
        <Image 
            width="200px"
            src={`${PhotoLink}HowDoNeuralNetworkWork3.png`}
            fallback={FailImage}
        />
        </Space></center>
        <SyntaxHighlighter language="python" style={lightfair}
        children={
            `
import matplotlib.pyplot as plt
import numpy as np
import pylab
from matplotlib import cm
from mpl_toolkits.mplot3d import Axes3D

def sigmoid(x):
    s = 1 / (1 + np.exp(-x))
    return s

def tower(x, y, x_min, x_max, y_min, y_max):
    x1 = sigmoid(1000 * (x - x_min))
    x2 = sigmoid(1000 * (x - x_max))

    y1 = sigmoid(1000 * (y - y_min))
    y2 = sigmoid(1000 * (y - y_max))

    z = x1-x2+y1-y2
    z = sigmoid(30*(z-1.1))
    return z


X = np.arange(-5, 5, 0.1)
Y = np.arange(-5, 5, 0.1)
X, Y = np.meshgrid(X, Y)
Z = tower(X, Y, -0.3, 0.7, -0.2, 0.8)
fig = plt.figure()
ax = Axes3D(fig)
ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap=cm.viridis)
plt.show()
            `
        }
        />
        <Paragraph>如果我们把这样的一个高台记作<InlineMath math="Tower(x_1, x_2,\Theta)"/>，那么通过组合足够多这些高台，我们可以得到任何一个连续二元函数的任意小精度拟合（缩小每个高台的面积），例如下图（左：原函数，右：四个<InlineMath math="Tower(x_1, x_2,\Theta)"/>的组合</Paragraph>
        <center><Image
            width="350px"
            src={`${PhotoLink}HowDoNeuralNetworkWork2.png`}
            fallback={FailImage}
        /></center>
        <SyntaxHighlighter
        style={lightfair}
        language="python"
        children={
        `
def tower(x, y, x_min, x_max, y_min, y_max):
    x1 = sigmoid(1000 * (x - x_min))
    x2 = sigmoid(1000 * (x - x_max))

    y1 = sigmoid(1000 * (y - y_min))
    y2 = sigmoid(1000 * (y - y_max))

    z = x1-x2+y1-y2
    z = sigmoid(4*(z-1.1))
    return z

Z = tower(X, Y, -0.5, 0.5, -0.5, 0.5) + tower(X, Y, -1, 1, -1, 1) + tower(X, Y, -2, 2, -2, 2) + tower(X, Y, -4, 4, -4, 4)
fig = plt.figure()
ax = Axes3D(fig)
ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap=cm.viridis)
plt.show()
        `
        }
        />

        <Title level={3}>3. 如何让电脑自动调参？</Title>
        <Paragraph>在上面的例子中，所有的参数都是人工设定的，因为只有20个不到的参数，人工设定是一种可行的做。可是目前绝大多数的模型都有超过一万个参数，参数最多的自然语言模型GPT-3甚至有1730亿个参数（存储整个模型需要800T空间）！在这么多参数的情况下，人工调节每一个参数变成了一项不可能的任务，所以我们需要让电脑来自动调整参数来让模型<InlineMath math="F(x)"/>拟合到目标<InlineMath math="G(x)"/>上。</Paragraph>
        <Paragraph>要让电脑自动完成这项工作，我们需要先回想一下当我们调整参数时我们所作的工作：1. 评估现在的模型<InlineMath math="F(x)"/>与<InlineMath math="G(x)"/>相差大不大（现在的模型是不是一个好模型）2. 预测调节参数<InlineMath math="\theta"/>（调大/调小）以后模型会变好还是变坏 3. 如果参数<InlineMath math="\theta"/>调小可以让模型<InlineMath math="F(x)"/>更加接近<InlineMath math="G(x)"/>，那么就调小<InlineMath math="\theta"/>， 反之亦然</Paragraph>
        <Title level={4}>损失函数</Title>
        <Paragraph>为了让机器拥有完成任务1的能力，人们设计出了“损失函数”用来量化表示模型<InlineMath math="F(x)"/>与事实<InlineMath math="G(x)"/>之间的差距，用<InlineMath math="L(\hat{y}, y)"/>表示，<InlineMath math="\hat{y}"/>表示模型的输出（对Ground Truth <InlineMath math="y"/>的预测值），一般来说，一个良好的损失函数应该有这些性质：</Paragraph>

        <Paragraph>1. 损失函数大小与模型质量单调递增 - 模型越差，损失函数越大
        2. 损失函数应该是一个连续，尽量平滑的函数</Paragraph>

        <Paragraph>一种常见的损失函数是<InlineMath math="L(\hat{y}, y) = (y - \hat{y})^2"/></Paragraph>

        <Title level={4}>参数调节方向的计算</Title>
        <Paragraph>为了让机器完成任务2 和 3，我们需要将”预测调节参数<InlineMath math="\theta" />（调大/调小）以后模型会变好还是变坏“这样一个主观的过程用数学方法表达出来。因为我们已经引入了损失函数，所以实际上这个过程可以被表述为“预测如何调节参数<InlineMath math="\theta"/>（调大/调小）可以减小损失函数的值”</Paragraph>

        <Paragraph>在此之前，我们先看一看我们如何最小化一个一元函数<InlineMath math="h(x)"/>. 对于一个一元函数，我们可以计算出当前位置的一阶导数<InlineMath math="dh/dx"/>。如果一阶导数是正数，说明增大<InlineMath math="x"/>可以增大<InlineMath math="h(x)"/>，反之亦然。所以要最小化<InlineMath math="h(x)"/>，我们只需要不停的执行下面这一个操作：</Paragraph>
        <BlockMath math="x\stackrel{\text{update}}{\longrightarrow}x - \eta \cdot \frac{dh(x)}{dx},\quad\quad \text{where $\eta$ is a positive number}"/>
        <Paragraph>这里的<InlineMath math="\eta"/>是一个参数“学习速率”，学习速率越高，每次更新<InlineMath math="x"/>的时候<InlineMath math="x"/>的值就会改变越多 。</Paragraph>
        <Paragraph>有了上面的铺垫，解决“预测如何调节参数<InlineMath math="\theta"/>（调大/调小）可以减小损失函数的值”的方法就很明显了：计算<InlineMath math="\partial L(\hat{y}, y)/\partial \theta"/> 并且将<InlineMath math="\theta"/>按照一下方式更新：</Paragraph>
        <BlockMath math="\theta\stackrel{\text{update}}{\longrightarrow}\theta - \eta \cdot \frac{\partial L(\hat{y}, y)}{\partial\theta},\quad\quad \text{where $\eta$ is a positive number}"/>
        <Paragraph type="secondary"> 有些人可能会疑惑，在<InlineMath math="L(\hat{y}, y)"/>中明明都没有自变量 <InlineMath math="\theta"/> 啊，怎么计算<InlineMath math="\frac{\partial L(\hat{y}, y)}{\partial \theta}"/> 呢？</Paragraph>

        <Paragraph type="secondary">实际上注意到损失函数的第一个输入时<InlineMath math="\hat{y}"/>，也就是模型的输出，而模型可以表示为<InlineMath math="F(\theta, x)"/>，所以我们可以通过<Text strong>链式法则</Text>计算<InlineMath math="\frac{\partial L(\hat{y}, y)}{\partial\theta}"/>
        <BlockMath math="\frac{\partial L(\hat{y}, y)}{\partial \theta} = \frac{\partial L(\hat{y}, y)}{\partial \hat{y}}\cdot \frac{\partial \hat{y}}{\partial \theta}"/>
        这也是神经网络的基石 - 反向传播算法 (Back Propagation) 的数学原理
        </Paragraph>
        <Paragraph>当机器拥有了自动更新权重的能力的时候，我们就可以开始对神经网络进行训练了！训练的过程其实就是将样本从训练数据集中输入到模型中，再通过算法自动调节模型函数来最小化损失函数。</Paragraph>
        </Layout>
    );
}
