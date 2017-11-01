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
      'https://s3.amazonaws.com/photos.geni.com/p9/5967/5341/534448379fd37af5/019707_001_medium.jpg',
    title: 'Jane Gordon',
    subtitle: '4th Duchess of Gordon',
    geni:
      'https://www.geni.com/people/Jane-Gordon-Duchess-of-Gordon/6000000002188526277?through=6000000003714053753'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p10/5967/5341/534448381aa88c4d/011783_001_medium.jpg',
    title: 'Charlotte Lennox, ',
    subtitle: '5th Duchess of Richmond',
    geni:
      'https://www.geni.com/people/Charlotte-Lennox-Duchess-of-Richmond/6000000003484265483?through=6000000002188526287'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p10/5967/5341/534448381aad4ebf/Charles_Gordon-Lennox__5th_Duke_of_Richmond_and_Lennox_1824_medium.jpg',
    title: 'Charles Gordon-Lennox, ',
    subtitle: '5th Duke of Richmond',
    geni:
      'https://www.geni.com/people/Charles-Gordon-Lennox-5th-Duke-of-Richmond/6000000003455094926?through=6000000003484265483'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p10/5967/5341/534448381aa89003/102358_004_medium.jpg',
    title: 'Charles Lennox',
    subtitle: '4th Duke of Richmond',
    geni:
      'https://www.geni.com/people/Charles-Lennox-4th-Duke-of-Richmond-4th-Duke-of-Aubigny/6000000002333825058?through=6000000003455094926'
  }
];

const McCraeGalleryTwo = () => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList}>
      <Subheader>Gordon and Lennox Families</Subheader>
      {tilesData.map(tile => (
        <GridTile key={tile.img} title={tile.title} subtitle={tile.subtitle}>
          <a
            href={tile.geni}
            rel="noreferrer noopener"
            target="_blank"
            alt="Gordon and Lennox Families"
          >
            <img src={tile.img} alt="Gordon and Lennox Families" />
          </a>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default McCraeGalleryTwo;
