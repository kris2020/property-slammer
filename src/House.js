import React from 'react';
import { formatPrice } from './helpers';

class House extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-2">
          <p>{details.address}<br/>
          £ {formatPrice(details.price)}<br/>
          {details.floor_area} sq. ft.</p>
        </div>
        <div className="col-xs-6 col-sm-2">
          <button className="btn btn-success">Include</button>
        </div>
      </div>
    )
  }
}

export default House;
