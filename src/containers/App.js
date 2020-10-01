import React, { Component } from 'react';

import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(`[App.js] constructor`);
  }

  state = {
    persons: [
      { id: 'asfa1', name: "Max", age: 28 },
      { id: 'feaefa2', name: "Jon", age: 21 },
      { id: 'afeaf3', name: "Daiki", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false.persons,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log(`[App.js] getDerivedStateFromProps`, props);
    return state;
  }

  componentDidUpdate() {
    console.log(`[App.js] componentDidUpdate`);
  }

  componentDidMount() {
    console.log(`[App.js] componentDidMount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[App.js] shouldComponentUpdate`);
    return true;
  }

  nameChangedHandeler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonJandler = (personIndex) => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null

    if (this.state.showPersons) {
      persons = 
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonJandler}
          changed={this.nameChangedHandeler} />;
    };

    console.log(`[App.js] render`);

    return (
      <div className={classes.App}>
        <button 
          onClick={() => {
            this.setState({showCockpit: false})
            }
          }>

          Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          /> : null}
        {persons}
      </div>
    );
  }
}

export default App;