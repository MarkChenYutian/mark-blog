import React from 'react';
import '../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../index.css';
import {Alert, Space, Empty} from 'antd';

/*
This Class `MainAlertArea` control the Alert objects on React DOM on AppMainContent.
New Alerts should be added in MainAlertArea.state.AlertList

Where there's no Alert in MainAlertArea.state.AlertList, the Empty State will be applied and rendered automatically
*/

class MainAlertArea extends React.Component{
    state = {
        AlertList : [
            
        ]
    };
    SetEmptyArea(){
        this.setState(
            {
                AlertList : <Empty description="No Alert and Notification"/>
            }
        );
    }
    render(){
        if (this.state.AlertList.length === 0){
            this.SetEmptyArea();
        }
        return (
            <Space
                direction="vertical"
                style={{width: "100%"}}
            >
                {this.state.AlertList}
            </Space>
        );
}
}

export default MainAlertArea;