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
            <Alert
            message="注意"
            description="如果需要找我面谈 AP Computer Science A 期中考试，请先点击上面的按钮预约时间"
            type="warning"
            showIcon
            />,
            <Alert
            message="Information"
            description="You can access my blog (old version) at this url: https://markchenyutian.github.io/Markchen_Blog/"
            type="info"
            showIcon
            />
        ]
    };
    SetEmptyArea(){
        this.setState(
            {
                AlertList : <Empty description="No Info"/>
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