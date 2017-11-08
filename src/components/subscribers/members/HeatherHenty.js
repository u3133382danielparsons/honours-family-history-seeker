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
import Ava8 from './img/ava-8.png';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

const HeatherHenty = () => (
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
    </Paper>
  </div>
);

export default HeatherHenty;
