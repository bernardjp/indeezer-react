import { useLocation } from 'react-router-dom';
import { Container, createStyles } from '@mantine/core';
import { LinkData } from '../Header/HeaderNavbar';
import NavbarAnchor from '../Utils/NavbarAnchor';

const navbarLinksData:LinkData[] = [
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
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[5]}`,
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    minWidth: '220px',
    padding: '0'
  },
  fixedContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    position: 'fixed'
  },
  navbarContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2.5rem 0'
  },
  anchor: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    padding: '0 2rem',
    margin: '0.7rem 0',
    borderLeft: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.dark[0]}`,
    transition: '0.075s',

    '&:hover': {
      borderLeft: `3px solid ${theme.colors.red[5]}`,
      textDecoration: 'none',
      color: theme.colors.red[5]
    }
  },
  active: {
    borderLeft: `3px solid ${theme.colors.red[5]}`,
    textDecoration: 'none',
    color: theme.colors.red[5]
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem 0'
  }
}));

function SideNavbar() {
  const { pathname } = useLocation();
  const resourceType = pathname.split('/')[2];
  const { classes, cx } = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Container className={classes.fixedContentContainer}>
        <div className={classes.iconContainer}>Sidebar ICON</div>
        <Container className={classes.navbarContainer}>
          {navbarLinksData.map(({ route, text }) => (
            <NavbarAnchor
              route={route}
              text={text}
              styleClasses={cx(classes.anchor, { [classes.active]: resourceType === route })}
              key={route}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
}

export default SideNavbar;
