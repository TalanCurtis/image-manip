import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import views
import Landing from './views/Landing/Landing';
// import CreateFile from './views/CreateFile/CreateFile';
import PageNotFound from './views/PageNotFound/PageNotFound';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={PageNotFound} />
    </Switch>
)