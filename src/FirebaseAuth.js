import React from 'react';

var firebase = require("firebase");


class FireBaseAuthenticator extends React.Component {
  constructor(props) {
    super()
    this.props = props
    this.provider = new firebase.auth.FacebookAuthProvider();
  }

  authenticate(didAuthenticate) {
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...

      console.log("AUTHENTICATED")
      console.log(token)
      console.log(user)
      didAuthenticate(true)

    }).catch(function(error) {
      console.log("AUTH ERROR")
      console.log(error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...

      didAuthenticate(false)

    });
  }

}

export default FireBaseAuthenticator;
