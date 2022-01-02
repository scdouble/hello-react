import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: 'message01' },
      { id: '02', title: 'message02' }
    ]

  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        {
          messageArr.map((msgObj) => {
            return (
              <ul>
                <li key={msgObj.id} >
                  {/* Routerコンポーネントにパラメータを送る */}
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              </ul>
            )
          })
        }
        {/* パラメータを受け取ることを声明する */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

      </div>
    )
  }
}
