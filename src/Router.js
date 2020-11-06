import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MainContent from './Main/MainPage';
import MainPost from './Posts/PostsMain';
import MainNotes from './Notes/NotesMain';

import USACO2016JanGoldAnalysis from './Notes/USACO/USACO-2016-Jan-Gold';
import USACO2016FebGoldAnalysis from './Notes/USACO/USACO-2016-Feb-Gold';

import HowDoNeuralNetworkWork from './Posts/MyPosts/HowDoNeuralNetworkWork';
import WhatIsLSTM from './Posts/MyPosts/WhatIsLSTM';
import ResidualNetwork from './Posts/MyPosts/ResidualNetwork';
import WhatIsBayesNetwork from './Posts/MyPosts/WhatIsBayesNetwork';
import GradientDescentMethods from './Posts/MyPosts/GradientDescentMethods';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={MainContent}/>
            <Route exact path="/posts" component={MainPost}/>
            <Route exact path="/notes" component={MainNotes}/>

            <Route exact path="/posts/HowDoNeuralNetworkWork" component={HowDoNeuralNetworkWork}/>
            <Route exact path="/posts/WhatIsLSTM" component={WhatIsLSTM}/>
            <Route exact path="/posts/ResidualNetwork" component={ResidualNetwork}/>
            <Route exact path="/posts/WhatIsBayesNetwork" component={WhatIsBayesNetwork}/>
            <Route exact path="/posts/GradientDescentMethods" component={GradientDescentMethods}/>

            <Route exact path="/notes/USACO/Gold/2016-Jan" component={USACO2016JanGoldAnalysis}/>
            <Route exact path="/notes/USACO/Gold/2016-Feb" component={USACO2016FebGoldAnalysis}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;