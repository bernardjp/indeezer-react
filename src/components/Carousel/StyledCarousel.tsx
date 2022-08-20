import { createStyles } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { ResourceDataList } from '../../types/CardDisplay.types';
import useCarouselQuery from '../DisplayContainer/useCarouselQuery';

type PropsType = {
  data: ResourceDataList,
  CardComponent: React.ElementType
}

const useStyles = createStyles((theme) => ({
  carouselContainer: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  controlsContainer: {
    // experiment
    position: 'relative',
    justifyContent: 'end',
    marginBottom: '1rem',
    paddingTop: '1rem',
    gap: '0.3rem',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      marginBottom: '0.3rem'
    }
  },
  controlContainer: {
    backgroundColor: 'transparent',
    border: 'white',
    marginLeft: '0.5rem',
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
  const { ref, slidesToScroll, slidesSpeed } = useCarouselQuery();

  return (
    <div ref={ref}>
      <Carousel
        align="start"
        slideSize="20%"
        slidesToScroll={slidesToScroll}
        speed={slidesSpeed}
        classNames={{
          controls: classes.controlsContainer,
          control: classes.controlContainer,
          root: classes.carouselContainer
        }}
        // ---> TO-DO: CHECK THEME BREAKPOINST FOR CONSISTENCY!!
        breakpoints={[
          { maxWidth: 'xs', slideSize: '100%' },
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'lg', slideSize: '33.33333%' },
          { maxWidth: 'xl', slideSize: '25%' }
        ]}
      >
        {data.map((element) => (
          <Carousel.Slide key={element.id}>
            <CardComponent data={element} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default StyledCarousel;
