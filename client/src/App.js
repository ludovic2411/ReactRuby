import React, { Component } from 'react';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";
import Home from './home';
import signIn from './sign_in';
import signUp from './sign_up';
import deepPurple from '@material-ui/core/colors/deepPurple';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{display:'grid',gridTemplateRows:"repeat(3,1fr)",gridTemplateColumns:"repeat(3,1fr)",height:"100vh",backgroundColor:deepPurple[500]}}>
          <div className="list" style={{gridRow:"2",gridColumn:"2",width:"60%",marginRight:"auto",marginLeft:"auto",color:"white",border:"solid 2px white",borderRadius:"10%",paddingLeft:"70px"}}>
            <ul>
              <li style={{display:"inline"}}>
                <Link  style={{color:"white"}} to="/sign_in">Sign in</Link>
              </li>
              <li style={{display:"inline", marginLeft:"5px"}}>
                <Link style={{color:"white"}} to="/sign_up">Sign up</Link>
              </li>
            </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/sign_in" component={signIn}/>
        <Route path="/sign_up" component={signUp}/>
      </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
