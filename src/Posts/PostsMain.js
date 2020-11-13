import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Breadcrumb, Typography, Space, Alert, Tag, Divider } from 'antd';

import AppHeader from '../PublicComponent/Header';
import AppFooter from '../PublicComponent/Footer';
import PostCard from '../PublicComponent/PostCard';

const {Content} = Layout;
const {Title} = Typography;

const MainPost = () => {
    window.scrollTo(0,0);
    return (
        <Layout>
        <AppHeader select="2"/>
        <Content className="site-layout" style={{ padding: '0 24px', marginTop: 64 }}>

          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Posts</Breadcrumb.Item>
          </Breadcrumb>

          <div className="site-layout-background" style={{ padding: 16 }}>
          <Title level={2}>Posts</Title>

            <Space direction="vertical" size="middle" style={{ width: "100%" }}>

            <Alert
                message="Warning"
                description="For Better Experience, it is recommended to use PC to access this React App since using window with small width may lead to content overflow."
                type="warning"
                showIcon
                closable
            />

            <Alert
                message="Information"
                description="You can access my blog at this url: https://markchenyutian.github.io/Markchen_Blog/"
                type="info"
                showIcon
                closable
            />

            <Divider orientation="left"><Title level={4}>Neural Network</Title></Divider>

            <PostCard
                Title="How do Neural Network Work"
                Link="/posts/HowDoNeuralNetworkWork"
                TagList={[<Tag color="blue">How Do Neural Network Work</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
                excrept="神经网络作为一种新兴的计算机技术被许多人称为一种全新的“编程范式”，与往常的算法编写不同，神经网络是一种“数据驱动”的编程方法。在往常的算法编写中，人们需要手动编写算法的逻辑，而在神经网络中，人们只需要为网络提供海量数据和参考答案，网络就会自动生成算法。那么神经网络到底是怎么工作的呢？<"
            />

            <PostCard
                Title="Gradient Descent Methods"
                Link="/posts/GradientDescentMethods"
                TagList={[<Tag color="blue">Neural Network</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
                excrept="神经网络的训练本质上是通过调节参数来最小化模型输出的损失函数。然而如何调节参数看似简单实际却有许多技巧和方法来优化。这篇文章会介绍最基本的随机梯度下降，采用一阶动量的SGD with momentum，和采用自适应学习率的AdaGrad, RMS Prop, 和集大成者 Adam。这些模型各自有各自的特点，并且在不同的场景中各有优劣。"
            />
            
            <PostCard
                Title="What is LSTM"
                Link="/posts/WhatIsLSTM"
                TagList={[<Tag color="blue">Neural Network</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
                excrept="一般的神经网络只能处理单个信息，可是有的时候神经网络的输入是一个时间序列，在这种情况下普通的前馈神经网络就不能利用“上下文”中隐含的信息来更好的处理当前输入。为了解决这个问题，人们提出了递归神经网络(Recurrent Neural Network, RNN)。可是递归神经网络也有问题：由于同样的权重在网络中一直被累乘，在反向传播的时候极容易出现梯度消失与梯度爆炸的问题。同时，由于RNN在状态间传递的信息过少，RNN在上下文距离较远的时候会很快的遗忘前文信息。为了解决这些问题，人们提出了LSTM这个新的网络模型，它可以很好的处理以上这些问题。"
            />

            <PostCard
                Title="Residual Network (ResNet)"
                Link="/posts/ResidualNetwork"
                TagList={[<Tag color="blue">Neural Network</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
                excrept="在深度学习中，两个严重影响了模型效果的问题是梯度消失问题与梯度下降问题。这两个问题的出现与深度学习的根本机制 - 反向传播损失函数梯度有关。在很长一段时间里，人们认为超过100层的网络是“不可训练”的。然而残差网络 (Residual Network, ResNet) 的出现改变了这一切。通过设计“短路”机制，残差网络可以让梯度更好的在网络的层之间传播，从而使得训练500+层的超深神经网络成为了可能。相似的机制也启发了一大批拥有shortcut connection的神经网络，例如在医学图像处理领域常见的 U-net 和 Dense Net。"
            />
            

            <Divider orientation="left"><Title level={4}>Artificial Intelligence</Title></Divider>
          
            <PostCard
                Title="What is Bayes Network"
                Link="/posts/WhatIsBayesNetwork"
                TagList = {[<Tag color="orange">CS 188</Tag>, <Tag color="blue">Artificial Intelligence</Tag>, <Tag color="blue">Machine Learning</Tag>]}
                excrept = "贝叶斯网络是人们在探索机器学习时的一个重要里程碑，通过贝叶斯网络，机器学习摆脱了以往基于形式逻辑推理和庞大知识库的限制，开始了“统计学习”的新纪元。那么什么是贝叶斯网络呢？贝叶斯网络和贝叶斯统计学派又有什么关系呢?"
            />

            <Divider orientation="left"><Title level={4}>Algorithms</Title></Divider>

            <PostCard
                Title="Time Complexity and Asymptotic Notation"
                Link="/posts/TimeComplexityIntro"
                TagList = {[<Tag color='cyan'>Algorithms</Tag>,<Tag color='magenta'>Math</Tag>]}
                excrept = "时间复杂度是我们衡量算法的重要指标之一，一般我们使用大O记号来表示算法的时间复杂度。那么时间复杂度究竟是什么意思呢？我们为什么要用这个指标分析算法呢？"
            />

            <PostCard
                Title="Introduction to Binary Index Tree"
                Link="/posts/BinaryIndexTree"
                TagList = {[<Tag color='cyan'>Algorithms</Tag>]}
                excrept = "时间复杂度是我们衡量算法的重要指标之一，一般我们使用大O记号来表示算法的时间复杂度。那么时间复杂度究竟是什么意思呢？我们为什么要用这个指标分析算法呢？"
            />

            <Divider orientation="left"><Title level={4}>Others</Title></Divider>
            <PostCard
                Title="Intro to Jupyter Notebook"
                Link="/posts/IntroToJupyterNotebook"
                TagList={[<Tag color='default'>Others</Tag>]}
                excrept="本文讲述了如何从安装 Python 到使用 Jupyter Notebook 进行基本的numpy 与 matplotlib 操作"
            />

            </Space>
          </div>
        </Content>
        <AppFooter/>
      </Layout>
    );
};

export default MainPost;