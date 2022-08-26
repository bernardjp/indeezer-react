import { Container, createStyles, keyframes } from '@mantine/core';
import * as PropTypes from 'prop-types';
import { IoIosArrowForward } from 'react-icons/io';
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

const iconSlide = keyframes({
  'from, to': { transform: 'translate3d(0, 0, 0)' },
  '50%': { transform: 'translate3d(5px, 0, 0)' }
});

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: '93%',
    paddingBottom: '3rem',

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      padding: '1rem 0'
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '0.5rem 0'
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      padding: '0.5rem 1rem'
    }
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
    paddingTop: '1.2rem',
    position: 'absolute'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    transition: '0.15s',
    zIndex: 1,

    '&:hover': {
      textDecoration: 'none',
      color: theme.colors.red[5],

      svg: {
        animation: `${iconSlide} 0.3s`
      }
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: '1rem'
    }
  },
  icon: {
    height: '20px',
    width: 'auto',
    marginLeft: '0.1rem',
    marginTop: '0.25rem',
    transition: '0.05s ease-in-out',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      display: 'none'
    }
  }
}));

function DisplayChart(props: DisplayChartPropType) {
  const { data, resourceType, CardComponent } = props;
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <Container className={classes.navbarContainer}>
        <NavbarAnchor
          route={`${resourceType}`}
          styleClasses={classes.title}
        >
          {`Top 10 ${resourceType}`}
          <IoIosArrowForward className={classes.icon} />
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
