import * as PropTypes from 'prop-types';
import { Container, createStyles } from '@mantine/core';
import {
  AlbumList, ArtistList, TrackList, PlaylistList, PodcastList
} from '../../types/CardDisplay.types';
import DisplayChart from './DisplayChart';
import AlbumCard from '../ResourceCards/AlbumCard';
import ArtistCard from '../ResourceCards/ArtistCard';
import TrackCard from '../ResourceCards/TrackCard';
import PlaylistCard from '../ResourceCards/PlaylistCard';
import PodcastCard from '../ResourceCards/PodcastCard';

type ChartListContainerPropType = {
  data: {
    albums: AlbumList,
    artists: ArtistList,
    tracks: TrackList,
    playlists: PlaylistList,
    podcasts: PodcastList,
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
    marginTop: '54px',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: '0',
    paddingBottom: '100px',
    position: 'absolute',
    width: ['-moz-available', '-webkit-fill-available']
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

        if (resource === 'podcasts') {
          return (
            <DisplayChart
              data={data[resource]}
              resourceType={resource}
              CardComponent={PodcastCard}
              key={resource}
            />
          );
        }

        return <div key={resource}>{`${resource} list`}</div>;
      })}
    </Container>
  );
}
