import React from 'react';
import { formatPrice } from './helpers';

class House extends React.Component {
  render() {
    const { details, selection, index } = this.props;
    const buttonText = selection[index] ? 'Remove' : 'Add';
    const buttonClass = selection[index] ? 'btn btn-danger' : 'btn btn-success';
    // const buttonText = 'Hi mum';
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-2">
          <p>{details.address}<br/>
          £ {formatPrice(details.price)}<br/>
          {details.floor_area} sq. ft.</p>
        </div>
        <div className="col-xs-6 col-sm-2">
          <button className={buttonClass} onClick={() => this.props.addToSelection(index)}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default House;
