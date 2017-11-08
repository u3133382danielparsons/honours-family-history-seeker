import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import vidaAv from '../../people/img/vida.jpg';

class VidaDialog extends Component {
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
            title="Vida Goldstein"
            subtitle="Feminist and Suffragist."
            avatar={vidaAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="Vida Goldstein."
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/65881559?searchTerm=Vida%20Goldstein&searchLimits="
              rel="noreferrer noopener"
              target="_blank"
            >
              Morwell Advertiser (Morwell, Vic. : 1888 - 1954) View title info
              Fri 27 Nov 1903 Page 2
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default VidaDialog;
