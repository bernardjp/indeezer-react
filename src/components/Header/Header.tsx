import { Container, createStyles } from '@mantine/core';
import Navbar from './HeaderNavbar';

const useStyles = createStyles((theme) => ({
  header: {
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    display: 'flex',
    height: '54px',
    justifyContent: 'end',
    left: 0,
    minWidth: '100%',
    position: 'fixed',
    zIndex: 2
  }
}));

function StyledHeader() {
  const { classes } = useStyles();

  return (
    <Container className={classes.header}>
      <Navbar />
    </Container>
  );
}

export default StyledHeader;
