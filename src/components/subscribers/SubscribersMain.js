import React, { Component } from 'react';

import { Card } from 'material-ui/Card';

import JohnSmith from './members/JohnSmith';
import MaryJones from './members/MaryJones';
import SarahWalters from './members/SarahWalters';
import HeatherHenty from './members/HeatherHenty';

class SubscribersMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <Card>
            <JohnSmith />
          </Card>
          <Card>
            <MaryJones />
          </Card>
          <Card>
            <SarahWalters />
          </Card>
          <Card>
            <HeatherHenty />
          </Card>
        </div>
      </main>
    );
  }
}

export default SubscribersMain;
