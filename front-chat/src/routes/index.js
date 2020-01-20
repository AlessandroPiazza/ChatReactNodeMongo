import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route'

import Home from '~/pages/Home';
import UserSingIn from '~/pages/UserSingIn';
import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';
import Chat from '~/pages/Chat';


import Dashboard from '~/pages/Dashboard';

export default function Routes(){
 return ( <Switch>

    <Route path="/" exact component={Home} />
    <Route path="/user" exact component={UserSingIn} />
    <Route path="/consultant" exact component={SingIn} />
    <Route path="/register"  component={SingUp} />
    <Route path="/chat"  component={Chat} />

    <Route path="/dashboard"  component={Dashboard} isPrivate/>

    <Route path="/" component={() => <h1>404</h1>} />
  </Switch>);
}
