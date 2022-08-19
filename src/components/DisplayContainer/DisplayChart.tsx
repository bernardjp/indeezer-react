import { Container, createStyles } from '@mantine/core';
import * as PropTypes from 'prop-types';
import { ResourceDataList } from '../../types/CardDisplay.types';
import NavbarAnchor from '../Utils/NavbarAnchor';
import StyledCarousel from '../Carousel/StyledCarousel';

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
    maxWidth: '93%',
    paddingBottom: '4rem'
  },
  chartContainer: {
    overflow: 'hidden'
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0',
    maxWidth: '100%',
    paddingLeft: '0.5rem',
    paddingTop: '1rem',
    position: 'absolute'
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
  const { data, resourceType, CardComponent } = props;
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <Container className={classes.navbarContainer}>
        {/*
          CHANGE THE ANCHOR BELOW FOR A H2 OR A SPAN.
          NO NEED OF AN ANCHOR HERE WITH THE SIDEBAR ALLWAYS PRESENT
        */}
        <NavbarAnchor
          route={`/${resourceType}`}
          styleClasses={classes.title}
        >
          {`Top 10 ${resourceType}`}
        </NavbarAnchor>
      </Container>
      <StyledCarousel
        data={data}
        CardComponent={CardComponent}
      />
    </Container>
  );
}

export default DisplayChart;
