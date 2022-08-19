import { useLocation } from 'react-router-dom';
import {
  Container, Image, Anchor, createStyles, useMantineTheme
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
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[5]}`,
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    minWidth: '220px',
    padding: '0',
    zIndex: 3
  },
  fixedContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'min-content',
    minWidth: 'inherit',
    padding: '0',
    position: 'fixed'
  },
  navbarContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: '0'
  },
  anchorContainer: {
    height: '55px',
    margin: '0',
    padding: '12px 0 0 24px'
  },
  iconContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    maxWidth: '150px'
  }
}));

function SideNavbar() {
  const { pathname } = useLocation();
  const resourceTypeActive = pathname.split('/')[2] || '';
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container className={classes.mainContainer}>
      <Container className={classes.fixedContentContainer}>
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
      </Container>
    </Container>
  );
}

export default SideNavbar;
