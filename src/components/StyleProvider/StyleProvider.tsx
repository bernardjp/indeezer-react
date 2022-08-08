import React from 'react';
import { MantineProvider } from '@mantine/core';

type ChildrenType = React.ReactNode | null;

function StyleProvider(props: { children: ChildrenType | ChildrenType[] }) {
  const { children } = props;

  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withNormalizeCSS withGlobalStyles>
      { children }
    </MantineProvider>
  );
}

export default StyleProvider;
