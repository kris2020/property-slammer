import React from 'react';

class UserInput extends React.Component {
  render() {
    return (
      <div clasName="row">
        <div className="form-group col-xs-10 col-xs-offset-1 col-sm-4">
          <label for="sqFt">Size of property</label>
          <div className="input-group">
            <input type="text" id="sqFt" className="form-control" value="1000"/>
            <div className="input-group-addon">sq. ft.</div>
          </div>
        </div>
        <div className="form-group col-xs-10 col-xs-offset-1 col-sm-4">
          <label for="propertyValue">Estimated value</label>
          <div className="input-group">
            <div className="input-group-addon">£</div>
            <input type="text" id="propertyValue" className="form-control" />
          </div>
        </div>
      </div>
    )
  }
}

export default UserInput;
