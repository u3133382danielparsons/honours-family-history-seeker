import React, { Component } from 'react';
import ReactSignupLoginComponent from './components/ReactSignupLoginComponent';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Card } from 'material-ui/Card';
import SocialLogin from './components/social-log.png';

const style = {
  height: 180,
  width: 480,
  padding: 20
};

class SignUpMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <ReactSignupLoginComponent />
          <Divider />
          <div className="social-login">
            <Paper style={style} zDepth={5}>
              <img src={SocialLogin} alt="Social Media Login Icons" />
            </Paper>
            <Card>
              <h3 className="social-login-msg">
                This is for Demonstration Purposes!
              </h3>
            </Card>
          </div>
        </div>
      </main>
    );
  }
}

export default SignUpMain;
