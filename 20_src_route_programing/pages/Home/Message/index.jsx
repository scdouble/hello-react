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
  pushShow = (id, title) => {
    //ブラウザのHistoryをPushモードで画面遷移する
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    //ブラウザのHistoryをPushモードで画面遷移する+ queryを持つ
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    //ブラウザのHistoryをPushモードで画面遷移する+ stateを持つ
    this.props.history.push(`/home/message/detail`, { id, title })


  }
  replaceShow = (id, title) => {
    //ブラウザのHistoryをReplaceモードで画面遷移する+ paramsを持つ
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //ブラウザのHistoryをReplaceモードで画面遷移する+ queryを持つ
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    //ブラウザのHistoryをReplaceモードで画面遷移する+ stateを持つ
    this.props.history.replace(`/home/message/detail`, { id, title })

  }

  back = () => {
    this.props.history.goBack()

  }

  forward = () => {
    this.props.history.goForward()

  }

  go = () => {
    // 指定したステップ進む
    this.props.history.go(2)

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
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                  <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>Push Show Message</button>
                  <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>Replace Show Message</button>
                  {/* Routerコンポーネントにsearchパラメータ（QueryString）を送る */}
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* Routeコンポーネントにstateパラメータを送る */}
                  {/* <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link> */}

                </li>
              </ul>
            )
          })
        }
        {/* パラメータを受け取ることを声明する */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* Searchパラメータは声明してなくても受け取れる。普段通りにRouteを登録*/}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* Stateパラメータは声明してなくても受け取れる。普段通りにRouteを登録*/}
        <Route path="/home/message/detail" component={Detail} />

        <button onClick={this.forward}>進む</button>
        <button onClick={this.back}>戻る</button>
        <button onClick={this.go}>Go</button>

      </div>
    )
  }
}
