import React, { Component } from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import SmurfComponent from "./SmurfComponent";
import SmurfForm from "./SmurfForm";
import {rootReducer} from "../b-reducers";
import "./App.css";

const store = createStore(rootReducer,applyMiddleware(thunk, logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<div className="App">
      	  <h1>SMURFS! W/Redux</h1>
      	  <div>Welcome to your state management version of Smurfs!</div>
      	  <div>Start inside of your `src/index.js` file!</div>
      	  <div>Have fun!</div>
          <SmurfForm/>
          <SmurfComponent/>
      	</div>
      </Provider>
    );
  }
}

export default App;
