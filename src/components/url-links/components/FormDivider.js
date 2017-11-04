import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const style = {
  marginLeft: 20,
  marginTop: 20
};

export default class FormDivider extends React.Component {
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
    return (
      <div>
        <Paper zDepth={2}>
          <TextField
            hintText="Newspaper Title"
            style={style}
            underlineShow={false}
          />
          <Divider />
          <TextField
            hintText="Article Title"
            style={style}
            underlineShow={false}
          />
          <Divider />
          <TextField
            hintText="Publication Date and Page No."
            style={style}
            underlineShow={false}
          />
          <Divider />
          <TextField hintText="Url Link" style={style} underlineShow={false} />
          <Divider />
        </Paper>
        <RaisedButton
          label="Add Article"
          secondary={true}
          style={style}
          onClick={this.handleOpen}
        />
        <Dialog
          title="Successful - Article Added!"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          This is a demonstration only.
        </Dialog>
      </div>
    );
  }
}
