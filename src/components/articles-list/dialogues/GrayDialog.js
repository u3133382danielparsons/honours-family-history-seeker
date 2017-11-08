import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import GrayAv from '../../../img/gray/grayAv.jpg';

class GrayDialog extends Component {
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
            title="Mr. and Mrs. J. T. Gray"
            subtitle="Mullumbibmy."
            avatar={GrayAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="MULLUMBIMBY."
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/190722784?browse=ndp%3Abrowse%2Ftitle%2FT%2Ftitle%2F1007%2F1922%2F02%2F08%2Fpage%2F21492780%2Farticle%2F190722784"
              rel="noreferrer noopener"
              target="_blank"
            >
              Tweed Daily (Murwillumbah, NSW : 1914 - 1949) Wed 8 Feb 1922 Page
              6
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default GrayDialog;
