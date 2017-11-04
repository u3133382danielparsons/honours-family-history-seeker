import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { Form, FormControl, Button } from 'react-bootstrap';
import Subheader from 'material-ui/Subheader';
import { Card, CardText } from 'material-ui/Card';

class SearchList extends Component {
  renderArticle(articleData) {
    console.log('articleData', articleData);
    var data = articleData.response.zone[0].records.article;
    console.log('Data json here', data);

    function handleClick(e) {
      alert('The pdf of this article will be saved to the Articles List');
    }
    return (
      <List key={data[0].id}>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[0].identifier} target="_blank">
                  {data[0].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[0].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[0].identifier} target="_blank">
                  {data[0].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[0].pdf} target="_blank">
                  {data[0].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[0].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[1].identifier} target="_blank">
                  {data[1].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[1].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[1].identifier} target="_blank">
                  {data[1].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[1].pdf} target="_blank">
                  {data[1].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[1].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[2].identifier} target="_blank">
                  {data[2].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[2].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[2].identifier} target="_blank">
                  {data[2].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[2].pdf} target="_blank">
                  {data[2].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[2].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[3].identifier} target="_blank">
                  {data[3].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[3].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[3].identifier} target="_blank">
                  {data[3].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[3].pdf} target="_blank">
                  {data[3].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[3].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[4].identifier} target="_blank">
                  {data[4].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[4].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[4].identifier} target="_blank">
                  {data[4].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[4].pdf} target="_blank">
                  {data[4].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[4].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[5].identifier} target="_blank">
                  {data[5].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[5].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[5].identifier} target="_blank">
                  {data[5].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[5].pdf} target="_blank">
                  {data[5].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[5].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[6].identifier} target="_blank">
                  {data[6].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[6].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[6].identifier} target="_blank">
                  {data[6].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[6].pdf} target="_blank">
                  {data[6].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[6].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[7].identifier} target="_blank">
                  {data[7].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[7].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[7].identifier} target="_blank">
                  {data[7].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[7].pdf} target="_blank">
                  {data[7].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[7].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[8].identifier} target="_blank">
                  {data[8].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[8].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[8].identifier} target="_blank">
                  {data[8].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[8].pdf} target="_blank">
                  {data[8].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[8].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[9].identifier} target="_blank">
                  {data[9].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[9].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[9].identifier} target="_blank">
                  {data[9].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[9].pdf} target="_blank">
                  {data[9].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[9].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[10].identifier} target="_blank">
                  {data[10].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[10].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[10].identifier} target="_blank">
                  {data[10].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[10].pdf} target="_blank">
                  {data[10].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[10].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[11].identifier} target="_blank">
                  {data[11].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[11].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[11].identifier} target="_blank">
                  {data[11].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[11].pdf} target="_blank">
                  {data[11].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[11].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[12].identifier} target="_blank">
                  {data[12].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[12].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[12].identifier} target="_blank">
                  {data[12].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[12].pdf} target="_blank">
                  {data[12].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[12].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[13].identifier} target="_blank">
                  {data[13].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[13].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[13].identifier} target="_blank">
                  {data[13].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[13].pdf} target="_blank">
                  {data[13].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[13].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[14].identifier} target="_blank">
                  {data[14].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[14].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[14].identifier} target="_blank">
                  {data[14].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[14].pdf} target="_blank">
                  {data[14].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[14].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[15].identifier} target="_blank">
                  {data[15].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[15].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[15].identifier} target="_blank">
                  {data[15].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[15].pdf} target="_blank">
                  {data[15].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[15].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[16].identifier} target="_blank">
                  {data[16].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[16].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[16].identifier} target="_blank">
                  {data[16].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[16].pdf} target="_blank">
                  {data[16].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[16].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[17].identifier} target="_blank">
                  {data[17].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[17].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[17].identifier} target="_blank">
                  {data[17].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[17].pdf} target="_blank">
                  {data[17].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[17].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[18].identifier} target="_blank">
                  {data[18].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[18].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[18].identifier} target="_blank">
                  {data[18].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[18].pdf} target="_blank">
                  {data[18].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[18].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
        </ListItem>
        <ListItem>
          <Card>
            <CardText>
              <Subheader>
                Article Title:{' '}
                <a href={data[19].identifier} target="_blank">
                  {data[19].heading}
                </a>
              </Subheader>
              <Subheader>Date of publication: {data[19].date}</Subheader>

              <Subheader>
                Newspaper Title:{' '}
                <a href={data[19].identifier} target="_blank">
                  {data[19].title.value}
                </a>
              </Subheader>

              <Subheader>
                View the pdf:{' '}
                <a href={data[19].pdf} target="_blank">
                  {data[19].pdf}
                </a>
              </Subheader>
            </CardText>
            <CardText>
              <Subheader>
                Save the Pdf of this article to the Articles List
              </Subheader>
              <Form className="input-group">
                <FormControl value={data[19].troveUrl} />
                <span className="input-group-btn">
                  <Button className="btn btn-info" onClick={handleClick}>
                    Save pdf
                  </Button>
                </span>
              </Form>
            </CardText>
          </Card>
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

export default connect(mapStateToProps)(SearchList);
