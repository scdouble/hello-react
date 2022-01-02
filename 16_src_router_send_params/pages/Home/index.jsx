import React, { Component } from 'react'
import News from './News';
import Message from './Message';
import MyNavLink from '../../components/MyNavLink';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
export default class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Home组件内容</h3>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
            {/* <a className="list-group-item" href="./home-news.html">News</a> */}
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>

            {/* <a className="list-group-item" href="./home-message.html">Message</a> */}
          </li>
        </ul>
        {/* Routeを登録 */}
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />

        </Switch>


      </div>
    )
  }
}
