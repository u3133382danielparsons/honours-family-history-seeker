import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

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
      'https://s3.amazonaws.com/photos.geni.com/p13/e7/4c/ed/91/53444839a824864f/elizabeth_bruce_medium.jpg',
    title: 'Elizabeth Brudenell',
    subtitle: 'Elizabeth Brudenell (Bruce)',
    geni:
      'https://www.geni.com/people/Elizabeth-Brudenell/6000000002188526561?through=6000000002188536588'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p12/54/cf/b9/7e/534448387bc2981f/2ndEarlOfAilesbury_medium.jpg',
    title: 'Thomas Bruce',
    subtitle: '3rd Earl of Elgin',
    geni:
      'https://www.geni.com/people/Thomas-Bruce-3rd-Earl-of-Elgin/6000000002188536588?through=6000000002188526561'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p13/23/4e/e2/a4/534448399e4f965b/024857_001_medium.jpg',
    title: 'Charles Bruce',
    subtitle: '4th Earl of Elgin',
    geni:
      'https://www.geni.com/people/Charles-Bruce-4th-Earl-of-Elgin/6000000002188536999?through=6000000002188536588'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p12/c3/c3/ca/ae/534448387bc3ccb1/220px-Lely_-_Diana__Countess_Of_Ailesbury_medium.jpg',
    title: 'Lady Diana Bruce',
    subtitle: 'Countess of Elgin & Ailesbury Grey',
    geni:
      'https://www.geni.com/people/Lady-Diana-Bruce-Countess-of-Elgin-Ailesbury-Grey/6000000011335908523?through=6000000002188536588'
  }
];

const McCraeGalleryFour = () => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList}>
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

export default McCraeGalleryFour;
