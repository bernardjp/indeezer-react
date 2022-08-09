import { Container, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footerContainer: {
    alignItems: 'center',
    backgroundColor: theme.colors.dark[5],
    borderTop: `1px solid ${theme.colors.dark[4]}`,
    display: 'flex',
    height: '4rem',
    justifyContent: 'center',
    maxWidth: '100%',
    width: '100%'
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
