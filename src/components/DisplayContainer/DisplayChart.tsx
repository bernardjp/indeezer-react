import { Container, Grid, Text } from '@mantine/core';
import * as PropTypes from 'prop-types';
import AlbumCard, { AlbumCardPropType } from './AlbumCard';

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

function DisplayChart(props: DisplayChartPropType) {
  const { data } = props;

  return (
    <Container>
      <Text>Top 10 Albums</Text>
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
