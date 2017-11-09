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
                primaryText="Family History Seeker is a research tool for family historians. "
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="Each page within Family History Seeker gives a visual demonstration of a component."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The design is a concept for a fututre proper working family history research tool."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The HOME Page is  the landing page and cards of families are displayed. Visitors can got to the Login or Sign Up page."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The DASHBOARD page is a navigation component. Each page can be reached from the DASHBOARD page."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The navigation component is in the left sidebar. Each page has a navigation sidebar that contains a list of links to all of the pages within Family History Seeker."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The SEARCH page is a form with an input field that takes in a query."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="Pressing the submit button in the SEARCH page sends a request for items from The National Library of Australia's Trove collection. A list of 20 articles from the Trove collection are returned. The Search component will only work when the browser has CORS (Cross Origin Restrictions) enabled."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="Each article links to Trove and has the Article Title, the Date of publication, the Newspaper Title, and a link to a PDF."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />

              <ListItem
                primaryText="The FAMILIES page contains posts of families being researched. Details of each of the family members are listed within each particular family."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The Family Members page contains family panels . Each family panel has a drop down list of family members that is activated by clicking a ‘SELECT’ button. Each family member inside the drop down list is linked to their page inside the peoples component. "
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The PEOPLE page contains a list of individuals that are being researched. Each person in the list has a link to a narrative of their history."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The DATA VIZ page contains a gallery of data visualisations. The data visualisations are an attempt to express the character of the Trove collection with charts."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The VIDEOS page has a list of five preloaded videos from youtube. The videos instruct people how to use Trove. A search box is also present and this accepts a query. The query is sent to youtube and a new list of five video titles that match the query are returned."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />

              <ListItem
                primaryText="The Articles List page displays panels of people. Each panel has it’s own ARTICLE button. On clicking the button a Dialog box opens and revels a link to a Trove article about that specific person."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />

              <ListItem
                primaryText="The PROFILE page is a list of details that belongs to the member that is currently logged in to Family History Seeker."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The POSTS page is a lists of posts that have been saved from the Add Posts page."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The POSTS page is intended to be a component that stores information and resources relevent to the family or family member being researched. A stepper component and a table with selectable items is also on the POSTS page."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The ADD POSTS page is a form that accepts an Article Heading, a Newspaper Title, and the Articles content. The information is then sent to the POSTS page after the submit button is pressed. Pressing the cancel button will navigate back to the HOME page."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The ARTICLE LINKS page has a form that accepts a Newspaper Title, Article Title, the Publication Date, and the URL Link to the Trove Article. The Articles page also has a list of Articles with the same details that are given in the form."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
              <ListItem
                primaryText="The SUBSCRIBERS page has panels of Family History Seeker members. Each panel contains the personal details and drop down lists of friends and families being researched. Links to external resources relevent to each members research are also in the panels."
                style={styles.lineHeight}
                leftIcon={<Dot />}
              />
            </List>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default AboutMain;
