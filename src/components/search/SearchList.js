import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';

class SearchList extends Component {
  renderArticle(articleData) {
    var data = articleData.response.zone[0].records.article;
    // console.log('Data json here', data);

    return (
      <List key={data[0].id}>
        <ListItem>
          <h4>{data[0].heading}</h4>
          <a href={data[0].troveUrl} target="_blank">
            {data[0].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[1].heading}</h4>
          <a href={data[1].troveUrl} target="_blank">
            {data[1].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[2].heading}</h4>
          <a href={data[2].troveUrl} target="_blank">
            {data[2].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[3].heading}</h4>
          <a href={data[3].troveUrl} target="_blank">
            {data[3].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[4].heading}</h4>
          <a href={data[4].troveUrl} target="_blank">
            {data[4].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[5].heading}</h4>
          <a href={data[5].troveUrl} target="_blank">
            {data[5].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[6].heading}</h4>
          <a href={data[6].troveUrl} target="_blank">
            {data[6].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[7].heading}</h4>
          <a href={data[7].troveUrl} target="_blank">
            {data[7].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[8].heading}</h4>
          <a href={data[8].troveUrl} target="_blank">
            {data[8].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[9].heading}</h4>
          <a href={data[9].troveUrl} target="_blank">
            {data[9].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[10].heading}</h4>
          <a href={data[10].troveUrl} target="_blank">
            {data[10].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[11].heading}</h4>
          <a href={data[11].troveUrl} target="_blank">
            {data[11].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[12].heading}</h4>
          <a href={data[12].troveUrl} target="_blank">
            {data[12].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[13].heading}</h4>
          <a href={data[13].troveUrl} target="_blank">
            {data[13].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[14].heading}</h4>
          <a href={data[14].troveUrl} target="_blank">
            {data[14].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[15].heading}</h4>
          <a href={data[15].troveUrl} target="_blank">
            {data[15].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[16].heading}</h4>
          <a href={data[16].troveUrl} target="_blank">
            {data[16].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[17].heading}</h4>
          <a href={data[17].troveUrl} target="_blank">
            {data[17].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[18].heading}</h4>
          <a href={data[18].troveUrl} target="_blank">
            {data[18].title.value}
          </a>
          <hr />
        </ListItem>
        <ListItem>
          <h4>{data[19].heading}</h4>
          <a href={data[19].troveUrl} target="_blank">
            {data[19].title.value}
          </a>
          <hr />
        </ListItem>
      </List>
    );
  }
  render() {
    return <div>{this.props.articles.map(this.renderArticle)}</div>;
  }
}

function mapStateToProps({ articles, articlesTwo }) {
  return { articles, articlesTwo };
}

export default connect(mapStateToProps)(SearchList);
