import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import CustomModalProvider from '../Modal/CustomModalsProvider';
import CustomTheme from './CustomMantineTheme';

type ChildrenType = React.ReactNode | null;

function StyleProvider(props: { children: ChildrenType | ChildrenType[] }) {
  const { children } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme, ...CustomTheme }} withNormalizeCSS withGlobalStyles>
        <CustomModalProvider>
          { children }
        </CustomModalProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default StyleProvider;
