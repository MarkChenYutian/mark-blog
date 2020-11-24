import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Typography, Row, Space } from 'antd';

import CS3CardTemplate from './CS3CardTemplate'

const {Title} = Typography;

function USACO_Cards(){
    return (
        <Layout style={{ backgroundColor: 'white', padding: '0'}}>
            <Title level={3}>Computer Science 3 Notes & Homework</Title>
            <div className="site-card-wrapper">
            <Space
                direction="vertical"
                style={{width: "100%"}}
            >
            <Row gutter={16}>
            
            <CS3CardTemplate
                title="Week 8"
                content="Basic Usage of React"
                NotesURL=""
                HomeworkURL="notes/CS3/Week8/HW"
            />

            </Row>
            </Space>

            </div>
        </Layout>
    );
}

export default USACO_Cards;