import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MainContent from './Main/MainPage';
import MainPost from './Posts/PostsMain';
import MainNotes from './Notes/NotesMain';

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
        </Switch>
    </HashRouter>
);


export default BasicRoute;