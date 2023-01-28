import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./home/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Redirect from='/' exact to='/home'/>
      <Redirect to='/not-found'/>
    </Switch>
  );
}
