import React, { Component } from 'react';
import HouseList from './HouseList';
import UserInput from './UserInput';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h2>Property Slammer</h2>
            </div>
            <HouseList/>          
            <UserInput/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
