import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import HicksAv from '../../../components/people/img/hicks.jpg';

class HicksDialog extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    ];
    return (
      <div>
        <Card>
          <CardHeader
            title="Mary Ann Hicks"
            subtitle="A Thirroul Pioneering Woman"
            avatar={HicksAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="Mary Ann Hicks - A Thirroul Pioneering Woman - 1839-1930"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://lingeringonwomenthirrou.blogspot.com.au/2012/11/"
              rel="noreferrer noopener"
              target="_blank"
            >
              lingalonga - stories of women and thirroul
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default HicksDialog;
