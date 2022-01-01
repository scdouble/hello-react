import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import "./index.css"
export default class index extends Component {

  state = {
    users: [], //stateを初期化
    isFirst: true, // 初めてページを訪れていることを表示
    isLoading: false, // データロードの状態を表示
    err: '' //Httpリクエストエラーのメッセージを入れる
  }

  componentDidMount() {
    this.token = PubSub.subscribe("atguigu", (_, stateObj) => {
    this.setState(stateObj)
    })
  }

  componentWillUnmount(){
  PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>Enter Search word</h2> :
            isLoading ? <h2>Loading</h2> :
              err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                users.map((userObj) => {
                  return (
                    <div key={userObj.id} className="card">
                      <a rel="noreferrer" href={userObj.html_url} target="_blank">
                        <img alt="head_icon" src={userObj.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
