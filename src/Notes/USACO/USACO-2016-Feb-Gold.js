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
function USACO2016FebGoldAnalysis(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='3'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='USACO2016FebGoldAnalysis'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default USACO2016FebGoldAnalysis;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<div>
    <Tag color="green">Ready</Tag>
    <Divider></Divider>
</div>
<Title level={3}>Problem 1 Circular Barn</Title>
<Paragraph><a href="http://usaco.org/index.php?page=viewproblem2&amp;cpid=621">Link to Question</a></Paragraph>
<Title level={4}>Question Summary</Title>
<Paragraph>The farmer has a circular barn with room numbered from 1 to <InlineMath math="n, 3\leq n\leq 1	imes 10^5"/> . Each room is connected to the rooms that is adjacent to it, and there has one door in each room opened to outside space. Farmer wants each single cow to stay in one single room. Currently, the cows are staying outside the barn randomly, which means that some door may have multiple cows outside it, or have no cows outside it. The energy cost for each cow is <InlineMath math="	ext{dist}^2"/>. The question ask for the minimum energy cost to make each cow stay in each room singly.</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>Observing the operation, we can notice this truth: <Text strong>If cow A's destination is after the starting point of cow B, the most energy-saving solution will need to exchange the destination of cow A and B.</Text></Paragraph>
<Paragraph>Based on this solution, we can maintain a <Text code>queue</Text> to store the starting points of cows. When we meet one empty room, we pop out a cow from the queue and add up the distance square of that cow's moving distance.</Paragraph>
<Paragraph>By repeating this process all around the circular barn, we can get the minimum energy cost.</Paragraph>
<Paragraph>When we can always drop down one cow per empty room, the result will be optimized. (Or, one cow will have to move for more than 1 round aside the barn)</Paragraph>
<Paragraph>The cost of maintaining a queue, using linked list, is <InlineMath math="O(1)"/> for pop and push operation. Since there will have <InlineMath math="n"/> cows, the total time complexity will be <InlineMath math="O(n)"/> for a single starting point.</Paragraph>
<Paragraph>There are totally <InlineMath math="n"/> possible starting points, so the total complexity will be <InlineMath math="O(n^2)"/>. This will lead to TLE for the result since there will have approx.  <InlineMath math="1	imes 10^{10}"/> computational steps at most. Therefore, we need to optimize our solution</Paragraph>
<Paragraph>The main problem in the solution above is that we will have to go through all possible starting point, and this will consume a lot of time.</Paragraph>
<Paragraph>To minimize the time of try, we can first start at a random position, and note the room number that has maximum number of cows in the queue. Then, we can start directly at that position. This can lower the number of try from <InlineMath math="n"/> to 2, and the total time complexity will be <InlineMath math="O(n)"/>.</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>Since <InlineMath math="3\leq n\leq 1	imes 10^5"/>, with the time complexity of <InlineMath math="O(n)"/>, we can have at most <InlineMath math="1	imes 10^6"/> computational step and we can AC this problem with Python 3 in the time limit.</Paragraph>
<Divider></Divider>
<Title level={3}>Problem 2 Circular Barn Revisited</Title>
<Paragraph><a href="http://usaco.org/index.php?page=viewproblem2&amp;cpid=622">Link to Question</a></Paragraph>
<Title level={4}>Problem Summary</Title>
<Paragraph>The farmer wants to have exactly <InlineMath math="r_i"/> cows in room <InlineMath math="i"/>, where <InlineMath math="0\leq r_i \leq 1	imes 10^6"/>. Although there are <InlineMath math="n"/> rooms in the circular barn, farmer John only want to open <InlineMath math="k"/> doors to let cows enter the barn (<InlineMath math="1\leq k \leq 7"/>). All the cows can  ONLY walk clockwise inside the barn. He wants to know the minimum total distance for cows to move after entering the barn.</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>One method to analyze a problem that has a "circular" structure in it is to discuss the problem in a linear structure, which is obviously easier. Consider there is a line of rooms in the barn, and the cows can only move from left to right. We will soon get some obvious facts:</Paragraph>
<ol>
<li>The first door MUST be open on the left-most room, or no cow can arrive at the left-most room.</li>
</ol>
<Paragraph><Image alt="image1" src="https://markchenyutian.github.io/Markchen_Blog/Asset/USACO_2016_Feb_2_2.jpg" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<ol>
<li>Suppose a cow enters the barn in door <InlineMath math="k-1"/>, it must arrive its destination before <InlineMath math="k"/>th door, or it can just enter the barn from <InlineMath math="k"/>th door and have less walking distance inside the barn.</li>
</ol>
<Paragraph><Image alt="image2" src="https://markchenyutian.github.io/Markchen_Blog/Asset/USACO_2016_Feb_2_1.jpg" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>Using these two facts, we can use the dynamic programming to solve the linear barn problem.</Paragraph>
<Paragraph>Let <InlineMath math="T"/> represent a table of size <InlineMath math="n	imes (k-1)"/>.  The value of <InlineMath math="T[n'][k']"/> represent the minimum total distance the cow has walked when there's <InlineMath math="k'+1"/> (since the first door must be open) doors open in the first <InlineMath math="n'"/> doors. The calculation of table can be represent in this pseudocode:
<BlockMath math="
egin{aligned}
&amp;	ext{each element in }T = \infty\
&amp;T[0][0] \leftarrow (0, 1)\
&amp;	ext{for }T[i][j] 	ext{ in } T\
&amp;\quad \quad	ext{if }T[i+1][j+1][0] &gt; T[i][j][0]\
&amp;\quad \quad \quad \quad T[i + 1][j + 1] \leftarrow (T[i][j][0], 0)\
&amp;\quad \quad 	ext{if }T[i][j+1][0] &gt; (T[i][j][0] + T[i][j][1] 	imes r_{j+1})\
&amp;\quad \quad \quad \quad T[i][j + 1] \leftarrow (T[i][j][0] + T[i][j][1] 	imes r_{j+1}, T[i][j][1] + 1)\
&amp;return\; T[k-1][n]
\end{aligned}
"/>
<Image alt="image3" src="https://markchenyutian.github.io/Markchen_Blog/Asset/USACO_2016_Feb_2_3.jpg" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>Each element in table <InlineMath math="T"/> is made up of a tuple, where the first element represent the minimum total distance the cow has walked when there's <InlineMath math="k'"/> doors open in the first <InlineMath math="n'"/> doors and the second element represent the distance of last opened door to  <InlineMath math="n'"/>th door.</Paragraph>
<Paragraph>By calculating through this table, we can get the minimum total distance walked when the bar has a start on one specific position with time complexity of <InlineMath math="O(nk)"/>.</Paragraph>
<Paragraph>Since the whole problem is based on a <Text strong>circular barn</Text>, we should try all <InlineMath math="n"/> possible starting points. Therefore, the total time complexity will be <InlineMath math="O(n^2k)"/>.</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>Since <InlineMath math="3\leq n\leq 100"/> and <InlineMath math="1\leq k \leq 7"/>, we can know that the whole algorithm will have at most <InlineMath math="1	imes 10^6"/> steps to finish the calculate. Therefore, we can use Python 3 to AC this problem.</Paragraph>
<Divider></Divider>
<Title level={3}>Problem 3 Fenced In</Title>
<Title level={4}>Problem Summary</Title>
<Paragraph>There's a rectangle with corner <InlineMath math="(0,0)"/> and <InlineMath math="(A, B)"/>. Farmer John built <InlineMath math="n"/> vertical fences at <InlineMath math="x = a_1, a_2, \cdots a_n"/> and <InlineMath math="m"/> horizontal fences at <InlineMath math="y = b_1, b_2, \cdots, b_m"/>. By doing so, the whole rectangle is divided into <InlineMath math="(n + 1)(m + 1)"/> grids. Now, the farmer want to connect each grid together by removing some of the fences in the rectangle. What is the minimum distance of fence the farmer has to remove to connect EVERY cell in rectangle?</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>We can see each cell in the rectangle as a node, while the fences between each cell as a bi-directional weighted edge, where the weight equals to the length of fence between two cells. By doing so, we can see the whole field as a graph.</Paragraph>
<Paragraph><Image alt="image4" src="https://markchenyutian.github.io/Markchen_Blog/Asset/USACO_2016_Feb_3_1.jpg" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>After we see the whole grid as a graph, we can find that the problem simply want us to provide the sum of weights of the <Text strong>Minimum Span Tree</Text> for the whole graph. Therefore, we can use the greedy algorithm to solve this problem. The pseudocode is shown below</Paragraph>
<Paragraph><BlockMath math="
egin{aligned}
&amp; // 	ext{Fringe is a Priority Queue that will always output the smallest element in it}\
&amp;L =0\
&amp;	ext{Connected} = \phi \
&amp;	ext{Fringe} = { V_0.allEdges } \
&amp;	ext{While Fringe is not Empty}\
&amp;\quad \quad 	ext{newEdge } \leftarrow 	ext{Fringe.pop()}\
&amp;\quad \quad 	ext{While newEdge.destination } \in 	ext{Connected}\
&amp;\quad \quad \quad \quad 	ext{newEdge }\leftarrow 	ext{Fringe.pop()}\
&amp;\quad \quad 	ext{Fringe }=	ext{Fringe } \cup 	ext{ newEdge.destination.allEdges}\
&amp;\quad \quad 	ext{Connected }=	ext{Connected }\cup 	ext{ newEdge.destination}\
&amp;\quad \quad L \leftarrow L+	ext{newEdge.wieght}\
&amp;return\quad L
\end{aligned}
"/></Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>The time complexity of min-span tree algorithm is <InlineMath math="O(E)"/>, which, in this case, equals to <InlineMath math="O(mn)"/>. Since <InlineMath math="0\leq m\leq 2000"/> and <InlineMath math="0\leq n\leq 2000"/>, the expected computational steps it will take will be at most <InlineMath math="1	imes 10^7"/>. Therefore, it is highly possible that we can use Python 3 to AC this problem.</Paragraph>
</Layout>
);}