import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// material-ui
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { Card, CardHeader } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';
import RaisedButton from 'material-ui/RaisedButton';
import Heart from 'material-ui/svg-icons/action/favorite';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// src
import Ava8 from './img/ava-8.png';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};
const btnStyle = {
  margin: 12
};

class HeatherHenty extends Component {
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
        <Paper style={style}>
          <Card>
            <CardHeader
              title="Heather Henty"
              subtitle="Family History Seeker Member"
              avatar={Ava8}
            />
          </Card>
          <Menu desktop={true} width={320}>
            <Subheader>Aged Care Worker</Subheader>
            <Subheader>Aged 33</Subheader>
            <Subheader>Lives in Maryborough, QLD</Subheader>
            <Divider />
            <MenuItem
              primaryText="Family History Seeker Friends"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <Link to="/components/profile/profiles/SarahWaltersProfile">
                  <MenuItem primaryText="Sarah Walters" />
                </Link>,
                <Link to="/components/profile/profiles/RosOsborneProfile">
                  <MenuItem primaryText="Ros Osborne" />
                </Link>,
                <Link to="/components/profile/profiles/JulieHughesProfile">
                  <MenuItem primaryText="Julie Hughes" />
                </Link>,
                <Link to="/containers/Profile">
                  <MenuItem primaryText="Daniel Parsons" />
                </Link>,
                <Link to="/components/profile/profiles/RhondaRussellProfile">
                  <MenuItem primaryText="Rhonda Russell" />
                </Link>,
                <Link to="/components/profile/profiles/JohnSmithProfile">
                  <MenuItem primaryText="John Smith" />
                </Link>,
                <Link to="/components/profile/profiles/MaryJonesProfile">
                  <MenuItem primaryText="Mary Jones" />
                </Link>
              ]}
            />
            <Divider />
            <MenuItem
              primaryText="Families Researched"
              checked={true}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem
                  primaryText="Henty Family Maryborough, QLD"
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/149071799?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F731%2F1932%2F05%2F13%2Fpage%2F17902582%2Farticle%2F149071799"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Henty"
                    >
                      <MenuItem
                        primaryText="Mrs G. F. Henty"
                        insetChildren={true}
                        checked={true}
                      />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/149071799?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F731%2F1932%2F05%2F13%2Fpage%2F17902582%2Farticle%2F149071799"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Henty"
                    >
                      <MenuItem
                        primaryText="John Henty"
                        insetChildren={true}
                        checked={true}
                      />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/149071799?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F731%2F1932%2F05%2F13%2Fpage%2F17902582%2Farticle%2F149071799"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Henty"
                    >
                      <MenuItem
                        primaryText="Edward Henty"
                        insetChildren={true}
                        checked={true}
                      />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/149071799?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F731%2F1932%2F05%2F13%2Fpage%2F17902582%2Farticle%2F149071799"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Henty"
                    >
                      <MenuItem
                        primaryText="Stephen Henty"
                        insetChildren={true}
                        checked={true}
                      />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/149071799?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F731%2F1932%2F05%2F13%2Fpage%2F17902582%2Farticle%2F149071799"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Henty"
                    >
                      <MenuItem
                        primaryText="Frank Henty"
                        insetChildren={true}
                        checked={true}
                      />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/145576168?searchTerm=Henty%20Wedding%20Maryborough&searchLimits=#"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Henty"
                    >
                      <MenuItem
                        primaryText="Fitzroy Henty"
                        insetChildren={true}
                        checked={true}
                      />
                    </a>
                  ]}
                />
              ]}
            />
            <Divider />

            <Subheader>Groups</Subheader>

            <List>
              <ListItem rightIcon={<ActionInfo />}>
                <a
                  href="http://www.new.maryboroughfamilyhistory.org/blog/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Maryborough District Family History Society"
                >
                  <MenuItem primaryText="Maryborough District Family History Society" />
                </a>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem rightIcon={<ActionInfo />}>
                <a
                  href="http://www.treeroots.com.au"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Maryborough Family Heritage Research Institute"
                >
                  <MenuItem primaryText="Maryborough Family Heritage Research Institute" />
                </a>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem rightIcon={<ActionInfo />}>
                <a
                  href="https://www.facebook.com/maryboroughfamilyhistory/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Maryborough Family History on Facebook"
                >
                  <MenuItem primaryText="Maryborough Family History on Facebook" />
                </a>
              </ListItem>
            </List>
          </Menu>
          <RaisedButton
            label="Friend Request"
            secondary={true}
            style={btnStyle}
            icon={<Heart />}
            onClick={this.handleOpen}
          />
          <Dialog
            title="NEW FRIEND!"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <List>
              <ListItem>You are now friends with Heather Henty</ListItem>
              <ListItem>
                <Link to="/components/profile/profiles/HeatherHentyProfile">
                  <RaisedButton
                    primary={true}
                    style={btnStyle}
                    label="Visit Heather's Profile"
                    fullWidth={true}
                  />
                </Link>
              </ListItem>
            </List>
          </Dialog>
        </Paper>
      </div>
    );
  }
}

export default HeatherHenty;
