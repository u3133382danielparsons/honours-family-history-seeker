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

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <List className="list-horizontal-display">
            <ListItem>
              <h2>
                <a
                  href="https://www.facebook.com/Family-History-Seeker-1944050212516250/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="facebook"
                  className="fb"
                >
                  <FbIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://twitter.com/DanielP09488813"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Twitter"
                  className="twitter"
                >
                  <TwitterIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://www.instagram.com/u3133382/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Instagram"
                  className="instagram"
                >
                  <InstagramIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://www.pinterest.com.au/danpar20/family-history-seeker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Pinterest"
                  className="pinterest"
                >
                  <PinterestIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://github.com/u3133382danielparsons/honours-family-history-seeker"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="github"
                  className="github"
                >
                  <GitIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://family-history-seeker.tumblr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="tumblr"
                  className="tumblr"
                >
                  <TumblerIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://family-history-seeker.blogspot.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Blogger"
                  className="blogger"
                >
                  <SvgIcon width={0} height={0} viewBox="0 0 20 16">
                    <path
                      fill="#f57d00"
                      d="M14,13H9.95A1,1 0 0,0 8.95,14A1,1 0 0,0 9.95,15H14A1,1 0 0,0 15,14A1,1 0 0,0 14,13M9.95,10H12.55A1,1 0 0,0 13.55,9A1,1 0 0,0 12.55,8H9.95A1,1 0 0,0 8.95,9A1,1 0 0,0 9.95,10M16,9V10A1,1 0 0,0 17,11A1,1 0 0,1 18,12V15A3,3 0 0,1 15,18H9A3,3 0 0,1 6,15V8A3,3 0 0,1 9,5H13A3,3 0 0,1 16,8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"
                    />
                  </SvgIcon>
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://www.behance.net/gallery/57065099/Family-History-Seeker"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Behance"
                  className="behance"
                >
                  <BehanceIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://get.google.com/albumarchive/111085325856135709554"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Google-plus"
                  className="google-plus"
                >
                  <GoogleIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://www.youtube.com/channel/UCiKN4baVdI0BZahzsATJ5UQ/videos?view_as=subscriber"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="youtube"
                  className="youtube"
                >
                  <YouTubeIcon />
                </a>
              </h2>
            </ListItem>

            <ListItem>
              <h2>
                <a
                  href="https://ok.ru/profile/572011567969"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  title="Odnoklassniki"
                  className="ok"
                >
                  <OkIcon />
                </a>
              </h2>
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
