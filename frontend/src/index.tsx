import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props=>{
        return(
          <div>
            
          </div>
        );
      }}/>
      <Redirect from="/test" to="/"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);