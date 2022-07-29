import * as PropTypes from 'prop-types';
import { Container, createStyles } from '@mantine/core';
import DisplayChart, {
  AlbumList, ArtistList, TrackList, PlaylistList
} from './DisplayChart';
import AlbumCard from '../ResourceCards/AlbumCard';
import ArtistCard from '../ResourceCards/ArtistCard';
import TrackCard from '../ResourceCards/TrackCard';
import PlaylistCard from '../ResourceCards/PlaylistCard';

type ChartListContainerPropType = {
  data: {
    albums: AlbumList,
    artists: ArtistList,
    tracks: TrackList,
    playlists: PlaylistList,
    // podcasts: ResourcePropType,
  }
}

ChartListContainer.propTypes = {
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
    maxWidth: '100%'
  }
});

export default function ChartListContainer(props: ChartListContainerPropType) {
  const { data } = props;
  const resources = Object.keys(data);
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      {resources.map((resource) => {
        if (resource === 'albums') {
          return (
            <DisplayChart
              data={data[resource]}
              resourceType={resource}
              CardComponent={AlbumCard}
              key={resource}
            />
          );
        }

        if (resource === 'artists') {
          return (
            <DisplayChart
              data={data[resource]}
              resourceType={resource}
              CardComponent={ArtistCard}
              key={resource}
            />
          );
        }

        if (resource === 'tracks') {
          return (
            <DisplayChart
              data={data[resource]}
              resourceType={resource}
              CardComponent={TrackCard}
              key={resource}
            />
          );
        }

        if (resource === 'playlists') {
          return (
            <DisplayChart
              data={data[resource]}
              resourceType={resource}
              CardComponent={PlaylistCard}
              key={resource}
            />
          );
        }

        return <div key={resource}>{`${resource} list`}</div>;
      })}
    </Container>
  );
}
