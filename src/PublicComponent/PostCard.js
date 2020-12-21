import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import {Typography, Divider, Card} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const {Paragraph, Text} = Typography;


function PostCard(props){
    return(
    <Card type="inner" title={<Text strong>{props.Title}</Text>} extra={<Link to={props.Link}>More <PlusOutlined /></Link>}>
    {props.TagList}
    <Divider></Divider>
    <Paragraph
    ellipsis={{
        rows: 3,
        expandable: false,
    }}>{props.excrept}</Paragraph>
    </Card>
);}

export default PostCard;