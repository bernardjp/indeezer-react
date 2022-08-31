import { Container, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footerContainer: {
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]}`,
    bottom: 0,
    boxShadow: theme.colorScheme === 'dark' ? '0px -1px 20px -8px rgba(0,0,0,0.5)' : '0px 0px 30px -8px rgba(0,0,0,0.1)',
    display: 'flex',
    height: '80px',
    justifyContent: 'center',
    maxWidth: '100%',
    position: 'fixed',
    width: '100%',
    zIndex: 4
  },
  text: {

  }
}));

function Footer() {
  const { classes } = useStyles();

  return (
    <Container className={classes.footerContainer}>
      <Text className={classes.text}>FOOTER</Text>
    </Container>
  );
}

export default Footer;
