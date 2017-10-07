import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    img: '',
    title: 'Me',
    author: 'jill111',
    featured: true
  }
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GalleryList = () => (
  <div style={styles.root}>
    <GridList cols={2} cellHeight={200} padding={1} style={styles.gridList}>
      {tilesData.map(tile => (
        <GridTile
          title="me title"
          actionIcon={
            <IconButton>
              <StarBorder color="white" />
            </IconButton>
          }
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} alt="me alt" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GalleryList;
