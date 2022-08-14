import { LoadingOverlay } from '@mantine/core';
// import { Loader } from '@mantine/core';

function StyledLoader(props: { isLoading: boolean }) {
  const { isLoading } = props;

  return (
    <LoadingOverlay
      color="red"
      loaderProps={{ size: 'lg', color: '#fa5252', variant: 'bars' }}
      overlayOpacity={0.5}
      transitionDuration={300}
      visible={isLoading}
    />
  // <Loader size="lg" color="#fa5252" variant="bars" />
  );
}

export default StyledLoader;
