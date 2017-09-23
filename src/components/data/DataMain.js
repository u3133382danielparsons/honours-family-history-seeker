import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AreaCurrentSixty from './charts/austStatePopsSixty.png';
import Pie from './charts/pie.png';
import TreeSixty from './charts/austStateSixty.png';
import TreeSeventeen from './charts/austStateSeventeen.png';

const style = {
  width: 300,
  marginBottom: 20
};

class DataMain extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-sm-6">
            <Paper style={style} zDepth={5}>
              <iframe
                title="Newspapers By State"
                width="320"
                height="480"
                frameborder="0"
                scrolling="no"
                src="https://plot.ly/~u3133382/7.embed?link=false"
              />
            </Paper>
          </div>

          <div className="col-sm-6">
            <Paper style={style} zDepth={5}>
              <iframe
                title="Current Population for Australian States/Territories"
                width="320"
                height="480"
                frameborder="0"
                scrolling="no"
                src="https://plot.ly/~u3133382/11.embed?link=false"
              />
            </Paper>
          </div>

          <div className="col-sm-6">
            <Paper style={style} zDepth={5}>
              <iframe
                title="Australian State Populations 1960"
                width="320"
                height="480"
                frameborder="0"
                scrolling="no"
                src="https://plot.ly/~u3133382/9.embed?link=false"
              />
            </Paper>
          </div>

          <div className="col-sm-6">
            <Paper style={style} zDepth={5}>
              <img
                src={AreaCurrentSixty}
                alt="Area Australian State Population 1960"
              />
            </Paper>
          </div>

          <div className="col-sm-6">
            <Paper style={style} zDepth={5}>
              <iframe
                title="Big Area Chart"
                width="900"
                height="800"
                frameborder="0"
                scrolling="no"
                src="https://plot.ly/~u3133382/9.embed?link=false"
              />
            </Paper>
          </div>

          <div className="col-sm-6">
            <Paper style={style} zDepth={5}>
              <img src={Pie} alt="Newspapers Pie Chart" />
            </Paper>
          </div>

          <div className="col-sm-6">
            <iframe
              title="Big Pie Chart"
              width="900"
              height="800"
              frameborder="0"
              scrolling="no"
              src="https://plot.ly/~u3133382/5.embed"
            />
          </div>

          <div className="col-sm-6">
            <Paper style={style} zDepth={5}>
              <img src={TreeSixty} alt="Tree Map" />
            </Paper>
          </div>

          <div className="col-sm-6">
            <Paper style={style} zDepth={5}>
              <img src={TreeSeventeen} alt="Tree Map" />
            </Paper>
          </div>
        </div>
      </main>
    );
  }
}

export default DataMain;
