import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (<Provider store={store}>
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact="exact" path="/" component={Landing}/>
        <Route exact="exact" path="/register" component={Register}/>
        <Route exact="exact" path="/login" component={Login}/>
      </div>
    </Router>
  </Provider>);
}

export default App;
