import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, Typography, Tag, Divider } from 'antd';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import FailImage from '../../PublicComponent/FailImage';
import AppPageHeader from '../../PublicComponent/PageHeader';const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';
function ResidualNetwork(){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className="site-layout" style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='Residual Network'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default ResidualNetwork;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
    <div>
        <Tag color="blue">Neural Network</Tag> <Tag color="blue">Artificial Intelligence</Tag><Tag color="blue">Machine Learning</Tag>
    </div>
    <Divider></Divider>
<Paragraph>
在深度学习中，两个严重影响了模型效果的问题是梯度消失问题与梯度下降问题。这两个问题的出现与深度学习的根本机制 - 反向传播损失函数梯度有关。在很长一段时间里，人们认为超过100层的网络是“不可训练”的。然而残差网络 (Residual Network, ResNet) 的出现改变了这一切。通过设计“短路”机制，残差网络可以让梯度更好的在网络的层之间传播，从而使得训练500+层的超深神经网络成为了可能。相似的机制也启发了一大批拥有shortcut connection的神经网络，例如在医学图像处理领域常见的 U-net 和 Dense Net。</Paragraph>

<Title level={2}>深度残差网络 ResNet 解析</Title>
<Paragraph><a href="https://arxiv.org/pdf/1512.03385.pdf">论文链接 Deep Residual Learning for Image Recognition</a></Paragraph>
<Divider></Divider>
<Paragraph><Text strong>目录</Text></Paragraph>
<ol>
<li>什么是深度残差网络</li>
<li>深度残差网络解决了什么问题</li>
<li>深度残差网络的设计思路</li>
<li>深度残差网络的表现</li>
<li>深度残差网络与其他模型的交互</li>
</ol>
<Divider></Divider>
<Title level={3}>1. 什么是深度残差网络</Title>
<Paragraph>深度残差网络是 Kaiming He et al. 提出的，一种运用了短路连接的神经网络形式。深度残差网络本身并没有一个固定的结构与参数，这使得深度残差网络非常灵活，可以有效的插入其他模型而提高模型表现。</Paragraph>
<Paragraph>像下图表示的一样，深度残差网络本质上是通过在卷积层之间插入短路连接来达到传播梯度的效果。</Paragraph>
<Paragraph><Image alt="短路链接越过了中间的两层卷积" src={`${PhotoLink}ResNet1.png`}width="25%" style={{minWidth:"250px"}} fallback={FailImage} /></Paragraph>
<Paragraph>短路链接在越过了卷积层后会直接与卷积层的输出结果进行对位相加(pointwise addition)。当反向传播执行时，一半的梯度会通过短路链接直接被传导到靠后的卷积层，另一半则会加上被短路链接越过的两个卷积层的参数梯度后再传播到靠后的卷积层。</Paragraph>
<Paragraph>通过重复叠加这样的“残差网络块”就得到了深度残差网络。</Paragraph>
<Title level={3}>2. 深度残差网络解决了什么问题</Title>
<Paragraph>在深度残差网络提出前，所有超过50层的深度学习模型都会或多或少的受到梯度消失与梯度爆炸的影响。这两个问题对模型表现的影响具体表现为模型的准确率非常不稳定，有的时候模型准确率会因为梯度过小而几乎不改变，有的时候模型准确率会由于梯度过大而急剧降低。这使得大部分的网络只能拥有较少的层数。因为每一层卷积层相当于提取一次输入的特征，层数的限制也限制了模型提取复杂特征的能力。从下图中我们可以发现，虽然理论上更深的网络可以提取更加复杂的信息，实际实验中过深的网络一般会表现的比浅网络差。</Paragraph>
<Paragraph><Image alt="短路链接越过了中间的两层卷积" src={`${PhotoLink}ResNet2.png`} width="40%" style={{minWidth:"250px"}} fallback={FailImage} /></Paragraph>
<Paragraph>虽然一些神经网络模型通过在模型中间添加额外的损失函数进行反向传播来减少梯度消失与梯度爆炸的影响，但这并没有从本质上解决问题。</Paragraph>
<Paragraph>在深度残差网络中，通过残差网络上的短接路径，梯度可以在非常深的网络中连贯的传播而不受到过多卷积层梯度的叠加。这从本质上避免了梯度消失与梯度爆炸问题。</Paragraph>
<Title level={3}>3. 深度残差网络的设计思路</Title>
<Paragraph>残差网络的设计思路非常简单：一个深层的网络不应该表现的比浅层网络更差。基于这个考量，作者在卷积层之间加上了短路链接。本质上，短路链接可以看作是一个恒等变换。如果在训练中，两个卷积层由于种种原因没能有效提取图片中的有效特征，因为有短路链接的存在，模型整体的效果也不会被影响很多。如果两个卷积层提取到了有用的特征，那么后面的层就可以采用这两个卷积层的结果从而提高模型的表现。换句话说，如果我们的目标函数是 <InlineMath math="H(x)"/> 而输入为 <InlineMath math="x"/>, 那么被短接的两个卷积层需要做的就是尽量拟合输入与目标函数之间的差距，也就是 <InlineMath math="H(x) - x"/>。这也是为什么这种网络被称作“残差网络， Residual Net”的原因，每一层其实都在拟合当前输入与目标之间的差距值。</Paragraph>
<Paragraph>一个有趣的现象是在人类的大脑中也有类似残差网络的结构出现在处理视觉信号的视觉神经中枢。在人脑的视觉神经中枢中神经元被分为5层，像一般的前馈神经网络一样，每一层都会接受前一层的处理结果并向后一层传输输出。一些研究发现，在第四层中的神经元会部分的直接与第一层中的神经元相连而跳过中间层。虽然人们目前还不完全清楚这样的结构在视觉神经中枢中的占比，但是这样的结构确实与深度残差网络结构不谋而合。[1]</Paragraph>
<Paragraph><a href="https://en.wikipedia.org/wiki/Residual_neural_network" class="LinkCard"> Wikipedia: Residual Neural Network </a></Paragraph>
<Title level={3}>4. 深度残差网络的表现</Title>
<Paragraph>在论文中，作者分别使用了两种 Residual Block 来构建深度残差网络。一种被称作“building block”，这种block包含两个连续的<InlineMath math="3	imes 3"/> 卷积核，拥有较多的参数；而另一种被称作"bottleneck building block"，这种block包含三个卷积核，其中第一个和第三个是 <InlineMath math="1	imes 1"/>卷积核，中间的是 <InlineMath math="3	imes 3"/> 卷积核，这样的block相对于基本的basic block来说拥有更小的参数量。</Paragraph>
<Paragraph><Image alt="Building Blocks of ResNet" src={`${PhotoLink}ResNet5.png`} width="40%" style={{minWidth:"250px"}} fallback={FailImage} /></Paragraph>
<Paragraph>通过重复使用这两种block，搭配上合适的池化函数，作者构建了若干个深度不同的深度残差网络。这些网络分别有18, 34,  50, 101, 和 152层，一般被大家简称为 ResNet18, ResNet34, ..., ResNet152。同时，为了验证模型的短接通路对梯度传播的改善效果，作者还测试了非常极端的，拥有1202层的ResNet1202在CIFAR-10数据集上的表现。</Paragraph>
<Paragraph><Image alt="ResNet 在 CIFAR-10数据集上的表现与前馈卷积网络的表现对比" src={`${PhotoLink}ResNet3.png`} width="50%" style={{minWidth:"250px"}} fallback={FailImage} /></Paragraph>
<Paragraph>上图左侧表现了不同深度的简单卷积神经网络在数据集上的表现，我们可以发现简单的卷积神经网络随着深度的增加，错误率不降反增，表现最佳的Plain20神经网络在测试集上达到了10%的错误率。普通网络相比，在一般的深度范围内，深度残差网络的表现会随着深度的加深而提高。在中间的图中，我们可以看到深度残差网络达到了5%的错误率，比平常的前馈神经网络低了一半。</Paragraph>
<Title level={3}>5. 深度残差网络与其他类似模型</Title>
<Title level={4}>5.1 DenseNet</Title>
<Paragraph>深度残差网络也启发了一些类似的网络类型，其中较为经典的包括 DenseNet， 在DenseNet中，短接链接的数量被增加了，每一个卷积层都会有一条专门的短接链接将自己的输出直接传播给较前的卷积层。</Paragraph>
<Paragraph><Image alt="Dense Net Illustration" src={`${PhotoLink}ResNet4.jpg`} width="25%" style={{minWidth:"250px"}} fallback={FailImage} /></Paragraph>
<Paragraph>因为DenseNet本质上包含了一个前馈神经网络的所有可能链接，所有的前馈神经网络都可以看作是DenseNet的一种特例来处理。这么多的链接也最大化了DenseNet本身进行特征提取和梯度传播的能力。</Paragraph>
<Title level={4}>5.2 U-net</Title>
<Paragraph><a href="https://markchenyutian.github.io/Markchen_Blog/2020/10/09/U-net.html" class="LinkCard">U-net 医学图像分割网络</a></Paragraph>
<Paragraph>U-net 通过向下池化的操作来保证模型的健壮性，同时，通过skip connection将池化前的结果与膨胀卷积后的结果相拼接，模型可以保留输入图片在高分辨率下的一部分细节信息，这样的操作即提高了模型的健壮性，又不会输入图片内的大量细节。因为医学图像分割中常常会出现许多特征差异明显的正常&amp;非正常样本（对模型的健壮性又很大考验），同时需要模型对输入信息做出精确分割（需要精确计算病灶体积/截面积），U-net在这个这个细分领域内大展身手。</Paragraph>
</Layout>
);}