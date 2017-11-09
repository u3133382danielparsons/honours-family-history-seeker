import React, { Component } from 'react';
// material-ui components
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';
// React Photo Gallery
import Gallery from 'react-photo-gallery';
// src
import McCraeGallery from './galleries/McCraeGallery';
import McCraeGalleryTwo from './galleries/McCraeGalleryTwo';
import McCraeGalleryThree from './galleries/McCraeGalleryThree';
import McCraeGalleryFour from './galleries/McCraeGalleryFour';
import McCraeGalleryFive from './galleries/McCraeGalleryFive';

import hobartLand from '../../img/bryant/hobartLand.jpg';
import scarlettFamily from '../../img/scarlett/scarlettFamily.jpg';
import grayFamily from '../../img/gray/grayFamily.jpg';
import CatherineSpence from '../../img/spence/Catherine-Spence.jpg';
import Wiloma from '../../img/nla.jpg';
import Glover from '../../img/glover.jpg';
import Mckeller from '../../img/mckeller.jpg';
import Chinn from '../../img/chinn.jpg';

class GalleryMain extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <McCraeGallery />
        </div>
        <div className="col-sm-6 col-lg-4">
          <McCraeGalleryTwo />
        </div>
        <div className="col-sm-6 col-lg-4">
          <McCraeGalleryThree />
        </div>
        <div className="col-sm-6 col-lg-4">
          <McCraeGalleryFour />
        </div>

        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="A family standing outside a tin shack called Wiloma during the Great Depression, New South Wales, ca. 1932" />
              }
            >
              <img
                src={Wiloma}
                alt="A family standing outside a tin shack called Wiloma during the Great Depression, New South Wales, ca. 1932"
              />
            </CardMedia>
            <CardText>
              <a
                href="https://www.nla.gov.au/research-guides/family-history"
                rel="noreferrer noopener"
                target="_blank"
              >
                NATIONAL LIBRARY OF AUSTRALIA FAMILY HISTORY
              </a>
            </CardText>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-4">
          <McCraeGalleryFive />
        </div>
        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="Wedding of Elsie May Chinn and Kum Mow, Sydney, 1917" />
              }
            >
              <img
                src={Chinn}
                alt="Wedding of Elsie May Chinn and Kum Mow, Sydney, 1917"
              />
            </CardMedia>

            <CardText>
              <a
                href="http://chineseaustralia.org/category/books/"
                rel="noreferrer noopener"
                target="_blank"
              >
                THOUGHTS ON THE HISTORY AND HERITAGE OF CHINESE AUSTRALIA - by
                Kate Bagnall
              </a>
            </CardText>
          </Card>
        </div>

        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="Samias Family - Mullumbimby New South Wales" />
              }
            >
              <img src={grayFamily} alt="Hobart in the 1800s" />
            </CardMedia>
            <CardText>
              <a
                href="http://freepages.history.rootsweb.ancestry.com/~aliens/chapter_2.htm"
                rel="noreferrer noopener"
                target="_blank"
                alt="ALIENS OF THE TWEED AND BRUNSWICK"
              >
                ALIENS OF THE TWEED AND BRUNSWICK
              </a>
            </CardText>
          </Card>
        </div>

        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="The Glover Family Queensland 1935" />
              }
            >
              <img src={Glover} alt="Glover Family" />
            </CardMedia>
            <CardText>
              <a
                href="http://www.queenslandfamilytrees.com/getperson.php?personID=I5733&tree=1"
                rel="noreferrer noopener"
                target="_blank"
              >
                Julia Sarah Glover
              </a>
            </CardText>
          </Card>
        </div>

        <div className="col-md-6">
          <Card>
            <CardMedia
              overlay={
                <CardTitle
                  title="The Scarlett Family"
                  subtitle="Raymond Married Josephine in 1917"
                />
              }
            >
              <img src={scarlettFamily} alt="The Scarlett Family" />
            </CardMedia>
          </Card>
        </div>

        <div className="col-md-6">
          <Card>
            <CardMedia overlay={<CardTitle subtitle="Catherine Spence" />}>
              <img src={CatherineSpence} alt="Catherine Spence" />
            </CardMedia>
            <CardText>
              <a
                href="http://trove.nla.gov.au/newspaper/article/166449131?browse=ndp%3Abrowse%2Ftitle%2FQ%2Ftitle%2F824%2F1899%2F10%2F19%2Fpage%2F19461171%2Farticle%2F166449131"
                rel="noreferrer noopener"
                target="_blank"
                alt="wikitree"
              >
                HIGH PRIESTESS OF EFFECTIVE VOTING
              </a>
            </CardText>
          </Card>
        </div>

        <div className="col-md-12">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="Bryant Family Home - Hobart Tasmaina" />
              }
            >
              <img src={hobartLand} alt="Hobart in the 1800s" />
            </CardMedia>

            <CardText>
              <a
                href="http://www.tasfhs.org/Volume%2019.pdf"
                rel="noreferrer noopener"
                target="_blank"
                alt="A TALE OF FOUR BROTHERS"
              >
                A TALE OF FOUR BROTHERS
              </a>
            </CardText>
          </Card>
        </div>

        <div className="col-md-12">
          <Card>
            <CardMedia
              overlay={
                <CardTitle subtitle="Mckeller Family Home - Victoria c1900" />
              }
            >
              <img src={Mckeller} alt="Mckeller Family Victoria c.1900" />
            </CardMedia>
            <CardText>
              <a
                href="https://www.slv.vic.gov.au/whats-on/finding-families"
                rel="noreferrer noopener"
                target="_blank"
                alt="Victorian State Library"
              >
                Finding Families
              </a>
            </CardText>
          </Card>
        </div>

        <Gallery photos={PHOTO_SET} />
      </div>
    );
  }
}

