import { createStyles } from '@mantine/core';
import AudioPlayerSeekbar from './AudioPlayerSeekbar';
import AudioPlayerHeading from './AudioPlayerHeading';
import useTracksStore from '../../../store/TracksStore';

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: '45%',
    width: 'calc(100% - 128px - 318px - 100px)',
    // 128px ==> track controls (previous, play/pause, next)
    // 318px ==> playlist controls (shuffle, loop, eq, queue)
    // 128px ==> track seekbar timers (L/R)

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: '100%'
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      order: 1,
      maxWidth: '90%'
    }
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
