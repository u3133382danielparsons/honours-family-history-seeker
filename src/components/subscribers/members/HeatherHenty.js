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
        <Subheader>Aged Care Worder</Subheader>
        <Subheader>Aged 33</Subheader>
        <Subheader>Lives in Maryborough, QLD</Subheader>
        <Divider />
        <MenuItem
          primaryText="Families"
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
            />,
            <MenuItem
              primaryText=" Family "
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <a href="" rel="noreferrer noopener" target="_blank" alt="">
                  <MenuItem
                    primaryText=""
                    insetChildren={true}
                    checked={true}
                  />
                </a>,
                <a href="" rel="noreferrer noopener" target="_blank" alt="">
                  <MenuItem
                    primaryText=""
                    insetChildren={true}
                    checked={true}
                  />
                </a>,
                <a href="" rel="noreferrer noopener" target="_blank" alt="">
                  <MenuItem
                    primaryText=""
                    insetChildren={true}
                    checked={true}
                  />
                </a>
              ]}
            />,
            <MenuItem
              primaryText=" Family "
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

export default HeatherHenty;
