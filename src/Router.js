import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MainContent from './Main/MainPage';
import MainPost from './Posts/PostsMain';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={MainContent}/>
            <Route exact path="/posts" component={MainPost}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;