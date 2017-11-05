import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { Card, CardHeader } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Ava7 from './img/ava-7.png';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

const SarahWalters = () => (
  <div>
    <Paper style={style}>
      <Card>
        <CardHeader
          title="Sarah Walters"
          subtitle="Family History Seeker Member"
          avatar={Ava7}
        />
      </Card>
      <Menu desktop={true} width={320}>
        <Subheader>Public Servant</Subheader>
        <Subheader>Aged 27</Subheader>
        <Subheader>Lives in Millicent, S.A.</Subheader>
        <Divider />
        <MenuItem
          primaryText="Families"
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
                <a href="" rel="noreferrer noopener" target="_blank" alt="">
                  <MenuItem primaryText="" checked={true} />
                </a>,
                <a href="" rel="noreferrer noopener" target="_blank" alt="">
                  <MenuItem primaryText="" checked={true} />
                </a>,
                <a href="" rel="noreferrer noopener" target="_blank" alt="">
                  <MenuItem primaryText="" checked={true} />
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
    </Paper>
  </div>
);

export default SarahWalters;
