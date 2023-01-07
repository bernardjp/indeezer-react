/* eslint-disable no-nested-ternary */
import { Button, createStyles } from '@mantine/core';
import AudioPlayerTooltip from './AudioPlayerTootip';
import AudioPlayerVolume from './AudioPlayerVolume';
import AudioPlayerIcons from './AudioPlayerIcons';
import AudioPlayerEqualizer from './AudioPlayerEQMenu';
import AudioPlayerAddTrack from './AudioPlayerAddMenu';
import useVolume from './useVolume';

type ButtonProps = {
  type: 'play' | 'pause' | 'next' | 'prev'| 'loop_list' | 'loop_track' | 'shuffle' | 'share' | 'eq' | 'lyrics' | 'like_empty' | 'like_full' | 'add',
  isDisable: boolean,
  isActive: boolean,
  size: 'sm' | 'm' | 'lg',
  onClickHandler: () => void
}

type FullButtonProps = ButtonProps & {
  tooltip: string
}

type VolumeButtonProps = {
  audioPlayer: HTMLAudioElement | null,
  isDisable: boolean,
  size: 'sm' | 'm' | 'lg'
}

type MenuButtonProps = {
  isDisable: boolean,
  size: 'sm' | 'm' | 'lg'
}

const useStyles = createStyles((theme, params: { size: 'sm' | 'm' | 'lg' }) => ({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    color: `${theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.dark[4]}`,
    display: 'flex',
    fontSize: params.size === 'lg' ? '1.8rem' : params.size === 'm' ? '1.2rem' : '1rem',
    height: params.size === 'lg' ? '48px' : params.size === 'm' ? '32px' : '24px',
    justifyContent: 'center',
    padding: '0',
    textAlign: 'center',
    width: params.size === 'lg' ? '48px' : params.size === 'm' ? '32px' : '24px',
    transition: '0.2s',

    '&:hover': {
      backgroundColor: `${theme.colorScheme === 'dark' ? '#42424c' : '#eaeaea'}`
    },

    '&:disabled': {
      backgroundColor: 'transparent',
      color: `${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
      cursor: 'default'
    }
  },
  active: {
    '& svg': {
      fill: theme.colors.red[5]
    }
  }
}));

// Basic AP Button Component with tooltip support
function AudioPlayerButton(props: FullButtonProps): JSX.Element {
  const {
    tooltip,
    type,
    isDisable,
    isActive,
    size,
    onClickHandler
  } = props;

  const { classes, cx } = useStyles({ size });

  return (
    <AudioPlayerTooltip tooltip={tooltip}>
      <Button
        className={cx(
          classes.button,
          { [classes.active]: isActive }
        )}
        onClick={onClickHandler}
        disabled={isDisable}
      >
        {AudioPlayerIcons[type]}
      </Button>
    </AudioPlayerTooltip>
  );
}

// Unique Button Component design to handle the volume input.
function AudioPlayerVolumeButton(props: VolumeButtonProps): JSX.Element {
  const {
    audioPlayer,
    isDisable,
    size
  } = props;

  const {
    volume,
    setVolume,
    toggleMute
  } = useVolume({ audioPlayer });

  const { classes } = useStyles({ size });

  return (
    <AudioPlayerVolume onChangeHandler={setVolume} volume={volume}>
      <Button
        className={classes.button}
        onClick={toggleMute}
        disabled={isDisable}
      >
        {AudioPlayerIcons[volume === 0 ? 'volume_off' : 'volume_on']}
      </Button>
    </AudioPlayerVolume>
  );
}

// Button Component design to handle the dropdown EQ menu.
function AudioPlayerEQButton(props: MenuButtonProps): JSX.Element {
  const {
    isDisable,
    size
  } = props;

  const { classes } = useStyles({ size });

  return (
    <AudioPlayerEqualizer>
      <Button
        className={classes.button}
        disabled={isDisable}
      >
        {AudioPlayerIcons.eq}
      </Button>
    </AudioPlayerEqualizer>
  );
}

// Button Component design to handle the dropdown Add to Playlist menu.
function AudioPlayerAddTrackButton(props: MenuButtonProps): JSX.Element {
  const {
    isDisable,
    size
  } = props;

  const { classes } = useStyles({ size });

  return (
    <AudioPlayerAddTrack>
      <Button
        className={classes.button}
        disabled={isDisable}
      >
        {AudioPlayerIcons.add}
      </Button>
    </AudioPlayerAddTrack>
  );
}

export {
  AudioPlayerButton,
  AudioPlayerVolumeButton,
  AudioPlayerEQButton,
  AudioPlayerAddTrackButton
};
