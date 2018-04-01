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
      {id:'asdf2s', name:'Silas', age: 24},
      {id:'dfgjj2', name:'Silas', age: 24},
      {id:'dfghss', name:'Silas', age: 24}
    ],
    otherState: 'someOthevalue',
    showPersons: false
  }
  //THIS refers to the app class

  //JSX onClick is with a capital C
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //it is a good practice to not mutate the state directly
    //A person in the persons array is a javascript object
    //As I told you before Javascript objects are reference types, so we would 
    //only get a pointer when we reach out here, and hence we wouldn't mutate the original object
    //to which the pointer points.
    //const person = this.state.persons[personIndex];

    //A better approach is to use the spread operator and create a new object
    const person = {
      //it will distribute all the properties we fetch, into this object here
      ...this.state.persons[personIndex]
    }
    //alt approach
    // const person = Object.assign({}, this.state.persons[personIndex]);

    //update person.name, not manipulating the original object
    person.name = event.target.value;

    //you want to update the array at the position you fetched with the spread opertator
    const persons = [...this.state.persons]

    //update the pperson
    persons[personIndex] = person;

    //now we have the persons array which we can set to the updated persons array, which is a copy of the old array,
    //where we updated one element with the updated person input where we adjusted the name
    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //use the slice method to copy a new array, the splice method is just a pointer
    //another alternative is the spread operator
    const persons = [...this.state.persons];
    // const persons = this.state.persons.slice();
    //removes one element from the array based on the index
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //Toggle the state of the application if false, changes to true, if true changes to false
    this.setState({showPersons: !doesShow});
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

    let persons = null;
    //Create an if statement above the return, then place persons below the JSX return this is the preferred way of rendering content
    if(this.state.showPersons) {
      persons = (
        <div>
          
          { 
            //use map to map the array elements in person to the DOM
            //we use the key property to allow react to not have to re render the entire list
            this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>

            })}
          </div>
      );
    }


    return (
      //NOT HTML, BUT JSX, 
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* passing in Maximillian into new name, a way of passing an argument */}

        {/* this gets returned in this case with an arrow function*/}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/*Use the Ternary operator for if statements (true) ? do this: false, dothis*/}
        {persons}
      </div> 
    ); //HTML, Config, children nested in div the above, gets compiled to the below
    //return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work now?'));
  }
}
//Export as default
export default App;
