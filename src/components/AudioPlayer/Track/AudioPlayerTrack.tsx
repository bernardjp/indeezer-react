import { createStyles } from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import AudioPlayerSeekbar from './AudioPlayerSeekbar';
import AudioPlayerHeading from './AudioPlayerHeading';

type Props = {
  audioPlayer: HTMLAudioElement | null,
  isPlaying: boolean,
  track: TrackType | null
}

const useStyles = createStyles(() => ({
  container: {
    width: '45%'
  }
}));

function AudioPlayerTrack(props: Props) {
  const { audioPlayer, isPlaying, track } = props;
  const disabled = !track; // if there is no track loaded then the component is disabled
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      {/*
        Check if the playlist dropdown is open. If it is, then the heading doesn't render,
        and the Seekbar is vertically centered.
      */}
      <AudioPlayerHeading track={track} />
      <AudioPlayerSeekbar
        isPlaying={isPlaying}
        audioPlayer={audioPlayer}
        disabled={disabled}
      />
    </div>
  );
}

export default AudioPlayerTrack;
