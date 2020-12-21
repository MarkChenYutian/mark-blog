import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MainContent from './Main/MainPage';
import MainPost from './Posts/PostsMain';
import MainNotes from './Notes/NotesMain';

import USACO2016JanGoldAnalysis from './Notes/USACO/USACO-2016-Jan-Gold';
import USACO2016FebGoldAnalysis from './Notes/USACO/USACO-2016-Feb-Gold';
import USACO2016DecGoldAnalysis from './Notes/USACO/USACO-2016-Dec-Gold'; 
import USACO2017JanGoldAnalysis from './Notes/USACO/USACO-2017-Jan-Gold';
import USACO2017FebGoldAnalysis from './Notes/USACO/USACO-2017-Feb-Gold'; 

import CS3Week8HW from './Notes/CS3_WebApp/Week8Homework';
import CS3Week8Notes from './Notes/CS3_WebApp/CS3Week8Notes';
import CS3NotesWeek1 from './Notes/CS3_WebApp/CS3NotesWeek1';
import CS3NotesWeek2 from './Notes/CS3_WebApp/CS3NotesWeek2';
import CS3NotesWeek3 from './Notes/CS3_WebApp/CS3NotesWeek3';
import CS3NotesWeek5 from './Notes/CS3_WebApp/CS3NotesWeek5';

import HowDoNeuralNetworkWork from './Posts/MyPosts/HowDoNeuralNetworkWork';
import WhatIsLSTM from './Posts/MyPosts/WhatIsLSTM';
import ResidualNetwork from './Posts/MyPosts/ResidualNetwork';
import WhatIsBayesNetwork from './Posts/MyPosts/WhatIsBayesNetwork';
import GradientDescentMethods from './Posts/MyPosts/GradientDescentMethods';
import TimeComplexityIntro from './Posts/MyPosts/TimeComplexityIntro';
import IntroToJupyterNotebook from './Posts/MyPosts/IntroToJupyter';
import BinaryIndexTree from './Posts/MyPosts/BinaryIndexTree';
import ConstraintSatisfactionProblem from './Posts/MyPosts/ConstraintSatisfactionProblem';
import LinearAlgebraSection1 from './Posts/MyPosts/LinearAlgebraSec1';
import LinearAlgebraSection2 from './Posts/MyPosts/LinearAlgebraSec2';
import EllipticalCurveSignature from './Posts/MyPosts/EllipticalCurveSignature';

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
            <Route exact path="/posts/TimeComplexityIntro" component={TimeComplexityIntro}/>
            <Route exact path="/posts/IntroToJupyterNotebook" component={IntroToJupyterNotebook}/>
            <Route exact path="/posts/BinaryIndexTree" component={BinaryIndexTree}/>
            <Route exact path="/posts/LinearAlgebraNote1" component={LinearAlgebraSection1}/>
            <Route exact path="/posts/LinearAlgebraNote2" component={LinearAlgebraSection2}/>
            <Route exact path="/posts/ConstraintSatisfactionProblem" component={ConstraintSatisfactionProblem}/>
            <Route exact path="/posts/EllipticalCurveSignature" component={EllipticalCurveSignature}/>

            <Route exact path="/notes/USACO/Gold/2016-Jan" component={USACO2016JanGoldAnalysis}/>
            <Route exact path="/notes/USACO/Gold/2016-Feb" component={USACO2016FebGoldAnalysis}/>
            <Route exact path="/notes/USACO/Gold/2016-Dec" component={USACO2016DecGoldAnalysis}/>
            <Route exact path="/notes/USACO/Gold/2017-Jan" component={USACO2017JanGoldAnalysis}/>
            <Route exact path="/notes/USACO/Gold/2017-Feb" component={USACO2017FebGoldAnalysis}/>

            <Route exact path="/notes/CS3/Week8/HW" component={CS3Week8HW}/>
            <Route exact path="/notes/CS3/Week8/Notes" component={CS3Week8Notes}/>
            <Route exact path="/notes/CS3/Week5/Notes" component={CS3NotesWeek5}/>
            <Route exact path="/notes/CS3/Week3/Notes" component={CS3NotesWeek3}/>
            <Route exact path="/notes/CS3/Week2/Notes" component={CS3NotesWeek2}/>
            <Route exact path="/notes/CS3/Week1/Notes" component={CS3NotesWeek1}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;