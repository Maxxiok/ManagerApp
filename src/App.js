import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from "redux-thunk";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component{

  componentDidMount(){

    const config = {
      apiKey: "AIzaSyBCduepih8uyTklbYNqOgMV_H3U7xC0BG8",
      authDomain: "manager-37b9c.firebaseapp.com",
      databaseURL: "https://manager-37b9c.firebaseio.com",
      projectId: "manager-37b9c",
      storageBucket: "",
      messagingSenderId: "353231591867"
    };
    firebase.initializeApp(config);

  }

  render(){

    return(
      <Provider store={createStore(reducers, {},
           applyMiddleware(ReduxThunk))}>
        <Router/>
      </Provider>
    );
  }

}

export default App;
