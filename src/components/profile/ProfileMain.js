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
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Email from 'material-ui/svg-icons/communication/email';
import Info from 'material-ui/svg-icons/action/info';
import Work from 'material-ui/svg-icons/action/work';
import Number from 'material-ui/svg-icons/notification/confirmation-number';
import Hobbies from 'material-ui/svg-icons/av/music-video';
import Phone from 'material-ui/svg-icons/communication/phone';
import University from 'material-ui/svg-icons/av/library-books';
import Course from 'material-ui/svg-icons/image/palette';
import Location from 'material-ui/svg-icons/communication/location-on';
import Website from 'material-ui/svg-icons/content/link';

import danielAv from '../../img/photo.jpg';

class ProfileMain extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardTitle title="User Profile" subtitle="Details" />
          <CardHeader
            title="Daniel Parsons"
            subtitle="Member of Family History Seeker since November 10, 2017"
            avatar={danielAv}
          />
          <CardText>
            <List>
              <ListItem
                primaryText="Username"
                secondaryText="fhseeker"
                leftIcon={<Fingerprint />}
              />
              <ListItem
                primaryText="Date of Birth"
                secondaryText="20th January, 1970"
                leftIcon={<DateRange />}
              />
              <ListItem
                primaryText="Location"
                secondaryText="Canberra, Australia"
                leftIcon={<Location />}
              />
              <ListItem
                primaryText="Personal Email"
                secondaryText="danielparsons3133382@gmail.com"
                leftIcon={<Email />}
              />
              <ListItem
                primaryText="Phone Number"
                secondaryText="0491 360 585"
                leftIcon={<Phone />}
              />
              <ListItem
                primaryText="Occupation"
                secondaryText="Fulltime Student"
                leftIcon={<Work />}
              />
              <ListItem
                primaryText="Student ID "
                secondaryText="u3133382"
                leftIcon={<Number />}
              />
              <ListItem
                primaryText="Interests"
                secondaryText="Web Design, Web Development"
                leftIcon={<Info />}
              />
              <ListItem
                primaryText="Hobbies"
                secondaryText="Football, Guitar, Reading, Watching TV"
                leftIcon={<Hobbies />}
              />

              <ListItem
                primaryText="University"
                secondaryText="University of Canberra, Australia"
                leftIcon={<University />}
              />
              <ListItem
                primaryText="Course of Study"
                secondaryText="Honours in Arts & Design"
                leftIcon={<Course />}
              />
              <ListItem
                primaryText="Website Link"
                secondaryText="http://honours-family-history-seeker.herokuapp.com"
                leftIcon={<Website />}
              />
              <ListItem
                primaryText="Student Email"
                secondaryText="u3133382@uni.canberra.edu.au"
                leftIcon={<Email />}
              />
            </List>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default ProfileMain;
