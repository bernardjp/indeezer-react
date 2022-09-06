import { Container, createStyles, keyframes } from '@mantine/core';
import { IoIosArrowForward } from 'react-icons/io';
import NavbarAnchor from '../../Utils/NavbarAnchor';
import { LinkData } from '../HeaderNavbar';
import BurgerThemeButton from './BurgerThemeButton';
import usePathnameRoot from '../usePathnameRoot';

type BurgerNavbarPropType = {
  isOpened: boolean
}

const iconSlide = keyframes({
  'from, to': { transform: 'translate3d(0, 0, 0)' },
  '50%': { transform: 'translate3d(6px, 0, 0)' }
});

const useStyles = createStyles((theme, isOpened: boolean) => ({
  navbarContainer: {
    backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
    borderEndStartRadius: '10px',
    borderTopLeftRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    minWidth: '357px',
    padding: '0',
    position: 'absolute',
    right: '-357px',
    top: '54px',
    transform: isOpened ? 'translateX(-357px)' : '',
    transition: '0.35s ease-in-out',
    visibility: isOpened ? 'visible' : 'hidden',

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: 'none',
      visibility: 'hidden'
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: 'auto'
    },

    '@media (max-width: 360px)': {
      minWidth: '0',
      width: '100%'
    }
  },
  middleSection: {
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]}`,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]}`,
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    padding: '0.5rem',
    paddingRight: '0'
  },
  menuFooter: {
    margin: '0'
  },
  navbarButton: {
    alignItems: 'center',
    borderEndStartRadius: '4px',
    borderStartStartRadius: '4px',
    color: `${theme.colorScheme === 'dark' ? 'white' : 'black'}`,
    display: 'flex',
    fontSize: '0.95rem',
    justifyContent: 'space-between',
    padding: '0.65rem',
    paddingRight: '0.25rem',
    transition: '0.15s',

    '&:hover': {
      backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]}`,
      textDecoration: 'none',

      svg: {
        animation: `${iconSlide} 0.27s`
      }
    },

    '&:active': {
      backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[4]}`,
      textDecoration: 'none'
    }
  },
  icon: {
    height: '18px',
    transition: '0.05s ease-in-out',
    width: 'auto'
  },
  secondaryButton: {
    color: 'gray',
    fontSize: '0.95rem',
    padding: '0.4rem',
    paddingLeft: '1.4rem',
    paddingRight: '0.25rem',

    svg: {
      transform: 'scale(90%)'
    },

    '&:hover': {
      backgroundColor: 'inherit',
      color: theme.colors.red[5],

      svg: {
        color: theme.colors.red[5]
      }
    }
  },
  active: {
    backgroundColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]}`
  }
}));

const navbarLinksData:LinkData[] = [
  {
    route: '/',
    text: 'Go Home'
  },
  {
    route: '/explore',
    text: 'Explore IN/Deezer'
  },
  {
    route: '/explore/artists',
    text: 'Artists'
  },
  {
    route: '/explore/albums',
    text: 'Albums'
  },
  {
    route: '/explore/tracks',
    text: 'Tracks'
  },
  {
    route: '/explore/playlists',
    text: 'Playlists'
  },
  {
    route: '/explore/podcasts',
    text: 'Podcasts'
  },
  {
    route: '/about',
    text: 'About us'
  }
];

function BurgerMenuNavbar(props: BurgerNavbarPropType) {
  const { isOpened } = props;
  const pathnameRoot = usePathnameRoot();
  const { classes, cx } = useStyles(isOpened);

  return (
    <Container className={classes.navbarContainer}>
      <Container>
        Menu header with Links
      </Container>
      <Container className={classes.middleSection}>
        {navbarLinksData.map(({ text, route }) => (
          <NavbarAnchor
            styleClasses={
              cx(
                classes.navbarButton,
                { [classes.active]: pathnameRoot === route },
                { [classes.secondaryButton]: route.split('/').length > 2 }
              )
            }
            route={route}
            key={text}
          >
            {text}
            <IoIosArrowForward className={classes.icon} />
          </NavbarAnchor>
        ))}
      </Container>
      <Container className={classes.menuFooter}>
        <BurgerThemeButton />
      </Container>
    </Container>
  );
}

export default BurgerMenuNavbar;
