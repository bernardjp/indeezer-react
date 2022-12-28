/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { Button, createStyles } from '@mantine/core';
import {
  IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPlaySharp, IoPauseSharp
} from 'react-icons/io5';
import { TiArrowLoop, TiArrowShuffle } from 'react-icons/ti';
import { FaChromecast } from 'react-icons/fa';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { ImEqualizer } from 'react-icons/im';
import AudioPlayerTooltip from './AudioPlayerTootip';
import AudioPlayerVolume from './AudioPlayerVolume';

type ButtonProps = {
  type: 'play' | 'pause' | 'next' | 'prev'| 'loop_list' | 'shuffle' | 'share' | 'volume_on' | 'eq'
  // | 'loop_track' | 'volume_off' | 'lyrics' | 'like',
  isDisable: boolean,
  isActive: boolean,
  size: 'sm' | 'm' | 'lg',
  onClickHandler: () => void
}

type FullButtonProps = ButtonProps & {
  tooltip: string
}

const icons = {
  play: <IoPlaySharp style={{ paddingLeft: '3px' }} />,
  pause: <IoPauseSharp />,
  next: <IoPlaySkipForwardSharp />,
  prev: <IoPlaySkipBackSharp />,
  loop_list: <TiArrowLoop style={{ fontSize: '1.4rem' }} />,
  // loop_track: '',
  share: <FaChromecast style={{ fontSize: '1.2rem' }} />,
  shuffle: <TiArrowShuffle style={{ fontSize: '1.3rem' }} />,
  volume_on: <FiVolume2 style={{ fontSize: '1.1rem' }} />,
  volume_off: <FiVolumeX style={{ fontSize: '1.1rem' }} />,
  eq: <ImEqualizer style={{ fontSize: '1rem' }} />
  // lyrics: '',
  // like: ''
};

const useStyles = createStyles((theme, params: ButtonProps) => ({
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
      color: '#3e3e47',
      cursor: 'default'
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

  const { classes } = useStyles(props);

  return (
    <AudioPlayerTooltip tooltip={tooltip}>
      <Button
        className={classes.button}
        onClick={onClickHandler}
        disabled={isDisable}
      >
        {icons[type]}
      </Button>
    </AudioPlayerTooltip>
  );
}

// Unique Button Component design to handle the volume input.
// TO BE IMPLEMENTED
function AudioPlayerVolumeButton(props: ButtonProps): JSX.Element {
  const {
    type,
    isDisable,
    isActive,
    size,
    onClickHandler
  } = props;

  const { classes } = useStyles(props);

  return (
    <AudioPlayerVolume>
      <Button
        className={classes.button}
        onClick={onClickHandler}
        disabled={isDisable}
      >
        {icons[type]}
      </Button>
    </AudioPlayerVolume>
  );
}

// Button Component design to handle dropdown menus.
function AudioPlayerMenuButton(props: ButtonProps): JSX.Element {
  const {
    type,
    isDisable,
    isActive,
    size,
    onClickHandler
  } = props;

  const { classes } = useStyles(props);

  return (
    <Button
      className={classes.button}
      onClick={onClickHandler}
      disabled={isDisable}
    >
      {icons[type]}
    </Button>
  );
}

export { AudioPlayerButton, AudioPlayerVolumeButton, AudioPlayerMenuButton };
