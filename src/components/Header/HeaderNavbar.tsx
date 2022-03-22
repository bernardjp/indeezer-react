import { useLocation } from 'react-router-dom';
import { Container, createStyles } from '@mantine/core';
import NavbarAnchor from '../Utils/NavbarAnchor';

const useStyles = createStyles(() => ({
  navbar: {
    margin: 'auto 0'
  },
  anchor: {
    textDecoration: 'none',
    margin: '0 1rem'
  },
  active: {
    color: 'yellow'
  }
}));

export interface LinkData {
  route: string,
  text: string
}

const navbarLinksData:LinkData[] = [
  {
    route: '/',
    text: 'HOME'
  },
  {
    route: '/explore',
    text: 'INDEEZER'
  },
  {
    route: '/about',
    text: 'ABOUT'
  }
];

function StyledNavbar() {
  // Checking for the root of the pathname allows us to know which Link is active no matter
  // how long the pathname is. eg: /explore/artist/1 --> root = '/explore' => INDEEZER link = active
  const { pathname } = useLocation();
  const pathnameRoot = `/${pathname.split('/')[1]}`;

  const { classes, cx } = useStyles();

  return (
    <Container className={classes.navbar}>
      {navbarLinksData.map(({ route, text }) => (
        <NavbarAnchor
          route={route}
          text={text}
          styleClasses={cx(classes.anchor, { [classes.active]: pathnameRoot === route })}
          key={route}
        />
      ))}
    </Container>
  );
}

export default StyledNavbar;
