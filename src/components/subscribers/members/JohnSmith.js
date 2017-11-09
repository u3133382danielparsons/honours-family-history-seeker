import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { Card, CardHeader } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Av1 from './img/download-1.png';
import RaisedButton from 'material-ui/RaisedButton';
import Heart from 'material-ui/svg-icons/action/favorite';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

const btnStyle = {
  margin: 12
};

class JohnSmith extends Component {
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
              title="John Smith"
              subtitle="Family History Seeker Member"
              avatar={Av1}
            />
          </Card>
          <Menu desktop={true} width={320}>
            <Subheader>Student</Subheader>
            <Subheader>Aged 24</Subheader>
            <Subheader>Lives in Bendigo, Victoria</Subheader>
            <Divider />
            <MenuItem
              primaryText="Family History Seeker Friends"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <Link to="/components/profile/profiles/RhondaRussellProfile">
                  <MenuItem primaryText="Rhonda Russell" />
                </Link>,
                <Link to="/components/profile/profiles/MaryJonesProfile">
                  <MenuItem primaryText="Mary Jones" />
                </Link>,
                <Link to="/components/profile/profiles/SarahWaltersProfile">
                  <MenuItem primaryText="Sarah Walters" />
                </Link>,
                <Link to="/components/profile/profiles/RosOsborneProfile">
                  <MenuItem primaryText="Ros Osborne" />
                </Link>,
                <Link to="/containers/Profile">
                  <MenuItem primaryText="Daniel Parsons" />
                </Link>,
                <Link to="/components/profile/profiles/JulieHughesProfile">
                  <MenuItem primaryText="Julie Hughes" />
                </Link>,
                <Link to="/components/profile/profiles/LynMorrisProfile">
                  <MenuItem primaryText="Lyn Morris" />
                </Link>,
                <Link to="/components/profile/profiles/KirstenKellyProfile">
                  <MenuItem primaryText="Kirsten Kelly" />
                </Link>,
                <Link to="/components/profile/profiles/HeatherHentyProfile">
                  <MenuItem primaryText="Heather Henty" />
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
                  primaryText="Smith Family Bendigo, Victoria"
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/3745105?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F13%2F1926%2F04%2F13%2Fpage%2F446985%2Farticle%2F3745105"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Gipsy Smith"
                    >
                      <MenuItem primaryText="Gipsy Smith" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/10780649?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F13%2F1913%2F04%2F29%2Fpage%2F370384%2Farticle%2F10780649"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Sir George Smith"
                    >
                      <MenuItem primaryText="Sir George Smith" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/114920061?browse=ndp%3Abrowse%2Ftitle%2FR%2Ftitle%2F311%2F1911%2F04%2F21%2Fpage%2F12102956%2Farticle%2F114920061"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Magaret Smith"
                    >
                      <MenuItem primaryText="Magaret Smith" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/174626326?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F874%2F1897%2F06%2F24%2Fpage%2F20431399%2Farticle%2F174626326"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="David Smith"
                    >
                      <MenuItem
                        primaryText="David Smith"
                        insetChildren={true}
                        checked={true}
                      />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/114920061?browse=ndp%3Abrowse%2Ftitle%2FR%2Ftitle%2F311%2F1911%2F04%2F21%2Fpage%2F12102956%2Farticle%2F114920061"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Eduard George Smith"
                    >
                      <MenuItem
                        primaryText="Eduard George Smith"
                        checked={true}
                      />
                    </a>
                  ]}
                />,
                <MenuItem
                  primaryText="Morris Family Bendigo, Victoria"
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/89021932?browse=ndp%3Abrowse%2Ftitle%2FB%2Ftitle%2F346%2F1892%2F07%2F30%2Fpage%2F9218315%2Farticle%2F89021932"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Professor Morris"
                    >
                      <MenuItem primaryText="Professor Morris" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/226957775?browse=ndp%3Abrowse%2Ftitle%2FB%2Ftitle%2F806%2F1912%2F12%2F13%2Fpage%2F24155821%2Farticle%2F226957775"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Fred Morris"
                    >
                      <MenuItem primaryText="Fred Morris" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/174626326?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F874%2F1897%2F06%2F24%2Fpage%2F20431399%2Farticle%2F174626326"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Daisy Evelina Morris"
                    >
                      <MenuItem
                        primaryText="Daisy Evelina Morris"
                        insetChildren={true}
                        checked={true}
                      />
                    </a>
                  ]}
                />,
                <MenuItem
                  primaryText="Kelly Family Bendigo"
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/171427225?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F792%2F1926%2F11%2F04%2Fpage%2F20389249%2Farticle%2F171427225"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Margaret Kelly"
                    >
                      <MenuItem primaryText="Margaret Kelly" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/174626326?browse=ndp%3Abrowse%2Ftitle%2FM%2Ftitle%2F874%2F1897%2F06%2F24%2Fpage%2F20431399%2Farticle%2F174626326"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Dean Kelly"
                    >
                      <MenuItem primaryText="Dean Kelly" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/205929087?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F809%2F1938%2F04%2F02%2Fpage%2F19249038%2Farticle%2F205929087"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Thomas Kelly"
                    >
                      <MenuItem primaryText="Thomas Kelly" checked={true} />
                    </a>
                  ]}
                />,
                <MenuItem
                  primaryText="Hughes Family Bendigo"
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/93264739?browse=ndp%3Abrowse%2Ftitle%2FK%2Ftitle%2F342%2F1922%2F01%2F30%2Fpage%2F8953490%2Farticle%2F93264739"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Dame Mary Hughes"
                    >
                      <MenuItem primaryText="Dame Mary Hughes" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/223325592?browse=ndp%3Abrowse%2Ftitle%2FW%2Ftitle%2F621%2F1930%2F07%2F05%2Fpage%2F23873323%2Farticle%2F223325592"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="Tom Hughes"
                    >
                      <MenuItem primaryText="Tom Hughes" checked={true} />
                    </a>,
                    <a
                      href="http://trove.nla.gov.au/newspaper/article/197232804?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F809%2F1904%2F01%2F01%2Fpage%2F18516010%2Farticle%2F197232804"
                      rel="noreferrer noopener"
                      target="_blank"
                      alt="John Hughes"
                    >
                      <MenuItem primaryText="John Hughes" checked={true} />
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
                  href="http://www.bendigofamilyhistory.org/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Bendigo Family History Group"
                >
                  <MenuItem primaryText="Bendigo Family History Group" />
                </a>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem rightIcon={<ActionInfo />}>
                <a
                  href="http://www.brac.vic.gov.au/Family_Local_History/Family_History_Research/"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Bendigo Family History Research"
                >
                  <MenuItem primaryText="Bendigo Family History Research" />
                </a>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem rightIcon={<ActionInfo />}>
                <a
                  href="https://www.aigs.org.au/bendigo.htm"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Bendigo Family History Group"
                >
                  <MenuItem primaryText="Bendigo Family History Group" />
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
              <ListItem>You are now friends with John Smith</ListItem>
              <ListItem>
                <Link to="/components/profile/profiles/JohnSmithProfile">
                  <RaisedButton
                    primary={true}
                    style={btnStyle}
                    label="Visit John's Profile"
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

export default JohnSmith;
