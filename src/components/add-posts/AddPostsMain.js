import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../../actions';

class AddPostsMain extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  renderTextArea(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="ARTICLE HEADING"
            name="title"
            component={this.renderField}
          />
          <Field
            label="NEWSPAPER TITLE"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="ARTICLE CONTENT"
            name="content"
            component={this.renderTextArea}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values)
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content please';
  }
  return errors;
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: () => {
      dispatch(createPost());
    }
  };
};

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, mapDispatchToProps)(AddPostsMain));
