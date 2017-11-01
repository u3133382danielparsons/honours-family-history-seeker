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
      'https://s3.amazonaws.com/photos.geni.com/p8/6540/1345/534448377dab7f0b/Charles_Lennox__1st_Duke_of_Richmond_and_Lennox_by_Sir_Godfrey_Kneller__Bt_medium.jpg',
    title: 'Charles Lennox',
    subtitle: '1st Duke of Richmond',
    geni:
      'https://www.geni.com/people/Charles-Lennox-1st-Duke-of-Richmond/6000000002529482322?through=6000000002529493277'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p13/f5/da/84/de/53444839a82495e9/george_brudenell_medium.jpg',
    title: 'George Brudenell',
    subtitle: '3rd Earl of Cardigan',
    geni:
      'https://www.geni.com/people/George-Brudenell-3rd-Earl-of-Cardigan/6000000002188526531?through=6000000002024142002'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p13/2a/04/3b/d8/5344483bc1d24250/mab68xav_medium.jpg',
    title: 'Frances Brudenell',
    subtitle: 'Lady Frances Brudenell',
    geni:
      'https://www.geni.com/people/Lady-Frances-Brudenell/6000000011836955730?through=6000000002188526531'
  },
  {
    img:
      'https://s3.amazonaws.com/photos.geni.com/p13/e5/29/c2/40/5344483b8e566d7a/zat73cup_medium.jpg',
    title: 'George Brudenell',
    subtitle: '1st Duke of Montagu',
    geni:
      'https://www.geni.com/people/George-Brudenell-afterwards-Montagu-1st-Duke-of-Montagu/6000000002024142002?through=6000000002188526531'
  }
];

const McCraeGalleryFour = () => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList}>
      <Subheader>Lennox, Brudenell and Bruce Families</Subheader>
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
