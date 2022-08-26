import { Grid, createStyles } from '@mantine/core';
import { ResourceDataList } from '../../types/CardDisplay.types';

type DisplayListPropType = {
  dataList: ResourceDataList,
  CardComponent: React.ElementType
}

const useStyles = createStyles(() => ({
  container: {
    paddingBottom: '80px',
    width: '93%'
  },
  cardContainer: {
    padding: '0',
    marginBottom: '1rem'
  }
}));

function DisplayList(props: DisplayListPropType) {
  const { dataList, CardComponent } = props;
  const { classes } = useStyles();

  return (
    <Grid className={classes.container} gutter="xs">
      {dataList.map((item) => (
        <Grid.Col
          className={classes.cardContainer}
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2.4}
          key={item.id}
        >
          <CardComponent data={item} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default DisplayList;
