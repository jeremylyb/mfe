import React from 'react'
// import { mount } from 'marketing/MarketingApp'
import MarketingApp from './components/MarketingApp';

/*
    Mount function is a function that takes in a reference to an HTML element and then displays some content inside there
    Hence, we cannot use this mount function direclty inside of a React component
    This mount function is not a React component. It is a simple function that takes in a reference to an HTML element
    NOTE: WE CAN ALWAYS DO A MORE SIMPLIFIED WAY WHERE RATHER THAN EXPORT MOUNT, WE EXPORT A REACTMOUNTCOMPONENT which is react compatible
            but then it violate our requirement where we want our parent and child be language agonstic
*/
// console.log(mount)
export default() => {
    // return <h1> HI THERE CONTAINER </h1>
    // return <MarketingApp />
    return <div>
        <h1> Hi there! CONTAINER </h1>
        <hr />
        <MarketingApp />
    </div>
}