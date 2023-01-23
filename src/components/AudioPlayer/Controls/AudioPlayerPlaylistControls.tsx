/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import { createStyles } from '@mantine/core';
import AudioPlayerPlaylistOverlay from '../Playlist/PlaylistOverlay';
import { AudioPlayerButton, AudioPlayerVolumeButton, AudioPlayerEQButton } from '../AudioPlayerButton';
import useAudioPlayerStore from '../../../store/AudioPlayerStore';

const useStyles = createStyles(() => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex'
  },
  controlContainer: {
    alignItems: 'center',
    display: 'flex',
    gap: '8px'
  }
}));

function AudioPlayerPlaylistControls(): JSX.Element {
  const {
    isLooping,
    isShuffled,
    toggleLooping,
    toggleShuffle
  } = useAudioPlayerStore((state) => state);

  const { classes } = useStyles();

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
