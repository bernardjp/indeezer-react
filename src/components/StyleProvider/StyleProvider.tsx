import React from 'react';
import { MantineProvider } from '@mantine/core';
import CustomTheme from './CustomMantineTheme';

type ChildrenType = React.ReactNode | null;

function StyleProvider(props: { children: ChildrenType | ChildrenType[] }) {
  const { children } = props;

  return (
    <MantineProvider theme={CustomTheme} withNormalizeCSS withGlobalStyles>
      { children }
    </MantineProvider>
  );
}

export default StyleProvider;
