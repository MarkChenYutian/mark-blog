import React from 'react';
import '../App.css'
import 'antd/dist/antd.css';
import '../index.css';
import {Layout, Typography, Image, Space, Button} from 'antd';
import {MailOutlined, ZhihuOutlined, DownloadOutlined} from '@ant-design/icons';

import failImage from '../PublicComponent/FailImage';

const { Link, Title, Paragraph, Text } = Typography;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';

function AboutMe(){
    return(
        <Layout style={{ backgroundColor: "white", padding: "0"}}>
            <Title level={2}>About Me</Title>

            <Space
                size="large"
                align="start"
            >

            <Image
                width={150}
                height={150}
                src={`${PhotoLink}MyPhoto.jpg`}
                fallback={failImage}
            />

            <Paragraph>
            <Title level={4}>Yutian Chen</Title>
                <MailOutlined/> <Text copyable>markchenyutian@gmail.com</Text>
                <br></br>
                <ZhihuOutlined/>  Home Page: <Text><Link href="https://www.zhihu.com/people/mark-chenyutian">https://www.zhihu.com/people/mark-chenyutian</Link></Text>
                <br></br>
                ORCiD: <Text><Link href="https://orcid.org/0000-0001-8008-9014">https://orcid.org/0000-0001-8008-9014</Link></Text>
            </Paragraph>
            </Space>
        </Layout>
    );}

export default AboutMe;