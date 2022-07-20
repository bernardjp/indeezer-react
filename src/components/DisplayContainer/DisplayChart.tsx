// import { useRef } from 'react';
import {
  Button, Container, Grid, createStyles
} from '@mantine/core';
import * as PropTypes from 'prop-types';
import AlbumCard, { AlbumCardPropType } from './AlbumCard';
import NavbarAnchor from '../Utils/NavbarAnchor';
import { useExpandChart, ExpandButton } from './ExpandChartButton';
import useElementHeight from './useElementHeight';

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
    overflow: 'hidden'
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
  const { ref, newHeight } = useElementHeight();
  const [isExpanded, onExpandCallback] = useExpandChart();

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
        <ExpandButton callback={onExpandCallback} isExpanded={isExpanded} />
      </Container>
      <Grid
        justify="start"
        className={classes.chartContainer}
        sx={{ height: isExpanded ? '100%' : newHeight }}
      >
        {/*
          - default height === to the hegith of the showcased elements.
          - every element outside of the first row is hidden by default.
          - toggle to "show more" or "show less" --> switch the height from 1 element
            to auto (audjust to show all elements/rows)
        */}
        {data.albums.data.map((album, i) => (
          <Grid.Col xs={12} sm={6} md={4} lg={2.4} key={album.id}>
            {i === 0
              ? (
                <div ref={ref}>
                  <AlbumCard data={album} />
                </div>
              )
              : (
                <div>
                  <AlbumCard data={album} />
                </div>
              )}
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default DisplayChart;
