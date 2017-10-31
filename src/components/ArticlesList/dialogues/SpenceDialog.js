import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import SpenceAv from '../../people/img/spence.jpg';

class SpenceDialog extends Component {
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
            title="Catherine Spence"
            subtitle="Services to Woman and Children."
            avatar={SpenceAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="THE CATHERINE SPENCE MEMORIAL."
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/126770670?searchTerm=Catherine%20Spence&searchLimits="
              rel="noreferrer noopener"
              target="_blank"
            >
              The Maitland Weekly Mercury (NSW : 1894 - 1931) Sat 19 Aug 1911
              Page 11
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default SpenceDialog;
