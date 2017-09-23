import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTube } from '../../actions/index';
import SearchBar from './SearchBar';
import VideoList from './List';
import Detail from './Detail';

class VideosMain extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedVideo: null };
  }

  componentDidMount() {
    this.search('Australian National Library Trove');
  }

  search(term) {
    this.props.fetchTube(term);
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedVideo: nextProps.selectedVideo });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchBar onSearchTerm={this.search.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Detail video={this.state.selectedVideo} />
          </div>
          <div className=".col-md-4">
            <VideoList
              videos={this.props.videos}
              onVideoSelect={selectedVideo => this.onVideoSelect(selectedVideo)}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos, selectedVideo: state.videos[0] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTube }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosMain);
