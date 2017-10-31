import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import McCraeAv from '../../../components/people/img/georgiana.jpg';

class McCraeDialog extends Component {
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
            title="Georgiana McCrae"
            subtitle="An Excellent Painter."
            avatar={McCraeAv}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="Self-portrait of Georgiana McCrae as a young woman."
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
              rel="noreferrer noopener"
              target="_blank"
            >
              The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default McCraeDialog;
