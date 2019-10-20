import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Typography } from 'antd';

export default class App extends Component {
    render() {
        return (
            <div>
                <Typography.Title level={2}>Hello World</Typography.Title>
            </div>
        );
    }
}
