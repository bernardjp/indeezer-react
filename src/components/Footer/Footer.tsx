import { Container, Text, createStyles } from '@mantine/core';

const useStyles = createStyles({
  footerContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '4rem',
    justifyContent: 'center',
    maxWidth: '100%'
  },
  text: {

  }
});

function Footer() {
  const { classes } = useStyles();

  return (
    <Container className={classes.footerContainer}>
      <Text className={classes.text}>FOOTER</Text>
    </Container>
  );
}

export default Footer;
