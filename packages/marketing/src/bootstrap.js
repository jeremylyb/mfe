// console.log("Marketing console log")

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// MOunt function to start up the app
const mount = (el) => {
    // ReactDOM.render(<h1>Hi there Marketing!</h1>, el);
    ReactDOM.render(<App />, el)
};

// if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}

// else we are running through container and we should export the mount function
export { mount };