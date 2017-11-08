import React from 'react';
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
import Ava4 from './img/ava-4.png';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

const RosOsborne = () => (
  <div>
    <Paper style={style}>
      <Card>
        <CardHeader
          title="Ros Osborne"
          subtitle="Family History Seeker Member"
          avatar={Ava4}
        />
      </Card>
      <Menu desktop={true} width={320}>
        <Subheader>Shop Assistant</Subheader>
        <Subheader>Aged 31</Subheader>
        <Subheader>Lives in Millicent, S.A.</Subheader>
        <Divider />
        <MenuItem
          primaryText="Family History Seeker Friends"
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <Link to="/containers/Profile">
              <MenuItem primaryText="Daniel Parsons" />
            </Link>,
            <Link to="/containers/Profile">
              <MenuItem primaryText="Daniel Parsons" />
            </Link>,
            <Link to="/components/profile/profiles/SarahWaltersProfile">
              <MenuItem primaryText="Sarah Walters" />
            </Link>,
            <Link to="/containers/Profile">
              <MenuItem primaryText="Daniel Parsons" />
            </Link>,
            <Link to="/components/profile/profiles/JohnSmithProfile">
              <MenuItem primaryText="John Smith" />
            </Link>,
            <Link to="/components/profile/profiles/MaryJonesProfile">
              <MenuItem primaryText="Mary Jones" />
            </Link>,
            <Link to="/components/profile/profiles/RhondaRussellProfile">
              <MenuItem primaryText="Rhonda Russell" />
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
              primaryText="Walters Family Millicent, S.A."
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <a
                  href="http://trove.nla.gov.au/newspaper/article/200951917?browse=ndp%3Abrowse%2Ftitle%2FS%2Ftitle%2F971%2F1907%2F05%2F28%2Fpage%2F22490643%2Farticle%2F200951917"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Charles Montague Walters"
                >
                  <MenuItem
                    primaryText="Charles Montague Walters"
                    checked={true}
                  />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/97933566?browse=ndp%3Abrowse%2Ftitle%2FS%2Ftitle%2F375%2F1932%2F05%2F08%2Fpage%2F10203926%2Farticle%2F97933566"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Reginald Frank Walters"
                >
                  <MenuItem
                    primaryText="Reginald Frank Walters"
                    checked={true}
                  />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/90955967?browse=ndp%3Abrowse%2Ftitle%2FC%2Ftitle%2F291%2F1933%2F11%2F02%2Fpage%2F8667967%2Farticle%2F90955967"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="J. A. Walters"
                >
                  <MenuItem primaryText="J. A. Walters" checked={true} />
                </a>
              ]}
            />,
            <MenuItem
              primaryText="Osborne Family Millicent, S.A."
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <a
                  href="http://trove.nla.gov.au/newspaper/article/200951917?browse=ndp%3Abrowse%2Ftitle%2FS%2Ftitle%2F971%2F1907%2F05%2F28%2Fpage%2F22490643%2Farticle%2F200951917"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Olive Osborne"
                >
                  <MenuItem primaryText="Olive Osborne" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/77915676?browse=ndp%3Abrowse%2Ftitle%2FB%2Ftitle%2F276%2F1935%2F09%2F19%2Fpage%2F7665877%2Farticle%2F77915676"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Kenneth Osborne"
                >
                  <MenuItem primaryText="John Russell" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/200127201?browse=ndp%3Abrowse%2Ftitle%2FS%2Ftitle%2F971%2F1954%2F09%2F07%2Fpage%2F22456670%2Farticle%2F200127201"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Max Osborne"
                >
                  <MenuItem
                    primaryText="Max Osborne"
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
                  href="http://trove.nla.gov.au/newspaper/article/12116996?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F13%2F1939%2F04%2F13%2Fpage%2F613916%2Farticle%2F12116996"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="J. Kelly"
                >
                  <MenuItem primaryText="J. Kelly" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/10777305?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F13%2F1913%2F04%2F12%2Fpage%2F369948%2Farticle%2F10777305"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="W. H. Kelly"
                >
                  <MenuItem primaryText="W. H. Kelly" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/91153834?browse=ndp%3Abrowse%2Ftitle%2FL%2Ftitle%2F74%2F1896%2F12%2F11%2Fpage%2F8323770%2Farticle%2F91153834"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="R. C. Nugent Kelly"
                >
                  <MenuItem primaryText="R. C. Nugent Kelly" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/187170581?browse=ndp%3Abrowse%2Ftitle%2FS%2Ftitle%2F331%2F1946%2F07%2F05%2Fpage%2F19283906%2Farticle%2F187170581"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Dean Kelly"
                >
                  <MenuItem primaryText="Dean Kelly" checked={true} />
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
              href="http://www.sefhg.org/"
              rel="noreferrer noopener"
              target="_blank"
              alt="South East Family History Group"
            >
              <MenuItem primaryText="South East Family History Group" />
            </a>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem rightIcon={<ActionInfo />}>
            <a
              href="https://www.familysearch.org/wiki/en/South_East_Family_History_Group_-_South_Australia"
              rel="noreferrer noopener"
              target="_blank"
              alt="Family Search"
            >
              <MenuItem primaryText="Family Search" />
            </a>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem rightIcon={<ActionInfo />}>
            <a
              href="http://mountgambierhistorygroup.weebly.com/"
              rel="noreferrer noopener"
              target="_blank"
              alt="
Mount Gambier History Group"
            >
              <MenuItem primaryText="
Mount Gambier History Group" />
            </a>
          </ListItem>
        </List>
      </Menu>
    </Paper>
  </div>
);

export default RosOsborne;
