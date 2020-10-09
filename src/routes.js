import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth'
import DashBoard from './Components/DashBoard/DashBoard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post'



export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/Dashboard' component={DashBoard}/>
        <Route path='/post/:postid' component={Post}/>
        <Route path='/new' component={Form}/>
    </Switch>
)