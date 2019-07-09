import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import history from "../../../../commons/history";

class FacebookButton extends Component {
  responseFacebook = (response) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      responseType: "json"
    };

    return axios
      .post(
        "https://ah-backend-realers-staging.herokuapp.com/api/auth/facebook/",
        {
          user: {
            access_token: response.accessToken
          }
        },
        config
      )
      .then(response => {
        localStorage.setItem("user_token", response.data.user.token);
        history.replace("/about");
      })
      .catch(() => {
        this.setState({ authenticationFailed: true });
      });
  };
  render() {
    return (
      <div className='facebookButton'>
        <FacebookLogin
          appId='686253405153256'
          fields='name,email,picture'
          callback={this.responseFacebook}
          textButton=''
          icon='fa-facebook'
        />
      </div>
    );
  }
}
export default FacebookButton;
