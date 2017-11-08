import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import TruganiniAv from '../../../components/people/img/Truganini.jpg';

class TruganiniDialog extends Component {
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
            title="TRUGANINI"
            subtitle="The last of the Tasmanians."
            avatar={TruganiniAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="TRUGANINI"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/61827952?searchTerm=Truganini&searchLimits="
              rel="noreferrer noopener"
              target="_blank"
            >
              Gippsland Times (Vic. : 1861 - 1954) Wed 31 Jan 1877 Page 4
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default TruganiniDialog;
