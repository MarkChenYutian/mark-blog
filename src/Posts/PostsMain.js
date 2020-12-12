import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Breadcrumb, Space, Alert, Empty, Typography, Divider, Statistic } from 'antd';

import TagSearchBox from './SearchSys/SearchBox';

import AppHeader from '../PublicComponent/Header';
import AppFooter from '../PublicComponent/Footer';
import allPosts from './PostsData';

const {Content} = Layout;
const {Title} = Typography;

class MainPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchKeys: [],
        }
    }

    updateSearch(value){
        let newsearchKeys = Array();
        for (let i = 0; i < value.length; i ++){
            newsearchKeys.push(value[i]['value']);
        }
        this.setState({
            searchKeys: newsearchKeys
        })
    }

    render(){

        let showPosts = Array();
        if (this.state.searchKeys.length !== 0){
            for (let i = 0; i < allPosts.length; i ++){
                if (allPosts[i]['isPost']){
                    let inc = true;
                    for (let j = 0; j < this.state.searchKeys.length; j ++){
                        inc = inc && allPosts[i]['tags'].includes(this.state.searchKeys[j]);
                    }
                    if (inc){showPosts.push(allPosts[i]['jsx_obj']);}
                }
            }

        }
        else{
            for (let i = 0; i < allPosts.length; i ++){
                showPosts.push(allPosts[i]['jsx_obj']);
            }
        }

        let allCount = 0;
        for (let i = 0; i < allPosts.length; i ++){
            if (allPosts[i]['isPost']){allCount ++;}
        }
        let resultCount = 0;
        resultCount = Math.min(showPosts.length, allCount);


        let resultCountShow = <Statistic title="Posts Count" value={resultCount} suffix={"/"+allCount} style={{float:'right'}}/>;

        if (showPosts.length === 0){
            showPosts.push(<Empty description="No Result Found"/>)
        }
        
        return(
            <Layout>
            <AppHeader select="2"/>
            <Content className="site-layout" style={{ padding: '0 24px', marginTop: 64 }}>
    
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Posts</Breadcrumb.Item>
              </Breadcrumb>
    
              <div className="site-layout-background" style={{ padding: 16 }}>
              <Title level={2}>Posts</Title>
    
                <Space direction="vertical" size="small" style={{ width: "100%" }}>
                <div><Title level={4} style={{float: 'left'}}>Tag Filter</Title> {resultCountShow}</div>
                <TagSearchBox changeHandle={(value) => this.updateSearch(value)}/>

                <Divider></Divider>
                <Alert
                    message="Warning"
                    description="For Better Experience, it is recommended to use PC to access this React App since using window with small width may lead to content overflow."
                    type="warning"
                    showIcon
                    closable
                />

                {showPosts}

                </Space>
              </div>
            </Content>
            <AppFooter/>
          </Layout>
        )
    }
}

export default MainPost;