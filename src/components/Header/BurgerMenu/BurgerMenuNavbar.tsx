import { Container, createStyles } from '@mantine/core';
import NavbarAnchor from '../../Utils/NavbarAnchor';
import { navbarLinksData } from '../HeaderNavbar';

type BurgerNavbarPropType = {
  isOpened: boolean
}

const useStyles = createStyles((theme, isOpened: boolean) => ({
  navbarContainer: {
    border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    padding: '54px 0', // 54px is the header height
    position: 'absolute',
    right: '-240px',
    top: '0',
    transform: isOpened ? 'translateX(-240px)' : '',
    transition: '0.35s ease-in-out',
    visibility: isOpened ? 'visible' : 'hidden',
    width: '240px',

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: 'none',
      visibility: 'hidden'
    }
  },
  navbarButton: {
    border: '1px solid green'
  }
}));

function BurgerMenuNavbar(props: BurgerNavbarPropType) {
  const { isOpened } = props;
  const { classes } = useStyles(isOpened);

  return (
    <Container className={classes.navbarContainer}>
      {navbarLinksData.map(({ text, route }) => (
        <NavbarAnchor
          styleClasses={classes.navbarButton}
          route={route}
          key={text}
        >
          {text}
        </NavbarAnchor>
      ))}
    </Container>
  );
}

export default BurgerMenuNavbar;
