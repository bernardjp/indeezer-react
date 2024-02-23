import * as PropTypes from 'prop-types';
import { Container, createStyles } from '@mantine/core';
import { APIJsonResponseType } from '../../types/CardDisplay.types';
import DisplayList from './DisplayList';
import getCardComponent from '../ResourceCards/getCardComponent';

ResourceListContainer.propTypes = {
  data: PropTypes.shape({
    resourceList: PropTypes.objectOf(PropTypes.array).isRequired,
    resourceType: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

const useStyles = createStyles(() => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '54px',
    maxWidth: '100%',
    width: ['-moz-available', '-webkit-fill-available'],
  },
}));

function ResourceListContainer(props: { data: APIJsonResponseType }) {
  const { classes } = useStyles();
  const {
    data: {
      resourceList,
      resourceType: [resourceType],
    },
  } = props;

  return (
    <Container className={classes.mainContainer}>
      <h1>{`IN/DEEZER Top 10 ${resourceType.toUpperCase()}`}</h1>
      <DisplayList
        dataList={resourceList[resourceType]}
        CardComponent={getCardComponent(resourceType)}
      />
    </Container>
  );
}

export default ResourceListContainer;
