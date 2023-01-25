import { Container, createStyles } from '@mantine/core';
import Navbar from './HeaderNavbar';
import SearchBar from './SearchBar';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const useStyles = createStyles((theme) => ({
  header: {
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    boxShadow: '0px 1px 20px -10px rgba(0,0,0,0.3)',
    display: 'flex',
    height: '54px',
    justifyContent: 'end',
    left: 0,
    minWidth: '100vw',
    padding: '0 18px 0 0', // 18px accounts for the scrokkbar width
    position: 'fixed',
    width: '100vw',
    zIndex: 2,

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      backdropFilter: 'blur(16px)',
      backgroundColor: '#121216d1'
    }
  }
}));

function StyledHeader(props: { withSearchBar: boolean }) {
  const { withSearchBar } = props;
  const { classes } = useStyles();

  return (
    <Container className={classes.header}>
      {withSearchBar && <SearchBar />}
      <Navbar />
      <BurgerMenu />
    </Container>
  );
}

export default StyledHeader;
