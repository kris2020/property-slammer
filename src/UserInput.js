import React from 'react';
import { formatPrice } from './helpers';
import { getValuation } from './helpers';

class UserInput extends React.Component {
  render() {
    const { selection, houses, size } = this.props;
    const valuation = formatPrice(getValuation(selection, houses, size));

    return (
      <div className="row">
        <div className="form-group col-xs-8 col-xs-offset-1 col-sm-5 col-sm-offset-4 col-md-3">
          <label htmlFor="sqFt">Size of your property</label>
          <div className="input-group">
            <input type="text" id="sqFt" className="form-control" value={size} readOnly/>
            <div className="input-group-addon">sq. ft.</div>
          </div>
        </div>
        <div className="form-group col-xs-8 col-xs-offset-1 col-sm-5 col-sm-offset-4 col-md-3">
          <label htmlFor="propertyValue">Your estimated value</label>
          <div className="input-group">
            <div className="input-group-addon">£</div>
            <input type="text" id="propertyValue" className="form-control" value={valuation} readOnly/>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInput;
