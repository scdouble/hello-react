import React, { Component } from 'react'

import { WechatOutlined } from '@ant-design/icons'
import { Button, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

import 'antd/dist/antd.css'


export default class App extends Component {

  onChange1 = (date, dateString) => {
    console.log(date, dateString);
  }

  onChange2 = (dates, dateStrings) => {
    console.log(dates, dateStrings);
  }
  render() {
    return (
      <div>
        App...
        <button>Click me</button>
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Primary Button</Button>
        <WechatOutlined />
        <DatePicker onChange={this.onChange1} />
        <RangePicker onChange={this.onChange2} />
      </div>
    )
  }
}
