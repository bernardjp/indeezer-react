import { createStyles } from '@mantine/core';
import useAudioPlayerStore from '../../../store/AudioPlayerStore';
import useTracksStore from '../../../store/TracksStore';
import { AudioPlayerButton } from '../AudioPlayerButton';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      order: 2,
      padding: '1rem 0 8px 0'
    }
  }
}));

function AudioPlayerTrackControls(): JSX.Element {
  const tracks = useTracksStore((state) => state);
  const {
    isPlaying, togglePlaying, nextTrack, prevTrack
  } = useAudioPlayerStore((state) => state);

  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <AudioPlayerButton
        tooltip=""
        size="m"
        type="prev"
        onClickHandler={prevTrack}
        isDisable={tracks.previous}
        isActive={false}
      />
      <AudioPlayerButton
        tooltip=""
        size="lg"
        type={isPlaying ? 'pause' : 'play'}
        onClickHandler={togglePlaying}
        isDisable={!tracks.current}
        isActive={false}
      />
      <AudioPlayerButton
        tooltip=""
        size="m"
        type="next"
        onClickHandler={nextTrack}
        isDisable={tracks.next}
        isActive={false}
      />
    </div>
  );
}

export default AudioPlayerTrackControls;
