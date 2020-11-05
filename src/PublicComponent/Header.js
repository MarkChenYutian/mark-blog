import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function AppHeader(props){
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding:'0'}}>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={[props.select]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/posts">Posts</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/notes">Notes</Link>
            </Menu.Item>
          </Menu>
        </Header>
    );
};

export default AppHeader;