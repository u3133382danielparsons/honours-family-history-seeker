import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  }
};

const tilesData = [
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p11/cd/41/fa/3b/534448384b7bbcf0/George_Sanders_-_George_Gordon__5th_Duke_of_Gordon_medium.jpg',
    title: 'George Gordon',
    subtitle: '5th Duke of Gordon',
    geni:
      'https://www.geni.com/people/General-George-Gordon-5th-Duke-of-Gordon/6000000002188526287?through=6000000043956217248'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p13/7e/3a/34/6c/5344484028578b8c/a020135_246x550_medium.jpg',
    title: 'Georgiana McCrae',
    subtitle: 'Daughter',
    geni: 'https://www.geni.com/people/Georgiana-McCrae/6000000043956217248'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p13/c2/01/24/3c/5344483f338786ce/e_brodie_wife_of_5th_duke_of_gordon_medium.jpg',
    title: 'Elizabeth Gordon, ',
    subtitle: '5th Duchess of Gordon',
    geni:
      'https://www.geni.com/people/Elizabeth-Gordon-Duchess-of-Gordon/6000000008630274289?through=6000000002188526287'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p7/4690/1731/53444836e8405bfd/110307_001_medium.jpg',
    title: 'Alexander Gordon',
    subtitle: '4th Duke of Gordon',
    geni:
      'https://www.geni.com/people/Alexander-Gordon-4th-Duke-of-Gordon/6000000003714053753?through=6000000002188526287'
  }
];

const McCraeGallery = () => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList}>
      <Subheader>McCrae and Gordon Families</Subheader>
      {tilesData.map(tile => (
        <GridTile key={tile.img} title={tile.title} subtitle={tile.subtitle}>
          <a
            href={tile.geni}
            rel="noreferrer noopener"
            target="_blank"
            alt="McCrae and Gordon Families"
          >
            <img src={tile.img} alt="McCrae and Gordon Families" />
          </a>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default McCraeGallery;
