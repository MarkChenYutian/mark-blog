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
function USACO2016DecGoldAnalysis(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='3'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='USACO2016DecGold'/>
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
<Title level={2}>USACO 2016 Dec Gold Analysis</Title>
<Divider></Divider>
<Title level={3}>Problem 1 Moo-cast</Title>
<Title level={4}>Problem Summary</Title>
<Paragraph>Cows want to  communicate with each other by walkie-talkies. It is known that a walkie-talkie that costs <InlineMath math="X"/> dollars will have a broadcast radius of <InlineMath math="\sqrt{X}"/>. Given the location of all the cows in the form of <InlineMath math="(x, y)"/> coordinate, what is the minimum cost to buy walkie-talkie such that every cow can communicate with each other (may not be directly but through several 'hops').</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>Basically, what we want to find in this question is the greatest shortest distance between different points. For each point, we have a shortest distance that connect to other points. The amount of money required is the greatest 'shortest distance'.</Paragraph>
<Paragraph>Therefore, we can simply traverse all the possible point pair and calculate their distance square. Below is a draft of code</Paragraph>
<SyntaxHighlighter style={lightfair} language='python'
children={`
Points = [(x1, y1), (x2, y2), ..., (xn, yn)]
X = -1
for p1 in range (len(Points)):
	a = Points[p1]
	for p2 in range (p1 + 1, len(Points)):
		b = Points[p2]
		X = max(X, math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2)
return X
`}
/>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>This proposed algorithm has a time complexity of <InlineMath math="O(n^2)"/>. Since the number of point <InlineMath math="n"/> in the question is no more than 1000, the computational step of this proposed solution should be no more than <InlineMath math="1	imes 10^7"/>, which means that it will not  use more than 4 sec to run.</Paragraph>
<Title level={4}>Appendix</Title>
<Paragraph>In fact, this solution is not the optimal solution. There do exist a way to find the nearest pair more efficiently using binary search and Divide and Conquer. <em>Page 343 of Competitive Programming 3, Chapter 9</em> describe the detailed solution of <Text strong>Closest Pair Problem</Text>.</Paragraph>
</Layout>
);}