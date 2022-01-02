import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'; // withRouteは関数

class Header extends Component {
  back = (params) => {
    this.props.history.goBack();
  }
  forward = (params) => {
    this.props.history.goForward();
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>戻る</button>
        <button onClick={this.forward}>進む</button>

      </div>
    )
  }
}

// withRouterでHeaderを加工後の返り値をExport。withRouteの返り値は新しいコンポーネント
// 一般のコンポーネントをRouteコンポーネントに加工する。Routeコンポーネントでしか使えないAPIが使えるようにする
export default withRouter(Header)
