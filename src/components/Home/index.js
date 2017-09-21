import Jumbotron from './Jumbotron';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

class Home extends React.Component {

  render() {
    return (
      <div className="home-page">

        <Jumbotron token={this.props.token} appName={this.props.appName} />
        <div className="container page">
          <h1>Home page</h1>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
