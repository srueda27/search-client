import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
    let inputTag;


    if (input.name === 'description') {
      inputTag = <textarea {...input} rows="4" cols="50"></textarea>
    } else {
      inputTag = <input {...input} autoComplete='off' />
    }

    return (
      <div className={className}>
        <label>{label}</label>
        {inputTag}
        {this.renderError(meta)}
      </div>
    );
  }

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }

    return null;
  }

  onSubmit = (values) => {
    this.props.onSubmit(values);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field
            name='title'
            component={this.renderInput}
            label='Enter Title'
          />
          <Field
            name='shortDescription'
            component={this.renderInput}
            label='Enter a short description'
          />
          <Field
            name='description'
            component={this.renderInput}
            label='Enter Description'
          />
          <Field
            name='photoUrl'
            component={this.renderInput}
            label='Enter Photo Url'
          />
          <button type='submit' className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  if (!formValues.shorDescription) {
    errors.shorDescription = 'You must enter a short description';
  }

  if (!formValues.photoUrl) {
    errors.photoUrl = 'You must enter a photo url';
  }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamForm);;