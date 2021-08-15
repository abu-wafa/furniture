import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-notifications/lib/notifications.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './registration/LogIn';
import SignUp from "./registration/Register";
import Home from './home'
import About from './about_us';
import Contact from './contact_us';
import Pruduct from './products_info';
import MyCart from './myCart'
function App() {

  return (
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">

          
              <li className="nav-item">
                <Link className="nav-link" style={{color:'white'}} to={"/home"} >Home</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:'white'}} to={"/about-us"} >about us</Link> 
              </li>
       
              <li className="nav-item">
                <Link className="nav-link" style={{color:'white'}} to={"/contact-us"} >contact us</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:'white'}} to={"/cart"} >my cart</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:'white'}} to={"/sign-in"}>Log In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
            <Route path="/pruducts/ditals/:id" component={(props) => < Pruduct {...props}  exact />} />
            <Route   path="/"          component={(props) => < Home {...props} />}    exact />
            <Route  path="/home"       component={(props) => < Home {...props} />}    exact />
            <Route  path="/about-us"   component={(props) => < About {...props} />}   exact />
            <Route  path="/contact-us" component={(props) => < Contact {...props} />} exact />
            <Route  path="/cart" component={(props) => < MyCart {...props} />} exact />
            <Route  path="/sign-in" component={(props) => <Login {...props} />}  exact/>
            <Route  path="/sign-up" component={(props) => < SignUp {...props} />} exact />
        </Switch>
    </div>
        
      
  </Router>

  );
}

export default App;
