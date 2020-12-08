import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
  } from "react-router-dom";
import Navbar from '../navbars/Navbar';

function HomeRouter(){
    return (
        <Router>
        {
          <div>
            <Navbar />
            <div style={{ height: 70 }}></div>
          </div>
        }
        <Fragment>
          <Switch>
              <Route exact path="/booking" component={Booking} />                
              <Route exact path="/search" component={Search} />
              <Route exact path="/front-desk" component={FrontDesk} />                
              <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
}
export default HomeRouter;

function Booking(){
  return (
    <h1>Booking</h1>
  );
}
function Search(){
  return (
    <h1>Search</h1>
  );
}
function FrontDesk(){
  return (
    <h1>FrontDesk</h1>
  );
}
function NotFound() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Home
    </button>
  );
}

