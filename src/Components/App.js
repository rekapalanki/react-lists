import React from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';

import ListItem from './Dwarves'

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          dwarves: [ 
          {id:"1", name:"Sleepy"},
          {id:"2", name:"Grumpy"},
          {id:"3", name:"Gimli"},
          {id:"4", name:"Bruenor"}
          ]
      }
  }

  render() {
    return (
    <React.Fragment>
       <h1>Here are some dwarves:</h1>
       <ul>{this.state.dwarves.map( x => <ListItem key={x.id} content={x.name} /> )}</ul>
    </React.Fragment>
    );
  }
}

export default App;