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
            <div className="site-card-wrapper">
            <Space
                direction="vertical"
                style={{width: "100%"}}
            >
            <Title level={4}>2016</Title>
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
                </Space>
                </Card>
            </a>
            </Col>
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
                </Space>
                </Card>
            </a>
            </Col>
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
                </Space>
                </Card>
            </a>
            </Col>
            </Row>
            </Space>

            </div>
        </Layout>
    );
}

export default USACOCards;