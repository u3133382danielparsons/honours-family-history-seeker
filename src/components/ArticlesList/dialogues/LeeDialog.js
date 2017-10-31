import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import MaryAv from '../../../components/people/img/mary.jpg';

class LeeDialog extends Component {
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
            title="Mary Lee"
            subtitle="South Australian Suffragist."
            avatar={MaryAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="MRS. MARY LEE."
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/4908749?searchTerm=Mary%20Lee&searchLimits="
              rel="noreferrer noopener"
              target="_blank"
            >
              The Advertiser (Adelaide, SA : 1889 - 1931) Mon 7 Apr 1902 Page 4
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default LeeDialog;
