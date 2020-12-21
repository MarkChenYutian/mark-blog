import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Link } from 'react-router-dom';
import {Typography, Col, Card, Space } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const {Title, Paragraph} = Typography;
const PhotoLink = process.env.PUBLIC_URL;

function CS3CardTemplate(props){
    return (
            <Col span={8}>
            <Card
                title={<Title level={5}>{props.title}</Title>}
                bordered={false}
                hoverable={true}
                actions={[
                    <Link to={props.NotesURL}>Notes</Link>,
                    <Link to={props.HomeworkURL}>Homework</Link>
                ]}
                cover={<center><img src={props.coverimg} width={80} height={80}/></center>}
            >
            <Space direction="vertical" size="small">
            {props.tags}
            <Paragraph ellipsis={{
            rows: 2,
            expandable: true,
            }}>
                {props.content}
            </Paragraph>
            </Space>
            </Card>
            </Col>
    );
}

export default CS3CardTemplate;