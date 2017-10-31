import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import PatersonAv from '../../../img/paterson/hat.jpg';

class PatersonDialog extends Component {
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
            title="Banjo Paterson"
            subtitle="Well known Australian bush poet."
            avatar={PatersonAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="MR. A. B. (BANGO) PATTERSON"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/101278457?browse=ndp%3Abrowse%2Ftitle%2FL%2Ftitle%2F423%2F1912%2F05%2F13%2Fpage%2F10533414%2Farticle%2F101278457"
              rel="noreferrer noopener"
              target="_blank"
            >
              Leader (Orange, NSW : 1912 - 1922) Mon 13 May 1912 Page 2
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default PatersonDialog;
