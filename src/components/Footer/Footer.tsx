import { Container, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footerContainer: {
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[0],
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    bottom: 0,
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
