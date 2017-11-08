import PropTypes from 'prop-types';
import React from 'react';

import Login from './Login';
import Signup from './Sign-up';
import RecoverPassword from './RecoverPassword';

// css dependency
import './normalize.css';

class ReactSignupLoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.bubleUpSignup = this.bubleUpSignup.bind(this);
    this.bubleUpLogin = this.bubleUpLogin.bind(this);
    this.bubleUpRecoverPassword = this.bubleUpRecoverPassword.bind(this);

    this.state = {
      isLogin: this.props.isLogin,
      isRecoveringPassword: this.props.isRecoveringPassword,
      username: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  updateState(key, value) {
    this.setState({ [key]: value });
  }

  bubleUpSignup() {
    // this.props.handleSignup({
    //   username: this.state.username,
    //   // password: this.state.password,
    //   // passwordConfirmation: this.state.passwordConfirmation,
    // });
    alert(
      'Congratulations on Joining the Family History Seeker community! We look forward to your contributions!'
    );
  }

  bubleUpLogin() {
    // this.props.handleLogin({
    //   username: this.state.username,
    //   password: this.state.password
    // });
    alert(
      'Logged in!  Access the Family History Seeker Dashboard via the side menu!'
    );
  }

  bubleUpRecoverPassword() {
    this.props.handleRecoverPassword({
      username: this.state.username
    });
  }

  render() {
    const styles = {
      wrapper: {
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: '#FAFAFA',
        margin: 10,
        padding: 20,
        maxWidth: '500px',

        width: 500,
        height: 400,
        perspective: 1000
      },
      title: {
        textAlign: 'center',
        height: 40,
        lineHeight: '40px'
      },
      flipper: {
        transition: '0.4s',
        transformStyle: 'preserve-3d',
        position: 'relative',
        transform: `rotateY(${!this.state.isLogin ||
        this.state.isRecoveringPassword
          ? '180'
          : '0'}deg)`
      }
    };
    const showCard = () => {
      if (this.state.isLogin && !this.state.isRecoveringPassword) {
        return (
          <Login
            key="login-form"
            handleShowSignup={this.updateState}
            // handleShowRecover={this.updateState}
            // styles={this.props.styles.login}
            handleLogin={this.bubleUpLogin}
            // handleChange={this.updateState}
            // username={this.state.username}
            // password={this.state.password}
          />
        );
      } else if (!this.state.isLogin && !this.state.isRecoveringPassword) {
        return (
          <Signup
            key="signup-form"
            handleShowLogin={this.updateState}
            styles={this.props.styles.signup}
            handleSignup={this.bubleUpSignup}
            handleChange={this.updateState}
            username={this.state.username}
            password={this.state.password}
            passwordConfirmation={this.state.passwordConfirmation}
          />
        );
      }
      return (
        <RecoverPassword
          // handleShowLogin={this.updateState}
          // handleRecoverPassword={this.bubleUpRecoverPassword}
          // handleChange={this.updateState}
          styles={this.props.styles.recoverPassword}
          // username={this.state.username}
        />
      );
    };
    return (
      <section
        id="main-wrapper"
        style={Object.assign(styles.wrapper, this.props.styles.mainWrapper)}
      >
        <h1 style={Object.assign(styles.title, this.props.styles.mainTitle)}>
          {this.props.title}
        </h1>
        <div style={Object.assign(styles.flipper, this.props.styles.flipper)}>
          {showCard()}
        </div>
      </section>
    );
  }
}

ReactSignupLoginComponent.propTypes = {
  title: PropTypes.string,
  isLogin: PropTypes.bool,
  isRecoveringPassword: PropTypes.bool,
  styles: PropTypes.shape({
    mainWrapper: PropTypes.object,
    mainTitle: PropTypes.object,
    flipper: PropTypes.object,
    signup: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      recoverPassword: PropTypes.object,
      button: PropTypes.object
    }),
    login: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      recoverPasswordWrapper: PropTypes.object,
      recoverPasswordButton: PropTypes.object,
      button: PropTypes.object
    }),
    recoverPassword: PropTypes.shape({
      wrapper: PropTypes.object,
      inputWrapper: PropTypes.object,
      buttonsWrapper: PropTypes.object,
      input: PropTypes.object,
      button: PropTypes.object
    })
  }),
  handleSignup: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleRecoverPassword: PropTypes.func.isRequired
};

ReactSignupLoginComponent.defaultProps = {
  title: 'Family History Seeker',
  isLogin: true,
  isRecoveringPassword: false,
  styles: {}
};

export default ReactSignupLoginComponent;
