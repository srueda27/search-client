import React from "react";
import { connect } from "react-redux";

import { createPhoto } from '../../actions';

import FormComponent from "./FormComponent";

class CreatePhoto extends React.Component {
  onSubmit = (values) => {
    this.props.createPhoto(values);
  }

  render() {
    return (
      <div>
        <h3>Add Photo</h3>
        <FormComponent onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createPhoto })(CreatePhoto);