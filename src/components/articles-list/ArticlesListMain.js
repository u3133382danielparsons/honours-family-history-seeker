import React, { Component } from 'react';
import McCraeDialog from './dialogues/McCraeDialog';
import TruganiniDialog from './dialogues/TruganiniDialog';
import PatersonDialog from './dialogues/PatersonDialog';
import SpenceDialog from './dialogues/SpenceDialog';
import LeeDialog from './dialogues/LeeDialog';
import VidaDialog from './dialogues/VidaDialog';
import HicksDialog from './dialogues/HicksDialog';
import HollingworthDialog from './dialogues/HollingworthDialog';
import ScarlettDialog from './dialogues/ScarlettDialog';
import GrayDialog from './dialogues/GrayDialog';
import BryantDialog from './dialogues/BryantDialog';
import KumMowChinn from './dialogues/KumMowChinn';

class ArticlesListMain extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <McCraeDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <TruganiniDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <PatersonDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <SpenceDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <LeeDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <VidaDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <HicksDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <HollingworthDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ScarlettDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <GrayDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <BryantDialog />
            </div>
            <div className="col-sm-6 col-lg-4">
              <KumMowChinn />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ArticlesListMain;
