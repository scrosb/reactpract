//MY FIRST COMPONENT
//A component is just a function that returns some JSX
//Import React
import React from 'react';
import './Person.css';

//props are properties you refer to in your component
const person = (props)  => {

    //Use the function as often as possible, these simple components are very clear about what they do.
    //Content passed as attributes in App.js
    //Most parts of your application shouldn't change the application state
    return (
        //Output Content passed as attributes in App.js in first line
        //props.children Outputs content between tags 
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>

        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)


};


export default person;