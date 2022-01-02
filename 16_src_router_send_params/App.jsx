import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import About from './pages/About'// ルーターのコンポーネント
import Home from './pages/Home'
import Header from './components/Header' // 一般のコンポーネント
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* ネイティブHTMLは<a>を使ってページを遷移する */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* Reactの中でRouterを使ってComponentを切り替える Routeを編集する*/}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Routeを登録 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about"/>
                </Switch>


              </div>
            </div>
          </div>
        </div>

      </div >
    )
  }
}
