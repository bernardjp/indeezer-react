import {
  // eslint-disable-next-line no-unused-vars
  Container, Grid, createStyles
} from '@mantine/core';
import * as PropTypes from 'prop-types';
import { ResourceDataList } from '../../types/CardDisplay.types';
import NavbarAnchor from '../Utils/NavbarAnchor';
import { useExpandChart, ExpandButton } from './ExpandChartButton';
import useElementHeight from './useElementHeight';

type DisplayChartPropType = {
  CardComponent: React.ElementType,
  resourceType: string,
  data: ResourceDataList
}

DisplayChart.propTypes = {
  CardComponent: PropTypes.elementType.isRequired,
  resourceType: PropTypes.string.isRequired,
  data: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.number
  }).isRequired
};

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: '90%',
    paddingBottom: '1.5rem'
  },
  chartContainer: {
    overflow: 'hidden'
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
    maxWidth: '100%',
    padding: '1.5rem 0'
  },
  title: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    transition: '0.15s',

    '&:hover': {
      textDecoration: 'none',
      color: theme.colors.red[5]
    }
  }
}));

function DisplayChart(props: DisplayChartPropType) {
  const { data: { data }, resourceType, CardComponent } = props;
  const { classes } = useStyles();
  const { ref, newHeight } = useElementHeight();
  const [isExpanded, onExpandCallback] = useExpandChart();

  return (
    <Container className={classes.container}>
      <Container className={classes.navbarContainer}>
        {/*
          CHANGE THE ANCHOR BELOW FOR A H2 OR A SPAN.
          NO NEED OF AN ANCHOR HERE WITH THE SIDEBAR ALLWAYS PRESENT
        */}
        <NavbarAnchor
          route={`/${resourceType}`}
          text={`Top 10 ${resourceType}`}
          styleClasses={classes.title}
        />
        {/*
          CREATE BUTTONS THAT INTERACT WITH THE NAVIGATION BUTTONS OF THE CAROUSEL:
          [NEW BTN (CLICK) ===> CAROUSEL BTN (CLICK)]
          HIDE THE BUTTONS OF THE CAROUSEL
        */}
        <ExpandButton callback={onExpandCallback} isExpanded={isExpanded} />
      </Container>
      {/*
        ADD STYLED CAROUSEL COMPONENT.
      */}
      <Grid
        justify="start"
        className={classes.chartContainer}
        sx={{ height: isExpanded ? '100%' : newHeight }}
      >
        {data.map((element, i) => (
          <Grid.Col xs={12} sm={6} md={4} lg={2.4} key={element.id}>
            <div ref={i === 0 ? ref : null}>
              <CardComponent data={element} />
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default DisplayChart;
