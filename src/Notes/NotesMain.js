import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Breadcrumb, Divider } from 'antd';

import AppHeader from '../PublicComponent/Header';
import AppFooter from '../PublicComponent/Footer';

import USACOCards from './USACO/USACOCards';
import APCards from './APCards';
import CS3Cards from './CS3_WebApp/CS3Cards';

const {Content} = Layout;

const MainNotes = () => { 
    window.scrollTo(0,0);
    return (
        <Layout>
        <AppHeader select="3"/>
        <Content className="site-layout" style={{ padding: '0 24px', marginTop: 64 }}>

          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Notes</Breadcrumb.Item>
          </Breadcrumb>

          <div className="site-layout-background" style={{ padding: 16 }}>

            <APCards/>

            <Divider></Divider>

            <USACOCards/>

            <Divider></Divider>
            <CS3Cards/>

          </div>
        </Content>
        <AppFooter/>
      </Layout>
    );
};

export default MainNotes;