import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Typography, Image } from 'antd';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import AppPageHeader from '../../PublicComponent/PageHeader';const { Title, Paragraph } = Typography;
const { Content } = Layout;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';

function EllipticalCurveSignature(){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='Introduction to Elliptical Curve Signature'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default EllipticalCurveSignature;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<Paragraph>
在传统的金融模型中，当人们需要在银行等金融机构中创建新的账户时，人们必须提供用于证明其身份的凭证（身份证，护照，etc）。然而，在比特币的新型隐私模型中，虽然每个账户之间的交易记录是公开的，但是账户拥有者的身份确不会被公开。为了防止比特币账户被冒用，比特币交易系统中使用了椭圆曲线签名的机制来确保账户操作者就是账户拥有者。</Paragraph>

<Title level={4}>Table Of Content</Title>
<ol>
<li>什么是椭圆曲线 - What is Elliptical Curve</li>
<li>椭圆曲线上定义的运算符 - Arithmetic Defined on Elliptical Curve</li>
<li>椭圆曲线的改进 - Modification on Elliptical Curve</li>
<li>椭圆曲线与身份验证 - Elliptical Curve in Identity Verification</li>
<li>比特币交易系统中的椭圆曲线 - Elliptical Curve Signature in Bitcoin</li>
</ol>
<Title level={3}>1. 什么是椭圆曲线 | What is Elliptical Curve</Title>
<Paragraph>拥有这样的解析式的一类曲线被称作椭圆曲线:</Paragraph>
<Paragraph><BlockMath math='
y^2 = x^3 + ax + b
'/></Paragraph>
<Paragraph>这样的曲线拥有这如下图所示的形状：</Paragraph>
<Paragraph><Image src={`${PhotoLink}Elliptical_Curve_1.png`} width='25%'/></Paragraph>
<Paragraph>这样的曲线有两个非常重要的性质：</Paragraph>
<ol>
<li>椭圆曲线是关于<InlineMath math='x'/>轴对称的</li>
<li>任意一条直线只会与椭圆曲线有不超过3个交点</li>
</ol>
<Paragraph>有了这两个性质，我们可以在椭圆曲线上定义“点乘”和“叉乘”这两种运算</Paragraph>
<Title level={3}>2. 椭圆曲线上定义的运算符 |  Arithmetic Defined on Elliptical Curve</Title>
<Title level={4}>2.1 椭圆曲线上的加法 | Addition on Elliptical Curve</Title>
<Paragraph>假设我们有任意两点 <InlineMath math='A,B'/>在椭圆曲线 <InlineMath math='E'/> 上，我们可以将两点链接起来得到一条直线，这条直线与椭圆曲线的第三个交点 <InlineMath math='-C'/> 。这时候，我们将得到的点 <InlineMath math='-C'/> 关于 <InlineMath math='x'/>轴对称，得到点 <InlineMath math='C'/>。 这样的一串操作可以被记录为 <InlineMath math='A + B = C'/></Paragraph>
<Paragraph>如果我们把一次加法操作画在图上，那么 <InlineMath math='A + B = C'/>的计算过程会是下面这样：</Paragraph>
<Paragraph><Image src={`${PhotoLink}Elliptical_Curve_2.png`} width='25%'/></Paragraph>
<Paragraph>从上面的途中，我们可以发现椭圆曲线上的点乘是满足交换律的，因为点 <InlineMath math='A,B'/> 定义的直线与点 <InlineMath math='B,A'/> 定义的直线是同一条。</Paragraph>
<Paragraph>一种特殊的情况是 <InlineMath math='A + A'/>。这样的情况下，我们得到的直线会是椭圆曲线在<InlineMath math='A'/>点上的切线，也就是……</Paragraph>
<Paragraph><Image src={`${PhotoLink}Elliptical_Curve_3.png`} width='25%'/></Paragraph>
<Title level={4}>2.2 椭圆曲线上的乘法  | Product on Elliptical Curve</Title>
<Paragraph>如果一个椭圆曲线上进行了 <InlineMath math='n'/> 次<InlineMath math='A + A'/>这样的加法操作，我们可以将其简写为 <InlineMath math='A\times n'/>。例如：<InlineMath math='A\times 3'/>的计算过程可以用这样的几何方法表现出来：</Paragraph>
<Paragraph><Image src={`${PhotoLink}Elliptical_Curve_4.png`} width='25%'/></Paragraph>
<Paragraph><a href="https://andrea.corbellini.name/ecc/interactive/reals-add.html">这个网站</a>提供了椭圆曲线加法和乘法的可视化</Paragraph>
<Paragraph>定义了这两种椭圆曲线上的运算以后，我们下面看看为了在计算机上更好的实现这个函数，我们都做了哪些改进。</Paragraph>
<Title level={3}>3. 椭圆曲线的改进 | Modification of Elliptical Curve</Title>
<Paragraph>为了在计算机上更准确的处理椭圆曲线，我们对椭圆曲线做了以下这些改进：</Paragraph>
<ol>
<li>因为计算机内存储的浮点数都是精度有限的，为了避免浮点数溢出造成的计算误差，我们把原先定义在实数域上的椭圆曲线离散化到了整数域上</li>
<li>大部分编程语言中，整型变量的大小是有上限的，这个上限由程序分配多少内存来存储一个整型变量所决定，为了避免计算过程中出现过大的值从而导致整型变量溢出，我们通过模运算（取余）的方式人为定义了椭圆曲线的上界，当椭圆曲线的计算结果超出上界时，因为模运算的存在，最终结果会被映射在整型变量能够表达的数值范围中。</li>
</ol>
<Paragraph>所以，一个椭圆曲线是由这些参数所决定的：
<BlockMath math='
E = \text{Elliptical Curve}(p, a, b)
'/>
这样的一条椭圆曲线拥有这样的代数表达式：
<BlockMath math='
y^2 \equiv x^3 + ax + b \quad (\text{mod } p)
'/></Paragraph>
<Title level={3}>4. 椭圆曲线与身份验证 |  Elliptical Curve and Identity Verification</Title>
<Paragraph>说了那么多，人们到底是怎么用椭圆曲线进行身份验证的呢？</Paragraph>
<Paragraph>比特币所使用的椭圆函数签名协议是SECP256K1，这个签名协议中包括了一个椭圆函数 <InlineMath math='y^2 =x^3+7'/> 和一个起始点 <InlineMath math='A'/>。现在，如果有一个人拥有一个数字<InlineMath math='K'/>，他可以很快的用计算机算出在椭圆函数上的<InlineMath math='A\times K'/>。然而，给定<InlineMath math='A\times K'/>，计算出<InlineMath math='K'/>的值却是几乎不可能的。</Paragraph>
<Paragraph>这样一个非对称的难度让身份验证变得十分简单，只要私钥<InlineMath math='K'/>的持有者不公开自己手中的私钥，其他人就几乎不可能通过私钥的生成结果<InlineMath math='A\times K'/>逆向获得私钥<InlineMath math='K'/>。</Paragraph>
<Paragraph>假如Bob要使用椭圆签名函数来验证Alice的身份，在此之前，Bob已经通过公开渠道得知Alice的公钥（椭圆函数计算结果是<InlineMath math='Z_A'/>），Alice也通过公开渠道知道Bob的公钥（Bob用自己的椭圆函数私钥<InlineMath math='K_B'/>计算出的结果<InlineMath math='Z_B'/>）。那么Alice要做的事情就是向Bob传输<InlineMath math='K_A \times Z_B'/>。因为<InlineMath math='Z_B'/>实际上是<InlineMath math='A\times K_B'/>的结果，我们也可以将传输的信息写作<InlineMath math='K_A\times K_B\times A'/>。</Paragraph>
<Paragraph>当Bob收到Alice发来的<InlineMath math='K_A\times Z_B'/>的结果后，他可以通过计算<InlineMath math='Z_A \times K_B'/> 并与Alice发出的结果相比对进行验证。如果对面确实是Alice在对账户进行操作，那么应该有<InlineMath math='K_A\times Z_B = Z_A \times K_B'/>。证明如下：
<BlockMath math='
\begin{aligned}
&K_A \times Z_B\
=&K_A \times A \times K_B\
=&(K_A\times A)\times K_B\
=&Z_A\times K_B
\end{aligned}
'/></Paragraph>
<Paragraph>通过这样的方式，就可以在双方不透露自己私钥的情况下完成身份认证了。</Paragraph>
<Title level={3}>5. 比特币交易系统中的椭圆曲线 | Elliptical Curve Signature in Bitcoin</Title>
<Paragraph>在比特币的交易系统中，每个用户都会有一个随机生成的私钥，并且用SECP256K1算法计算出自己私钥所对应的公钥，在下面这张描述比特币交易流程的图中，最关键的部分之一就是通过上诉的身份验证算法确定确实是比特币的所有者在进行转账操作。</Paragraph>
<Paragraph><Image src={`${PhotoLink}Elliptical_Curve_5.png`} width='50%'/></Paragraph>
</Layout>
);}