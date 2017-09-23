import React from 'react';
import '../search/css/styles.css';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="input-group search-form">
        <input type="text" className="form-control" ref="search" />
        <span className="input-group-btn">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={event => this.props.onSearchTerm(this.refs.search.value)}
          >
            Go!
          </button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
