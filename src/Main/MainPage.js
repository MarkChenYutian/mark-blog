import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Breadcrumb, Typography, Divider, Button, Space } from 'antd';
import {ApiOutlined, CalendarOutlined} from '@ant-design/icons';

import AppHeader from '../PublicComponent/Header';
import AppFooter from '../PublicComponent/Footer';
import AboutMe from './AboutMe';
import MainAlertArea from './MainAlertArea';

const {Content} = Layout;
const {Title, Paragraph, Text} = Typography;


const MainContent = () => {
    window.scrollTo(0,0);
    return (
        <Layout>
        <AppHeader select="1"/>
        <Content className="site-layout" style={{ padding: '0 24px', marginTop: 64 }}>

          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Main Page</Breadcrumb.Item>
          </Breadcrumb>

          <div className="site-layout-background" style={{ padding: 16 }}>
            <AboutMe/>

            <Divider></Divider>

            <Title level={2}>About This Site</Title>

            <Paragraph>Currently, I'm transfering the posts from previous HTML blog to this new React Blog. Here are tips for visitors:</Paragraph>
            <Paragraph>To see my Posts on <Text type='warning'>Articial Intelligence, Bitcoin, Algorithm</Text>, etc. click "Posts" on the header.</Paragraph>
            <Paragraph>To get AP Notes shared by me or the USACO Problem Analysis, click "Notes" on the header.</Paragraph>

            <Space direction="vertical" size="small">
            <Text>This webpage is constructed using React App and Ant Design Coponents. Currently, it is deployed on both Gitee Pages and GitHub Pages</Text>

            <Space direction="horizontal" size="middle">
            <Button type="default" href="https://markchenyutian.github.io/mark-blog/#/">
                <ApiOutlined/> Mark's Blog @ GitHub
            </Button>
            <Button type="default" href="https://markchenyutian.github.io/Markchen_Blog/">
                <ApiOutlined/> Mark's Blog (Old version)
            </Button>
            </Space>
            </Space>
            <Divider></Divider>
            <Title level={2}>Schedule Meeting</Title>
            <Paragraph>If you want to meet me for <Text type="warning">AP Computer Science A problems</Text> and <Text type="warning">CS & Math related competitions</Text>, etc. or has interesting thought that wants to share, please schedule a period of time on calendly.</Paragraph>
            <Button type="primary" href="https://calendly.com/markchenyutian" disabled={false}>
              <CalendarOutlined style={{ fontSize: '20px'}}/> Schedule a Meeting
            </Button>

            <Divider></Divider>
            <Title level={2}>Notifications</Title>
            <MainAlertArea/>

          </div>
        </Content>
        <AppFooter/>
      </Layout>
    );
};

export default MainContent;