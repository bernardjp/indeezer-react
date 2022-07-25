import * as PropTypes from 'prop-types';
import { Container } from '@mantine/core';
import DisplayChart from './DisplayChart';
import AlbumCard, { AlbumCardPropType } from '../ResourceCards/AlbumCard';

type ResourcePropType<T> = {
  data: Array<T>,
  total: number
}

type ChartListContainerPropType = {
  data: {
    albums: ResourcePropType<AlbumCardPropType>,
    // artists: ResourcePropType,
    // playlists: ResourcePropType,
    // podcasts: ResourcePropType,
    // tracks: ResourcePropType,
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

export default function ChartListContainer(props: ChartListContainerPropType) {
  const { data } = props;
  const resources = Object.keys(data);

  return (
    <Container>
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

        return <div key={resource}>{`${resource} list`}</div>;
      })}
    </Container>
  );
}
