import React from 'react';
import '../App.css'
import 'antd/dist/antd.css';
import '../index.css';
import {Layout, Typography, Image, Space} from 'antd';
import {MailOutlined, ZhihuOutlined} from '@ant-design/icons';

import failImage from '../PublicComponent/FailImage';

const { Link, Title, Paragraph } = Typography;
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
                <Paragraph copyable><MailOutlined/> markchenyutian@gmail.com</Paragraph>
                ORCiD: <Link href="https://orcid.org/0000-0001-8008-9014">https://orcid.org/0000-0001-8008-9014</Link>
                <br></br>
                <ZhihuOutlined/>  Home Page: <Link href="https://www.zhihu.com/people/chen-yu-tian-48-79">https://www.zhihu.com/people/chen-yu-tian-48-79</Link>
            </Paragraph>

            </Space>
        </Layout>
    );
}

export default AboutMe;