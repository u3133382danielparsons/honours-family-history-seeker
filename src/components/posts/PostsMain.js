import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import InfoIcon from 'material-ui/svg-icons/action/info';

const styles = {
  postItem: {
    lineHeight: 2
  }
};

class PostsMain extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div key={post.id}>
          <Link to="/containers/Families">
            <Subheader>{post.title}</Subheader>
          </Link>
          <List>
            <ListItem
              primaryText={post.categories}
              leftIcon={<InfoIcon />}
              style={styles.postItem}
            />
            <ListItem
              primaryText={post.content}
              leftIcon={<InfoIcon />}
              style={styles.postItem}
            />
          </List>
          <hr />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          <div className="posts">{this.renderPosts()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsMain);
