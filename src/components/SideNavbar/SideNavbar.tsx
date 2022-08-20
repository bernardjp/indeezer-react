import { useLocation } from 'react-router-dom';
import {
  Container, Image, Anchor, ScrollArea, createStyles, useMantineTheme
} from '@mantine/core';
import { LinkData } from '../Header/HeaderNavbar';
import SideNavbarAnchor from './SideNavbarAnchor';
import ConversionBanner from './ConversionBanner';
import AppLogoDM from '../../assets/IN_Colored_Full_White.png';
import AppLogoLM from '../../assets/IN_Colored_Full_Black.png';

const navbarLinksData:LinkData[] = [
  {
    route: '',
    text: 'Top 10'
  },
  {
    route: 'artists',
    text: 'Artists'
  },
  {
    route: 'albums',
    text: 'Albums'
  },
  {
    route: 'tracks',
    text: 'Tracks'
  },
  {
    route: 'playlists',
    text: 'Playlists'
  },
  {
    route: 'podcasts',
    text: 'Podcasts'
  }
];

const useStyles = createStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: '0',
    minWidth: '220px',
    maxWidth: 'min-content',
    padding: '0 0 100px 0',
    position: 'fixed',
    zIndex: 3,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none'
    }
  },
  navbarContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    overflow: 'auto',
    padding: '0'
  },
  anchorContainer: {
    height: '55px',
    margin: '0',
    padding: '12px 0 0 24px',
    width: 'fit-content'
  },
  iconContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    maxWidth: '135px'
  }
}));

function SideNavbar() {
  const { pathname } = useLocation();
  const resourceTypeActive = pathname.split('/')[2] || '';
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container className={classes.mainContainer}>
      <Container className={classes.anchorContainer}>
        <Anchor href="https://www.deezer.com" target="_blank">
          <Image
            className={classes.iconContainer}
            src={theme.colorScheme === 'dark' ? AppLogoDM : AppLogoLM}
            alt="Deezer icon"
          />
        </Anchor>
      </Container>
      <ConversionBanner />
      <ScrollArea offsetScrollbars>
        <Container className={classes.navbarContainer}>
          {navbarLinksData.map(({ route, text }) => (
            <SideNavbarAnchor
              route={route}
              theme={theme.colorScheme}
              text={text}
              currentActiveType={resourceTypeActive}
              key={route}
            />
          ))}
        </Container>
      </ScrollArea>
    </Container>
  );
}

export default SideNavbar;
