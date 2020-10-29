import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import Home from './components/Home';
import Login from './components/Login';


const app = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={NavBar}></Route>
        <Route path='/' exact component={Home}></Route>
        <Route path='/home' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
      </div>
    </BrowserRouter>
  );
}

export default app;
