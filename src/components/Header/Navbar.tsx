import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Anchor, Container, createStyles } from '@mantine/core';

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

interface LinkData {
  route: string,
  text: string
}

const Links:LinkData[] = [
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
  const pathnameRoot = pathname.split('/')[1];
  const [currentPage, setPage] = useState(`/${pathnameRoot}`);

  const { classes, cx } = useStyles();

  return (
    <Container className={classes.navbar}>
      {Links.map(({ route, text }) => (
        <Anchor
          className={cx(classes.anchor, { [classes.active]: currentPage === route })}
          onClick={() => setPage(route)}
          component={Link}
          to={route}
          key={route}
        >
          {text}
        </Anchor>
      ))}
    </Container>
  );
}

export default StyledNavbar;
