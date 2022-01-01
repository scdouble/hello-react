import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users:[], //stateを初期化
    isFirst:true, // 初めてページを訪れていることを表示
    isLoading:false, // データロードの状態を表示
    err:'' //Httpリクエストエラーのメッセージを入れる
  }

  // saveUsers = (users) =>{
  //   this.setState({users})
  // }

  // AppのStateを更新
  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
