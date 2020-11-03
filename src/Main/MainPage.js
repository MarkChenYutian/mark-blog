import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Breadcrumb, Typography, Divider, Button } from 'antd';
import {ApiOutlined} from '@ant-design/icons';

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

            <Title level={2}>About This App</Title>

            This is the React App of Mark. Currently, the App is under construction, you can access Mark's Blog instead.
            <br></br>

            <Text strong>Copy the URL to access My Blog:</Text>
            <Paragraph copyable>https://markchenyutian.github.io/Markchen_Blog/</Paragraph>

            <Button type="default" href="https://markchenyutian.github.io/Markchen_Blog/">
                <ApiOutlined/> Go to Mark's Blog 
            </Button>

            <Divider orientation='left'>
                Notice & Information
            </Divider>
            <MainAlertArea/>

          </div>
        </Content>
        <AppFooter/>
      </Layout>
    );
};

export default MainContent;