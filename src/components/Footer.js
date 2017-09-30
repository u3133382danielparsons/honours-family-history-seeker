import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FbIcon from 'react-icons/lib/fa/facebook-official';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import PinterestIcon from 'react-icons/lib/fa/pinterest-square';
import GitIcon from 'react-icons/lib/fa/github-square';
import TumblerIcon from 'react-icons/lib/ti/social-tumbler';
import BehanceIcon from 'react-icons/lib/fa/behance-square';
import GoogleIcon from 'react-icons/lib/fa/google-plus';
import YouTubeIcon from 'react-icons/lib/fa/youtube-square';
import OkIcon from 'react-icons/lib/fa/odnoklassniki-square';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <List className="list-horizontal-display">
            <ListItem>
              <IconButton tooltip="facebook">
                <h2>
                  <a
                    href="https://www.facebook.com/daniel.parsons.96780671"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FbIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="twitter">
                <h2>
                  <a
                    href="https://twitter.com/DanielP09488813"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="instagram">
                <h2>
                  <a
                    href="https://www.instagram.com/u3133382/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="pinterest">
                <h2>
                  <a
                    href="https://au.pinterest.com/danpar20/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PinterestIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="github">
                <h2>
                  <a
                    href="https://github.com/u3133382danielparsons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="tumbler">
                <h2>
                  <a
                    href="https://danpar20.tumblr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TumblerIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="blogger">
                <h2>
                  <a
                    href="https://family-history-seeker.blogspot.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon width={0} height={0} viewBox="0 0 20 16">
                      <path
                        fill="#0275d8"
                        d="M14,13H9.95A1,1 0 0,0 8.95,14A1,1 0 0,0 9.95,15H14A1,1 0 0,0 15,14A1,1 0 0,0 14,13M9.95,10H12.55A1,1 0 0,0 13.55,9A1,1 0 0,0 12.55,8H9.95A1,1 0 0,0 8.95,9A1,1 0 0,0 9.95,10M16,9V10A1,1 0 0,0 17,11A1,1 0 0,1 18,12V15A3,3 0 0,1 15,18H9A3,3 0 0,1 6,15V8A3,3 0 0,1 9,5H13A3,3 0 0,1 16,8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"
                      />
                    </SvgIcon>
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="behance">
                <h2>
                  <a
                    href="https://www.behance.net/gallery/57065099/Family-History-Seeker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BehanceIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="google+">
                <h2>
                  <a
                    href="https://plus.google.com/u/0/110067645684855261427"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoogleIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="youtube">
                <h2>
                  <a
                    href="https://www.youtube.com/channel/UCTyL3c8vfQrQWLpNvMwlHYg?view_as=subscriber"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="fdksla"
                  >
                    <YouTubeIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>

            <ListItem>
              <IconButton tooltip="Odnoklassniki">
                <h2>
                  <a
                    href="https://ok.ru/profile/572011567969"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <OkIcon />
                  </a>
                </h2>
              </IconButton>
            </ListItem>
          </List>
        </footer>
        <footer>
          <List className="list-horizontal-display">
            <ListItem>
              <Subheader>FAMILY HISTORY SEEKER</Subheader>
            </ListItem>
            <ListItem>
              <Subheader>BY DANIEL PARSONS</Subheader>
            </ListItem>
            <ListItem>
              <Subheader>
                BACHELOR OF ARTS AND DESIGN (HONOURS) - 298JA
              </Subheader>
            </ListItem>
            <ListItem>
              <Subheader>UNIVERISTY OF CANBERRA 2017</Subheader>
            </ListItem>
          </List>
        </footer>
      </div>
    );
  }
}

export default Footer;