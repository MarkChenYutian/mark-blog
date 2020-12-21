import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Typography, Row, Col, Tag, Card, Space } from 'antd';

const {Title, Text} = Typography;

function USACOCards(){
    return (
        <Layout style={{ backgroundColor: 'white', padding: '0'}}>
            <Title level={3}>USACO Analysis</Title>

            <Title level={4}>2016</Title>
            <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={8}>
            <a href="#/notes/USACO/Gold/2016-Jan">
                <Card title="January" bordered={false} hoverable={true}>
                <Space direction="vertical" size="small">
                <Tag color="green">Available</Tag><Tag color="gold">Gold Division</Tag>
                <Text type='secondary'>
                    <ol>
                        <li>Angry Cows</li>
                        <li>Radio Contact</li>
                        <li>Lights Out</li>
                    </ol>
                </Text>
                </Space></Card></a></Col>
            <Col span={8}>
            <a href="#/notes/USACO/Gold/2016-Feb">
                <Card title="February" bordered={false} hoverable={true}>
                <Space direction="vertical">
                <Tag color="green">Available</Tag><Tag color="gold">Gold Division</Tag>
                <Text type='secondary'>
                    <ol>
                        <li>Circular Barn</li>
                        <li>Circular Barn Revisited</li>
                        <li>Fenced In</li>
                    </ol>
                </Text>
                </Space></Card></a></Col>
            <Col span={8}>
            <a href='#/notes/USACO/Gold/2016-Dec'>
                <Card title="December" bordered={false} hoverable={true}>
                <Space direction="vertical">
                <Tag color="green">Available</Tag><Tag color='gold'>Gold Division</Tag>
                <Text type='secondary'>
                    <ol>
                        <li>Moo-cast</li>
                        <li>Cow Checklist</li>
                        <li>Lasers and Mirrors</li>
                    </ol>
                </Text>
                </Space></Card></a></Col>
            </Row>
            </div>

            <Title level={4}>2017</Title>

            <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={8}>
                <a href='#/notes/USACO/Gold/2017-Jan'>
                <Card title="January" bordered={false} hoverable={true}>
                <Space direction="vertical">
                <Tag color="green">Available</Tag><Tag color="gold">Gold Division</Tag>
                <Text type='secondary'>
                    <ol>
                        <li>Balanced Photo</li>
                        <li>Hoof, Paper, Scissors</li>
                        <li>Cow Navigation</li>
                    </ol>
                </Text>
                </Space></Card></a></Col>
            <Col span={8}>
                <a href='#/notes/USACO/Gold/2017-Feb'>
                <Card title="January" bordered={false} hoverable={true}>
                <Space direction="vertical">
                <Tag color="green">Available</Tag><Tag color="gold">Gold Division</Tag>
                <Text type='secondary'>
                    <ol>
                        <li>Why did the Cow Cross the Road</li>
                        <li>Why did the Cow Cross the Road II</li>
                        <li>Why did the Cow Cross the Road III</li>
                    </ol>
                </Text>
                </Space></Card></a></Col>
            </Row>
            </div>
        </Layout>
    );
}

export default USACOCards;