import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Links from './pages/links';
import Page404 from './pages/page404';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/links" component={Links}/>
            <Route component={Page404} />
        </Switch>
    </BrowserRouter>
);

export default Routes;