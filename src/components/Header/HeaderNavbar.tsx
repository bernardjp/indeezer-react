import { Container, createStyles } from '@mantine/core';
import NavbarAnchor from '../Utils/NavbarAnchor';
import DarkThemeButton from './HeaderDarkThemeButton';
import usePathnameRoot from './usePathnameRoot';

const useStyles = createStyles((theme) => ({
  navbar: {
    display: 'flex',
    margin: 'auto 0',

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: 'none',
    },
  },
  anchor: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black', // check theming with dark/light mode
    fontSize: '0.95rem',
    fontWeight: 'bold',
    margin: '0 1rem',
    paddingTop: '4px',
    textDecoration: 'none',

    '&:hover': {
      color: theme.colors.red[5],
      textDecoration: 'none',
    },
  },
  active: {
    color: theme.colors.red[5],
  },
}));

export interface LinkData {
  route: string;
  text: string;
}

export const navbarLinksData: LinkData[] = [
  {
    route: '/indeezer-react/',
    text: 'IN/DEEZER',
  },
  {
    route: 'about',
    text: 'ABOUT',
  },
];

function StyledNavbar() {
  const activePath = usePathnameRoot() !== 'about' && '/indeezer-react/';
  const { classes, cx } = useStyles();

  return (
    <Container className={classes.navbar}>
      {navbarLinksData.map(({ route, text }) => (
        <NavbarAnchor
          route={route}
          styleClasses={cx(classes.anchor, {
            [classes.active]: activePath === route,
          })}
          key={route}
        >
          {text}
        </NavbarAnchor>
      ))}
      <DarkThemeButton />
    </Container>
  );
}

export default StyledNavbar;
