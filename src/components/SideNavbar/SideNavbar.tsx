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
    display: 'flex',
    flexDirection: 'column',
    margin: '0'
  },
  anchor: {
    color: 'red'
  },
  active: {
    color: 'yellow'
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
