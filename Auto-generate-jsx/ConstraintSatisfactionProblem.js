import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, PageHeader, Typography, Space, Tag, Divider } from 'antd';
import ReactMarkdown from 'react-markdown';
import math from 'remark-math';
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
function ConstraintSatisfactionProblem(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='Constraint Satisfaction Problem (CSP)'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default ConstraintSatisfactionProblem;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>

<Paragraph>约束满足问题(Constraint Satisfaction Problem, CSP)是一类在工程上非常常见的问题，问题由值域，变量和约束构成。求解约束满足问题指的是找到一组变量的赋值，使得网络中所有约束都被满足。在求解约束满足问题的研究中，弧一致性算法是重中之重，因为问题中的一切多元约束都可以被转化为若干个二元约束。这篇文章介绍了多种弧一致性算法，包括各种版本的时间复杂度，空间复杂度和特点</Paragraph>

<Title level={2}>CS188 CSP - 约束满足问题</Title>
<Title level={3}>Part I What is CSP</Title>
<Paragraph type="secondary">
<Paragraph>CSP: 约束满足问题</Paragraph>
</Paragraph>
<ul>
<li>一个CSP问题由三个主要部分组成： <Text strong>变量，约束与值域</Text>，任何一个CSP问题都可以正则化为这三个集合</li>
<li>CSP 问题是Search Problem的一个较为特殊的子集，不难发现，<Text strong>我们完全可以使用Breath First Search, Depth First Search 或者其他一般的搜索方法解决CSP问题</Text>。然而，由于CSP问题中的约束要求的复杂性，大量的变量空间和有时无穷大的状态空间，使用这些传统算法解决CSP问题不但会占用大量的计算时间，使用的内存消耗也会非常高。</li>
<li>目前大家普遍认为CSP问题是一种NP-Complete问题，也就是说<Text strong>一般普遍认为没有普适的，能够在多项式时间内解决CSP问题的算法存在</Text></li>
</ul>
<Title level={3}>Part II Backtracking</Title>
<ul>
<li>目前所有的解决CSP问题的算法的根本原理都是基于“回溯算法”，这种方法是一种完备的，可以解决任何有解的CSP问题的算法。然而，为了提高解决速度，目前普遍使用的工具都会集成一些<Text strong>启发式方法和局部搜索方法</Text></li>
<li>这种方法通过<Text strong>尽可能的保证已赋值的变量不改变赋值</Text>来最大化解决问题的速度</li>
</ul>
<Title level={3}>Part III Arc Consistency Algorithm</Title>
<ul>
<li>为了简化CSP问题，人们提出了很多种CSP约束传播算法；这些算法有以下两个主要功能：</li>
<li>验证CSP是否有解，注意<Text strong>任何单一的CSP约束传播算法都不能证明CSP有解，但是可以证明CSP问题无解</Text></li>
<li><Text strong>简化CSP模型</Text>，通过检测变量间的约束来减少每一个变量的可取值值域</li>
</ul>
<Paragraph>在这些算法中<Text strong>检测CSP问题中的Arc-Consistency的AC系列及其延伸算法被的研究最多</Text>，因为一般研究Arc Consistency时发现的算法可以有效的推广到更高等级的Path-Consistency 和 k-consistency 问题上，而且Arc Consistency 问题相对容易解决</Paragraph>
<Title level={4}>AC3</Title>
<ul>
<li>在AC系列中，第一个被提出并且广为接受的算法是AC3（AC1 和 AC2 在作者的论文中也有呈现，但是仅仅是作为迭代出AC3的步骤存在）AC3通过寻找一个变量的某个赋值是否能与周边的变量相容（不威胁约束）来减小值域，<em>当找不到能够使得这个赋值与周边变量相容的情况时，从变量的值域中删去这一变量</em></li>
</ul>
<Title level={4}>AC4</Title>
<ul>
<li>AC4算法是一种非常激进的算法，使用了非常多的方法试图降低时间复杂度</li>
<li>AC4算法致力于降低AC3的时间复杂度，<Text strong>使用了以空间换时间的策略</Text>，AC4通过大量的存储来降低时间复杂度</li>
</ul>
<Paragraph>使用一个二位数组来存储两个变量之间的约束可以支持这两个变量取什么值，通过这些存储，AC4可以避免重复检查变量间的约束关系</Paragraph>
<Paragraph><Text strong>AC4 算法的时间复杂度是最佳的</Text></Paragraph>
<ul>
<li>然而，AC4算法的<Text strong>初始化非常耗时</Text>，而且其空间复杂度非常高昂，这使得它与AC3对比并没有理论上预测的巨大优势</li>
<li>AC4算法也是AC系列的第一个“细粒度算法”，也就是说它的约束检测是基于变量的取值，而非基于变量间的弧约束，这可以避免一些重复的约束检测</li>
</ul>
<Title level={4}>AC6</Title>
<ul>
<li>AC6算法意在保持AC4的最坏情况时间复杂度的同时降低空间复杂度的开销，并且像AC3一样，当遇到第一个满足Arc Consistency的赋值方法是就停止寻找其他方法</li>
</ul>
<Title level={4}>AC7</Title>
<ul>
<li>AC7通过利用弧约束的双向性来进一步简化约束满足过程</li>
</ul>
<Title level={4}>AC2001</Title>
<ul>
<li>AC2001 是一个粗粒度的算法，也就是说它对约束的检测是基于两个变量之间的约束进行的，这样的算法更为轻量而且更加容易维护，AC2001通过使用指针存储每个约束上的最低满足限度的支持约束的赋值来运行（而不是像AC6，使用二维数组，因此它的空间占用实际上比AC6低一些）</li>
<li>AC2001<Text strong>是第一种达到最优复杂度的粗粒度算法</Text></li>
</ul>
<Title level={4}>AC3.3</Title>
<ul>
<li>AC3.3是人们基于AC3的基本架构，增加了对弧约束的双向性支持得到的算法，<Text strong>在日常情况中，AC3.3一般拥有最好的实际表现</Text></li>
</ul>
<Title level={4}>AC 算法的时间复杂度与版本树总结</Title>
<Paragraph><Image alt="img" src="https://markchenyutian.github.io/Markchen_Blog/Articles/Constraint_Satisfaction_Problem_ZhiHu_files/v2-a1b4901a86b29efaa5dccede4c53caa7_720w.jpg" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Title level={3}>Part IV Other Methods for CSP[^1 ]</Title>
<Paragraph>*以下基于一个只有二元约束的CSP图（任意多元CSP问题都可以被转化为二元CSP问题）</Paragraph>
<Title level={4}>启发式算法解决CSP问题</Title>
<Paragraph>简而概之，使用启发式算法解决CSP问题的一种常用启发式算法是<Text strong>“找到威胁弧相容性最多的变量，在不改变其他任何变量的条件下，将一个在变量值域内的，威胁弧相容性最少的值赋给这个变量”</Text>，通过重复这个操作达到找到一个CSP完整的，满足相容性的解集</Paragraph>
<Title level={4}>局部搜索方法解决CSP问题</Title>
<Title level={4}>结构优化法解决CSP问题</Title>
<Paragraph><Image alt="img" src="https://markchenyutian.github.io/Markchen_Blog/Articles/Constraint_Satisfaction_Problem_ZhiHu_files/v2-dca88b36bcfd6cd418be49c695580edf_720w.jpg" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>树形的CSP约束问题可以在<Text strong>线性时间内解决</Text>，（例如使用“拓补排序”方法）将树<Text strong>线性化</Text>；一种CSP解决方法是<Text strong>割集条件设置</Text>，这种方法通过去掉图中产生环的关键节点来将有环的CSP约束图转化为若干个无环的CSP约束图，然后将每一个无环的CSP解加上之前删掉的关键节点后再次求解</Paragraph>
<Title level={3}>Part V CSP问题在实际生活中的应用例子</Title>
<Paragraph>使用CSP求解器预测蛋白质折叠结构</Paragraph>
<Paragraph>蛋白折叠结构问题 - 使用CSP正则化</Paragraph>
<Paragraph><Text strong>变量：</Text>蛋白质中每个基团的方向 / 位置（三维向量）</Paragraph>
<Paragraph><Text strong>约束：</Text></Paragraph>
<ol>
<li>蛋白质侧链之间的静电力 / 洛伦兹力 / 亲（疏）水性</li>
<li>空间结构不可重叠（一个位置不能有两个原子） *如下图所示</li>
<li>蛋白质的激活位置 / 活性位置不能太大，不然无法实现酶催化的专一性 *如下图所示</li>
</ol>
<Paragraph><Image alt="img" src="https://markchenyutian.github.io/Markchen_Blog/Articles/Constraint_Satisfaction_Problem_ZhiHu_files/v2-1cdb5028744eb405fc8181bc935af3a1_720w.jpg" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph><Text strong>值域：</Text>三维空间内（可以离散化三维空间，使其转化为有限值域的CSP问题）</Paragraph>
</Layout>
);}