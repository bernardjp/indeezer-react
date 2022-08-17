import { createStyles } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { ResourceDataList } from '../../types/CardDisplay.types';

type PropsType = {
  data: ResourceDataList,
  CardComponent: React.ElementType
}

// set breakpoints in the theme.
// eslint-disable-next-line no-unused-vars
const breakpoints = {
  xs: '240px',
  sm: '480px',
  md: '720px',
  lg: '960px',
  xl: '1080px'
};

const useStyles = createStyles(() => ({
  carouselContainer: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  controlsContainer: {
    // experimetn
    position: 'relative',
    justifyContent: 'end',
    marginBottom: '1rem',
    paddingTop: '1rem',
    gap: '0.2rem'
  },
  controlContainer: {
    backgroundColor: 'transparent',
    border: 'white',
    minWidth: '35px',
    minHeight: '35px',
    borderRadius: '35px',
    transition: '0.2ms',
    transform: 'scale(1.15)',

    '&:hover': {
      backgroundColor: '#80808033'
    },

    '&[data-inactive]': {
      opacity: 0.3,
      cursor: 'not-allowed'
    },

    svg: {
      color: 'white'
    }
  }
}));

function StyledCarousel(props: PropsType) {
  const { data: { data }, CardComponent } = props;
  const { classes } = useStyles();

  return (
    <Carousel
      align="start"
      // loop
      slideSize="20%"
      slidesToScroll={2}
      speed={7}
      classNames={{
        controls: classes.controlsContainer,
        control: classes.controlContainer,
        root: classes.carouselContainer
      }}
      // --> CHECK BREAKPOINTS !!
      breakpoints={[
        { maxWidth: 'xs', slideSize: '100%' },
        { maxWidth: 'sm', slideSize: '50%' },
        { maxWidth: 'md', slideSize: '33.33333%' },
        { maxWidth: 'xl', slideSize: '25%' }
      ]}
    >
      {data.map((element) => (
        <Carousel.Slide key={element.id}>
          <CardComponent data={element} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default StyledCarousel;
