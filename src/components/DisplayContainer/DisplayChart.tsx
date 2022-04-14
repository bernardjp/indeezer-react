import {
  Container, Grid, createStyles
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
  chartContainer: {
    maxWidth: '100%'
  },
  navbarContainer: {
    margin: '0',
    padding: '1.8rem 0',
    maxWidth: '100%'
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

  return (
    <Container className={classes.chartContainer}>
      <Container className={classes.navbarContainer}>
        <NavbarAnchor
          route="/albums"
          text="Top 10 Albums"
          styleClasses={classes.title}
        />
      </Container>
      <Grid gutter="xl">
        {data.albums.data.map((album) => (
          <Grid.Col lg={3} key={album.id}>
            <AlbumCard data={album} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default DisplayChart;
