import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, PageHeader, Typography, Space, Tag } from 'antd';
import ReactMarkdown from 'react-markdown';
import math from 'remark-math';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import FailImage from '../../PublicComponent/FailImage';
import AppPageHeader from '../../PublicComponent/PageHeader';
import { LinkOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph, Link } = Typography;
const { Content } = Layout;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';
function USACO2017JanGoldAnalysis(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='3'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='USACO 2017 Jan Gold Analysis'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default USACO2017JanGoldAnalysis;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<Title level={2}>USACO 2017 Jan Gold Analysis</Title>
<Title level={3}>Problem 1 Balanced Photo</Title>
<Paragraph><a href="http://usaco.org/index.php?page=viewproblem2&cpid=693">Link to Problem</a></Paragraph>
<Title level={4}>Problem Summary</Title>
<Paragraph>John want to arrange his <InlineMath math="N"/> , <InlineMath math="1\leq N \leq 100,000"/> cows to take a photo. The height of <InlineMath math="i"/>th cow is <InlineMath math="h_i"/>. the heights of all cows are distinct. In a line, a cow is called "unbalanced" if the number of cow that is higher than it on the left is two time (or half of) the number of cow that is lower than it. Given the line of cow, give out the number of unbalanced cows in the photo.</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>First, we can range all the cows from high to low, and fill the array with the cow's height.</Paragraph>
<SyntaxHighlighter style={lightfair} language={'python'} children={`cows = [34, 6, 23, 0, 5, 99, 2]
arr = [_ for _ in range(len(cows))]
arr.sort(key=lambda x: cows[x])
`}/>
<Paragraph>After doing this, we can initialize a new list that used to store whether a cow has been counted. The new list will be filled with 0.</Paragraph>
<SyntaxHighlighter style={lightfair} language={'python'} children={`l = [0] * len(cows)
`}/>
<Paragraph>After this, we will apply following steps, suppose we are dealing with the <InlineMath math="k"/>th highest cow, where <Text code>cows[k] = n</Text></Paragraph>
<Paragraph>To decrease the time complexity of solution, we will use a data structure called <Text strong>Binary Index Tree (BIT)</Text> [<LinkOutlined /><Link href="/#/posts/BinaryIndexTree">Click to see more about BIT</Link>] on <InlineMath math="l"/>. Using BIT, we can calculate <InlineMath math="L"/>, <InlineMath math="R"/>, and update <InlineMath math="l"/> with time complexity of <InlineMath math="O(\log{n})"/>.</Paragraph>
<ol>
<li>
<Paragraph>Calculate  <InlineMath math="L = \sum_{i = 0}^n l[i]"/>. Since we will process all the cows from highest to the shortest, the result of formula will be the number of cow that is higher than current cow and stands on its left.</Paragraph>
</li>
<li>
<Paragraph>Calculate <InlineMath math="R = k - 1 - \sum_{i = 0}^n l[i]"/>. Since the current cow we are dealing with is the <InlineMath math="k"/>th highest cow, there are <InlineMath math="k-1"/> cows that are higher than current one. The cow that is higher than current cow and NOT on its left must stand on its right.</Paragraph>
</li>
<li>
<Paragraph>Calculate
   <BlockMath math='
   \frac{\min{(L, R)}}{\max{(L, R)}}
   '/>
   If the result is greater than 2, add the number of unbalanced cow by 1.</Paragraph>
</li>
<li>
<Paragraph>Set the value of <InlineMath math="l[n] = 1"/>.</Paragraph>
</li>
</ol>
<Title level={4}>Time Complexity Analysis</Title>
<ul>
<li>Time complexity of sorting - <InlineMath math="O(n\log{n})"/></li>
<li>Travel through all the cows - <InlineMath math="O(n)"/></li>
<li>Calculate L, R, and update <InlineMath math="l[n]"/> - <InlineMath math="O(\log{n})"/></li>
</ul>
<Paragraph>Therefore, the total time complexity will be <InlineMath math="O(n\log{n})"/>.</Paragraph>

<Title level={3}>Problem 2. Hoof, Paper, Scissors</Title>
<Title level={4}>Problem Summary</Title>
<Paragraph>Hoof Paper Scissors is a game like paper, scissor, stone. In the game, Hoof {'>'} Scissors, Scissors {'>'} Paper, and Paper {'>'} Hoof. The cow Bessie know the sequence of gesture that will be used by Farmer John, but it only can change its gesture for <InlineMath math="k"/> times, where <InlineMath math="k"/> is a number that is less than 20.</Paragraph>
<Paragraph>Given the gesture sequence of farmer John and maximum number of change (<InlineMath math="k"/>) for Bessie, what is the maximum number of games Bessie can win?</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>We can use the dynamic programming to solve this problem. First, we noticed that three variables are needed to represent a state for Bessie.</Paragraph>
<ol>
<li>The current gesture Bessie is using</li>
<li>The number of game Bessie has won</li>
<li>The number of time that Bessie change its gesture</li>
</ol>
<Paragraph>Therefore, we will build up a 3D array <InlineMath math="T"/> with size <InlineMath math="3	imes N 	imes k"/>, where <InlineMath math="N"/> is the number of games Bessie and John will have. <InlineMath math="T[0][n][k]"/> represent the maximum number of game that Bessie can win when it has "Hoof" at <InlineMath math="n"/>th game and has changed its gesture for <InlineMath math="k"/> times.</Paragraph>
<Paragraph>Suppose we have a function <Text code>isWin(gesture, n)</Text> that will return whether Bessie will win. If Bessie wins, return 1; otherwise, return 0. Then we can calculate through the whole table using these equations:
<BlockMath math='
\begin{aligned}
T[g][n][k] = \max (T[g][n-1][k]+ isWin(g, n),\\
T[(g+1)\%3][n-1][k-1]+ isWin(g, n),\\
T[(g + 2)\%3][n-1][k-1]+ isWin(g, n))
\end{aligned}
'/>
If either <InlineMath math="n"/> or <InlineMath math="k"/> is out of bound (not in 3D array <InlineMath math="T"/>, return 0.</Paragraph>
<Paragraph>After calculating through all the table, we should check all the elements in slice <InlineMath math="T[][N][]"/>. (the maximum win number may not require maximum number of change). The final result will be the maximum value of these <InlineMath math="3	imes k"/> values.</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>Since we know that <InlineMath math="1\leq N\leq 100,000"/> and <InlineMath math="1\leq k\leq 20"/>, the 3D array we will construct has a size of <InlineMath math="3	\times100,000\times20 = 6 \times 10^7"/>. Since we need to calculate through the whole table, our program may require <InlineMath math="1 \times 10^8"/> computational steps and time complexity of <InlineMath math="O(kN)"/>. Since this time complexity is on the edge of TLE, we should use Java to solve this problem.</Paragraph>
</Layout>
);}