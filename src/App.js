import React, { Component } from 'react';
import PropertyList from './PropertyList';
import UserInput from './UserInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row-fluid">
          <div className="col-md-12 text-center">
            <h2>Property Slammer</h2>
          </div>
          <PropertyList/>
          <UserInput/>
        </div>
      </div>
    );
  }
}

export default App;
