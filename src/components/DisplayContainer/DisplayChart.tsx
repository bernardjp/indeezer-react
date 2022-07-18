// import { useRef } from 'react';
import {
  Button, Container, Grid, createStyles
} from '@mantine/core';
import * as PropTypes from 'prop-types';
import AlbumCard, { AlbumCardPropType } from './AlbumCard';
import NavbarAnchor from '../Utils/NavbarAnchor';

type ResourcePropType<T> = {
  data: Array<T>,
  total: number
}

type DisplayChartPropType = {
  data: {
    albums: ResourcePropType<AlbumCardPropType>,
    // artists: ResourcePropType,
    // playlists: ResourcePropType,
    // podcasts: ResourcePropType,
    // tracks: ResourcePropType,
  }
}

DisplayChart.propTypes = {
  data: PropTypes.shape({
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number
    }),
    artists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number
    }),
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number
    }),
    podcasts: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number
    }),
    tracks: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number
    })
  }).isRequired
};

const useStyles = createStyles({
  container: {
    maxWidth: '90%'
  },
  chartContainer: {
    // flexWrap: 'nowrap'
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
    maxWidth: '100%',
    padding: '1.8rem 0'
  },
  title: {
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    transition: '0.15s',

    '&:hover': {
      textDecoration: 'none',
      color: 'tomato'
    }
  }
});

function DisplayChart(props: DisplayChartPropType) {
  const { data } = props;
  const { classes } = useStyles();

  // const ref = useRef();

  // Extract button to another component
  const onExpand = () => {
    console.log('expand elements');
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.navbarContainer}>
        <NavbarAnchor
          route="/albums"
          text="Top 10 Albums"
          styleClasses={classes.title}
        />
        {/*
          - button to expand the visible options with an icon (arrow up and down)
            that toggle and switch depending of the state.
        */}
        <Button variant="subtle" onClick={onExpand}>
          Show More...
        </Button>
      </Container>
      <Grid justify="start" className={classes.chartContainer}>
        {/*
          - default height === to the hegith of the showcased elements.
          - every element outside of the first row is hidden by default.
          - toggle to "show more" or "show less" --> switch the height from 1 element
            to auto (audjust to show all elements/rows)
        */}
        {data.albums.data.map((album) => (
          <Grid.Col xs={12} sm={6} md={4} lg={2.4} key={album.id}>
            <AlbumCard data={album} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default DisplayChart;
