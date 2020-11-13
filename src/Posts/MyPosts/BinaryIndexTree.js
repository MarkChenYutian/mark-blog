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
function BinaryIndexTree(){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='What is Binary Index Tree (Fenwick Tree)'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default BinaryIndexTree;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<div>
    <Tag color='cyan'>Algorithms</Tag>
    <Divider></Divider>
</div>
<Title level={3}>Why we Need Binary Index Tree</Title>
<Title level={4}>Traditional Approach 1</Title>
<Paragraph>在实际生活中，我们常常需要计算一个给定<Text code>array</Text> 特定范围内所有数的和。如果只有这一个需求的话，我们可以很方便的构建出一个静态的数组来达到<InlineMath math="O(1)"/>的时间复杂度。在这样的一个数组中，每一个位置上的数符合：</Paragraph>
<Paragraph><BlockMath math='
\text{arr}[n] = \text{arr}[n - 1] + x[n]
'/></Paragraph>
<Paragraph><BlockMath math='
\text{arr}[0] = x[0]
'/></Paragraph>
<Paragraph>这样，当我们需要计算数列<Text code>x</Text>中<Text code>m</Text>到<Text code>n</Text>的数字的和时，我们只用计算 <Text code>arr[n] - arr[m]</Text>就可以了。</Paragraph>
<Paragraph>然而，与计算的超高性能相比，这种方法要求我们操作的数列<Text code>x</Text>是基本保持不变的，一旦<Text code>x</Text>中的某一个值发生了变化，我们就要更新一次整个<Text code>arr</Text>数组，这直接导致了修改的<InlineMath math="O(n)"/>复杂度。</Paragraph>
<Title level={4}>Traditional Approach 2</Title>
<Paragraph>如果我们想要我们的数据结构可以接受大量的修改，我们也可以使用一个更加朴素的方法 - 我们只存储数列<Text code>x</Text>，每次要计算区间和时，我们就遍历一次整个区间从而计算区间内所有元素的和。</Paragraph>
<Paragraph>使用这种朴素的方法，虽然计算区间和的复杂度位<InlineMath math="O(n)"/>，每次我们对数组<Text code>x</Text>进行修改却不需要额外的操作，只有<InlineMath math="O(1)"/>的复杂度。</Paragraph>
<Title level={4}>Why Traditional Approach Fail</Title>
<Paragraph>我们知道，一个算法的时间复杂度是由算法中最耗时间的步骤所决定的，也就是说，如果我们在一个循环中同时需要查询数组<Text code>x</Text>的区间和并且修改<Text code>x</Text>，那么整个循环内的时间复杂度会由其中最耗时间的步骤决定 - <InlineMath math="O(n)"/>。</Paragraph>
<Paragraph>二进制索引树被设计出来处理这种情况，它很好的在两种传统方法间做出取舍，使得我们可以同时以<InlineMath math="O(\log{n})"/>的时间复杂度进行数组的修改和区间和查询操作。</Paragraph>
<Title level={3}>Data Structure - BIT</Title>
<Paragraph>虽然BIT的名字是“二叉索引树”，实际上在程序中，我们并没有使用一个“树”的结构去存储BIT对象，而是将其放在一个数组中，这种结构被称为“树状数组”，许多树结构也使用了这样的形式 - 例如二叉堆模型。</Paragraph>
<Paragraph>这是一个BIT数据结构的内部属性：</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`public class BinaryIndexTree{
    private int[] tree;
    private int[] val;

    // ...

}
`}/>
<Paragraph>BIT之所以中间有一个“index"，是因为BIT的构造和操作过程中都要使用索引的一个属性 - 索引( + 1后)二进制中最后一个1的位置。</Paragraph>
<Title level={4}>Helper Function - Least Significant One</Title>
<Paragraph>在 Java 中，我们可以写一个这样的函数来找到整数二进制最后一位的1在哪里：</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`public int findLastBinaryOne(int index){
    String binaryIndex = Integer.toBinaryString(index + 1);
    for (int i = binaryIndex.length() - 1; i > -1; i --){
        if (binaryIndex.substring(i, i + 1).equals("1")){return binaryIndex.length() - i;}
    }
    return -1;
}
`}/>
<Paragraph>通过计算索引 + 1后的二进制的最后一位1在哪里，我们可以得到BIT中这个位置的节点在树中的高度。</Paragraph>
<Title level={4}>Construct BIT</Title>
<Paragraph>如果<Text code>findLastBinaryOne</Text> 返回为1，数组中这个位置是BIT的叶子节点，只存储输入数列<Text code>x</Text>在这个位置的值（例如在下图中的 index = 0, 2, 4, 6, ...）的位置。</Paragraph>
<Paragraph>如果<Text code>findLastBinaryOne(index)</Text>的返回是<Text code>n</Text> 且<InlineMath math="n > 1"/>，在BIT中，这个位置的值等于<Text code>x</Text>中这个位置的值加上<Text code>BIT[index - 2**0]</Text>， <Text code>BIT[index - 2 ** 1]</Text> ... <Text code>BIT[index - 2 ** (n - 2)]</Text></Paragraph>
<Paragraph><Image alt="image-20201113173944215" src={`${PhotoLink}BinaryIndexTree.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>假设我们计算BIT中一个位置的值（假设BIT树中前面的值都是正确的），我们可以这样写：</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`private int getBITVal(int i){
    //return the BIT value on i
    int sum = 0;
    int power = 0;
    int pos = i;
    int maxPower = this.findLastBinaryOne(i);
    while (i >= 0 && power < maxPower){
        if (power == 0){sum += this.val[i];}
        else{sum += this.tree[i];}
        i = pos;
        i -= （int) Math.pow(2, power);
        power ++;
    }
    return sum;
}
`}/>
<Paragraph>因为每次我们调用<Text code>getBITVal</Text>函数的时候我们都假设<Text code>BIT</Text>中左侧的地方已经被初始好了，当我们初始化整个BIT时，我们需要从左到右的计算数组中每一个位置的 <Text code>BIT</Text>值</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`private void initializeBIT(){
    for (int i = 0; i < this.tree.length; i ++){this.tree[i] = this.getBITVal(i);}
}
`}/>
<Paragraph>考虑到每次调用<Text code>getBITVal</Text>都需要<InlineMath math="O(\log{n})"/>的时间复杂度，我们初始化整个BIT数组的时间复杂度会是<InlineMath math="O(n \log{n})"/>。虽然高于传统方法的<InlineMath math="O(n)"/>，但是考虑到一般初始化代码只会执行一次，这个时间复杂度是可以接受的</Paragraph>
<Title level={4}>Get Sum from BIT</Title>
<Paragraph>我们现在已经有了BIT，那么我们怎么使用它查询一个区间内的元素和呢？首先，我们先看如何通过BIT查询 0 - <Text code>index</Text>的区间和。观察上面的图，我们不难发现，一个BIT并不是单独的一棵树，而是很多棵子树所构成的，每个子树的根节点代表它所有叶子节点的和。那么，如果我们要计算0 - <Text code>index</Text>的区间和的话，我们只需要找到<Text code>index</Text>的二进制，然后每次去掉其中排在最后的一个1即可。（对应的是<Text code>index</Text>前的根节点）</Paragraph>
<Paragraph type="secondary">
<Paragraph>例子：如果我们需要计算 0 - 6之间的区间和，我们要 ...</Paragraph>
<ol>
<li>binary (6 + 1)  = 1011</li>
<li>sum = tree[1011] + tree[1010] + tree[1000] = tree[7] + tree[6] + tree[4]</li>
</ol>
</Paragraph>
<Paragraph>用java代码表示，就是这样：</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`public int getSum(int endIndex){
    int sum = 0;
    if(endIndex == 0){return this.tree[0];}
    while(endIndex > 0){
        sum += this.tree[endIndex];
        endIndex -= (int) Math.pow(2, this.findLastBinaryOne(endIndex) - 1);
    }
    return sum;
}
`}/>
<Paragraph>注意到循环的执行次数最大为索引二进制数的长度，也就是<InlineMath math="\log_2{\text{index}}"/>，这说明调用一次<Text code>getSum</Text>函数只会有<InlineMath math="O(\log{n})"/>的时间复杂度</Paragraph>
<Paragraph>有了从0到index的区间和，我们就可以很方便的计算出任意两个索引之间的区间和（因为同是求区间和，这里直接重载了之前的<Text code>getSum</Text>函数）</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`public int getSum(int startIndex, int endIndex){
    return this.getSum(endIndex) - this.getSum(startIndex);
}
`}/>
<Title level={4}>Update BIT Tree</Title>
<Paragraph>前文提到过BIT最大的优势是在保证快速求出区间和的同时可以快速进行数据结构的更新，接下来我们看看BIT是怎么进行数据结构的更新的：</Paragraph>
<Paragraph>如果我们想要更改<Text code>this.val</Text>中的数据，我们必须更新其对应的树结构。因为BIT中兄弟节点是互不影响的，我们只用更新被更新索引所在的BIT树的所有父节点就可以了。</Paragraph>
<Paragraph>因为树的高度取决于索引二进制的长度，总共需要更新的节点数量的上限为<InlineMath math="O(\log{n})"/>，用Java代码可以这样写：</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`private ArrayList<Integer> getParents(int index){
    ArrayList<Integer> parents = new ArrayList<Integer>();
    while (true){
        int currStep = (int) Math.pow(2, this.findLastBinaryOne(index) - 1);
        index += currStep;
        if(index > this.tree.length){break;}
        parents.add(index);
    }
    return parents;
}

public void updatePoint(int index, int newVal){
    this.tree[index] -= this.val[index] - newVal;
    this.val[index] = newVal;
    ArrayList<Integer> parents = this.getParents(index);
    for (int i = 0; i < parents.size(); i ++){
        this.tree[parents.get(i)] = this.getBITVal(parents.get(i));
    }
}
`}/>
<Paragraph>（<em>上面的代码因为每个父节点更新都调用了一次<Text code>getBITval</Text>函数，实际上的时间复杂度是<InlineMath math="O((\log{n})^2)"/>， 通过修改实现方式，我们可以达到 <InlineMath math="O(\log{n})"/> 的时间复杂度</em>）</Paragraph>
</Layout>
);}