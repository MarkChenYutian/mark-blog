import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import {PageHeader} from 'antd'

function AppPageHeader(props){
    return (
        <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title={props.title}
            subTitle={props.subTitle}
        />
    );
}

export default AppPageHeader;