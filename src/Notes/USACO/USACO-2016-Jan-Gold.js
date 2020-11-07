import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, Typography, Space, Tag, Divider } from 'antd';
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
function USACO2016JanGoldAnalysis(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='3'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='USACO 2016 Jan Gold Analysis'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default USACO2016JanGoldAnalysis;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<div>
    <Tag color="gold">Gold Division</Tag><Tag color="green">Ready</Tag>
    <Divider></Divider>
</div>
<Title level={3}>Problem 1. Angry Cows</Title>
<Title level={4}>Question Summary</Title>
<Paragraph><a href="http://usaco.org/index.php?page=viewproblem2&amp;cpid=597">Link to Question</a></Paragraph>
<Paragraph>The <InlineMath math="N"/> hey are on a line, with position <InlineMath math="x_1, x_2, \cdots, x_N"/>. If the cow is shoot to position <InlineMath math="x"/> with force <InlineMath math="R"/>, then all the cows in range <InlineMath math="x \pm R"/> will explode. The hey exploded will have a range of <InlineMath math="x' \pm (R - 1)"/>, the second round of hey exploded will have a range of <InlineMath math="x'' \pm (R-2)"/>, and so on.</Paragraph>
<Paragraph>The question requires the <Text strong>minimum</Text> power <InlineMath math="R"/> with one-decimal accuracy that will let all hey on the line explode.
<BlockMath math="
2 \leq N \leq 50,000 \quad \quad \quad \forall n, 0 \leq x_n \leq 1,000,000
"/></Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph><Text strong>Binary Search</Text></Paragraph>
<Paragraph>There exists an <InlineMath math="r'"/> such that for all <InlineMath math="R&gt;r'"/>  , all the hey on the line will explode, so it is possible to use binary search in this question.</Paragraph>
<Paragraph>Storing all the positions <InlineMath math="x_1"/> to <InlineMath math="x_n"/> in a list, we can construct two pointers that represents the "frontier" of explosion.</Paragraph>
<SyntaxHighlighter style={lightfair} language="python" children={`
positions = [x1, x2, ..., xn]
p1, p2 = None, None`}/>
<Paragraph>For each explosion, we can use a time complexity of <InlineMath math="O(1)"/> to update the pointer's position.</Paragraph>
<SyntaxHighlighter style={lightfair} language="python" children={`
def updatePosition(p1, p2, R):
    if positions[p1-1] - positions[p1] <= R:
        p1 -= 1
    if positions[p2 + 1] - positions[p2] <= R:
        p2 += 1
    return p1, p2, R - 1`}/>
<Paragraph>Therefore, it will take time of <InlineMath math="O(n)"/> for us to simulate one case.</Paragraph>
<Paragraph><em>One optimization is to stop the simulation immediately and return <Text code>false</Text> if the chain reaction stop</em></Paragraph>
<Paragraph>If we try all the possible starting point, the total time complexity will be <InlineMath math="O(n^2\log{n})"/> and it will lead to TLE for Python.</Paragraph>
<Paragraph>Noticing for all possible starting points, given a fixed force <InlineMath math="R"/>, if starting at <InlineMath math="x_i"/> can lead a chain reaction that explode all, we note as <Text code>true</Text>, otherwise, <Text code>false</Text>, the resulting simulation result should look like this:</Paragraph>

<Paragraph>We can use a binary search to find the starting point as well.</Paragraph>
<SyntaxHighlighter language='python' showLineNumbers={false} style={lightfair}
children={`
def findStartLeft(l, r, R):
    # return True if current R can lead to a chain reaction
    m = (l + r)/2
    if l <= r:
        if explodePropagateLeft(l): return l
        else: return -1
    if explodePropgateLeft(m): return findStartLeft(m, r, R)
    else: return findStartLeft(l, m-1, R)
def findStartRight(l, r, R):
    m = (l + r)/2
    if l <= r:
        if explodePropagateRight(l): return l
        else: return -1
    if explodePropgateRight(m): return findStartRight(l, m, R)
    else: return findStartRight(m+1, r, R)
def isValid(l, r, R):
    return findStartLeft(l, r, R) <= findStartRight(l, r, R)`}
/>

<Paragraph>By using nested binary search, the time complexity can be reduced to <InlineMath math="O(n\log{n}\log{n})"/></Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>With time complexity of <InlineMath math="O(n \log{n}\log{n})"/> and <InlineMath math="n < 50,000"/>, the approximate steps it need is <InlineMath math="50,000 	imes 16	imes 16 = 1.3	imes 10^7"/> (Consider that we are performing two binary search to determine the existence of starting point, the actual computation step should multiply with factor of <InlineMath math="2"/>, which is approx. <InlineMath math="2.6	imes 10^7"/>), which is an acceptable computational time complexity for Python 3.</Paragraph>
<Divider></Divider>
<Title level={3}>Problem 2. Radio Contact</Title>
<Paragraph><a href="http://usaco.org/index.php?page=viewproblem2&amp;cpid=598">Link to Question</a></Paragraph>
<Title level={4}>Question Summary</Title>
<Paragraph>Farmer and Bessie are in a two-dimension space with size <InlineMath math="1000	imes 1000"/>. Farmer start at <InlineMath math="f_x, f_y"/>, while Bessie start at <InlineMath math="b_x, b_y"/>. (<InlineMath math="0 \leq f_x, f_y, b_x, b_y \leq 1000"/>)</Paragraph>
<Paragraph>Farmer will walk on a path of length <InlineMath math="M"/>, which has "N", "W", "E", "S" in the path and Bessie will walk on a path of length <InlineMath math="N"/>, which has "N", "W", "E", "S" in it. <InlineMath math="0 \leq M, N \leq 1000"/></Paragraph>
<Paragraph>At each tick, either Farmer or Bessie can choose to stay at current position. A radio that consumes energy of <InlineMath math="\text{Distance}(Farmer, Bessie)^2"/>  will remain open until both farmer and Bessie finish their path. <Text strong>What is the minimum energy the radio will cost</Text>?</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>This question can be solved using Dynamic Programming.</Paragraph>
<Paragraph>Build up a table with size <InlineMath math="M 	imes N"/> called <InlineMath math="E"/>. <InlineMath math="E[m][n]"/> represent the <Text strong>minimum energy radio has consumed</Text> after farmer takes <InlineMath math="m"/> moves and Bessie takes <InlineMath math="n"/> moves. Since the square of distance is always non-negative, either farmer or Bessie (or both) will have to take one step in one tick. Therefore, the result at <InlineMath math="E[m][n]"/> can be used to calculate <InlineMath math="E[m + 1][n]"/>, <InlineMath math="E[m  + 1][n + 1]"/> and <InlineMath math="E[m][n + 1]"/>, which represent that Bessie stop, no one stop, and Farmer stop, respectively.</Paragraph>
<Paragraph>To start at a specific position, say <InlineMath math="E[x][y]"/> in the table, we must make sure the value on this position is already the minimum energy, which means that <InlineMath math="E[x-1][y]"/>, <InlineMath math="E[x-1][y-1]"/>, and <InlineMath math="E[x][y-1]"/> has been calculated. Therefore, we should calculate the whole table from top to down, and in each row from left to right.</Paragraph>
<Title level={4}>Time and Space Complexity Analysis</Title>
<Paragraph>Calculating the value of adjacent cell in a table will have a time complexity of <InlineMath math="O(1)"/>, and we will have to calculate each cell inside the table, so the total time complexity will be <InlineMath math="O(MN) pprox O(N^2)"/>. Since the upper bound of <InlineMath math="N"/> is only <InlineMath math="1	imes 10^3"/>, we can use Python3 to solve this problem.</Paragraph>
<Paragraph>To store the result for Dynamic Programming (memorization), we have to build a two-dimensional array with size <InlineMath math="1000	imes 1000"/>, and the space complexity should not be a problem.</Paragraph>
<Divider></Divider>
<Title level={3}>Problem 3. Lights Out</Title>
<Paragraph><a href="http://usaco.org/index.php?page=viewproblem2&amp;cpid=599">Link to Question</a></Paragraph>
<Title level={4}>Question Summary</Title>
<Paragraph>Bessie is on a vertex of a simple polygon with <InlineMath math="n"/> vertices. The coordinate of vertices are <InlineMath math="(x_1, y_1), \cdots (x_n, y_n)"/> listed in a clockwise order. The exit of polygon is located at <InlineMath math="(x_1, y_1)"/>. When the light is out, she forgot which vertex she is on but still remember the whole polygon. By moving clockwise and passing through several edges, she will be able to identify the edge she is on. After she know her position, she will either move clockwise or counter clockwise to get to the nearest exit.</Paragraph>
<Paragraph>The question asks the <Text strong>greatest difference</Text> between distance Bessie has to go in dark to exit the polygon and the distance Bessie has to go with lights on to exit the polygon in worst case.</Paragraph>
<Title level={4}>Sample Case Explanation</Title>
<Paragraph><Image alt="image" src={`${PhotoLink}USACO2016JanGold3_1.png`} width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>The Problem can be divide into two parts:</Paragraph>
<ol>
<li>Help Bessie identify its actual position (calculate the length Bessie has to walk clockwise to identify her position)</li>
<li>Calculate the shortest distance between an arbitrary vertex on polygon and the exit.</li>
</ol>
<Paragraph>For the <Text strong>first</Text> part, we can convert the polygon to a string, where A, B, C and D represents four different types of corners, and integer <InlineMath math="m"/> represent the length of edge.</Paragraph>
<Paragraph><Image src={`${PhotoLink}USACO2016JanGold3_2.jpg`} alt="image2" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>For example, the polygon in sample can be represented as</Paragraph>
<Paragraph><BlockMath math="
	\text{10C1D10A1}
"/></Paragraph>
<Paragraph>One primitive way to find the shortest unique substring is to maintain a set of pointers, where the pointers represent the starting of one substring that has the same pattern.</Paragraph>
<Paragraph type="secondary">
<Paragraph>For instance, suppose we have a string "10C1D10A10C10A", when Bessie pass by the first edge, she can get information "10C". At this time, the pointer set will be {0, 8}, since [0:3] and [8:11] are both "10C".</Paragraph>
<Paragraph>Then, Bessie pass by another edge and get new info "1D",  the pointer set will be reduced to {0}. Since [0 + 3: 0+3+2] is "1D", while "[8+3: 8+3+2]" is "10".</Paragraph>
</Paragraph>
<Paragraph>This will have a time complexity of <InlineMath math="O(n^2)"/>.</Paragraph>
<Paragraph>For the <Text strong>second</Text> part, we can store a list <InlineMath math="\text{Dist}"/>  where <InlineMath math="\text{Dist}[n]"/> represent the distance between <InlineMath math="n"/>th vertex and the exit when Bessie moves counterclockwise. Also, we will record the perimeter of whole polygon so that the distance between nth vertex and the exit when Bessie moves clockwise can be calculated using <InlineMath math=" \text{Perimeter}- \text{Dist}[n]"/>. This has a time complexity of <InlineMath math="O(1)"/>.</Paragraph>
<Paragraph>Since we <InlineMath math="n"/> vertexes to go through, the total time complexity will be <InlineMath math="O(n^3)"/>.</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph><InlineMath math="4\leq N\leq 200"/>, so time complexity of <InlineMath math="O(n^3)"/> will only lead to a computational step of at most <InlineMath math="1.6	imes 10^7"/> steps, and this problem can be solved by Python3 with the proposed solution.</Paragraph>
</Layout>
);}