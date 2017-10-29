import React, { Component } from 'react';
// import Subheader from 'material-ui/Subheader';
import Paterson from './families/Paterson';
import Scarlett from './families/Scarlett';
import Hollingworth from './families/Hollingworth';
import Spence from './families/Spence';
import McCrae from './families/McCrae';
import Hicks from './families/Hicks';
import TruganiniFamily from './families/TruganiniFamily';
import ChisholmFamily from './families/Chisholm';
import Lee from './families/Lee';
import Kelly from './families/Kelly';

import Bryant from './families/Bryant';
import Gray from './families/Gray';

class FamilyMembersMain extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <TruganiniFamily />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Hicks />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Spence />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Gray />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Paterson />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Bryant />
              <hr />
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-6 col-lg-4">
              <Scarlett />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Hollingworth />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <McCrae />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ChisholmFamily />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Lee />
              <hr />
            </div>
            <div className="col-sm-6 col-lg-4">
              <Kelly />
              <hr />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default FamilyMembersMain;
