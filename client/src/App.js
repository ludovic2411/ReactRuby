import React, { Component } from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import Home from './home';
import signIn from './sign_in';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <Link to="/sign_in">Sign in</Link>
            </li>
          </ul>
          <switch>
            <Route exact path="/" component={Home}/>
            <Route path="/sign_in" component={signIn}/>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
