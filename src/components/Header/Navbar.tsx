import { NavLink } from 'react-router-dom';
import { Anchor, Container, createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  navbar: {
    margin: 'auto 0'
  },
  anchor: {
    textDecoration: 'none',
    margin: '0 1rem',

    '&:active': {
      color: 'yellow'
    }
  }
}));

// function StyledNavLink() {
//   return <NavLink activeClassName="active" />;
// }

function StyledNavbar() {
  const { classes } = useStyles();

  return (
    <Container className={classes.navbar}>
      <Anchor className={classes.anchor} component={NavLink} to="/">HOME</Anchor>
      <Anchor className={classes.anchor} component={NavLink} to="about">ABOUT</Anchor>
    </Container>
  );
}

export default StyledNavbar;
