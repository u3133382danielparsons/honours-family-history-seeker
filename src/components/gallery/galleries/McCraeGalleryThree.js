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
      'https://s3.amazonaws.com/photos.geni.com/p13/a2/56/9f/d5/53444839a808018a/georgiana_countess_lennox_medium.jpg',
    title: 'Georgina Bathurst',
    subtitle: 'Countess Bathurst',
    geni:
      'https://www.geni.com/people/Georgina-Countess-Bathurst/6000000002188493290?through=6000000002333825058'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p13/a5/b8/4c/da/53444839a80e3761/henry_3rd_earl_bathurst_medium.jpg',
    title: 'Henry Bathurst',
    subtitle: '3rd Earl Bathurst, KG',
    geni:
      'https://www.geni.com/people/Henry-Bathurst-3rd-Earl-Bathurst-KG/6000000008470410089?through=6000000002188493290'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p5/1536/1452/534448367ab7e84f/charles_2nd_duke_of_richmond_medium.jpg',
    title: 'Charles Lennox',
    subtitle: '2nd Duke of Richmond',
    geni:
      'https://www.geni.com/people/Charles-Lennox-2nd-Duke-of-Richmond/6000000002333204809?through=6000000003455227419'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p9/5967/5341/53444837a0eca708/108422_001_medium.jpg',
    title: 'Anne Lennox',
    subtitle: 'Duchess of Richmond',
    geni:
      'https://www.geni.com/people/Anne-Lennox-Duchess-of-Richmond/6000000002529493277?through=6000000002333204809'
  }
];

const McCraeGalleryThree = () => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList}>
      <Subheader>Lennox and Bathurst Families</Subheader>
      {tilesData.map(tile => (
        <GridTile key={tile.img} title={tile.title} subtitle={tile.subtitle}>
          <a
            href={tile.geni}
            rel="noreferrer noopener"
            target="_blank"
            alt="Gordon and Lennox Families"
          >
            <img src={tile.img} alt="Lennox and Bathurst Families" />
          </a>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default McCraeGalleryThree;
