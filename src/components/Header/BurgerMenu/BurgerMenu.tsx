import { useCallback } from 'react';
import {
  Anchor, Burger, Container, createStyles
} from '@mantine/core';
import { Link } from 'react-router-dom';
import useBurgerButton from './useBurgerMenu';
import { navbarLinksData } from '../HeaderNavbar';

const useStyles = createStyles((theme, isOpened: boolean) => ({
  menuContainer: {
    border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    padding: '54px 0', // 54px is the header height
    position: 'absolute',
    right: '-240px',
    top: '0',
    transform: isOpened ? 'translateX(-240px)' : '',
    transition: '0.45s ease-in-out',
    visibility: isOpened ? 'visible' : 'hidden',
    width: '240px',

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: 'none',
      visibility: 'hidden'
    }
  },
  buttonContainer: {
    display: 'none',
    marginRight: '0.8rem',

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: 'block'
    }
  }
}));

function BurgerMenu() {
  const {
    isOpened, setOpened, isHovered, hoverRef
  } = useBurgerButton();
  const { classes, theme } = useStyles(isOpened);
  const title = isOpened ? 'Close navigation' : 'Open navigation';

  // Analize moving the onClick callback on the useBurgerButton custom hook
  const onClickHandler = useCallback((): void => setOpened((opened) => !opened), []);

  return (
    <>
      {/*
        The Burger Button is making a case to be a separeted component
        maybe exposing the component itself and its internal state (open/close)
      */}
      <div ref={hoverRef} style={{ zIndex: 2 }}>
        <Burger
          color={isOpened || isHovered ? theme.colors.red[5] : 'white'}
          className={classes.buttonContainer}
          opened={isOpened}
          onClick={onClickHandler}
          title={title}
        />
      </div>
      <Container className={classes.menuContainer}>
        {navbarLinksData.map((link) => (
          <Anchor
            component={Link}
            to={link.route}
            key={link.text}
          >
            {link.text}
          </Anchor>
        ))}
      </Container>
    </>
  );
}

export default BurgerMenu;
