/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
import { createStyles } from '@mantine/core';
import useAudioPlayer from './useAudioPlayer';
import AudioPlayerTrackControls from './Track/AudioPlayerControls';
import AudioPlayerTrack from './Track/AudioPlayerTrack';
import AudioPlayerPlaylistControls from './Controls/AudioPlayerPlaylistControls';
import { AudioPlayerContext } from '../Context/AudioPlayerContext';

const useStyles = createStyles((theme) => ({
  audioPlayerContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      flexDirection: 'column'
    }
  },
  mainWrapper: {
    width: '100%'
  }
}));

function AudioPlayer() {
  const audioPlayer = useContext(AudioPlayerContext);
  const BASE_URL = import.meta.env.VITE_BASE_SRC_URL;

  // Initialize the audioplayer
  useAudioPlayer();

  const { classes } = useStyles();

  return (
    <div className={classes.mainWrapper}>
      {/* Core Audioplayer */}
      <div>
        <audio ref={audioPlayer}>
          <source src={BASE_URL} type="audio/mpeg" />
          <track kind="captions" />
        </audio>
      </div>

      <div className={classes.audioPlayerContainer}>
        {/* Audioplayer track control (prev, Play/Pause, next) */}
        <AudioPlayerTrackControls />

        {/* Track slide, name, and timers */}
        <AudioPlayerTrack />

        {/* Playlist a misc. controls (volume, looping, shuffling, sharing, eq, playlist) */}
        <AudioPlayerPlaylistControls />
      </div>
    </div>
  );
}

export default AudioPlayer;
