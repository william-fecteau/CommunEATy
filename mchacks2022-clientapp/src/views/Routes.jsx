import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import Welcome from "./welcome/Welcome";

export default function Routes() {
  return (
    <BrowserRouter basename={"/"}>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/welcome' component={Welcome}/>
      <Redirect from='/' exact to='/home'/>
      <Redirect to='/not-found'/>
    </Switch>
    </BrowserRouter>
  );
}
