import React, { Component } from 'react';

import JohnSmith from './members/JohnSmith';
import MaryJones from './members/MaryJones';
import SarahWalters from './members/SarahWalters';
import HeatherHenty from './members/HeatherHenty';
import LynMorris from './members/LynMorris';
import RhondaRussell from './members/RhondaRussell';
import RosOsborne from './members/RosOsborne';
import JulieHughes from './members/JulieHughes';
import KirstenKelly from './members/KirstenKelly';

class SubscribersMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <JohnSmith />
          </div>
          <div className="col-md-6 col-lg-4">
            <MaryJones />
          </div>
          <div className="col-md-6 col-lg-4">
            <SarahWalters />
          </div>
          <div className="col-md-6 col-lg-4">
            <HeatherHenty />
          </div>
          <div className="col-md-6 col-lg-4">
            <LynMorris />
          </div>
          <div className="col-md-6 col-lg-4">
            <RhondaRussell />
          </div>
          <div className="col-md-6 col-lg-4">
            <RosOsborne />
          </div>
          <div className="col-md-6 col-lg-4">
            <JulieHughes />
          </div>
          <div className="col-md-6 col-lg-4">
            <KirstenKelly />
          </div>
        </div>
      </main>
    );
  }
}

export default SubscribersMain;
