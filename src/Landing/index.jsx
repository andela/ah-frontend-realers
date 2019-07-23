import React, { Component } from "react";
import FacebookButton from "../auth/socialAuth/facebook/components/Facebook";
import GoogleButton from "../auth/socialAuth/google/components/Google";
import axios from "axios";
import history from '../commons/history';

export default class SocialAuthentication extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorMessage: false
    };
  }
  responseFacebook = response => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      responseType: "json"
    };

    axios
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
        localStorage.setItem("access_token", response.data.user.token);
        history.push('/')
      })
      .catch(() => {
        this.setState({errorMessage: true})
      });
  };

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
        localStorage.setItem("access_token", response.data.user.token);
        history.push('/')
      })
      .catch(() => {
        this.setState({errorMessage: true})
      });
  };
  render() {
    return (
      <div className='landing'>
        {this.state.errorMessage && <p>{"Check your connection. Error Authenticating user credentials"}</p>}
        <FacebookButton responseFacebook={this.responseFacebook} />
        <p> </p>
        <GoogleButton responseGoogle={this.responseGoogle} />
      </div>
    );
  }
}