const PHOTO_SET = [
  {
    src: 'https://www.nla.gov.au/sites/default/files/blogs/nla8qrzai0z.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://www.gouldgenealogy.com/wp-content/uploads/2015/06/UTAS-Study-Family-History-Online.png',
    width: 1,
    height: 1
  },
  {
    src:
      'https://i.pinimg.com/originals/4f/a2/28/4fa228e89ba5a1c1688e54281d1fa616.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'http://www.hornsby.nsw.gov.au/__data/assets/image/0020/75017/Australian-family-history.jpg',
    width: 1,
    height: 1
  },
  {
    src:
      'http://www.genealogysearchaustralia.com.au/photographs/grandfatherhammondfamily.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'http://freepages.genealogy.rootsweb.ancestry.com/~mcapps/tatephotos/SG_Pass_Family-sm.jpg',
    width: 1,
    height: 1
  },
  {
    src:
      'http://www.rms.nsw.gov.au/about/news-events/centenary-of-anzac/projections/images/33-welcome-home-large.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://www.knoxetal.com/Gertrude_Joseph_Ivy_Errol_Joe.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://users.tpg.com.au/treuel/The%20Lawsons.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://sydneylivingmuseums.com.au/sites/default/files/styles/heroimages/public/DES_COS112.jpg?itok=d9_FEtU8',
    width: 1,
    height: 1
  },
  {
    src: 'https://www.portrait.gov.au/files/9/f/8/7/i7601.jpg',
    width: 1,
    height: 1
  },
  {
    src:
      'http://freepages.genealogy.rootsweb.ancestry.com/~kenmac/famphotos_lawson/images/lawson_thomas_family_c1895_big.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://www.melsgenealogy.co.uk/sutcliffe/photos/ernest_lily_wed.jpg',
    width: 1,
    height: 1
  },
  {
    src:
      'https://www.slv.vic.gov.au/sites/default/files/styles/feature_tiles/public/family_group_0.jpg?itok=4EeVGA2P',
    width: 4,
    height: 3
  },
  {
    src:
      'https://s3-ap-southeast-2.amazonaws.com/awm-media/collection/A05526/screen/4093316.JPG',
    width: 1,
    height: 1
  },
  {
    src:
      'https://i.pinimg.com/originals/be/a4/0a/bea40ae10038e3612bc2f66adedbc0bc.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://i.pinimg.com/originals/a3/0d/c4/a30dc458593faed2970c0be2a92c9b1e.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://www.abc.net.au/news/image/6283340-3x2-700x467.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://www.halenet.com.au/~jvbryant/resources/brybro.jpg',
    width: 1,
    height: 1
  },
  {
    src:
      'http://freepages.genealogy.rootsweb.ancestry.com/~jray/images/eliza.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://s3-ap-southeast-2.amazonaws.com/awm-media/collection/P03166.001/screen/4165479.JPG',
    width: 1,
    height: 1
  },
  {
    src: 'http://acms.sl.nsw.gov.au/_DAMx/image/19/143/a730005h.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://i.pinimg.com/736x/c6/51/13/c651131f63798ffc69a6f2dc9fb923e6--terra-nullius-antique-photos.jpg',
    width: 1,
    height: 1
  },
  {
    src:
      'https://2.bp.blogspot.com/-1W243I4iuhs/VZYoYHYFMEI/AAAAAAAAJBQ/z_OPDP6WZDI/s1600/Cecil%2BMason%2BEileen%2BSkinner%2B%2B%2526%2BFamily.png',
    width: 4,
    height: 3
  },
  {
    src: 'http://bonzle.com/h/s/7/b/nwy7r.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://ameerjanmohamed.com/wp-content/uploads/2013/02/1930.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://theyearofhalloween.files.wordpress.com/2013/01/1900s-family-portrait-with-spirit-hovering-in-background-via-museum-of-the-macabre.jpg?w=800',
    width: 1,
    height: 1
  },
  {
    src:
      'http://2.bp.blogspot.com/-C4ze1BiHNvc/URqRZIlDz9I/AAAAAAAAE00/b5t55uszCmg/s1600/Sutcliffe+Family+Pipe+Band+3.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'http://www.rugbyrelics.com/images/Misc/personal/fa/858-Snows-at-Photographers.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'https://pbs.twimg.com/media/CNf2z55WIAATBq5.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://www.jlb2011.co.uk/walespic/oldwales/lloyd04.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://www.rugbyrelics.com/images/Misc/personal/fa/850-JS-.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://cdn.newsapi.com.au/image/v1/5638df6d349b23b21141d48860fa99db',
    width: 4,
    height: 3
  },
  {
    src: 'http://www.armadale.org.uk/wanderer01.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://res.cloudinary.com/jpress/image/fetch/w_700,f_auto,ar_3:2,c_fill/http://www.carlukegazette.co.uk/webimage/1.1786625.1313165064!/image/3170625570.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'http://www.daviekerrwalk.com/wp-content/uploads/2016/03/Committee-of-Armadale-Public-House-Society-with-white-chrysanthimums-with-M-Mallace.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://www.reedfam.net/images/Marshall%20Family-Large.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://web.ncf.ca/es568/unknowngriffithfamily.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://i.pinimg.com/originals/70/61/f8/7061f8ef5446c21cb92582ee87590ccd.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'http://wvhistoryonview.org/imageviewer/wvulibraries:13894/digitalImage',
    width: 4,
    height: 3
  },
  {
    src:
      'https://4.bp.blogspot.com/-z2Jh32rJK50/TtoJVSH-_xI/AAAAAAAAB9Y/BPCqIP_os_4/s1600/hendersonreevesfamily.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'http://www.blackwoodpublishing.com/wordpress/wp-content/gallery/historical-photos/hosking-family-i-thnk-2.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://www.halmyre.abel.co.uk/Family/Images/blackwood.jpg',
    width: 4,
    height: 3
  },
  {
    src:
      'https://www.google.com.au/search?q=Australian+family+history&tbm=isch&tbs=rimg:Cf4dKWufr2JIIjh6TeEF1bG0KCUFDnjNY_1Mz6PSuNTTUtq4jjeeJxyvouQh4b1WMH50QalMVDJhaNKRUfC6jmeaCzSoSCXpN4QXVsbQoEZauOehWzYcJKhIJJQUOeM1j8zMRiwdwdzmKnIwqEgno9K41NNS2rhHkrlN6TASEUCoSCSON54nHK-i5ETbYsvFi1YukKhIJCHhvVYwfnRARb1bEmNDS9nsqEglqUxUMmFo0pBElv9ZyKiQ2mCoSCVR8LqOZ5oLNEYI1J-N7vHPX&tbo=u&sa=X&ved=0ahUKEwiAzPir37DXAhUBkZQKHUb_ASkQ9C8IHw&biw=1328&bih=802&dpr=2#imgrc=v_uEx4ioCdS7QM:',
    width: 4,
    height: 3
  }
];

export default GalleryMain;
