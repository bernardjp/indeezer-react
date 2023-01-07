import { Container, createStyles } from '@mantine/core';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

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
    maxWidth: '100vw',
    padding: '0 40px 0 36px',
    position: 'fixed',
    width: '100vw',
    zIndex: 4
  }
}));

function Footer() {
  const { classes } = useStyles();

  return (
    <Container className={classes.footerContainer}>
      <AudioPlayer />
    </Container>
  );
}

export default Footer;
