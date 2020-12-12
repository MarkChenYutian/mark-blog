import React from 'react';
import {Tag, Divider, Typography} from 'antd';
import PostCard from '../PublicComponent/PostCard';

const {Title} = Typography;

const allPosts = [
    {
        isPost: false,
        tags: [],
        jsx_obj: <Divider orientation="left"><Title level={4}>Neural Network</Title></Divider>
    },
    {
        isPost: true,
        tags: ["Neural Network", "Artificial Intelligence", "Machine Learning"],
        jsx_obj: <PostCard
        Title="How do Neural Network Work"
        Link="/posts/HowDoNeuralNetworkWork"
        TagList={[<Tag color="blue">Neural Network</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
        excrept="神经网络作为一种新兴的计算机技术被许多人称为一种全新的“编程范式”，与往常的算法编写不同，神经网络是一种“数据驱动”的编程方法。在往常的算法编写中，人们需要手动编写算法的逻辑，而在神经网络中，人们只需要为网络提供海量数据和参考答案，网络就会自动生成算法。那么神经网络到底是怎么工作的呢？"
        />
    },
    {
        isPost: true,
        tags: ["Neural Network", "Artificial Intelligence", "Machine Learning"],
        jsx_obj: <PostCard
        Title="Gradient Descent Methods"
        Link="/posts/GradientDescentMethods"
        TagList={[<Tag color="blue">Neural Network</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
        excrept="神经网络的训练本质上是通过调节参数来最小化模型输出的损失函数。然而如何调节参数看似简单实际却有许多技巧和方法来优化。这篇文章会介绍最基本的随机梯度下降，采用一阶动量的SGD with momentum，和采用自适应学习率的AdaGrad, RMS Prop, 和集大成者 Adam。这些模型各自有各自的特点，并且在不同的场景中各有优劣。"
    />
    },
    {
        isPost: true,
        tags:["Neural Network", "Artificial Intelligence", "Machine Learning"],
        jsx_obj: <PostCard
        Title="What is LSTM"
        Link="/posts/WhatIsLSTM"
        TagList={[<Tag color="blue">Neural Network</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
        excrept="一般的神经网络只能处理单个信息，可是有的时候神经网络的输入是一个时间序列，在这种情况下普通的前馈神经网络就不能利用“上下文”中隐含的信息来更好的处理当前输入。为了解决这个问题，人们提出了递归神经网络(Recurrent Neural Network, RNN)。可是递归神经网络也有问题：由于同样的权重在网络中一直被累乘，在反向传播的时候极容易出现梯度消失与梯度爆炸的问题。同时，由于RNN在状态间传递的信息过少，RNN在上下文距离较远的时候会很快的遗忘前文信息。为了解决这些问题，人们提出了LSTM这个新的网络模型，它可以很好的处理以上这些问题。"
        />
    },
    {
        isPost: true,
        tags:["Neural Network", "Artificial Intelligence", "Machine Learning"],
        jsx_obj: <PostCard
        Title="Residual Network (ResNet)"
        Link="/posts/ResidualNetwork"
        TagList={[<Tag color="blue">Neural Network</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
        excrept="在深度学习中，两个严重影响了模型效果的问题是梯度消失问题与梯度下降问题。这两个问题的出现与深度学习的根本机制 - 反向传播损失函数梯度有关。在很长一段时间里，人们认为超过100层的网络是“不可训练”的。然而残差网络 (Residual Network, ResNet) 的出现改变了这一切。通过设计“短路”机制，残差网络可以让梯度更好的在网络的层之间传播，从而使得训练500+层的超深神经网络成为了可能。相似的机制也启发了一大批拥有shortcut connection的神经网络，例如在医学图像处理领域常见的 U-net 和 Dense Net。"
        />
    },
    {
        isPost: false,
        tags: [],
        jsx_obj: <Divider orientation="left"><Title level={4}>Artificial Intelligence</Title></Divider>
    },
    {
        isPost: true,
        tags:["CS 188", "Artificial Intelligence", "Machine Learning"],
        jsx_obj: <PostCard
        Title="What is Bayes Network"
        Link="/posts/WhatIsBayesNetwork"
        TagList = {[<Tag color="orange">CS 188</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
        excrept = "贝叶斯网络是人们在探索机器学习时的一个重要里程碑，通过贝叶斯网络，机器学习摆脱了以往基于形式逻辑推理和庞大知识库的限制，开始了“统计学习”的新纪元。那么什么是贝叶斯网络呢？贝叶斯网络和贝叶斯统计学派又有什么关系呢?"
        />
    },
    {
        isPost: true,
        tags: ["CS 188", "Artificial Intelligence", "Machine Learning"],
        jsx_obj: <PostCard
        Title="Constraint Satisfaction Problem (CSP)"
        Link="/posts/ConstraintSatisfactionProblem"
        TagList={[<Tag color="orange">CS 188</Tag>, <Tag color="blue">Artificial Intelligence</Tag>]}
        excrept="约束满足问题(Constraint Satisfaction Problem, CSP)是一类在工程上非常常见的问题，问题由值域，变量和约束构成。求解约束满足问题指的是找到一组变量的赋值，使得网络中所有约束都被满足。在求解约束满足问题的研究中，弧一致性算法是重中之重，因为问题中的一切多元约束都可以被转化为若干个二元约束。这篇文章介绍了多种弧一致性算法，包括各种版本的时间复杂度，空间复杂度和特点"
        />
    },
    {
        isPost: false,
        tags: [],
        jsx_obj: <Divider orientation="left"><Title level={4}>Algorithms</Title></Divider>
    },
    {
        isPost: true,
        tags:["Algorithms", "Math"],
        jsx_obj: <PostCard
        Title="Time Complexity and Asymptotic Notation"
        Link="/posts/TimeComplexityIntro"
        TagList = {[<Tag color='cyan'>Algorithms</Tag>,<Tag color='magenta'>Math</Tag>]}
        excrept = "时间复杂度是我们衡量算法的重要指标之一，一般我们使用大O记号来表示算法的时间复杂度。那么时间复杂度究竟是什么意思呢？我们为什么要用这个指标分析算法呢？"
        />
    },
    {
        isPost: true,
        tags: ["Algorithms"],
        jsx_obj: <PostCard
        Title="Introduction to Binary Index Tree"
        Link="/posts/BinaryIndexTree"
        TagList = {[<Tag color='cyan'>Algorithms</Tag>]}
        excrept = "在实际生活中，我们常常需要计算一个给定 array 特定范围内所有数的和。如果只有这一个需求的话，我们可以很方便的构建出一个静态的数组来达到 O(1) 的时间复杂度，可是如果我们需要对 array 进行更新的话，就会需要 O(n) 的时间复杂度，相比之下BIT是一种可以快速求出区间和并支持对array进行修改的数据结构"
        />
    },
    {
        isPost: false,
        tags: [],
        jsx_obj: <Divider orientation="left"><Title level={4}>Math Notes</Title></Divider>
    },
    {
        isPost: true,
        tags: ["Math"],
        jsx_obj: <PostCard
        Title="Linear Algebra Chapter 1 Notes"
        Link="/posts/LinearAlgebraNote1"
        TagList={[<Tag color='magenta'>Math</Tag>]}
        excrept={
        <ol>
            <p>Notes for Chapter 1, Introduction to Vectors of <em>Gilbert Strang - Introduction to Linear Algebra, 5th Edition</em></p>
            <li>Vectors and Linear Combination</li>
            <li>Lengths and Dot Product</li>
            <li>Matrices</li>
        </ol>}
        />
    },
    {
        isPost: false,
        tags: [],
        jsx_obj: <Divider orientation="left"><Title level={4}>Others</Title></Divider>
    },
    {
        isPost: true,
        tags: ["Others"],
        jsx_obj: <PostCard
        Title="Intro to Jupyter Notebook"
        Link="/posts/IntroToJupyterNotebook"
        TagList={[<Tag color='default'>Others</Tag>]}
        excrept="本文讲述了如何从安装 Python 到使用 Jupyter Notebook 进行基本的numpy 与 matplotlib 操作"
        />
    }
]

export default allPosts;