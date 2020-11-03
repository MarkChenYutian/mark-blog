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

const { Title, Text, Paragraph, Link } = Typography;
const { Content } = Layout
const PhotoLink = process.env.PUBLIC_URL + '/Assets/'
const ReactMarkdownWithHtml = require('react-markdown/with-html')
const markdownRender = {
    inlineMath: ({value}) => <InlineMath math={value} />,
    math: ({value}) => <BlockMath math={value} />
};

function WhatIsLSTM(){
    window.scrollTo(0,0);
    return(
        <Layout>
        <AppHeader select="2"/>
        <Content className="site-layout" style={{ padding: '0 24px', marginTop: 64 }}>
        <AppPageHeader title="What is LSTM"/>
          <div className="site-layout-background" style={{ padding: 16 }}>
              <PostContent/>
          </div>
        </Content>
        <AppFooter/>
      </Layout>
    );
}

export default WhatIsLSTM;

function PostContent(){
    return(
    <Layout style={{ backgroundColor: "white", padding: "0"}}>
        <div>
        <Tag color="blue">Neural Network</Tag> <Tag color="blue">Artificial Intelligence</Tag> <Tag color="blue">Marhine Learning</Tag>
        <Divider></Divider>
        </div>
        <Paragraph>一般的神经网络只能处理单个信息，可是有的时候神经网络的输入是一个时间序列，在这种情况下普通的前馈神经网络就不能利用“上下文”中隐含的信息来更好的处理当前输入。为了解决这个问题，人们提出了递归神经网络(Recurrent Neural Network, RNN)。可是递归神经网络也有问题：由于同样的权重在网络中一直被累乘，在反向传播的时候极容易出现梯度消失与梯度爆炸的问题。同时，由于RNN在状态间传递的信息过少，RNN在上下文距离较远的时候会很快的遗忘前文信息。为了解决这些问题，人们提出了LSTM这个新的网络模型，它可以很好的处理以上这些问题。</Paragraph>
        <Title level={2}>LSTM - 过去，现在，和未来</Title>
        <Paragraph><Text strong>0. 什么是LSTM</Text></Paragraph>
        <Paragraph><Text strong>1. 为什么需要LSTM</Text></Paragraph>
        <Paragraph><Text strong>2. LSTM的直觉解释</Text></Paragraph>
        <Paragraph><Text strong>3. LSTM的具体解释</Text></Paragraph>
        <Paragraph><Text strong>4. LSTM的变体</Text></Paragraph>
        <Paragraph><Text strong>5. 参考资料</Text></Paragraph>
        <hr />
        <Title level={3}>0. 什么是LSTM</Title>
        <Paragraph>LSTM，全称 Long Short Term Memory (长短期记忆) 是一种特殊的<Text strong>递归神经网络</Text> 。这种网络 
        与一般的前馈神经网络不同，LSTM可以利用时间序列对输入进行分析；简而言之，当使用前馈神经网络时，神经网络会认为我们<InlineMath math="t"/>时刻输入的内容与<InlineMath math="t + 1"/>时刻输入的内容<Text strong>完全无关</Text>，对于许多
        情况，例如图片分类识别，这是毫无问题的，可是对于一些情景，例如<Text strong>自然语言处理</Text> (NLP, Natural Language Processing) 或者我们需要分析类似于<Text strong>连拍照片</Text>这样的数据时，合理运用 <InlineMath math="t"/> 或
        之前的输入来处理 <InlineMath math="t+n"/> 时刻显然可以更加合理的运用输入的信息。为了运用到时间维度上信息，人们设计了<Text strong>递归神经网络</Text> (RNN, Recurssion Neural Network)，一个简单的递归神经网络可以用这种方式表示</Paragraph>
        <center><Image alt="image-20200402223614052" src={`${PhotoLink}LSTM1.png`} width="200px" fallback={FailImage}/></center>
        <Paragraph>在图中，<InlineMath math="x_t"/>是在<InlineMath math="t"/>时刻的输入信息，<InlineMath math="h_t"/>是在<InlineMath math="t"/>时刻的输入信息，我们可以看到神经元<InlineMath math="A"/>会递归的调用自身并且将<InlineMath math="t -1"/>时刻的信息传递给<InlineMath math="t"/>时刻。</Paragraph>
        <Paragraph>递归神经网络在许多情况下运行良好，特别是在对<Text strong>短时间序列</Text>数据的分析时十分方便。但是， 
        注意到前面着重强调了“短”，这是为什么呢？</Paragraph>
        <Paragraph>上图所示的简单递归神经网络存在一个“硬伤“，<Text strong>长期依赖问题</Text>：递归神经网络只能处理我们需 
        要较接近的上下文的情况：</Paragraph>
        <Paragraph type="secondary">
        <Paragraph>Example 1. 想象现在设计了一个基于简单RNN的句子自动补全器，当我输入"Sea is ..." 的时候会自动补全为"Sea is <Text strong>blue</Text>"。</Paragraph>
        </Paragraph>
        <Paragraph>在这种情况下，我们需要的上下文极短，而RNN可以很好的收集到 <InlineMath math="t = 0"/>时的信息"Sea"并且补
        上"blue"</Paragraph>
        <Paragraph type="secondary">
        <Paragraph>Example 2. 现在，假设我们用刚刚的RNN试图补全一篇文章"我一直呆在中国，……，我会说一口流利的 (?)"。</Paragraph>
        </Paragraph>
        <Paragraph>在这里，为了补全最后的空缺，需要的信息在非常远的上文（e.g. 200+字前）提到的”中国“。在实验中简单的理想状
        态下，经过精心调节的RNN超参数可以良好的将这些信息向后传递。可是在现实的情况中，基本没有RNN可以做到这一点。一些学者
        后来研究发现RNN的长期依赖问题是这种网络结构本身的问题。</Paragraph>
        <Paragraph>不但如此，这种简单的RNN还很容易受到两种在神经网络中臭名昭著的影响<Text strong>梯度消失问题</Text>（神经
        网络的权重/偏置梯度极小，导致神经网络参数调整速率急剧下降）和<Text strong>梯度爆炸问题</Text>（神经网络的权重/偏置
        极大，导致神经网络参数调整幅度过大，矫枉过正）。相信大家都看过一个著名的鸡汤，<InlineMath math="(0.99)^{365}"/>和<InlineMath math="(1.01)^{365}"/>的对比。实际上，这个鸡汤非常好的描述了梯度问题的本质：对于<Text strong>任意信息递 
        归使用足够多次同样的计算</Text>，都会导致极大或极小的结果，也就是说…</Paragraph>
        <Paragraph>根据微分链式法则，在RNN中，神经元的权重的梯度可以被表示为一系列函数的微分的连乘。因为神经元的参数（权重
        与偏置）都是基于学习速率（一般为常数）和参数梯度相反数（使得神经网络输出最快逼近目标输出）得到的，一个过大或过小的
        梯度会导致我们要么需要极长的训练时间（本来从-2.24 调节到 -1.99 只用500个样本，由于梯度过小，每次只调小0.0001，最后
        用了几千个样本），要么会导致参数调节过度（例如本来应该从-10.02调节到-9.97，由于梯度过大，直接调成了+20.3）</Paragraph>
        <Title level={3}>1. 为什么需要LSTM</Title>
        <Paragraph>LSTM从被设计之初就被明确的用于解决一般递归神经网络中普遍存在的<Text strong>长期依赖问题</Text>，使用LSTM可以有效的传递和表达长时间序列中的信息并且不会导致长时间前的有用信息被忽略（遗忘）。与此同时，LSTM还可以解决RNN中
        的梯度消失/爆炸问题</Paragraph>
        <Title level={3}>2. LSTM 的直觉解释</Title>
        <Paragraph>LSTM的设计或多或少的借鉴了人类对于自然语言处理的直觉性经验。要想了解LSTM的工作机制，可以先阅读一下一个 
        （虚构的）淘宝评论：</Paragraph>
        <Paragraph type="secondary">
        <Paragraph>“这个笔记本非常棒，纸很厚，料很足，用笔写起来手感非常舒服，而且没有一股刺鼻的油墨味；更加好的是这个笔记
        本不但便宜还做工优良，我上次在别家买的笔记本裁纸都裁不好，还会割伤手……”</Paragraph>
        </Paragraph>
        <Paragraph>如果让你看完这段话以后马上转述，相信大多数人都会提取出来这段话中几个重要的关键词“纸好”，“没味道”，“做工
        好”，然后再重新组织成句子进行转述。这说明了以下两点：</Paragraph>
        <ol>
        <li>在一个时间序列中，不是所有信息都是同等有效的，大多数情况存在“关键词”或者“关键帧”</li>
        <li>我们会在从头到尾阅读的时候“自动”概括已阅部分的内容并且用之前的内容帮助理解后文</li>
        </ol>
        <Paragraph>基于以上这两点，LSTM的设计者提出了“长短期记忆”的概念——只有一部分的信息需要长期的记忆，而有的信息可以不 
        记下来</Paragraph>
        <Title level={3}>3. LSTM的具体解释</Title>
        <Paragraph>一个普通的，使用tanh函数的RNN可以这么表示：</Paragraph>
        <center><Image alt="image-20200402233238756" src={`${PhotoLink}LSTM2.png`} width="50%" fallback={FailImage}/></center>
        <Paragraph>在这里，我们可以看到A在<InlineMath math="t-1"/>时刻的输出值<InlineMath math="h_t"/>被复制到了<InlineMath math="t"/>时刻，与<InlineMath math="t"/>时刻的输入<InlineMath math="x_t"/>整合后经过一个带权重和偏置的tanh函数后
        形成输出，并继续将数据复制到<InlineMath math="t+1"/>时刻……</Paragraph>
        <Paragraph>与上图朴素的RNN相比，单个LSTM单元拥有更加复杂的内部结构和输入输出：</Paragraph>
        <center><Image alt="image-20200402233826864" src={`${PhotoLink}LSTM3.png`} width="50%" fallback={FailImage}/></center>
        <Paragraph>在上图中，每一个红色圆形代表对向量做出的操作（pointwise operation， 对位操作），而黄色的矩形代表一个神 
        经网络层，上面的字符代表神经网络所使用的激活函数</Paragraph>
        <Paragraph type="secondary">
        <Paragraph>point-wise operation 点对点操作</Paragraph>
        <Paragraph>​ 如果我要对向量&lt;1, 2, 3&gt; 和 &lt;1, 3, 5&gt;进行逐分量的想成操作，会获得结果 &lt;1, 6, 15&gt;</Paragraph>
        <Paragraph>layer 函数层</Paragraph>
        <Paragraph>​ 一个函数层拥有两个属性：权重向量(Weight) 和 偏置向量(bias)，对于输入向量<InlineMath math="A"/>的每一 
        个分量 <InlineMath math="i"/> ， 函数  层会对其进行以下操作(假设激活函数为<InlineMath math="F(x)"/>)：
        <BlockMath math="
        Output_i = F(W_i \cdot A_i + b_i)
        "/>
        ​ 常见的激活函数（也就是套在最外面的<InlineMath math="F(x)"/>）有ReLU(线性修正单元)，sigmoid（写作<InlineMath math="\sigma"/>），和 <InlineMath math="    anh"/></Paragraph>
        </Paragraph>
        <Title level={4}>LSTM的关键：单元状态</Title>
        <Paragraph>LSTM能够从RNN中脱颖而出的关键就在于上图中从单元中贯穿而过的线 ——神经元的隐藏态，我们可以将神经元的隐藏 
        态简单的理解成递归神经网络对于输入数据的“记忆”，用<InlineMath math="C_t"/>表示神经元在<InlineMath math="t"/>时刻过
        后的“记忆”，这个向量涵盖了在<InlineMath math="t+1"/>时刻前神经网络对于所有输入信息的“概括总结”</Paragraph>        
        <center><Image alt="image-20200402235227710" src={`${PhotoLink}LSTM4.png`} width="50%" fallback={FailImage}/></center>
        <Paragraph>接下来我们会看一下LSTM四个函数层分别在做些什么</Paragraph>
        <Title level={4}>LSTM_1 遗忘门</Title>
        <center><Image alt="image-20200403003547037" src={`${PhotoLink}LSTM5.png`} width="50%" fallback={FailImage}/></center>
        <Paragraph>对于上一时刻LSTM中的单元状态来说，一些“信息”可能会随着时间的流逝而“过时”。为了不让过多记忆影响神经网络 
        对现在输入的处理，我们应该选择性遗忘一些在之前单元状态中的分量——这个工作就交给了“遗忘门”</Paragraph>
        <Paragraph>每一次输入一个新的输入，LSTM会先根据新的输入和上一时刻的输出决定遗忘掉之前的哪些记忆——输入和上一步的输 
        出会整合为一个单独的向量，然后通过sigmoid神经层，最后点对点的乘在单元状态上。因为sigmoid 函数会将任意输入压缩到<InlineMath math="(0, 1)"/>的区间上，我们可以非常直觉的得出这个门的工作原理 —— 如果整合后的向量某个分量在通过sigmoid 
        层后变为0，那么显然单元状态对应的分量也会变成0，换句话说，“遗忘”了这个分量上的信息；如果某个分量通过sigmoid层后为1，单元状态会“保持完整记忆”。不同的sigmoid输出会带来不同信息的记忆与遗忘。通过这种方式，LSTM可以<Text strong>长期记
        忆重要信息</Text>，并且记忆可以随着时间进行动态调整</Paragraph>
        <Paragraph>下面的公式可以用来描述遗忘门的计算，其中<InlineMath math="f_t"/>就是sigmoid神经层的输出向量：
        <BlockMath math="
        f_t = \sigma(W_f\cdot [h_{t-1}, x_t] + b_f)
        "/></Paragraph>
        <Title level={4}>LSTM_2 &amp; 3 记忆门</Title>
        <Paragraph>记忆门是用来控制是否将在<InlineMath math="t"/>时刻（现在）的数据并入单元状态中的控制单位。首先，用tanh 
        函数层将现在的向量中的有效信息提取出来，然后使用（图上tanh函数层左侧）的sigmoid函数来控制这些记忆要放“多少”进入单 
        元状态。这两者结合起来就可以做到：</Paragraph>
        <center><Image alt="image-20200403001917424" src={`${PhotoLink}LSTM6.png`} width="50%" fallback={FailImage}/></center>
        <ol>
        <li>从当前输入中提取有效信息</li>
        <li>对提取的有效信息做出筛选，为每个分量做出评级(0 ~ 1)，评级越高的最后会有越多的记忆进入单元状态</li>
        </ol>
        <Paragraph>下面的公式可以分别表示这两个步骤在LSTM中的计算：</Paragraph>
        <ol>
        <li>
        <Paragraph><BlockMath math="
        C'_t = \tanh(W_c\cdot [h_{t - 1},x_t] + b_c)
        "/></Paragraph>
        </li>
        <li>
        <Paragraph><BlockMath math="
        i_t = \sigma(W_i\cdot [h_{t-1}, x_t] + b_i)
        "/></Paragraph>
        </li>
        </ol>
        <Title level={4}>LSTM_4 输出门</Title>
        <Paragraph>输出门，顾名思义，就是LSTM单元用于计算当前时刻的输出值的神经层。输出层会先将当前输入值与上一时刻输出值 
        整合后的向量（也就是公式中的<InlineMath math="[h_{t - 1},x_t]"/>）用sigmoid函数提取其中的信息，接着，会将当前的单 
        元状态通过tanh函数压缩映射到区间<InlineMath math="(-1, 1)"/>中*</Paragraph>
        <Paragraph type="secondary">
        <Paragraph><Text strong>为什么我们要在LSTM的输出门上使用tanh函数？</Text></Paragraph>
        <Paragraph>以下引用自Stack Overflow上问题 What is the intuition of using tanh in LSTM 中的最佳答案：</Paragraph>  
        <Link href="https://stackoverflow.com/questions/40761185/what-is-the-intuition-of-using-tanh-in-lstm" >https://stackoverflow.com/questions/40761185/what-is-the-intuition-of-using-tanh-in-lstm</Link>   
        <Paragraph>在LSTM的输入和输出门中使用tanh函数有以下几个原因：</Paragraph>
        <ol>
        <li>为了防止<Text strong>梯度消失问题</Text>，我们需要一个二次导数在大范围内不为0的函数，而tanh函数可以满足
        这一点</li>
        <li>为了便于凸优化，我们需要一个<Text strong>单调函数</Text></li>
        <li>tanh函数一般收敛的更快</li>
        <li>tanh函数的求导占用系统的资源更少</li>
        </ol>
        </Paragraph>
        <Paragraph>将经过tanh函数处理后的单元状态与sigmoid函数处理后的，整合后的向量点对点的乘起来就可以得到LSTM在<InlineMath math="t"/>时刻的输出了！</Paragraph>
        <hr />
        <Title level={3}>4. LSTM 的变体</Title>
        <Paragraph>自从LSTM在自然语言处理等方面大获成功后，许多种LSTM的变体被提出，其中只有几种值得特别关注：</Paragraph> 
        <center><Image alt="image-20200403021009010" src={`${PhotoLink}LSTM7.png`} width="50%" fallback={FailImage}/></center>
        <Paragraph>这种LSTM让各个门都可以在获得了上一时刻的单元状态的前提下进行运算。在上面的图中，单元状态被额外赋予到了 
        所有三个层中（输出门除外），然而在实际的应用中，大部分研究者只会选择性的打开三个通道中的一或两个</Paragraph>      
        <Paragraph>除此之外，还有很多其他LSTM变体以及<Text strong>通过其他方式构建RNN达到类似LSTM的效果的架构</Text>，然而
        这些架构的效率都大同小异，所以不过多说明了</Paragraph>
        <Title level={3}>5. 参考资料</Title>
        <Paragraph>[1] “Understanding LSTM Networks.” <em>Understanding LSTM Networks -- Colah's Blog</em>, colah.github.io/posts/2015-08-Understanding-LSTMs/.</Paragraph>
        <Paragraph>[2] “Long Short-Term Memory.” <em>Wikipedia</em>, Wikimedia Foundation, 1 Apr. 2020, en.wikipedia.org/wiki/Long_short-term_memory.</Paragraph>
        <Paragraph>[3] “LSTM以及三重门，遗忘门，输入门，输出门.” <em>LSTM以及三重门，遗忘门，输入门，输出门_网络_Lison_Zhu's Blog-CSDN博客</em>, blog.csdn.net/Lison_Zhu/article/details/97236501.</Paragraph>
        <Paragraph>[4] “递归神经网络问题整理.” <em>递归神经网络问题整理_网络_leo鱼的博客-CSDN博客</em>, blog.csdn.net/webzjuyujun/article/details/71124695.</Paragraph>
        <Paragraph>[5] “详解机器学习中的梯度消失、爆炸原因及其解决方法.” <em>详解机器学习中的梯度消失、爆炸原因及其解决方 
        法_网络_Double_V的博客-CSDN博客</em>, blog.csdn.net/qq_25737169/article/details/78847691.</Paragraph>
        <Paragraph>[6] Dnkdnk. “What Is the Intuition of Using Tanh in LSTM.” <em>Stack Overflow</em>, 1 Sept. 1966, stackoverflow.com/questions/40761185/what-is-the-intuition-of-using-tanh-in-lstm.</Paragraph>
        </Layout>);
}