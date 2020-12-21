import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, Typography, Tag, Divider } from 'antd';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import FailImage from '../../PublicComponent/FailImage';
import AppPageHeader from '../../PublicComponent/PageHeader';const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';
function WhatIsBayesNetwork(){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='What Is Bayes Network'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default WhatIsBayesNetwork;
function PostContent(){
 return(
<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<div>
        <Tag color="blue">Artificial Intelligence</Tag><Tag color="blue">Machine Learning</Tag><Tag color="orange">CS 188</Tag>
</div>
<Divider></Divider>
<Paragraph>贝叶斯网络是人们在探索机器学习时的一个重要里程碑，通过贝叶斯网络，机器学习摆脱了以往基于形式逻辑推理和庞大知识库的限制，开始了“统计学习”的新纪元。那么什么是贝叶斯网络呢？贝叶斯网络和贝叶斯统计学派又有什么关系呢?</Paragraph>
<Title level={2}>CS188 课堂笔记 - 贝叶斯网络 Bayesian Network</Title>
<Paragraph><Text strong>目录</Text></Paragraph>
<Paragraph type="secondary">
<ol>
<li>统计贝叶斯学派与贝叶斯公式</li>
<li>什么是贝叶斯网络</li>
<li>为什么我们需要贝叶斯网络</li>
<li>贝叶斯网络“加速”的原理</li>
<li>用朴素的贝叶斯网络识别手写数字</li>
<li>参考资料</li>
</ol>
</Paragraph>
<Title level={3}>1 统计贝叶斯学派与贝叶斯公式</Title>
<Paragraph>根据对统计的理解，数理统计存在<Text strong>概率学派</Text>与<Text strong>贝叶斯学派</Text>两种学派，他们之间的主要区别在于对于概率的理解方法不同</Paragraph>
<Paragraph><Text strong>概率学派</Text>认为世界存在一个固定的<Text strong>先验概率</Text>，例如一枚公平的硬币抛出正反面的概率一定分别是1/2。换句话说，古典学派认为任何事件都<Text strong>存在一个固定的概率模型</Text>，虽然我们可能不知道这个概率分布中的一些参数，但是只要我们进行了足够多次的取样，我们可以通过取样的结果来推断事件的概率分布。</Paragraph>
<Paragraph><Text strong>贝叶斯学派</Text>则认为世界<Text strong>没有一个确定的先验概率</Text>，假设我们只得到了事件A的样本X，那么我们就只能依靠样本X对事件A的概率分布做出推断，而不必考虑“可能出现但未出现（在样本X中）”的情况。在这种理解的背景下，我们每次对事件A进行采样就会更新我们对事件A各个情况概率分布的认知（Belief）。[1]</Paragraph>
<Paragraph>两个学派都各有优势，在一些简单并可以做出大量模拟的情况（例如预测抛硬币正反的概率分布）下，概率学派可以较为精确的获得某一事件的发生概率；在一些难以分析，很难模拟/大量采样的情况（例如地震概率的预测）下，贝叶斯学派则有极大的优势，可以使用有限的信息帮助我们做出合理的推断</Paragraph>
<Paragraph><Text strong>贝叶斯公式</Text>是贝叶斯学派的重要理论之一，这个公式告诉了我们如何通过我们对事件A已有的认知和新的采样（evidence）B来更新事件A的<Text strong>后验概率</Text>（在事件B发生后我们对事件A概率分布的新认知）
<BlockMath math="
P(A \mid B) = rac{P(B\mid A)P(A)}{P(B)}
"/>
概率学派也有关于这个公式的另一套解释方法：概率学派将概率看为“结果的比例（结果A在所有结果中的概率记为P(A) ）。这个公式在这种解释下成为了描述“具有B的所有结果中有A性质的结果所占的比例 = 具有A性质的所有结果中具有B性质的结果所占的比例 <InlineMath math="	imes"/> 所有结果中A的比例 / 所有结果中B的比例” [2]</Paragraph>
<Title level={3}>2 什么是贝叶斯网络</Title>
<Paragraph>贝叶斯网络是一种描述<Text strong>随机变量之间互相条件独立关系的有向无环图</Text>。在这个有向无环图中，每个节点代表一个<Text strong>随机变量对其父节点的条件概率分布</Text> <InlineMath math="P(X_i \mid parents(X_i))"/>，每一条边可以理解成变量之间的联系。</Paragraph>
<Paragraph type="secondary">
<Paragraph>注意：虽然一般来讲这种“联系”可以被解释为“因果关系”，但是实际上 这种关系并不一定是因果关系，只要两个变量之间互相不条件独立就应该被连在一起</Paragraph>
</Paragraph>
<Paragraph>在贝叶斯网络中，已知<InlineMath math="X"/>的父节点<InlineMath math="parents(X)"/>时<InlineMath math="X"/>的条件概率分布<InlineMath math="P(X\mid parents(X))"/> 与已知<InlineMath math="X"/>的父节点时网络中<InlineMath math="X"/>的“祖先节点”的概率分布<InlineMath math="P(ancestor(X)\mid parents(X))"/>互相条件独立。[3]</Paragraph>
<Paragraph type="secondary">
<Paragraph>例子：<Image src={`${PhotoLink}Bayes3.png`} alt="image-20200430104043594" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>在这样一给贝叶斯网络图中，E的父节点<InlineMath math="parent(E) = {D}"/>，E不包括父节点的祖先节点<InlineMath math="ancestor(E) = {B, C, A}"/></Paragraph>
<Paragraph>通过贝叶斯网络的定义，我们可以知道随机变量C, D, E之间存在这样的关系：</Paragraph>
</Paragraph>
<Paragraph><BlockMath math="
P(E\mid D) \perp P(C\mid D)
"/></Paragraph>
<Paragraph type="secondary">
<Paragraph>也就是说</Paragraph>
</Paragraph>
<Paragraph><BlockMath math="
P(E\mid D, B, C, A) = P(E\mid D)
"/></Paragraph>
<Paragraph>贝叶斯网络本质上只是一种维持子节点与其祖先节点（不包括父节点）在给定父节点的条件下互相条件独立的存储随机变量之间互相关系的数据结构。</Paragraph>
<Title level={3}>3. 为什么我们需要贝叶斯网络</Title>
<Paragraph>在生产生活中，我们经常需要对具有随机性的状态的出现概率进行推断。假设我们想用随机变量<InlineMath math="X_0"/>到<InlineMath math="X_n"/>来表示一个事件的“状态”，其中每一个随机变量都只有2个可能的取值：1（发生）或0（不发生） 我们这时候想要得知<InlineMath math="P(x_1, x_2, \cdots, x_n)"/>这的概率分布。</Paragraph>
<Paragraph>如果使用直接列出一张全联合分布的概率分布表（如下）的话，整张概率分布表会有<InlineMath math="2^n"/>行，每次计算一行都要计算随机变量的所有情况，这使得求解概率分布的时间复杂度极高（时间复杂度<InlineMath math="O(n2^n)"/>）。</Paragraph>
<Paragraph><Image src={`${PhotoLink}Bayes2.png`} alt="image-20200430112420798" width='60%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>如果我把这n个随机变量用贝叶斯网络表示出来，因为贝叶斯网络可以很好的表达随机变量之间的相互条件独立关系，我们的计算量可以大大减小
<BlockMath math="
P(x_1, x_2, \cdots, x_n) = \prod^n_{i = 1}{P(x_i | x_{i+1}, x_{i + 2}, \cdots x_n)}
"/>
上面的式子中连乘号中的概率分布也可以表示为：
<BlockMath math="
P(x_i \mid parents(x_i), ancestor(x_i))
"/>
因为我们知道 <InlineMath math="P(ancestor(x_i)\mid parents(x_i))\perp P(x_i \mid parents(x_i))"/>，我们可以消去上式中给定条件里的<InlineMath math="ancestor(x_i)"/>这一项</Paragraph>
<Paragraph>这时候，我们可以得知：
<BlockMath math="
P(x_1, x_2, \cdots, x_n) = \prod^n_{i = 1}P(x_i \mid parents(x_i))
"/>
看到这里，你可能会觉得这个式子有些似曾相识……</Paragraph>
<Paragraph>是的，这里被连乘的每一项就是贝叶斯网络中每一个节点所存储的条件概率表所存储的概率分布！</Paragraph>
<Paragraph>这时候，在一个最多有<InlineMath math="k"/>个父节点的贝叶斯网络中，求解状态的概率分布所需要的时间复杂度就被缩小到了<InlineMath math="O(n2^k)"/>。虽然求解问题依然是一个非多项式时间问题（NP）， 但是在大多数情况中贝叶斯网络的使用可以有效的降低时间复杂度的幂。[3]</Paragraph>
<Title level={3}>4. 贝叶斯网络“加速”的原理</Title>
<Paragraph>为什么贝叶斯网络处理同样的问题比直接计算所有随机变量的全联合分布要快呢？这个问题其实可以在贝叶斯网络的时间复杂度表达式中看出端倪：对于一个<Text strong>每个节点最多有<InlineMath math="k"/>个父节点</Text>的贝叶斯网络，求解概率分布的时间复杂度是<InlineMath math="O(n2^k)"/>。这意味着如果有一个贝叶斯网络是一个<Text strong>完全图</Text>（每个节点之间都有连线）的话，它的求解时间复杂度会达到<InlineMath math="O(n2^n)"/>，和全联合分布一样。</Paragraph>
<Paragraph>实际上，贝叶斯网络可以计算的比全联合分布快是因为贝叶斯网络可以有效的表示变量之间的条件独立关系，基于这种条件独立的假设来简化计算，从而降低算法时间复杂度。</Paragraph>
<Title level={3}>5. 朴素的贝叶斯网络识别手写数字</Title>
<Paragraph>上面简单的介绍了什么是贝叶斯网络和贝叶斯网络的存在意义，接下来我们要看一个<Text strong>朴素的</Text>贝叶斯网络用来识别MNIST数据集中的手写数字的一个实践案例</Paragraph>
<Title level={4}>5.0 什么是MNIST数据集</Title>
<Paragraph>MNIST数据集是美国国家标准与技术研究所收集整理标注的一个手写数字数据集，其中包括了60000张28*28的8bit灰度手写数字图片作为训练集，还有10000张28*28的8bit灰度图片作为测试集。每张图片由<InlineMath math="28^2 = 784"/>个像素构成，每个像素取值（从白到黑）在<InlineMath math="[0, 255]"/>的范围内。</Paragraph>
<Paragraph><Image alt="MNIST数据集中的一张'4'的样本" src={`${PhotoLink}Bayes4.png`} width='15%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>每一张图像都有一个“标签”，这个标签代表着这个图片上写的数字。</Paragraph>
<Title level={4}>5.1 为什么说是“朴素的”贝叶斯网络</Title>
<Paragraph>因为在这个例子里面，我们假定每一个像素是一个单独的feature（特性），并且我们认为所有的像素之间都是互相独立的（显然不是，一个高亮的像素周边的像素大概率也比较亮）。这样一个略微脱离实际的假设使得我们可以大大简化模型的贝叶斯网络并且可以极快的求解概率分布（因为每个像素都只有一个父节点——图像的标签）。</Paragraph>
<Paragraph><Image src={`${PhotoLink}Bayes1.png`} width='50%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Title level={4}>5.2 如何运用模型预测</Title>
<Paragraph>对于一张给定的图片，我们把里面的784个像素看成784个随机变量，同时，我们记这个模型的标签为<InlineMath math="label"/>，在这种设定下，一张图片的标签可以这样表示：
<BlockMath math="
label = {\underset {label\in [0, 9]}{\operatorname {arg\,max} }}\,(P(label, f_1, f_2, \cdots, f_{784}))
"/></Paragraph>
<Paragraph type="secondary">
<Paragraph>对于一幅图片（给定<InlineMath math="f_1, f_2, \cdots f_{784}"/>），我们希望找到一个0 - 9之间的label，使得<InlineMath math="P(label, f_1, f_2, \cdots, f_{784})"/>的值最大</Paragraph>
</Paragraph>
<Paragraph>使用贝叶斯网络，我们可以发现这个概率<InlineMath math="P(label, f_1, f_2, \cdots, f_{784})"/>可以这么计算：
<BlockMath math="
P(label, f_1, f_2, \cdots, f_{784}) = P(label) \cdot P(f_1 \mid label) \cdot P(f_2\mid label)\cdots P(f_{784}\mid label)
"/>
我们只用完成这样的一个简单运算就可以得到一张照片是label = A的概率了：</Paragraph>
<SyntaxHighlighter language="python" style={lightfair}
        children={
            `
def predict(data):
    global LabelDistribution, PixelDistribution, THRESHOLD
    labelProbTable = [1] * 10
    for i in range(10):
        labelProbTable[i] <em>= LabelDistribution[i]
        for pixel in range(len(data)):
            if data[pixel] >= THRESHOLD: labelProbTable[i] </em>= PixelDistribution[i][pixel]
            else: labelProbTable[i] *= (1 - PixelDistribution[i][pixel])

    MAX_PROB, MAX_LABEL = -1, -1
    for i in range(10):
        if labelProbTable[i] > MAX_PROB:
            MAX_PROB = labelProbTable[i]
            MAX_LABEL = i
    return MAX_LABEL
`}/>
<Title level={4}>5.3 如何训练模型</Title>
<Paragraph>通过上面的公式，我们知道可以很方便的使用<InlineMath math="P(label)"/>和<InlineMath math="P(f_i\mid label)"/>来预测一张图片的标签，那么我们怎么获得这两种数据呢?答案是：</Paragraph>
<Paragraph><Text strong>数数</Text></Paragraph>
<Paragraph>是的，这个”天真烂漫的朴素贝叶斯网络“的整个训练过程只在做一件事情：数数</Paragraph>
<Paragraph>我们通过统计训练数据里60000个标签的概率分布来得到<InlineMath math="P(label)"/>，同时我们对每一张图片的每一个像素进行统计，如果像素亮度超过阈值就记+1上去，最后得到每一个标签下所有像素超过阈值的概率，也就是<InlineMath math="P(f_i = 1\mid label)"/>。</Paragraph>

<SyntaxHighlighter language="python" style={lightfair}
        children={
            `
Data = [list(map(int, line.strip().split(","))) for line in open("mnist_train.csv").read().strip().split("\n")]
LabelDistribution = {i: 0 for i in range(10)}
PixelDistribution = [{i: 0 for i in range(784)} for _ in range(10)]
THRESHOLD = 100

# Calculate the P(F_i | y)

def train():
    global LabelDistribution, PixelDistribution, Data, THRESHOLD
    for line in Data:
        label = line[0]
        pixels = line[1:]
        LabelDistribution[label] += 1
        for pixel in range(len(pixels)):
            if pixels[pixel] &gt;= THRESHOLD:
                PixelDistribution[label][pixel] += 1
    for i in range(10): normalize(PixelDistribution[i], label=i)
        normalize(LabelDistribution)`
}/>
<Title level={4}>5.4 模型准确率</Title>
<Paragraph>虽然这个模型看上去非常的不靠谱（假设所有feature相互独立），但是竟然可以达到高达84.4%的分类准确率！(当然，比起其他像神经网络一样的fancy方法，这个结果也很<Text strong>朴素</Text>）</Paragraph>
<Title level={3}>6. 参考资料</Title>
<Paragraph>[1]:  “hgz_dm.” <em>统计学中的频率学派与贝叶斯学派 - hgz_dm - 博客园</em>, www.cnblogs.com/hgz-dm/p/10292949.html.</Paragraph>
<Paragraph>[2]: “Bayes' Theorem.” <em>Wikipedia</em>, Wikimedia Foundation, 27 Apr. 2020, en.wikipedia.org/wiki/Bayes'_theorem.</Paragraph>
<Paragraph>[3]: Russell, Stuart J. <em>Artificial Intelligence: a Modern Approach</em>. Pearson, 2016.</Paragraph>
</Layout>
);}