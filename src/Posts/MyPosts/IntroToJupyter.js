import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, Typography, Tag, Divider } from 'antd';
import 'katex/dist/katex.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import FailImage from '../../PublicComponent/FailImage';
import AppPageHeader from '../../PublicComponent/PageHeader';const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';
function IntroToJupyterNotebook(){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='Introduction To Jupyter Notebook'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default IntroToJupyterNotebook;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<div>
   <Tag color='default'>Others</Tag>
   <Divider></Divider>
</div>
<Title level={2}>如何配置 Jupyter Notebook 环境</Title>
<ol>
<li><Text strong>安装 Python 3</Text></li>
<li><Text strong>安装包管理器 - Anaconda</Text></li>
<li><Text strong>安装数据科学核心包</Text></li>
<li><Text strong>Jupyter Notebook入门</Text></li>
</ol>
<Divider></Divider>
<Title level={3}>安装Python3</Title>
<Paragraph><Image alt="image-20201107220757515" src={`${PhotoLink}jupyter1.png`}width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>访问 https://www.python.org/downloads/ 选择Python安装包下载，打开，安装</Paragraph>
<Paragraph>⚠不推荐安装 Python 3.7.5 以上的版本号，过高的版本号可能造成第三方库不兼容⚠</Paragraph>
<Paragraph>安装时选择让Python勾选PATH变量的选项，让Python自动处理PATH环境变量</Paragraph>
<Paragraph>安装结束后<Text strong>重启电脑</Text>，打开命令行，输入</Paragraph>
<SyntaxHighlighter style={lightfair} children={`python --version
`}/>
<Paragraph>后如果显示安装的版本号说明安装成功</Paragraph>
<Paragraph><Image alt="image-20201107221254354" src={`${PhotoLink}jupyter2.png`}width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Divider></Divider>
<Title level={3}>安装 Python 包管理器 - Anaconda</Title>
<Paragraph>Anaconda 3 是全球最受欢迎的Python虚拟环境管理器之一，绝大多数的科学计算Python第三方库都支持使用Anaconda指令下载安装。有时，第三方库之间会存在相互依赖的关系，有些第三方库会要求特殊版本号的其他第三方库，Anaconda可以帮助我们自动化的完成第三方库依赖适配并解决依赖冲突问题。同时，Anaconda 还可以帮助我们建立多个互相独立的虚拟环境，防止包之间的互相干扰</Paragraph>
<Paragraph type="secondary">
<Paragraph>链接：https://zhuanlan.zhihu.com/p/75717350 可以参考这里面的安装方法，但是不建议取消勾选PATH自动配置，也不建议安装在系统盘（C盘）外的地方，最好直接安装在默认的目录下</Paragraph>
</Paragraph>
<Paragraph>访问 Anaconda 官网 https://www.anaconda.com/ ，在顶上选择<Text strong>Products {'>'} Individual Version</Text></Paragraph>
<Paragraph><Image alt="image-20201107221934269" src={`${PhotoLink}jupyter3.png`}width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>选择适合自己电脑的 Anaconda 版本（推荐选择64位的，目前电脑应该都是 64位的）</Paragraph>
<Paragraph>下载完毕后打开，选择在 <Text strong>All Users (require admin previliage)</Text> 上安装</Paragraph>
<Paragraph>Advance Option 页面上同时勾选 "Add anaconda to PATH environmental variable" 和 "Register Anaconda as the system Python 3.7"</Paragraph>
<Paragraph>安装后重启，打开命令行，输入</Paragraph>
<SyntaxHighlighter style={lightfair} children={`conda --version
conda info
`}/>
<Paragraph>如果安装成功，应该会显示类似下图这样的信息</Paragraph>
<Paragraph><Image alt="image-20201107222744398" src={`${PhotoLink}jupyter4.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Divider></Divider>
<Title level={3}>安装数据科学核心包</Title>
<Paragraph>Python 在数据科学领域的关键地位主要是由高质量第三方包维护的，这些包在全球拥有数以千万的使用者，并且通过直接用C语言实现底层的方式提高性能表现。</Paragraph>
<Paragraph>安装之前，我们先打开安装好的 Anaconda，创建一个新的虚拟环境</Paragraph>
<Paragraph><Image alt="image-20201107223607345" src={`${PhotoLink}jupyter5.png`} width='40%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>打开后，点击 Environment {'>'} Create ，创建一个新的Python环境</Paragraph>
<Paragraph><Image alt="image-20201107223846299" src={`${PhotoLink}jupyter6.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>创建完后，回到Home，在Jupyter Notebook下点击“Install”</Paragraph>
<Paragraph>Install结束后，打开命令行，输入 （把 <Text code>example</Text>替换成你在上一步创建的虚拟环境的名称）</Paragraph>
<SyntaxHighlighter style={lightfair} children={`
C:\\Users\\28698>conda activate example
(example) C:\\Users\\28698>conda install numpy
`}/>
<Paragraph>左侧的括号说明现在正在虚拟环境中</Paragraph>
<Paragraph>输入</Paragraph>
<SyntaxHighlighter style={lightfair} children={`
conda install jupyter
conda install matplotlib
`}/>
<Paragraph><Image alt="image-20201107231302443" src={`${PhotoLink}jupyter7.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>出现类似上图的页面说明 Conda 已经找到了包，并且列出了所有需要安装的依赖，输入<Text code>y</Text>即可</Paragraph>
<Divider></Divider>
<Paragraph>安装完这些，我们就可以开始coding啦！</Paragraph>
<Title level={3}>Jupyter Notebook 入门</Title>
<Title level={4}>Image @ Jupyter</Title>
<Paragraph>试着在anaconda home中打开jupyter notebook，点击"new"，选择对应的虚拟环境，创建你的第一个jupyter notebook吧！</Paragraph>
<Paragraph><Image alt="image-20201107235719590" src={`${PhotoLink}jupyter8.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>创建完毕会看到页面上有一个空的单元格，在单元格内打入代码后点击“运行”即可开始，所有单元格之间是共享内存的，也就是说在任意单元格内声明一个变量后就可以在所有单元格内直接使用（哪怕是在声明之前的单元格内也可以使用，但是不推荐这么操作）</Paragraph>
<Paragraph><Image alt="image-20201108000032887" src={`${PhotoLink}jupyter9.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>与传统编程模型不同，Jupyter notebook 可以直接将 <Text code>matplotlib</Text> 库生成的图片输出到单元格下方，例如这样：</Paragraph>
<Paragraph><Image alt="image-20201108000634050" src={`${PhotoLink}jupyter10.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>这个特性极大的方便了我们进行“探索性编程”，也就是没有一个固定目标的编程。例如觉得图片的色条不好看，不用重新运行一次整个程序，只用重新运行画出图片的单元格就OK了</Paragraph>
<Paragraph>我们可以使用 matplotlib 画出各种常见图表，大家可以自己在网上搜索关键字 "Python Matplotlib" + 图表名称 或者直接访问 matplotlib 官方文档来研究更多画图技巧 https://matplotlib.org/</Paragraph>
<Title level={4}>Markdown @ Jupyter</Title>
<Paragraph>Jupyter Notebook 还有一个特点：每个单元格中除了可以放入Python代码，也可以使用 markdown 语言写出有基本样式的富文本，例如加粗，斜体，多级标题等等……</Paragraph>
<Paragraph><Image alt="image-20201108001817615" src={`${PhotoLink}jupyter11.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>选中一个单元格后，在顶上的下拉菜单中将“代码”改为“标记”，然后再点击运行就可以看到渲染后的Markdown文本被插入再notebook中了</Paragraph>
<Title level={4}>NumPy 入门</Title>
<Paragraph>NumPy 提供了许多数学运算方法。其中一个非常重要的类叫做 ndArray。这个类代表着多为矩阵，并且提供了点乘，对位相加等的基本操作，可以极大的简化我们的数据处理工作</Paragraph>
<Paragraph>同时NumPy与Matplotlib深度契合，Matplotlib也可以直接接受ndarray输入并产生图片，以下是一些基本的例子</Paragraph>
<Paragraph><Image alt="image-20201108002145775" src={`${PhotoLink}jupyter12.png`} width='80%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
</Layout>
);}