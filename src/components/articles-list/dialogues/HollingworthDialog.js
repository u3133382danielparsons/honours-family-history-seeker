import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import HollingworthAv from '../../../img/hollingworth/HollingworthAv.jpg';

class HollingworthDialog extends Component {
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
            title="Mr. Joseph N. Hollingworth,"
            subtitle="Mullumbimby Sawmiller."
            avatar={HollingworthAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="SIFTINGS"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/234141604?searchTerm=Joseph%20Hollingworth%20sawmill&searchLimits="
              rel="noreferrer noopener"
              target="_blank"
            >
              The Kyogle Examiner (NSW : 1912; 1914 - 1915; 1917 - 1954) Wed 18
              Jun 1919 Page 2
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default HollingworthDialog;
