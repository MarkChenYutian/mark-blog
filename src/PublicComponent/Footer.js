import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout } from 'antd';

const {Footer} = Layout;

function AppFooter(){
    return (<Footer style={{ textAlign: 'center' }}>
                Mark's Blog<br></br>
                Powered by React App and Ant Design Components
            </Footer>);
}

export default AppFooter;