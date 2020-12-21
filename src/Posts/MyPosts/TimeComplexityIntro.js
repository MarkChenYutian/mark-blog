import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Divider, Layout, Typography, Tag } from 'antd';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import AppPageHeader from '../../PublicComponent/PageHeader';const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
function TimeComplexityIntro(){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='Time Complexity and Asymptotic Notation'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default TimeComplexityIntro;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<div>
    <Tag color='cyan'>Algorithms</Tag><Tag color='magenta'>Math</Tag>
    <Divider></Divider>
</div>
<Paragraph>时间复杂度是我们衡量算法的重要指标之一，一般我们使用大O记号来表示算法的时间复杂度。那么时间复杂度究竟是什么意思呢？我们为什么要用这个指标分析算法呢？</Paragraph>
<Title level={3}>Why we need Asymptotic Notation</Title>
<Paragraph>In most of the time, we don't need to calculate the exact computational time for a given algorithm.
For an input that is large enough, the coefficient on the lowest term will have little effect on the overall computational time for the whole algorithm. Therefore, the main trend of computational time is determined by the highest term of the polynomial.</Paragraph>
<Paragraph>When we are focusing on how the computational time increases as the scale of input increase, we are calculating the Asymptotic Efficiency of algorithm.</Paragraph>
<Paragraph>What we do concern is how the running time of algorithm increase as the scale of input increase. In this case, we need to employ the asymptotic notation to help us analyze the time complexity of algorithm.</Paragraph>
<Title level={3}><InlineMath math="\Theta (g(n))"/> | Big-Theta Notation</Title>
<Paragraph>This notation represents a set of functions that has a <Text strong>tight</Text> upper bound and lower bound. If a function <InlineMath math="f(x)"/> is in the set <InlineMath math="\Theta (g(n))"/>, then we know that there exists <InlineMath math="n_0"/>, <InlineMath math="c_1"/>, and <InlineMath math="c_2"/> such that</Paragraph>
<Paragraph><BlockMath math='c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n) \quad \forall n \geq n_0'/></Paragraph>
<Title level={3}><InlineMath math="O(g(n))"/> | Big-O Notation</Title>
<Paragraph>This notation represents a set of functions that has a specific upper bound. If a function <InlineMath math="f(x)"/> is in the set <InlineMath math="O(g(n))"/>, then we know that there exists a <InlineMath math="n_0"/> and <InlineMath math="c"/> such that</Paragraph>
<Paragraph><BlockMath math='0\leq f(n)\leq c\cdot g(n) \quad \forall n \geq n_0'/></Paragraph>
<Paragraph>Since the big O notation only specify the upper bound of function, it is a much bigger set than big theta notation. Which means that <InlineMath math="\Theta(n) \subseteq O(n)"/>.</Paragraph>
<Title level={3}><InlineMath math="\Omega(g(n))"/>  | Big-Omega Notation</Title>
<Paragraph>This notation represents a set of functions that has a lower bound. For all function in the set <InlineMath math="\Omega(g(n))"/>, it must satisfy that there exist <InlineMath math="c"/> and <InlineMath math="n_0"/> such that</Paragraph>
<Paragraph><BlockMath math='c\cdot g(n) \leq f(n) \quad \forall n \geq n_0'/></Paragraph>
<Title level={3}>Amortized Analysis of Time Complexity</Title>
<Paragraph>The <Text strong>Amortized Analysis of Time Complexity</Text> is the calculation of average time complexity of an operation.</Paragraph>
<Paragraph>Example: In Java, the <Text code>arrayList</Text> item is in fact an <Text code>array</Text>. When it is full, it will copy the elements from original array into a new array with length 1.5 times the original one.</Paragraph>
<Paragraph>Though it seems to be inefficient and may have a time complexity of <InlineMath math="O(n)"/> for some situation, the <Text strong>Average time complexity</Text> of adding an item into the <Text code>arrayList</Text> is still <InlineMath math="O(1)"/>.</Paragraph>
<Paragraph>Suppose reading & writing one element in an array will take time of <InlineMath math="c"/>. Constructing an array of length <InlineMath math="n = 1.5^m \cdot k"/> will take:</Paragraph>
<Paragraph><BlockMath math='
\begin{aligned}
T(n) &= \underbrace{2\sum_{i = 0}^{m}{(1.5)^ik\cdot c}}_{\text{Copy element across arrays}} + \underbrace{(1.5)^m kc}_{\text{Add element into last array}} \\
    &= 2ck\cdot \frac{1 - 1.5^m}{1 - 1.5} + 1.5^m kc\\
    &= -4ck + 4ck(1.5)^m + (1.5)^m kc\\
    &= O(1) + O(n) + O(n)\\
    &= O(n) \\
    \end{aligned}'/></Paragraph>
<Paragraph>Therefore, on average, the time it takes to add one element in the array will be <InlineMath math="O(1)"/>.</Paragraph>
</Layout>
);}