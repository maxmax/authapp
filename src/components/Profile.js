import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile
});

class Profile extends React.Component {

  render() {
    //const {profile, currentUser} = this.props;

    return (
      <div className="profile-page">
        <div className="jumbotron">
          <div className="container">
            <h2>Profile</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Profile);
export { Profile, mapStateToProps };
