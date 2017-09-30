import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../../actions';
import { Form, FormControl, Button } from 'react-bootstrap';

class AddPostsMain extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <FormControl
          placeholder={field.label}
          className="placeholder-text"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  renderTextArea(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <textarea
          placeholder={field.label}
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container pad-bottom">
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="ENTER THE ARTICLE HEADING . . ."
            name="title"
            component={this.renderField}
          />
          <br />
          <Field
            label="ENTER THE NEWSPAPER TITLE . . ."
            name="categories"
            component={this.renderField}
          />
          <br />
          <Field
            label="ENTER THE ARTICLES CONTENT . . ."
            name="content"
            component={this.renderTextArea}
          />
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </Form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values)
  const errors = {};
  if (!values.title) {
    errors.title = '* The articles title is required!';
  }

  if (!values.categories) {
    errors.categories = '* The Newspaper title is required!';
  }

  if (!values.content) {
    errors.content = '* Enter some content please';
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
