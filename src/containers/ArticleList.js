import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';

class ArticleList extends Component {
  renderArticle(articleData) {
    return (
      <List key={articleData.response.zone[0].records.article[0].id}>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[0].troveUrl}>
            {articleData.response.zone[0].records.article[0].title.value}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[1].troveUrl}>
            {articleData.response.zone[0].records.article[1].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[2].troveUrl}>
            {articleData.response.zone[0].records.article[2].title.value}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[3].troveUrl}>
            {articleData.response.zone[0].records.article[3].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[4].troveUrl}>
            {articleData.response.zone[0].records.article[4].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[5].troveUrl}>
            {articleData.response.zone[0].records.article[5].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[6].troveUrl}>
            {articleData.response.zone[0].records.article[6].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[7].troveUrl}>
            {articleData.response.zone[0].records.article[7].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[8].troveUrl}>
            {articleData.response.zone[0].records.article[8].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[9].troveUrl}>
            {articleData.response.zone[0].records.article[9].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[10].troveUrl}>
            {articleData.response.zone[0].records.article[10].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[11].troveUrl}>
            {articleData.response.zone[0].records.article[11].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[12].troveUrl}>
            {articleData.response.zone[0].records.article[12].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[13].troveUrl}>
            {articleData.response.zone[0].records.article[13].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[14].troveUrl}>
            {articleData.response.zone[0].records.article[14].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[15].troveUrl}>
            {articleData.response.zone[0].records.article[15].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[16].troveUrl}>
            {articleData.response.zone[0].records.article[16].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[17].troveUrl}>
            {articleData.response.zone[0].records.article[17].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[18].troveUrl}>
            {articleData.response.zone[0].records.article[18].troveUrl}
          </a>
        </ListItem>
        <ListItem>
          <a href={articleData.response.zone[0].records.article[19].troveUrl}>
            {articleData.response.zone[0].records.article[19].troveUrl}
          </a>
        </ListItem>
      </List>
    );
  }
  render() {
    return <div>{this.props.articles.map(this.renderArticle)}</div>;
  }
}

function mapStateToProps({ articles }) {
  return { articles };
}

export default connect(mapStateToProps)(ArticleList);
