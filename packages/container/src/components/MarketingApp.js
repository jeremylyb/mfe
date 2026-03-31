import { mount } from 'marketing/MarketingApp';
// UseRef and useEffect => react hooks
import React, { useRef, useEffect } from 'react';

export default () => {
    /* 
        Use useRef function to create a reference to an HTML element
        This is going to be the element that we are going try to render our mount or our MarketingApplication into
    */
   const ref = useRef(null);
   /*
        - show a div and we are getting a reference to the HTML element that is being displayed on the screen
        - Next, we take this ref to that element and provide it to the mount function
        - But when we do so, we need to make sure that we only call the mount function one time, when this React component first is displayed on the screen.
        - Make use of 'useEffect' hook
        - useEffect => make sure that run code just one single time when this component is first displayed.
        - in useEffect, we going to call our mount function. 
        - in mount function, we going to pass 'ref.current' in, which that is the HTML element.
        - Mount is going to take the ref.current in and create an instance of our MarketingApp and render it into the div
    */
   useEffect(() => {
        mount(ref.current);
   });
   return <div ref={ref} />;
}

/*
    NOTE:
        - This set up is fully reusable
        - We can use this with any other framework as long as that framework can render itself or render its app into some
            arbitrary HTML element
        - { export default -> useRef -> useEffect -> mount current ref -> return ref } pattern 
*/