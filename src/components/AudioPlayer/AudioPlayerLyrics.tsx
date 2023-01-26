import { useState } from 'react';
import {
  Drawer, Image, Text, createStyles
} from '@mantine/core';
import { AudioPlayerButton } from './AudioPlayerButton';

const useStyles = createStyles((theme) => ({
  root: {
    width: '100vw'
  },
  drawer: {
    background: `linear-gradient(233.13deg, rgb(246, 105, 60) 0%, ${theme.colors.red[6]} 89.29%)`,
    maxWidth: '100vw',
    padding: '2.5rem !important',
    width: '100vw'
  },
  header: {
    justifyContent: 'flex-start',
    margin: '0'
  },
  closeButton: {
    borderRadius: '50%',
    color: 'white',
    height: '40px',
    width: '40px',

    '&:hover': {
      backgroundColor: '#ffffff2e'
    },

    '& svg': {
      height: '32px',
      width: '32px'
    }
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'calc(100% - 80px)',
    padding: '0 4rem 80px 4rem',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      flexDirection: 'column',
      height: 'calc(100% - 146px)',
      paddingTop: '1rem',
      overflow: 'scroll'
    }
  },
  cover: {
    filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 5.2392px 20.9569px) drop-shadow(rgba(0, 0, 0, 0.1) 0px 20.9569px 41.9137px)',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      display: 'none'
    }
  },
  lyrics: {
    color: 'white',
    opacity: '0.65',
    textAlign: 'center',
    transition: '0.1s',
    width: '500px',

    '&:hover': {
      cursor: 'pointer',
      opacity: '1'
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: '100%'
    }
  },
  title: {
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      margin: '0'
    }
  }
}));

function AudioPlayerLyricsOverlay(props: { image: string }): JSX.Element {
  const { image } = props;

  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Drawer
        classNames={{
          root: classes.root,
          drawer: classes.drawer,
          header: classes.header,
          closeButton: classes.closeButton,
          body: classes.body,
          title: classes.title
        }}
        position="bottom"
        opened={opened}
        onClose={() => setOpened(false)}
        transitionDuration={500}
        size="full"
        zIndex={3}
      >
        <Image
          className={classes.cover}
          src={image}
          width={320}
          radius={16}
        />
        <Text
          className={classes.lyrics}
          size={42}
          fw="bolder"
        >Lyrics
        </Text>
      </Drawer>
      <AudioPlayerButton
        tooltip="View lyrics"
        size="m"
        type="lyrics"
        onClickHandler={() => setOpened((val) => !val)}
        isDisable={false}
        isActive={false}
      />
    </>
  );
}

export default AudioPlayerLyricsOverlay;
