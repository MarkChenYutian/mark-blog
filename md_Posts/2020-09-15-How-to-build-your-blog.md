---
layout: post
title: "如何通过Github Pages建立自己的blog | How to build up your Blog using GitHub Pages?"
excerpt_separator: <!--more-->
tags: Others
title_image: "https://markchenyutian.github.io/Markchen_Blog/Asset/github.jfif"
---
GitHub Pages 可以用于建立自己的个人博客，通过Github Pages 服务，建立个人博客不再需要单独购买域名与服务器，GitHub 会提供域名。通过 jekyll， Pages会对markdown文件进行渲染，从而大大提升写blog文章的简易度
<!--more-->

# 如何使用 GitHub Pages

## Step 0 | 注册GitHub账号
访问 https://github.com/ 注册自己的账号

## Step 1 | 新建一个代码仓库
![image 1](https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_1.png)

点击 `+` 号，选择 `Create a Repository` 

![image 2](https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_2.png)

至此，代码仓库已经在 GitHub 上建立完毕，下一步要在 GitHub 上开启 GitHub Pages 服务

## Step 2 | 开启 GitHub Pages 服务


在仓库上方的设置中找到GitHub Pages, 启用 GitHub Pages服务，然后再下方的"choose theme"中选择一个自己喜欢的主题
![image 3](https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_3.png)

## Step 3 | 下载 jekyll 主题文件

在 http://jekyllthemes.org/ 中找到自己在 GitHub Pages 上选定的主题，下载下来到本地仓库中。 Commit 和 Push 到Github后就可以在 GitHub Pages 链接中看到主题的初始页面了。

## Step 4 | 重新设置主页

删除刚刚文件夹中的`index.html` 或者`readme.md`文件，替换为自己的内容。

## Step 5 | 写一篇Post测试一下
在文件夹中找到`_posts`文件夹，在里面创建一个新的markdown文件 `yyyy-mm-dd-title.md`， 通过这样的文件名，jekyll可以知道这个文件是什么时候发布的。

![image 4](https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_4.png)

上传代码后在blog主页网址后面加上`/yyyy/mm/dd/title.html`就可以看到自己写的markdown已经被渲染成了相同主题的html文件了.

![image 5](https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_5.png)

## Step 6 | 如何设置文章标题
在jekyll中，我们可以通过设置 markdown 文件头的 yaml 数据来对markdown文件进行配置，jekyll会识别markdown头上的yaml数据并对渲染结果做出相应调整。

```
---
layout: default
title: this title will be recognized by jekyll
---

**your markdown texts should be placed under the yaml header**
```

一般用到的yaml标签有 `layout`，设置layout会改变Jekyll对文章的渲染效果，具体的渲染效果取决于文件夹中的_layouts文件夹中的html文件

![image 6](https://markchenyutian.github.io/Markchen_Blog/Asset/How_to_write_blog_6.png)

其他的yaml标签包括 `title`， `permalink`， 等等，这些标签的使用方法可以在 https://jekyllrb.com/docs/front-matter/ 中找到。

## Step 7 | 在页面中使用 MathJax

虽然jekyll会将markdown文件渲染成html文件，但是jekyll默认中并不会处理markdown里的数学公式。

为了让渲染出来的网页出现数学公式，我们要在需要数学公式的网页(markdown 文件)头上（ymal 下面， markdown 正文上面）加上以下代码：
```
   <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            }
        });
    </script>
    </head>
```


### Step 8 | 用代码自动更新所有博客文章列表

使用以下代码，可以自动更新博客_posts文件夹中所有页面的列表
```
    <div id="home">
    <h2>All Posts</h2>
    <ul class="posts">
        {% for post in site.posts %}
        <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.*title* }}</a></li>
        {% endfor %}
    </ul>
    </div>
```

### Step 9 | 在 markdown 中使用 html 和 `<style>`
由于markdown本质上是使用html语言实现的，我们可以直接在markdown中使用 CSS 和 html代码，通过合理的使用，我们可以直接在博客上使用按钮等控件

```
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
```
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
<center><button onclick="windows.open('example.com');">
    test
</button></center>
