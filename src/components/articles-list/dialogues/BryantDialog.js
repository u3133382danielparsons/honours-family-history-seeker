import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import BryantAv from '../../../img/bryant/Tasmania2015.jpg';

class BryantDialog extends Component {
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
            title="Edmund Bryant"
            subtitle="Tasmania."
            avatar={BryantAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title=" SHIPPING INTELLIGENCE."
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/8790805?searchTerm=Edmund%20Bryant&searchLimits=l-state=Tasmania|||l-decade=182"
              rel="noreferrer noopener"
              target="_blank"
            >
              Hobart Town Gazette (Tas. : 1825 - 1827; 1830) Sat 29 Oct 1825
              Page 2
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default BryantDialog;
