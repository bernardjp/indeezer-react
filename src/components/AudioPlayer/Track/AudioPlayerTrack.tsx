import { createStyles } from '@mantine/core';
import AudioPlayerSeekbar from './AudioPlayerSeekbar';
import AudioPlayerHeading from './AudioPlayerHeading';
import useTracksStore from '../../../store/TracksStore';

const useStyles = createStyles(() => ({
  container: {
    width: '45%'
  }
}));

function AudioPlayerTrack() {
  const track = useTracksStore((state) => state.current);
  const disabled = !track; // if there is no track loaded then the component is disabled
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <AudioPlayerHeading track={track} />
      <AudioPlayerSeekbar disabled={disabled} />
    </div>
  );
}

export default AudioPlayerTrack;
