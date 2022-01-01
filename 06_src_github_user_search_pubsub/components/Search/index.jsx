import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class index extends Component {
  search = (params) => {



    // ユーザInputを取得
    // 连续解构赋值 + 重命名
    const { keyWordElement: { value: keyWord } } = this
    console.log(keyWord);

    //Httpリクエストする前にStateを変更、
    /* this.props.updateAppState({ isFirst: false, isLoading: true }) */
    PubSub.publish('atguigu', { isFirst: false, isLoading: true })
    // リクエストを出す
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        console.log(response.data.items);
        //Httpリクエストする前にStateを変更、
        /* this.props.updateAppState({ isLoading: false, users: response.data.items }) */
        PubSub.publish('atguigu', { isLoading: false, users: response.data.items })

        //  this.props.saveUsers(response.data.items)
      },
      error => {
        console.log(error)
        // this.props.updateAppState({ isLoading: false, err: error.message })
        PubSub.publish('atguigu', { isLoading: false, err: error.message })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={(c) => { this.keyWordElement = c }} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
