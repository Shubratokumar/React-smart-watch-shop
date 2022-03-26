import React from 'react';
import './Questionandanswer.css'

const Questionandanswer = () => {
    return (
        <div className='q-and-a-container'>
            <h2>Question and Answer :</h2>
            <div className='description-container'>
                <div className='question-1'>
                    <h4>Q 01 : How does react works ?</h4>
                    <p><span className='answer'>Answer : </span>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. React is an  open-source, component-based front end library that is responsible only for UI design. It is maintained by the Developer team of Facebook. ReactJS uses a declarative paradigm that makes our application efficient and flexible. In general, React applications are made of multiple components and each responsible for rendering a small reusable piece of HTML. React implements a virtual DOM that is basically a DOM tree representation in JS. React elements are plain objects, unlike browser DOM elements, and are cheap to create. 
                    </p>                
                </div>
                <div className='question-2'>
                    <h4>Q 02 : Difference between props vs. state.</h4>
                    <p><span className='answer'>Answer : </span> Props and state are related. Props are known as properties. It is used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. The state represents parts of an Application that can change. The state is Mutable and It is local to the component only.
                        <ul>
                            <li>Props are read-only where State changes can be asynchronous.</li>
                            <li>Props are immutable and State is mutable.</li>
                            <li>Props can be accessed by the child component while State cannot be accessed by child components.</li>
                        </ul>
                    </p> 
                </div>
                <div className='question-3'>
                    <h4>Q 03 : How useState( ) works ?</h4>
                    <p><span className='answer'>Answer : </span>In ReactJS, useState is a Hook that allows us to have state variables in functional components. It is a special function that takes the initial state as an argument and returns an array of two entries. In useStae, the first element is the initial state and the second one is a function that is used for updating the state. We may  pass the initial state to this function and it returns a variable with the current state value and another function to update this value. The first argument passed through useState maps to the initial value of the declared state when the component is first rendered (mounted), and that argument can be any valid JavaScript value. Every call to the useState hook returns an array containing two values. The first value is the current (up-to-date) value of the declared piece of state. The second value is the state update function for the declared piece of state.
                    </p> 
                </div>
                
            </div>
        </div>
    );
};

export default Questionandanswer;