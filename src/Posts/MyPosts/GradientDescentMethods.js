import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Typography, Tag, Divider } from 'antd';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import AppPageHeader from '../../PublicComponent/PageHeader';const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
function GradientDescentMethods(){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='GradientDescentMethods'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default GradientDescentMethods;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<div>
        <Tag color="blue">Neural Network</Tag> <Tag color="blue">Artificial Intelligence</Tag><Tag color="blue">Machine Learning</Tag>
</div>
<Divider></Divider>
<Paragraph>
神经网络的训练本质上是通过调节参数来最小化模型输出的损失函数。然而如何调节参数看似简单实际却有许多技巧和方法来优化。这篇文章会介绍最基本的随机梯度下降，采用一阶动量的SGD with momentum，和采用自适应学习率的AdaGrad, RMS Prop, 和集大成者 Adam。这些模型各自有各自的特点，并且在不同的场景中各有优劣。</Paragraph>

<Title level={2}>深度学习中的梯度下降方法</Title>
<Paragraph>上回（<a href="/#/posts/HowDoNeuralNetworkWork">神经网络是如何工作的</a>）中，我们提到模型的训练过程本质上就是通过调节模型参数使得模型输出的损失函数降低。由于神经网络的参数太多，我们几乎不可能求出损失函数极小值的解析解。为此，普遍使用的是数值计算的方法来减小损失函数的取值。这篇文章会介绍随机梯度下降 (Stochastic Gradient Descent, SGD)，RMS Prop, AdaGrad (Adaptive Gradient), 和 Adam(Adaptive Moment Estimation)这四种常简的梯度下降方法。</Paragraph>
<Title level={3}>符号定义</Title>
<Paragraph><InlineMath math="\eta"/> 学习速率</Paragraph>
<Paragraph><InlineMath math="\nabla C"/> 损失函数梯度</Paragraph>
<Paragraph><InlineMath math="w"/>待优化参数</Paragraph>
<Paragraph><InlineMath math="m_t"/> 损失函数梯度的一阶动量</Paragraph>
<Paragraph><InlineMath math="v_t"/> 损失函数梯度的二阶动量</Paragraph>
<Title level={3}>朴素的梯度下降法</Title>
<Title level={4}>批量梯度下降  |  Batch Gradient Descent</Title>
<Paragraph>对于一个有 <InlineMath math="N"/> 个数据的数据集 <InlineMath math="{x_1, x_2, \cdots x_N}"/>，批量梯度下降要求先计算出每一个数据的输出 <InlineMath math="{y_1, y_2, \cdots y_N}"/>，然后计算出每个输入单独的损失函数及梯度 <InlineMath math="\nabla C_1(x_1, y_1), \nabla C_2(x_2, y_2), \cdots, \nabla C_N(x_N, y_N)"/>。计算完一整个数据集后，模型会取所有损失函数的平均，然后更新模型的参数</Paragraph>
<Paragraph><BlockMath math="
w \leftarrow w + \frac{1}{b}\sum_{i=0}^{b}{\nabla C_i}\cdot \eta
"/></Paragraph>
<Paragraph>这样的梯度下降有好处也有坏处：好处是对于一个和实际生产环境相符的数据集，使用批量梯度下降可以得到更加稳定健壮的模型，模型不会受到特殊数据的影响。坏处也同样明显：当数据集很大的时候需要使用海量的内存，遍历整个数据集会耗费大量的时间。这使得使用批量梯度下降成为一种近乎奢侈的选择。还有一个限制是使用批量梯度下降的模型不能“在线学习”，必须在一个固定的数据集中训练。</Paragraph>
<Title level={4}>小批量梯度下降  |  Mini-batch Gradient Descent</Title>
<Paragraph>小批量梯度下降使用的方法与批量梯度下降相似，唯一的不同是小批量梯度下降将整个数据集分为若干个包含<InlineMath math="b"/>个数据的 batch，每次模型处理完一个 batch 就对模型参数进行一次更新</Paragraph>
<Paragraph><BlockMath math="
w \leftarrow w + \frac{1}{b}\sum_{i=0}^{b}{\nabla C_i}\cdot \eta
"/></Paragraph>
<Title level={4}>随机梯度下降  |  Stocastic Gradient Descent</Title>
<Paragraph>随机梯度下降是当 batch 大小为1时的小批量梯度下降。随机梯度下降可以做到“在线学习” - 每有一个新的数据被上传到数据集，模型就可以根据这个新的数据进行一次实时权重更新。</Paragraph>
<Paragraph><BlockMath math="
w \leftarrow w + \nabla C \cdot \eta
"/></Paragraph>
<Title level={4}>朴素梯度下降的问题</Title>
<Paragraph>朴素的梯度下降会出现模型在局部最优解和鞍点上震荡的问题。当模型在局部最优解和鞍点的时候，损失函数的梯度为0，模型不会继续更新参数。</Paragraph>
<Title level={3}>一阶动量梯度下降</Title>
<Title level={4}>SGD with Momentum  |  带动量的随机梯度下降</Title>
<Paragraph>这种梯度下降方法引入了“动量”的概念。动量由模型历史上的梯度决定，并且受到衰减参数<InlineMath math="\eta"/>的控制。</Paragraph>
<Paragraph><BlockMath math="
m_t = m_{t-1} \cdot \eta + \nabla C \cdot (1 - \eta)
"/></Paragraph>
<Paragraph><BlockMath math="
w \leftarrow w + m_t \cdot \eta
"/></Paragraph>
<Paragraph>一般我们会设定<InlineMath math="\eta"/>为0.9， 也就是说每计算一个新的样本只会轻微的改动自己的权重更新方向。通过这种方法，我们可以有效的越过一些局部最优解的“陷阱”。一个较大的<InlineMath math="\eta"/>值也可以避免模型被一些极端样本影响。</Paragraph>
<Title level={3}>二阶动量梯度下降（自适应学习率）</Title>
<Paragraph>二阶动量梯度下降通过引入“二阶动量”的概念来做到 - 经常更新的参数学习速率较低，不常更新的参数学习速率较高 的自动调节。这在处理一些样本分布稀疏的数据集时尤为重要。</Paragraph>
<Title level={4}>AdaGrad - Adaptive Gradient 自适应梯度下降法</Title>
<Paragraph>自适应梯度下降中将二阶动量定义为<Text strong>历史上参数所有梯度的平方和</Text></Paragraph>
<Paragraph><BlockMath math="
v_t = \sum_{i = 0}^{t}{\nabla C_i^2}
"/></Paragraph>
<Paragraph>一个参数更新的越频繁， 其二阶动量就越大，更新速度就越小，在Adagrad中，模型参数的更新公式如下：</Paragraph>
<Paragraph><BlockMath math="
w \leftarrow w + m_t \cdot \frac{\eta}{\sqrt{v_t}}
"/></Paragraph>
<Paragraph>但是 AdaGrad 的缺点也非常明显：有的时候学习速率收敛的过快会导致模型在训练到局部最优解前就停止参数更新。为了解决这个问题，人们提出了RMS Prop梯度下降法</Paragraph>
<Title level={4}>RMS Prop</Title>
<Paragraph>RMS Prop 本质上是对AdaGrad激进的学习速率调节机制做出的调整。为了避免学习速率过快的下降，RMS Prop 仿照一阶动量计算方法，给二阶动量也设计了衰减参数 <InlineMath math="\eta_2"/>。在RMS Prop中，二阶动量的计算公式如下：</Paragraph>
<Paragraph><BlockMath math="
v_t = \eta_2 v_{t - 1} + (1 - eta_2) \nabla C_t^2
"/></Paragraph>
<Paragraph>使用衰减因子 <InlineMath math="\eta_2"/>可以有效防止参数学习速率收敛到0，导致模型提前停止训练。</Paragraph>
<Title level={4}>Adam (Adaptive Momentum Estimation)</Title>
<Paragraph>Adam是上述所有梯度下降方法的“集大成者”，它在使用了一阶动量来调节模型参数的调整方向的同时也使用二阶动量自动调节参数单独的学习速率。</Paragraph>
<Paragraph><BlockMath math="
m_t = m_{t-1} \cdot \eta_1 + \nabla C \cdot (1 - \eta_1)
"/></Paragraph>
<Paragraph><BlockMath math="
v_t = v_{t - 1}\cdot \eta_2 + 
abla C_t^2\cdot (1 - \eta_2)
"/></Paragraph>
<Paragraph><BlockMath math="
w \leftarrow w + m_t \cdot \frac{\eta}{v_t}
"/></Paragraph>
<Paragraph>对于绝大多数的英语场景，我们都可以直接运用Adam优化器作为梯度下降的调参模型，并且由于自适应学习率的存在，学习速率作为超参数对于Adam的影响其实相对有限。所以使用Adam可以极大的降低调参工作量。</Paragraph>
</Layout>
);}