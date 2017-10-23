import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Category from './components/Main/Category/Category';
import Posts from './components/Main/Posts/Posts';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
        <Route exact path='/categories' component={Category} />
        <Route path='/categories/:id' component={Posts} />
        <Route path='/profile' component={Profile} />
    </Switch>
)