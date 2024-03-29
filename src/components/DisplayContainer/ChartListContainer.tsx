import * as PropTypes from 'prop-types';
import { Container, createStyles } from '@mantine/core';
import { APIJsonResponseType } from '../../types/CardDisplay.types';
import DisplayChart from './DisplayChart';
import getCardComponent from '../ResourceCards/getCardComponent';

ChartListContainer.propTypes = {
  data: PropTypes.shape({
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number,
    }),
    artists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number,
    }),
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number,
    }),
    podcasts: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number,
    }),
    tracks: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      total: PropTypes.number,
    }),
  }).isRequired,
};

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: '54px',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: '0',
    paddingBottom: '100px',
    position: 'absolute',
    width: 'calc(100vw - 239px)', // 238px = 220px (side-navbar) + 18px (scroll-bar)

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '100%',
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      paddingBottom: '160px',
    },
  },
}));

export default function ChartListContainer(props: {
  data: APIJsonResponseType;
}) {
  const {
    data: { resourceList, resourceType },
  } = props;
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      {resourceType.map(
        (resource): React.ReactNode => (
          <DisplayChart
            data={resourceList[resource]}
            resourceType={resource}
            CardComponent={getCardComponent(resource)}
            key={resource}
          />
        )
      )}
    </Container>
  );
}
