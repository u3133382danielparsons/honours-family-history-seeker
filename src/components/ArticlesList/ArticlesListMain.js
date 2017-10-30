import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import McCraeAv from '../../components/people/img/georgiana.jpg';
import scarlettAv from '../../img/scarlett/scarlettAv.jpg';

class ArticlesListMain extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    ];
    return (
      <div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>

        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title=" McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title=" McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Georgiana McCrae"
              subtitle="Self-portrait of Georgiana McCrae as a young woman."
              avatar={McCraeAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="Self-portrait of Georgiana McCrae as a young woman."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/118290120?searchTerm=Georgiana%20McCrae&searchLimits="
                rel="noreferrer noopener"
                target="_blank"
              >
                The Canberra Times (ACT : 1926 - 1995) Sat 8 Oct 1994
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card>
            <CardHeader
              title="Lord Abinger"
              subtitle="Descended from the Famous advocate Sir James Scarlett."
              avatar={scarlettAv}
            />
            <RaisedButton label="Article" onClick={this.handleOpen} />
            <Dialog
              title="The Scarlett Family."
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <a
                href="http://trove.nla.gov.au/newspaper/article/154972483?browse=ndp%3Abrowse%2Ftitle%2FA%2Ftitle%2F809%2F1917%2F06%2F26%2Fpage%2F18601136%2Farticle%2F154972483"
                rel="noreferrer noopener"
                target="_blank"
              >
                The Age (Melbourne, Vic. : 1854 - 1954) Tue 26 Jun 1917 Page 5
              </a>
            </Dialog>
          </Card>
          <hr />
        </div>
      </div>
    );
  }
}

export default ArticlesListMain;
