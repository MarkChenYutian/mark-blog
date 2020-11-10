import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Typography, Tag, Divider } from 'antd';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import AppPageHeader from '../../PublicComponent/PageHeader';
const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
function USACO2016DecGoldAnalysis(){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='3'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='USACO 2016 Dec Gold Analysis'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default USACO2016DecGoldAnalysis;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<div>
<Tag color="gold">Gold Division</Tag><Tag color='green'>Available</Tag>
    <Divider></Divider>
</div>
<Title level={3}>Problem 1 Moo-cast</Title>
<Title level={4}>Problem Summary</Title>
<Paragraph>Cows want to  communicate with each other by walkie-talkies. It is known that a walkie-talkie that costs <InlineMath math="X"/> dollars will have a broadcast radius of <InlineMath math="\sqrt{X}"/>. Given the location of all the cows in the form of <InlineMath math="(x, y)"/> coordinate, what is the minimum cost to buy walkie-talkie such that every cow can communicate with each other (may not be directly but through several 'hops').</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>Basically, what we want to find in this question is the greatest shortest distance between different points. For each point, we have a shortest distance that connect to other points. The amount of money required is the greatest 'shortest distance'.</Paragraph>
<Paragraph><Text strong>However, this question requires more than this, since linking each point with the nearest point may lead to several subgraphs that are not connected between each other</Text>.</Paragraph>
<Paragraph>Therefore, we can traverse all the possible point pair and calculate their distance square if they are not in the same sub graph. Below is a draft of code</Paragraph>
<SyntaxHighlighter style={lightfair} language='python'
children={`
Points = [(x1, y1), (x2, y2), ..., (xn, yn)]
X = -1
for p1 in range (len(Points)):
	a = Points[p1]
	for p2 in range (p1 + 1, len(Points)):
		b = Points[p2]
		if not InSameGraph(a, b):
			X = max(X, math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2)
return X
`}
/>
<Paragraph>The function <Text code>InSameGraph</Text> can be implemented by storing all the points in a UFDS (Union-find Disjoint Set). With appropriate path compression methods, the time complexity of <Text code>InSameGraph</Text> can be bound to <InlineMath math="O(\log{n})"/>.</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>This proposed algorithm has a time complexity of <InlineMath math="O(n^2\log{n})"/>. Since the number of point <InlineMath math="n"/> in the question is no more than 1000, the computational step of this proposed solution should be no more than <InlineMath math="1\times 10^7"/>, which means that it will not  use more than 4 sec to run.</Paragraph>

<Title level={3}>Problem 2. Cow Checklist</Title>
<Title level={4}>Problem Summary</Title>
<Paragraph>There are two types of cows, noted as type H and type G. There are <InlineMath math="H"/> cows that are type H and <InlineMath math="G"/> cows that are type G. However, John must access all the cows of type H in order from 1 to <InlineMath math="H"/>, and access all the cows of type G in order from 1 to <InlineMath math="G"/>.</Paragraph>
<Paragraph>The position of all cows are given as x-y coordinate, moving distance <InlineMath math="d"/> will cost the energy of <InlineMath math="d^2"/>, what is the minimum energy consumption for John to access all cows.</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>We can use dynamic programming to solve this problem. Let <InlineMath math="E[0][h][g]"/> represent the minimum energy John has to consume to visit <InlineMath math="h"/> H-type cows, <InlineMath math="g"/> G-type cows, and finally stop at H-type cow. <InlineMath math="E[1][h][g]"/> represent the minimum energy John has to consume to visit <InlineMath math="h"/> H-type cows, <InlineMath math="g"/> G-type cows, and finally stop at G-type cow.</Paragraph>
<Paragraph>Then, we can use this function to calculate through the whole table.
<BlockMath math='
E[0][h + 1][g] = \min(E[1][h][g]+Dist(G_g, H_{h+1})^2,\, E[0][h][g] + Dist(H_h, H_{h+1})^2)
'/></Paragraph>
<Paragraph><BlockMath math='
E[0][h][g+1] = \min(E[1][h][g]+Dist(G_g, G_{g+1})^2,\, E[0][h][g] + Dist(H_h, G_{g+1})^2)
'/></Paragraph>
<Paragraph>... (the equation for another 2 situations are omitted)</Paragraph>
<Paragraph>By doing so, we can calculate the result of <InlineMath math="E[0][H][G]"/>, which will be the final result (since John have to end his walk at a H-type cow).</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>Since calculating one number in the table will have a time complexity of <InlineMath math="O(1)"/>, the total time complexity will be <InlineMath math="O(HG)"/>. Because <InlineMath math="1\leq H\leq 1000"/> and <InlineMath math="1 \leq G \leq 1000"/>, the algorithm will require at most <InlineMath math="1\times 10^7"/> steps, and it is possible for Python 3 to run in 4 sec.</Paragraph>
<Title level={3}>Problem 3. Lasers and Mirrors</Title>
<Title level={4}>Problem Summary</Title>
<Paragraph>Cows want to direct a laser to the barn. However, they can't move the laser generator. Therefore, they decide to install a set of mirrors that will change the direction of laser on the fence post. Given the position of laser generator, barn, and fence posts, the output will be the <Text strong>minimum</Text> amount of reflection  the laser has to pass to arrive at the barn.</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>Basically, we can see each post on the field as two different lines, one horizontal and one vertical. Each post can help us to move from a horizontal line to vertical line (and vice versa).</Paragraph>
<Paragraph>We can use a <em>breadth first search</em> (BFS) directly here. Since the property of BFS makes sure the first path found is the shortest path, we will break out the loop as long as we found path. The pseudocode will be like this:</Paragraph>
<SyntaxHighlighter style={lightfair} language={'python'} children={`
# Line is noted as (coordinate, horizontal?, reflectTime)
fringe = LinkList()
fringe.append((x1, True, 0), (y1, False, 0))
exploredEdge = set()
result = -1
while len(fringe) > 0:
    currEdge = fringe.pop()
    if (currEdge[0], currEdge[1]) in exploredEdge: continue
    exploredEdge.add((currEdge[0], currEdge[1]))
    if isResult(currEdge): result = currEdge[2]
    for newEdge in getTransitionEdge(currEdge):
        fringe.add((newEdge[0], not newEdge[1], currEdge[2] + 1)) # changing edge means the laser has been reflected for one more time, also, the direction will be (must be) changed after reflection
print(result)
`}/>
<Paragraph>Since there are <InlineMath math="1 \times 10^5"/> posts, the time complexity should be at most <InlineMath math="O(n \log{n})"/>. Since the BFS itself will have a time complexity of <InlineMath math="O(n)"/>, we must implement <Text code>isResult</Text> and <Text code>getTransitionEdge</Text> functions with time complexity of <InlineMath math="O(\log n)"/>.</Paragraph>
<Paragraph>Here are the ways to implement these two functions:</Paragraph>
<Paragraph><Text code>isResult</Text> - if the line is horizontal and its <InlineMath math="y"/> value equals to <InlineMath math="y_2"/> or the line is vertical and its <InlineMath math="x"/> value equals to <InlineMath math="x_2"/>, the line will pass through the destination. This operation can be done in <InlineMath math="O(1)"/>.</Paragraph>
<Paragraph><Text code>getTransitionEdge</Text> - Here, we need two different dictionaries to help us. One dictionary use the <em>x-coordinate</em> of line as key, and value is a list of <em>y-coordinates</em>. Another dictionary use the <em>y-coordinate</em> of line as key, and value is a list of <em>x-coordinates</em>. When we are on a horizontal line, we will use the y -`{'>'}` x dictionary. When we are on a vertical line, we will use the x -`{'>'}` y dictionary. This operation can be done in <InlineMath math="O(m)"/>, where <InlineMath math="m"/> is the number of values in one key.</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>The total time complexity of this proposed solution is <InlineMath math="O(mn)"/>, where <InlineMath math="m"/> is the <em>Maximum number of posts on one line</em>, and <InlineMath math="n"/> is the total number of posts. <Text strong>There do exist some extreme case where <InlineMath math="m\approx n"/>.</Text> Under such case, however, the time complexity of BFS will be greatly decreasing, since the depth of tree will decrease drastically.</Paragraph>
<Paragraph>Therefore, this program will be able to give out solution in less than 4 sec for most of the cases.</Paragraph>
</Layout>
);}