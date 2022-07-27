import { Container, createStyles } from '@mantine/core';
import Navbar from './HeaderNavbar';

const useStyles = createStyles(() => ({
  header: {
    alignItems: 'center',
    borderBottom: '1px solid gray',
    display: 'flex',
    height: '4rem',
    justifyContent: 'space-between',
    minWidth: '100%'
  }
}));

function StyledHeader() {
  const { classes } = useStyles();

  return (
    <Container className={classes.header}>
      HEADER ICON
      <Navbar />
    </Container>
  );
}

export default StyledHeader;
