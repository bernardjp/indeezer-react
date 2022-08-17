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
          text={`Top 10 ${resourceType}`}
          styleClasses={classes.title}
        />
        {/*
          CREATE BUTTONS THAT INTERACT WITH THE NAVIGATION BUTTONS OF THE CAROUSEL:
          [NEW BTN (CLICK) ===> CAROUSEL BTN (CLICK)]
          HIDE THE BUTTONS OF THE CAROUSEL
        */}
        {/* <ExpandButton callback={onExpandCallback} isExpanded={isExpanded} /> */}
      </Container>
      {/*
        ADD STYLED CAROUSEL COMPONENT.
      */}
      <StyledCarousel
        data={data}
        CardComponent={CardComponent}
      />
      {/* <Grid
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
      </Grid> */}
    </Container>
  );
}

export default DisplayChart;
