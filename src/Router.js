import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MainContent from './Main/MainPage';
import MainPost from './Posts/PostsMain';

import HowDoNeuralNetworkWork from './Posts/MyPosts/HowDoNeuralNetworkWork';
import WhatIsLSTM from './Posts/MyPosts/WhatIsLSTM';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={MainContent}/>
            <Route exact path="/posts" component={MainPost}/>

            <Route exact path="/posts/HowDoNeuralNetworkWork" component={HowDoNeuralNetworkWork}/>
            <Route exact path="/posts/WhatIsLSTM" component={WhatIsLSTM}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;