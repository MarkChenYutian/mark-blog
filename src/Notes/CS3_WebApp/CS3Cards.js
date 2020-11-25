import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Typography, Row, Space } from 'antd';

import CS3CardTemplate from './CS3CardTemplate'

const {Title} = Typography;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';


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
                NotesURL="notes/CS3/Week8/Notes"
                HomeworkURL="notes/CS3/Week8/HW"
                coverimg={`${PhotoLink}logo512.png`}
            />

            </Row>
            </Space>

            </div>
        </Layout>
    );
}

export default USACO_Cards;