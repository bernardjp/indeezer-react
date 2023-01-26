/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import { createStyles } from '@mantine/core';
import AudioPlayerPlaylistOverlay from '../Playlist/PlaylistOverlay';
import { AudioPlayerButton, AudioPlayerVolumeButton, AudioPlayerEQButton } from '../AudioPlayerButton';
import useAudioPlayerStore from '../../../store/AudioPlayerStore';
import useTracksStore from '../../../store/TracksStore';

const useStyles = createStyles((theme, params: { current: boolean }) => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      display: params.current ? 'flex' : 'none',
      position: 'absolute',
      bottom: '8px',
      right: '16px'
    }
  },
  controlContainer: {
    alignItems: 'center',
    display: 'flex',
    gap: '8px',

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      gap: '4px'
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: 'none'
    }
  }
}));

function AudioPlayerPlaylistControls(): JSX.Element {
  const {
    isLooping,
    isShuffled,
    toggleLooping,
    toggleShuffle
  } = useAudioPlayerStore((state) => state);
  const { current } = useTracksStore();

  const { classes } = useStyles({ current: Boolean(current) });

  return (
    <div className={classes.mainContainer}>
      <div className={classes.controlContainer}>
        <AudioPlayerButton
          tooltip="Chromecast"
          size="m"
          type="share"
          onClickHandler={() => console.log('Sharing track')}
          isDisable={false}
          isActive={false}
        />
        <AudioPlayerButton
          tooltip={
            !isLooping
              ? 'Repeat all tracks in list'
              : isLooping === 'list'
                ? 'Repeat the current track'
                : 'Turn off repeat'
          }
          size="m"
          type={isLooping === 'track' ? 'loop_track' : 'loop_list'}
          onClickHandler={() => toggleLooping()}
          isDisable={false}
          isActive={Boolean(isLooping)}
        />
        <AudioPlayerButton
          tooltip={`Turn ${isShuffled ? 'off' : 'on'} Shuffle`}
          size="m"
          type="shuffle"
          onClickHandler={() => toggleShuffle()}
          isDisable={false}
          isActive={isShuffled}
        />
        <AudioPlayerVolumeButton
          size="m"
          isDisable={false}
        />
        <AudioPlayerEQButton
          size="m"
          isDisable={false}
        />
      </div>
      <AudioPlayerPlaylistOverlay />
    </div>
  );
}

export default AudioPlayerPlaylistControls;
