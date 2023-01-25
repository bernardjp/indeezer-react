import { Container, createStyles } from '@mantine/core';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { AudioPlayerContextProvider } from '../Context/AudioPlayerContext';

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
    zIndex: 4,

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      height: 'fit-content',
      minHeight: '146px',
      backdropFilter: 'blur(16px)',
      backgroundColor: '#23232dde'
    }
  }
}));

function Footer() {
  const { classes } = useStyles();

  return (
    <AudioPlayerContextProvider>
      <Container className={classes.footerContainer}>
        <AudioPlayer />
      </Container>
    </AudioPlayerContextProvider>
  );
}

export default Footer;
