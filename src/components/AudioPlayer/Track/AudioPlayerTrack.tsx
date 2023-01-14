import { createStyles } from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import AudioPlayerSeekbar from './AudioPlayerSeekbar';
import AudioPlayerHeading from './AudioPlayerHeading';

type Props = {
  isPlaying: boolean,
  track: TrackType | null,
  opened: boolean
}

const useStyles = createStyles(() => ({
  container: {
    width: '45%'
  }
}));

function AudioPlayerTrack(props: Props) {
  const { isPlaying, track, opened } = props;
  const disabled = !track; // if there is no track loaded then the component is disabled
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <AudioPlayerHeading track={track} opened={opened} />
      <AudioPlayerSeekbar
        isPlaying={isPlaying}
        disabled={disabled}
      />
    </div>
  );
}

export default AudioPlayerTrack;
