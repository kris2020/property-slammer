import React from 'react';
import House from './House';
import samples from './samples';

class HouseList extends React.Component {

  constructor() {
    super();
    // set state
    this.state = {
      houses: samples
    };
  }

  render() {
    return (
      <div className="col-xs-12">
        {
          Object
            .keys(this.state.houses)
            .map(key => <House key={key} details={this.state.houses[key]} />)
        }
      </div>
    )
  }
}

export default HouseList;
