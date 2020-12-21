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
function BuildJekyllBlog(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='How to Build a Jekyll Blog on Github Pages'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default BuildJekyllBlog;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>

<Paragraph>GitHub Pages 可以用于建立自己的个人博客，通过Github Pages 服务，建立个人博客不再需要单独购买域名与服务器，GitHub 会提供域名。通过 jekyll， Pages会对markdown文件进行渲染，从而大大提升写blog文章的简易度</Paragraph>

<Title level={2}>如何使用 GitHub Pages</Title>
<Title level={3}>Step 0 | 注册GitHub账号</Title>
<Paragraph>访问 https://github.com/ 注册自己的账号</Paragraph>
<Title level={3}>Step 1 | 新建一个代码仓库</Title>
<Paragraph><Image alt="image 1" src="https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_1.png" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>点击 <Text code>+</Text> 号，选择 <Text code>Create a Repository</Text> </Paragraph>
<Paragraph><Image alt="image 2" src="https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_2.png" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>至此，代码仓库已经在 GitHub 上建立完毕，下一步要在 GitHub 上开启 GitHub Pages 服务</Paragraph>
<Title level={3}>Step 2 | 开启 GitHub Pages 服务</Title>
<Paragraph>在仓库上方的设置中找到GitHub Pages, 启用 GitHub Pages服务，然后再下方的"choose theme"中选择一个自己喜欢的主题
<Image alt="image 3" src="https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_3.png" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Title level={3}>Step 3 | 下载 jekyll 主题文件</Title>
<Paragraph>在 http://jekyllthemes.org/ 中找到自己在 GitHub Pages 上选定的主题，下载下来到本地仓库中。 Commit 和 Push 到Github后就可以在 GitHub Pages 链接中看到主题的初始页面了。</Paragraph>
<Title level={3}>Step 4 | 重新设置主页</Title>
<Paragraph>删除刚刚文件夹中的<Text code>index.html</Text> 或者<Text code>readme.md</Text>文件，替换为自己的内容。</Paragraph>
<Title level={3}>Step 5 | 写一篇Post测试一下</Title>
<Paragraph>在文件夹中找到<Text code>_posts</Text>文件夹，在里面创建一个新的markdown文件 <Text code>yyyy-mm-dd-title.md</Text>， 通过这样的文件名，jekyll可以知道这个文件是什么时候发布的。</Paragraph>
<Paragraph><Image alt="image 4" src="https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_4.png" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>上传代码后在blog主页网址后面加上<Text code>/yyyy/mm/dd/title.html</Text>就可以看到自己写的markdown已经被渲染成了相同主题的html文件了.</Paragraph>
<Paragraph><Image alt="image 5" src="https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_5.png" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Title level={3}>Step 6 | 如何设置文章标题</Title>
<Paragraph>在jekyll中，我们可以通过设置 markdown 文件头的 yaml 数据来对markdown文件进行配置，jekyll会识别markdown头上的yaml数据并对渲染结果做出相应调整。</Paragraph>
<SyntaxHighlighter style={lightfair} children={`
---
layout: default
title: this title will be recognized by jekyll
---

**your markdown texts should be placed under the yaml header**
`}/>
<Paragraph>一般用到的yaml标签有 <Text code>layout</Text>，设置layout会改变Jekyll对文章的渲染效果，具体的渲染效果取决于文件夹中的_layouts文件夹中的html文件</Paragraph>
<Paragraph><Image alt="image 6" src="https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_6.png" width='30%' style={{minWidth: '250px'}} fallback={FailImage} /></Paragraph>
<Paragraph>其他的yaml标签包括 <Text code>title</Text>， <Text code>permalink</Text>， 等等，这些标签的使用方法可以在 https://jekyllrb.com/docs/front-matter/ 中找到。</Paragraph>
<Title level={3}>Step 7 | 在页面中使用 MathJax</Title>
<Paragraph>虽然jekyll会将markdown文件渲染成html文件，但是jekyll默认中并不会处理markdown里的数学公式。</Paragraph>
<Paragraph>为了让渲染出来的网页出现数学公式，我们要在需要数学公式的网页(markdown 文件)头上（ymal 下面， markdown 正文上面）加上以下代码：</Paragraph>
<SyntaxHighlighter style={lightfair} children={`
   <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            inlineMath: [ ['<InlineMath math='',''/>'], ["\(","\)"] ],
            displayMath: [ ['<BlockMath math='',''/>'], ["\[","\]"] ],
            }
        });
    </script>
    </head>
`}/>
<Title level={4}>Step 8 | 用代码自动更新所有博客文章列表</Title>
<Paragraph>使用以下代码，可以自动更新博客_posts文件夹中所有页面的列表</Paragraph>
<SyntaxHighlighter style={lightfair} children={`
    <div id="home">
    <Title level={3}>All Posts</Title>
    <ul class="posts">
        {% for post in site.posts %}
        <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.*title* }}</a></li>
        {% endfor %}
    </ul>
    </div>
`}/>
<Title level={4}>Step 9 | 在 markdown 中使用 html 和 <Text code>{'<style>'}</Text></Title>
<Paragraph>由于markdown本质上是使用html语言实现的，我们可以直接在markdown中使用 CSS 和 html代码，通过合理的使用，我们可以直接在博客上使用按钮等控件</Paragraph>
<SyntaxHighlighter style={lightfair} children={`
<style>
button{
    padding: 15px 24px;
    transition: 0.2s;
    background-color: #F2FCFA;
    border:none;
    box-shadow: 2px 2px 4px #bbbbbb;
    border-radius: 5px;
}
button:hover{
    padding: 15px 24px;
    transition: 0.2s;
    background-color: #DDF6F3;
    border:none;
    box-shadow: 1px 1px 2px #bbbbbb;
    border-radius: 5px;
}
</style>
<center>
<button onclick="windows.open('example.com');">
    test
</button>
</center>
`}/>
</Layout>
);}