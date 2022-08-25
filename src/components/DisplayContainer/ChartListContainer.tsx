import * as PropTypes from 'prop-types';
import { Container, createStyles } from '@mantine/core';
import { APIJsonResponseType } from '../../types/CardDisplay.types';
import DisplayChart from './DisplayChart';
import getCardComponent from '../ResourceCards/getCardComponent';

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

export default function ChartListContainer(props: { data: APIJsonResponseType }) {
  const { data: { resourceList, resourceType } } = props;
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      {resourceType.map((resource): React.ReactNode => (
        <DisplayChart
          data={resourceList[resource]}
          resourceType={resource}
          CardComponent={getCardComponent(resource)}
          key={resource}
        />
      ))}
    </Container>
  );
}
