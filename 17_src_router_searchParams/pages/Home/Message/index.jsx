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
                  {/* Routerコンポーネントにparamを送る */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* Routerコンポーネントにsearchパラメータ（QueryString）を送る */}
                  <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

                </li>
              </ul>
            )
          })
        }
        {/* パラメータを受け取ることを声明する */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* Searchパラメータは声明してなくても受け取れる。普段通りにRouteを登録*/}
        <Route path="/home/message/detail" component={Detail} />

      </div>
    )
  }
}
