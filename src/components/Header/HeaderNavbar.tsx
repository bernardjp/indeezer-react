import { useLocation } from 'react-router-dom';
import { Container, createStyles } from '@mantine/core';
import NavbarAnchor from '../Utils/NavbarAnchor';

const useStyles = createStyles((theme) => ({
  navbar: {
    margin: 'auto 0',

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: 'none'
    }
  },
  anchor: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black', // check theming with dark/light mode
    fontWeight: 'bold',
    margin: '0 1rem',
    textDecoration: 'none',

    '&:hover': {
      color: theme.colors.red[5],
      textDecoration: 'none'
    }
  },
  active: {
    color: theme.colors.red[5]
  }
}));

export interface LinkData {
  route: string,
  text: string
}

export const navbarLinksData:LinkData[] = [
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
          styleClasses={cx(classes.anchor, { [classes.active]: pathnameRoot === route })}
          key={route}
        >
          {text}
        </NavbarAnchor>
      ))}
    </Container>
  );
}

export default StyledNavbar;
