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
import Ava1 from './img/ava-1.png';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

const MaryJones = () => (
  <div>
    <Paper style={style}>
      <Card>
        <CardHeader
          title="Mary Jones"
          subtitle="Family History Seeker Member"
          avatar={Ava1}
        />
      </Card>
      <Menu desktop={true} width={320}>
        <Subheader>Public Servant</Subheader>
        <Subheader>Aged 22</Subheader>
        <Subheader>Lives in Albany, W.A.</Subheader>
        <Divider />
        <MenuItem
          primaryText="Family History Seeker Friends"
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <Link to="/components/profile/profiles/RosOsborneProfile">
              <MenuItem primaryText="Ros Osborne" />
            </Link>,
            <Link to="/components/profile/profiles/JulieHughesProfile">
              <MenuItem primaryText="Julie Hughes" />
            </Link>,
            <Link to="/components/profile/profiles/RhondaRussellProfile">
              <MenuItem primaryText="Rhonda Russell" />
            </Link>,
            <Link to="/components/profile/profiles/LynMorrisProfile">
              <MenuItem primaryText="Lyn Morris" />
            </Link>,
            <Link to="/components/profile/profiles/KirstenKellyProfile">
              <MenuItem primaryText="Kirsten Kelly" />
            </Link>,
            <Link to="/components/profile/profiles/HeatherHentyProfile">
              <MenuItem primaryText="Heather Henty" />
            </Link>,
            <Link to="/components/profile/profiles/JohnSmithProfile">
              <MenuItem primaryText="John Smith" />
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
            <Link to="/containers/Profile">
              <MenuItem primaryText="Daniel Parsons" />
            </Link>,
            <Link to="/containers/Profile">
              <MenuItem primaryText="Daniel Parsons" />
            </Link>,
            <Link to="/containers/Profile">
              <MenuItem primaryText="Daniel Parsons" />
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
              primaryText="Jones Family Albany, W.A."
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <a
                  href="http://trove.nla.gov.au/newspaper/article/217404280?searchTerm=Jones%20Albany&searchLimits="
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Harry Jones"
                >
                  <MenuItem primaryText="Harry Jones" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/67032328?browse=ndp%3Abrowse%2Ftitle%2FI%2Ftitle%2F180%2F1898%2F09%2F09%2Fpage%2F6591074%2Farticle%2F67032328"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Captain Jones"
                >
                  <MenuItem primaryText="Captain Jones" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/81381703?browse=ndp%3Abrowse%2Ftitle%2FD%2Ftitle%2F275%2F1895%2F12%2F30%2Fpage%2F8047713%2Farticle%2F81381703"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="William Henry Jones"
                >
                  <MenuItem primaryText="William Henry Jones" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/3027110?browse=ndp%3Abrowse%2Ftitle%2FW%2Ftitle%2F30%2F1891%2F11%2F09%2Fpage%2F754794%2Farticle%2F3027110"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Jane Jones"
                >
                  <MenuItem
                    primaryText="Jane Jones"
                    insetChildren={true}
                    checked={true}
                  />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/69930853?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F175%2F1903%2F04%2F18%2Fpage%2F6294611%2Farticle%2F69930853"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Adelaide Jones"
                >
                  <MenuItem primaryText="Adelaide Jones" checked={true} />
                </a>
              ]}
            />,
            <MenuItem
              primaryText="Russell Family Albany, W.A."
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <a
                  href="http://trove.nla.gov.au/newspaper/article/69930853?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F175%2F1903%2F04%2F18%2Fpage%2F6294611%2Farticle%2F69930853"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="Charles Russell"
                >
                  <MenuItem primaryText="Charles Russell" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/46295576?browse=ndp%3Abrowse%2Ftitle%2FW%2Ftitle%2F30%2F1939%2F01%2F27%2Fpage%2F3721096%2Farticle%2F46295576"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="John Russell"
                >
                  <MenuItem primaryText="John Russell" checked={true} />
                </a>,
                <a
                  href="http://trove.nla.gov.au/newspaper/article/67193975?browse=ndp%3Abrowse%2Ftitle%2FI%2Ftitle%2F180%2F1899%2F12%2F15%2Fpage%2F6592307%2Farticle%2F67193975"
                  rel="noreferrer noopener"
                  target="_blank"
                  alt="C. T. Russell"
                >
                  <MenuItem
                    primaryText="C. T. Russell"
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
              href="http://www.albanyfamilyhistory.org.au/"
              rel="noreferrer noopener"
              target="_blank"
              alt="Albany Regional Family History society Inc."
            >
              <MenuItem primaryText="Albany Regional Family History Society." />
            </a>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem rightIcon={<ActionInfo />}>
            <a
              href="http://www.familyhistoryresearch.com.au/courses/WAgenealogy/index.htm"
              rel="noreferrer noopener"
              target="_blank"
              alt="West Australian Genealogy"
            >
              <MenuItem primaryText="West Australian Genealogy" />
            </a>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem rightIcon={<ActionInfo />}>
            <a
              href="http://library.albany.wa.gov.au/programs-collections/albany-history-collection/"
              rel="noreferrer noopener"
              target="_blank"
              alt="Albany Public Library"
            >
              <MenuItem primaryText="Albany Public Library" />
            </a>
          </ListItem>
        </List>
      </Menu>
    </Paper>
  </div>
);

export default MaryJones;
