import { useState, useEffect } from 'react';
import { useElementSize } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

const useCarouselQuery = () => {
  const { ref, width } = useElementSize();
  const theme = useMantineTheme();
  const [slidesToScroll, setSlidesToScroll] = useState(5);
  const [slidesSpeed, setSlidesSpeed] = useState(4);

  useEffect(() => {
    // The '70' value is HARDCODED and has been defined by trial and error
    // and only works with the current implementation of the carousel in this project
    // TO-DO IDEA: set the slides size too. Have centralized carousel state manager.
    //   |-> maybe implement a useReducer instead of individual state managers (useStates).
    if (width > theme.breakpoints.lg - 70) {
      setSlidesToScroll(5);
      setSlidesSpeed(4);
    }

    if (width <= theme.breakpoints.lg - 70) {
      setSlidesToScroll(4);
      setSlidesSpeed(5);
    }

    if (width <= theme.breakpoints.md - 70) {
      setSlidesToScroll(3);
      setSlidesSpeed(6);
    }

    if (width <= theme.breakpoints.sm - 70) {
      setSlidesToScroll(2);
      setSlidesSpeed(7);
    }

    if (width <= theme.breakpoints.xs - 70) {
      setSlidesToScroll(1);
      setSlidesSpeed(8);
    }
  }, [width]);

  return { ref, slidesToScroll, slidesSpeed };
};

export default useCarouselQuery;
