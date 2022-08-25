import * as PropTypes from 'prop-types';
import { Container, createStyles } from '@mantine/core';
import { APIJsonResponseType } from '../../types/CardDisplay.types';
import DisplayList from './DisplayList';
import getCardComponent from '../ResourceCards/getCardComponent';

ResourceListContainer.propTypes = {
  data: PropTypes.shape({
    resourceList: PropTypes.objectOf(PropTypes.array).isRequired,
    resourceType: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

const useStyles = createStyles(() => ({
  mainContainer: {
    marginTop: '54px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

function ResourceListContainer(props: { data: APIJsonResponseType }) {
  const { classes } = useStyles();
  const { data: { resourceList, resourceType: [resourceType] } } = props;

  return (
    <Container className={classes.mainContainer}>
      <h1>{`PAGINA DE ${resourceType.toUpperCase()}`}</h1>
      <DisplayList
        dataList={resourceList[resourceType]}
        CardComponent={getCardComponent(resourceType)}
      />
    </Container>
  );
}

export default ResourceListContainer;
