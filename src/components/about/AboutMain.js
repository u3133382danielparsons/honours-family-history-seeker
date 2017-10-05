import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardTitle
  // CardMedia,
  // CardTitle,
  // CardActions
} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Dot from 'material-ui/svg-icons/av/fiber-manual-record';

const styles = {
  lineHeight: {
    lineHeight: '1.5'
  }
};

class AboutMain extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardTitle title="About" subtitle="Family History Seeker" />
          <CardHeader
            title="Family History Seeker is a Design Prototype"
            subtitle="It is practical research and part of an Honours degree dissertation."
          />
          <CardText>
            <List>
              <ListItem
                primaryText="Family History Seeker is a research tool for family historians. The design is in the development phase."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="Each page within Family History Seeker is a demonstration of a component."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The HOME Page displays works posted by Family History Seeker members."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The DASHBOARD page is a navigation component. Each page can be reached from the DASHBOARD page."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The Sidebar is also a navigation component. Each page has a sidebar sidebar that contains a list of links to all of the pages within Family History Seeker."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The SEARCH page is a form that takes in a query. The query should be a name of someone that is being researched by the family historian."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="Pressing the submit button in the SEARCH page sends a request for items from The National Library of Australia's Trove collection. A list of 20 articles from the Trove collection are returned."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="Each article listed has a mechanism to save the article."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The POSTS page is a lists of posts that have been saved from the Add Posts page."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The POSTS page is intended to be a component that stores information and resources relevent to the family or family member being researched."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The FAMILIES page contains posts of families being researched. Details of each of the family members are listed within each particular family."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />

              <ListItem
                primaryText="The PEOPLE page contains a list of individuals that are being researched. Each person in the list has a link to a narrative of their history."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The DATA VIZ page contains a gallery of data visualisations. The data visualisations are an attempt to express the character of the Trove collection with charts."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The VIDEOS page has a list of five preloaded videos from youtube. The videos instruct people how to use Trove. A search box is also present and this accepts a query. The query is sent to youtube and a new list of five video titles that match the query are returned."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The ADD URLs page is a form that accepts an articles url. The urls are saved and stored as cookies. Each articles date can also be added. The saved url is then displayed along with how many years ago the article was published. Each url can be deleted as can the entire list."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The ADD POSTS page is a form that accepts an Article Heading, a Newspaper Title, and the Articles content. The information is then sent to the POSTS page after the submit button is pressed. Pressing the cancel button will navigate back to the HOME page."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The PROFILE page is a list of details that belongs to the member that is currently logged in to Family History Seeker."
                secondaryText=""
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem primaryText="" secondaryText="" leftIcon={<Dot />} />
              <ListItem primaryText="" secondaryText="" leftIcon={<Dot />} />
              <ListItem primaryText="" secondaryText="" leftIcon={<Dot />} />
            </List>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default AboutMain;
