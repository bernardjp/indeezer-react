import {
  Container, Grid, createStyles
} from '@mantine/core';
import * as PropTypes from 'prop-types';
import { AlbumCardPropType } from '../ResourceCards/AlbumCard';
import NavbarAnchor from '../Utils/NavbarAnchor';
import { useExpandChart, ExpandButton } from './ExpandChartButton';
import useElementHeight from './useElementHeight';

type ResourcePropType<T> = {
  data: Array<T>,
  total: number
}

type DisplayChartPropType = {
  CardComponent:React.ElementType,
  resourceType: string,
  data: ResourcePropType<AlbumCardPropType>
}

DisplayChart.propTypes = {
  CardComponent: PropTypes.elementType.isRequired,
  resourceType: PropTypes.string.isRequired,
  data: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.number
  }).isRequired
};

const useStyles = createStyles({
  container: {
    maxWidth: '90%'
  },
  chartContainer: {
    overflow: 'hidden'
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
    maxWidth: '100%',
    padding: '1.8rem 0'
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
  const { data: { data }, resourceType, CardComponent } = props;
  const { classes } = useStyles();
  const { ref, newHeight } = useElementHeight();
  const [isExpanded, onExpandCallback] = useExpandChart();

  return (
    <Container className={classes.container}>
      <Container className={classes.navbarContainer}>
        <NavbarAnchor
          route={`/${resourceType}`}
          text={`Top 10 ${resourceType}`}
          styleClasses={classes.title}
        />
        <ExpandButton callback={onExpandCallback} isExpanded={isExpanded} />
      </Container>
      <Grid
        justify="start"
        className={classes.chartContainer}
        sx={{ height: isExpanded ? '100%' : newHeight }}
      >
        {data.map((album, i) => (
          <Grid.Col xs={12} sm={6} md={4} lg={2.4} key={album.id}>
            <div ref={i === 0 ? ref : null}>
              <CardComponent data={album} />
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default DisplayChart;
