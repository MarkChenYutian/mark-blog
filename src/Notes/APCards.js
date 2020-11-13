import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Typography, Row, Col, Tag, Card, Space } from 'antd';
import {FilePdfOutlined, BookOutlined} from '@ant-design/icons';;

const {Title, Text} = Typography;

function APCards(){
    return(
        <Layout style={{ backgroundColor: 'white', padding: '0'}}>
        <Title level={3}>Advanced Placement</Title>

        <div className="site-card-wrapper">
        <Space
            direction="vertical"
            style={{width: "100%"}}
        >
        <Row gutter={16}>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qhN13evPwPUMWqidPDQ?e=lnHw6E">
            <Card title="Calculus" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'> Size: 50M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qhN4EldJWgEmT3GQ84Q?e=A1BUpZ">
            <Card title="Statistics" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'> Size: 50M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        <Col span={8}>
        <a>
            <Card title="CS A" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Tag color="red">N/A</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        </Row>
        <Row gutter={16}>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qhN12v8FiI_hO4_I3Jg?e=oFDoCn">
            <Card title="Biology" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'> Size: 70M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qhN4FQfxa8Im_2lGjqg?e=gkU8zY">
            <Card title="Physics 2" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'> Size: 35M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qhN4GxGkBtGwaJulLAA?e=MbHCqe">
            <Card title="Physics CEM" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'> Size: 5M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        </Row>
        <Row gutter={16}>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qi6lvEXsZTMHB-qr-Ow?e=ZJw6Xl">
            <Card title="Chemistry" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'>Size: 10M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qi6luq4AWgP0brpo-JA?e=QKWfKx">
            <Card title="Microeconomics" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'>Size: 5M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qi6ltoy8cDIK7jRUMNA?e=mT85lO">
            <Card title="Physics 1" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'>Size: 1.2M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        </Row>
        <Row gutter={16}>
        <Col span={8}>
        <a href="https://1drv.ms/b/s!AtCdnSj9ls2qi6lsWUrhefR1HRCGBQ?e=aztaod">
            <Card title="Physics CM" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <FilePdfOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'>Size: 1.5M</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        <Col span={8}>
        <a href="https://onedrive.live.com/redir.aspx?cid=aacd96fd289d9dd0&resid=AACD96FD289D9DD0!77461&parId=AACD96FD289D9DD0!104&authkey=!AL8wrY9_pFimlc">
            <Card title="Grade 10" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <BookOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'>OneNote Online</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        <Col span={8}>
        <a href="https://onedrive.live.com/redir.aspx?cid=aacd96fd289d9dd0&resid=AACD96FD289D9DD0!77399&parId=AACD96FD289D9DD0!104&authkey=!AEkcRuZGkkj5Pe0">
            <Card title="Grade 11" bordered={false} hoverable={true}>
            <Space direction="vertical">
            <BookOutlined style={{ fontSize: '30px'}}/>
            <Text type='secondary'>OneNote Online</Text>
            <Tag color="green">Online</Tag>
            </Space>
            </Card>
        </a>
        </Col>
        </Row>
        </Space>
        </div>
        </Layout>);
}

export default APCards;