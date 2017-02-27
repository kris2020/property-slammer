import React, { Component } from 'react';
import House from './House';
import UserInput from './UserInput';

// grab our list of properties from the JSON object
import samples from './samples';

class App extends Component {

  constructor() {
    super();
    this.addToSelection = this.addToSelection.bind(this);

    // set state
    this.state = {
      houses: samples,
      selection: {},
      size: 1100
    };
  }

  addToSelection(key) {
    // take a copy of state
    const selection = {...this.state.selection};
    // add or remove house
    if(!selection[key]) {
      selection[key] = true;
    } else {
      delete(selection[key]);
    }
    // update state
    this.setState({ selection });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">Property Slammer</h2>
              <p className="text-center">Add some properties to calculate your valuation!</p>
              <div className="col-xs-8 col-xs-offset-4">
                {
                  Object
                    .keys(this.state.houses)
                    .map(key => <House key={key} index={key} addToSelection={this.addToSelection} details={this.state.houses[key]} selection={this.state.selection}/>)
                }
              </div>
              <UserInput selection={this.state.selection} houses={this.state.houses} size={this.state.size}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
