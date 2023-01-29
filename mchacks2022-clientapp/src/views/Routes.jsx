import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import Welcome from "./welcome/Welcome";
import Events from "./events/Events";

export default function Routes() {
  return (
    <BrowserRouter basename={"/"}>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/welcome' component={Welcome}/>
      <Route exact path='/events' component={Events}/>
      <Redirect from='/' exact to='/home'/>
      <Redirect to='/not-found'/>
    </Switch>
    </BrowserRouter>
  );
}
