/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Drawer, createStyles } from '@mantine/core';
import { AudioPlayerButton } from '../AudioPlayerButton';
import AudioPlayerPlaylistButton from './AudioPlayerPlaylistButton';
import TrackInformation from './TrackInformation';
import PlaylistMainContainer from './MainContainer';
import usePlaylistStore from '../../../store/PlaylistStore';
import useTracksStore from '../../../store/TracksStore';

const useStyles = createStyles((theme) => ({
  root: {
    width: '100vw'
  },
  drawer: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    maxWidth: '100vw',
    padding: '0 2.5rem 80px 2.5rem !important',
    width: '100vw',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      padding: '2rem 2rem 150px 2rem !important'
    }
  },
  body: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0 2.5rem 80px 2.5rem',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      padding: '0'
    }
  },
  headerOriginal: {
    display: 'none'
  },
  headerNew: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '54px',
    alignItems: 'center',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      position: 'absolute',
      top: '6px',
      zIndex: 3,

      '& button': {
        backgroundColor: theme.colors.red[6],
        right: '40px'
      }
    }

  },
  playlistBody: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: '2rem',

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      overflow: 'scroll'
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      paddingTop: '0'
    }
  }
}));

function AudioPlayerPlaylistOverlay(): JSX.Element {
  const track = useTracksStore((state) => state.current);
  const { playlist, isOpen, setOpen } = usePlaylistStore((state) => ({
    playlist: state.playlist,
    isOpen: state.isOpen,
    setOpen: state.setOpen
  }));
  const { classes } = useStyles();

  useEffect(() => {
    if (playlist.length === 0) setOpen(false);
  }, [playlist]);

  return (
    <>
      <Drawer
        classNames={{
          root: classes.root,
          drawer: classes.drawer,
          header: classes.headerOriginal,
          body: classes.body
        }}
        position="bottom"
        opened={isOpen}
        onClose={() => setOpen(false)}
        transitionDuration={500}
        size="full"
        zIndex={3}
      >
        <div className={classes.headerNew}>
          <AudioPlayerButton
            tooltip="Close"
            isDisable={false}
            type="close"
            isActive={false}
            size="m"
            onClickHandler={() => setOpen(false)}
          />
        </div>
        <div className={classes.playlistBody}>
          <TrackInformation track={track} />
          <PlaylistMainContainer currentTrack={track} />
        </div>
      </Drawer>

      <AudioPlayerPlaylistButton
        active={isOpen}
        currentTrack={track}
        onClickHandler={() => {
          if (track) setOpen(!isOpen);
        }}
      />
    </>
  );
}

export default AudioPlayerPlaylistOverlay;
