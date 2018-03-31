import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


//First and only react component
class App extends Component {
  //This class has one method, render
  //Has to return or render html code to the screen
  //A property is a variable of a class
  //state is managed inside a component

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'someOthevalue'
  }
  //THIS refers to the app class

  //JSX onClick is with a capital C

  //assigning a function as a value becomes a method
  switchNameHandler = (newName) => {
    // console.log('was Clicked!');
  //DON'T DO THIS this.state.persons[0].name = 'Maximilian';
  //DO THIS, IT WILL LEAVE OTHER STATE UNTOUCHED 
  //IF state or props change it will re render everything to the DOM
  this.setState({persons: [
    {name: newName, age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 27}
  ] })

  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ]
   })
  }

  // Adding parantheses to switchNameHandler results in the function running once then never again. state and props are the only two things that change the dom, State and props in react 
  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };
    return (
      //NOT HTML, BUT JSX, 
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* passing in Maximillian into new name, a way of passing an argument */}

        {/* this gets returned in this case with an arrow function*/}
        <button style={style} onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          //Adding the click property allows us to use it in person JS, You can pass props as methods into a component
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}> 
          My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    ); //HTML, Config, children nested in div the above, gets compiled to the below
    //return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work now?'));
  }
}
//Export as default
export default App;
