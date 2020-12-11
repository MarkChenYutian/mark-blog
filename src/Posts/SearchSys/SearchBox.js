import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Button, Select, Space, Tag } from 'antd';

class TagSearchBox extends React.Component{
    render(){
        return (
            <Select
                mode='multiple'
                style={{width: '100%'}}
                placeholder="Select tags to filter posts"
                allowClear={true}
                onChange={(value, option) => this.props.changeHandle(option)}
            >
                <Option value="Neural Network"><Tag color="blue">Neural Network</Tag></Option>
                <Option value="Artificial Intelligence"><Tag color="blue">Artificial Intelligence</Tag></Option>
                <Option value="Machine Learning"><Tag color="blue">Machine Learning</Tag></Option>
                <Option value="CS 188"><Tag color="orange">CS 188</Tag></Option>
                <Option value="Algorithms"><Tag color="cyan">Algorithms</Tag></Option>
                <Option value="Math"><Tag color="magenta">Math</Tag></Option>
                <Option value="Others"><Tag color="default">Others</Tag></Option>
            </Select>
        )
    }
}

export default TagSearchBox