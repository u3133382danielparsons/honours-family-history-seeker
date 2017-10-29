import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import InfoIcon from 'material-ui/svg-icons/action/info';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

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

  state = {
    finished: false,
    stepIndex: 0,
    selected: [1]
  };

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Paterson Family';
      case 1:
        return 'Links to  Patersons Family';
      case 2:
        return 'Andrew Barton Paterson';
      default:
        return 'The Paterson Family Post is updated!';
    }
  }
  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };
    return (
      <div className="container">
        <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Post the Family information!</StepLabel>
            </Step>
            <Step>
              <StepLabel>Post the Links to Family information!</StepLabel>
            </Step>
            <Step>
              <StepLabel>Post a Family Members information!</StepLabel>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            {finished ? (
              <div>
                <p>
                  <Link
                    to="../components/people/women/Georgiana"
                    onClick={event => {
                      event.preventDefault();
                      this.setState({ stepIndex: 0, finished: false });
                    }}
                  >
                    Click here
                  </Link>{' '}
                  to reset the example.
                </p>
                <p>{this.getStepContent(stepIndex)}</p>
              </div>
            ) : (
              <div>
                <p>{this.getStepContent(stepIndex)}</p>
                <div style={{ marginTop: 12 }}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{ marginRight: 12 }}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onClick={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <hr />
        <Subheader>Select Family Members</Subheader>
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn />
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Details</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow selected={this.isSelected(0)}>
              <TableRowColumn />
              <TableRowColumn>Rose Isabella (Barton) Paterson</TableRowColumn>
              <TableRowColumn>(1844 - 1893)</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(1)}>
              <TableRowColumn />
              <TableRowColumn>Andrew Bogle Patersons</TableRowColumn>
              <TableRowColumn>(1833 - 1889)</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(2)}>
              <TableRowColumn />
              <TableRowColumn>Andrew Barton Paterson</TableRowColumn>
              <TableRowColumn>(1864 - 1941)</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(3)}>
              <TableRowColumn />
              <TableRowColumn>Rose Florence Lumsdaine</TableRowColumn>
              <TableRowColumn>Born 1865</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
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
