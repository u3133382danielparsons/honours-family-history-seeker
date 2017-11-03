import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticle } from '../../actions/index';
import './css/styles.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchArticle(this.state.term);
    this.setState({ term: '' });

    alert(
      'Wait a few seconds while searching the trove database for articles containing the name"' +
        this.state.term +
        '"' +
        '. Articles will appear below the search field. Make sure CORS is enabled.'
    );
  }
  render() {
    return (
      <div className="row">
        <h3 className="basic-search">Make a Basic Search of Trove</h3>
        <div className="search-form">
          <Form onSubmit={this.onFormSubmit} className="input-group">
            <FormControl
              placeholder="Enter a name please . . ."
              className="placeholder-text"
              defaultValue={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <Button
                type="submit"
                className="btn btn-info"
                disabled={!this.state.term}
              >
                Submit
              </Button>
            </span>
          </Form>
        </div>
        <header>
          <h4>SEARCH RESULTS SHOULD APPEAR BELOW</h4>
        </header>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);
