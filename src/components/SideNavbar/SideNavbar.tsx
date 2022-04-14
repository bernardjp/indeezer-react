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

const useStyles = createStyles(() => ({
  NavbarContainer: {
    backgroundColor: '#191922', // Change on custom Theme
    border: '1px solid #32323d',
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    minWidth: '220px',
    padding: '1.5rem 0'
  },
  anchor: {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    padding: '0 2rem',
    margin: '0.7rem 0',
    borderLeft: '3px solid #191922',
    transition: '0.1s',

    '&:hover': {
      borderLeft: '3px solid tomato',
      textDecoration: 'none',
      color: 'tomato'
    }
  },
  active: {
    borderLeft: '3px solid tomato',
    textDecoration: 'none',
    color: 'tomato'
  }
}));

function SideNavbar() {
  const { pathname } = useLocation();
  const resourceType = pathname.split('/')[2];

  const { classes, cx } = useStyles();

  return (
    <Container className={classes.NavbarContainer}>
      {navbarLinksData.map(({ route, text }) => (
        <NavbarAnchor
          route={route}
          text={text}
          styleClasses={cx(classes.anchor, { [classes.active]: resourceType === route })}
          key={route}
        />
      ))}
    </Container>
  );
}

export default SideNavbar;
