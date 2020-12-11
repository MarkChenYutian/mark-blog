# 如何配置 Jupyter Notebook 环境

1. **安装 Python 3**
2. **安装包管理器 - Anaconda**
3. **安装数据科学核心包**
4. **Jupyter Notebook入门**

---

## 安装Python3

![image-20201107220757515](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201107220757515.png)

访问 https://www.python.org/downloads/ 选择Python安装包下载，打开，安装

⚠不推荐安装 Python 3.7.5 以上的版本号，过高的版本号可能造成第三方库不兼容⚠

安装时选择让Python勾选PATH变量的选项，让Python自动处理PATH环境变量

安装结束后**重启电脑**，打开命令行，输入

```
python --version
```

后如果显示安装的版本号说明安装成功

![image-20201107221254354](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201107221254354.png)

---

## 安装 Python 包管理器 - Anaconda

Anaconda 3 是全球最受欢迎的Python虚拟环境管理器之一，绝大多数的科学计算Python第三方库都支持使用Anaconda指令下载安装。有时，第三方库之间会存在相互依赖的关系，有些第三方库会要求特殊版本号的其他第三方库，Anaconda可以帮助我们自动化的完成第三方库依赖适配并解决依赖冲突问题。同时，Anaconda 还可以帮助我们建立多个互相独立的虚拟环境，防止包之间的互相干扰

> 链接：https://zhuanlan.zhihu.com/p/75717350 可以参考这里面的安装方法，但是不建议取消勾选PATH自动配置，也不建议安装在系统盘（C盘）外的地方，最好直接安装在默认的目录下

访问 Anaconda 官网 https://www.anaconda.com/ ，在顶上选择**Products > Individual Version**

![image-20201107221934269](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201107221934269.png)

选择适合自己电脑的 Anaconda 版本（推荐选择64位的，目前电脑应该都是 64位的）

下载完毕后打开，选择在 **All Users (require admin previliage)** 上安装

Advance Option 页面上同时勾选 "Add anaconda to PATH environmental variable" 和 "Register Anaconda as the system Python 3.7"

安装后重启，打开命令行，输入

```
conda --version
conda info
```

如果安装成功，应该会显示类似下图这样的信息

![image-20201107222744398](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201107222744398.png)

---

## 安装数据科学核心包

Python 在数据科学领域的关键地位主要是由高质量第三方包维护的，这些包在全球拥有数以千万的使用者，并且通过直接用C语言实现底层的方式提高性能表现。

安装之前，我们先打开安装好的 Anaconda，创建一个新的虚拟环境

![image-20201107223607345](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201107223607345.png)

打开后，点击 Environment > Create ，创建一个新的Python环境

![image-20201107223846299](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201107223846299.png)

创建完后，回到Home，在Jupyter Notebook下点击“Install”

Install结束后，打开命令行，输入 （把 `example`替换成你在上一步创建的虚拟环境的名称）

```
C:\Users\28698>conda activate example
(example) C:\Users\28698>conda install numpy
```

左侧的括号说明现在正在虚拟环境中

输入

```
conda install numpy
conda install jupyter
conda install matplotlib
```

![image-20201107231302443](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201107231302443.png)

出现类似上图的页面说明 Conda 已经找到了包，并且列出了所有需要安装的依赖，输入`y`即可

---

安装完这些，我们就可以开始coding啦！

## Jupyter Notebook 入门

### Image @ Jupyter

试着在anaconda home中打开jupyter notebook，点击"new"，选择对应的虚拟环境，创建你的第一个jupyter notebook吧！

![image-20201107235719590](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201107235719590.png)

创建完毕会看到页面上有一个空的单元格，在单元格内打入代码后点击“运行”即可开始，所有单元格之间是共享内存的，也就是说在任意单元格内声明一个变量后就可以在所有单元格内直接使用（哪怕是在声明之前的单元格内也可以使用，但是不推荐这么操作）

![image-20201108000032887](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201108000032887.png)

与传统编程模型不同，Jupyter notebook 可以直接将 `matplotlib` 库生成的图片输出到单元格下方，例如这样：

![image-20201108000634050](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201108000634050.png)

这个特性极大的方便了我们进行“探索性编程”，也就是没有一个固定目标的编程。例如觉得图片的色条不好看，不用重新运行一次整个程序，只用重新运行画出图片的单元格就OK了

我们可以使用 matplotlib 画出各种常见图表，大家可以自己在网上搜索关键字 "Python Matplotlib" + 图表名称 或者直接访问 matplotlib 官方文档来研究更多画图技巧 https://matplotlib.org/

### Markdown @ Jupyter

Jupyter Notebook 还有一个特点：每个单元格中除了可以放入Python代码，也可以使用 markdown 语言写出有基本样式的富文本，例如加粗，斜体，多级标题等等……

![image-20201108001817615](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201108001817615.png)

选中一个单元格后，在顶上的下拉菜单中将“代码”改为“标记”，然后再点击运行就可以看到渲染后的Markdown文本被插入再notebook中了

### NumPy 入门

NumPy 提供了许多数学运算方法。其中一个非常重要的类叫做 ndArray。这个类代表着多为矩阵，并且提供了点乘，对位相加等的基本操作，可以极大的简化我们的数据处理工作

同时NumPy与Matplotlib深度契合，Matplotlib也可以直接接受ndarray输入并产生图片，以下是一些基本的例子

![image-20201108002145775](2020-11-7-How-to-Setup-Jupyter-Notebook.assets/image-20201108002145775.png)