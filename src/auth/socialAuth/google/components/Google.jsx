import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class GoogleButton extends Component {

  responseGoogle = response => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      responseType: "json"
    };

    axios
      .post(
        "https://ah-backend-realers-staging.herokuapp.com/api/auth/google/",
        {
          user: {
            access_token: response.Zi.id_token
          }
        },
        config
      )
      .then(response => {
        localStorage.setItem("user_token", response.data.user.token);
        history.replace('/about');
      })
      .catch(() => {
        this.setState({authenticationFailed: true})
      });
  };
  render() {
    
    return (
      <div className="GoogleButton">
        <GoogleLogin
          clientId="89508795419-ttfu7cnb3lomkfm9r8r5v59igphfpmjd.apps.googleusercontent.com"
          fields="name,email,picture"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          buttonText=""
        />
      </div>
    );
  }
}
export default GoogleButton;
