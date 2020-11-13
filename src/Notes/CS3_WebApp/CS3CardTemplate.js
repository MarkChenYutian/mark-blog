import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Link } from 'react-router-dom';
import {Typography, Row, Col, Tag, Card, Space } from 'antd';

const {Text} = Typography;

function CS3CardTemplate(props){
    return (
            <Col span={8}>
            <Card
                title={props.title}
                bordered={false}
                hoverable={true}
                actions={[
                    <Link to={props.NotesURL}>Notes</Link>,
                    <Link to={props.HomeworkURL}>Homework</Link>
                ]}
            >
            <Space direction="vertical" size="small">
            {props.tags}
            <Text type='secondary'>
                {props.content}
            </Text>
            </Space>
            </Card>
            </Col>
    );
}

export default CS3CardTemplate;