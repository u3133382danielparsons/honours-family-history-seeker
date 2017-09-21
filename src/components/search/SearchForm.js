import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticle } from '../../actions/index';
import './css/styles.css';
//
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
  }
  render() {
    return (
      <div>
        <h3 className="basic-search">Make a Basic Search</h3>
        <div className="search-form">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Enter a name"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <button
                type="submit"
                className="btn btn-secondary"
                disabled={!this.state.term}
              >
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);
