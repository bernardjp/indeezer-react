import { Container, createStyles } from '@mantine/core';
import Navbar from './HeaderNavbar';

const useStyles = createStyles((theme) => ({
  header: {
    alignItems: 'center',
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[5]}`,
    display: 'flex',
    height: '54px',
    justifyContent: 'end',
    minWidth: '100%'
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
