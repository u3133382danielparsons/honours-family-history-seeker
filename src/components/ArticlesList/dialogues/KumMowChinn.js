import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import Chinn from '../../../components/people/img/ChinHockUnidentifiable.jpg';

class KumMowChinn extends Component {
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
            title="Kum Mow Chinn Family."
            subtitle="Chinese Australian family "
            avatar={Chinn}
          />
          <RaisedButton
            secondary={true}
            label="Article"
            onClick={this.handleOpen}
          />
          <Dialog
            title="CHINESE WEDDING IN SYDNEY."
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <a
              href="http://trove.nla.gov.au/newspaper/article/221962375?browse=ndp%3Abrowse%2Ftitle%2FS%2Ftitle%2F1180%2F1917%2F02%2F18%2Fpage%2F24413712%2Farticle%2F221962375"
              rel="noreferrer noopener"
              target="_blank"
            >
              The Sun (Sydney, NSW : 1910 - 1954) Sun 18 Feb 1917 Page 16
            </a>
          </Dialog>
        </Card>
        <hr />
      </div>
    );
  }
}

export default KumMowChinn;
