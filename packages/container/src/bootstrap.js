import React from 'react';
import ReactDOM from 'react-dom'

import App from './App';

/*
    NOTE:
        For container app, we dont need to mount function
        Whenever the container application is going be shown inside the browser, we in all scenarios want
        the container to show itself immediately. 
        Only our sub-projects that need to export some kind of mount function or render themselves
        conditionally depending upon whether or not we are in dev
*/
ReactDOM.render(
    <App />, document.querySelector('#root')
);