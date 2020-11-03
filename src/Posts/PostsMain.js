import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Breadcrumb, Typography, Space, Alert, Tag, Card, Divider } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import AppHeader from '../PublicComponent/Header';
import AppFooter from '../PublicComponent/Footer';

const {Content} = Layout;
const {Title, Paragraph} = Typography;

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
                description="This Site is under Active Construction"
                type="warning"
                showIcon
                closable
            />

            <Alert
                message="Warning"
                description="For Better Experience, it is recommended to use PC to access this React App since using window of small width may lead to content overflow."
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

            <Card type="inner" title="How Do Neural Network Work" extra={<Link to="/posts/HowDoNeuralNetworkWork">More <PlusOutlined /></Link>}>
                <Tag color="blue">Neural Network</Tag> <Tag color="blue">Artificial Intelligence</Tag><Tag color="blue">Machine Learning</Tag>
                <Divider></Divider>
                <Paragraph
                ellipsis={{
                    rows: 3,
                    expandable: false,
                }}>神经网络作为一种新兴的计算机技术被许多人称为一种全新的“编程范式”，与往常的算法编写不同，神经网络是一种“数据驱动”的编程方法。在往常的算法编写中，人们需要手动编写算法的逻辑，而在神经网络中，人们只需要为网络提供海量数据和参考答案，网络就会自动生成算法。那么神经网络到底是怎么工作的呢？</Paragraph>
            </Card>

            <Card type="inner" title="What Is LSTM" extra={<Link to="/posts/WhatIsLSTM">More <PlusOutlined /></Link>}>
                <Tag color="blue">Neural Network</Tag> <Tag color="blue">Artificial Intelligence</Tag><Tag color="blue">Machine Learning</Tag>
                <Divider></Divider>
                <Paragraph
                ellipsis={{
                    rows: 3,
                    expandable: false,
                }}>一般的神经网络只能处理单个信息，可是有的时候神经网络的输入是一个时间序列，在这种情况下普通的前馈神经网络就不能利用“上下文”中隐含的信息来更好的处理当前输入。为了解决这个问题，人们提出了递归神经网络(Recurrent Neural Network, RNN)。可是递归神经网络也有问题：由于同样的权重在网络中一直被累乘，在反向传播的时候极容易出现梯度消失与梯度爆炸的问题。同时，由于RNN在状态间传递的信息过少，RNN在上下文距离较远的时候会很快的遗忘前文信息。为了解决这些问题，人们提出了LSTM这个新的网络模型，它可以很好的处理以上这些问题。</Paragraph>
            </Card>
            </Space>
          </div>

        </Content>
        <AppFooter/>
      </Layout>
    );
};

export default MainPost;