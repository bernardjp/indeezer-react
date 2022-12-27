/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { Button, Tooltip, createStyles } from '@mantine/core';
import {
  IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPlaySharp, IoPauseSharp
} from 'react-icons/io5';
import { TiArrowLoop, TiArrowShuffle } from 'react-icons/ti';
import { FaChromecast } from 'react-icons/fa';
import { RiVolumeUpLine, RiVolumeMuteLine } from 'react-icons/ri';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { ImEqualizer } from 'react-icons/im';

type Props = {
  tooltip: string,
  type: 'play' | 'pause' | 'next' | 'prev'| 'loop_list' | 'shuffle' | 'share' | 'volume_on' | 'eq'
  // | 'loop_track' | 'volume_off' | 'lyrics' | 'like',
  isDisable: boolean,
  isActive: boolean,
  size: 'sm' | 'm' | 'lg',
  onClickHandler: () => void
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
  // volume_off: '',
  eq: <ImEqualizer style={{ fontSize: '1rem' }} />
  // lyrics: '',
  // like: ''
};

// const sizeParams = {
//   lg: {
//     fontSize: '1.8rem',
//     height: '48px',
//     width: '48px'
//   },
//   m: {
//     fontSize: '1.4rem',
//     height: '32px',
//     width: '32px'
//   },
//   sm: {
//     fontSize: '1rem',
//     height: '24px',
//     width: '24px'
//   }
// };

const useStyles = createStyles((theme, params: Props) => ({
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
  },
  tooltip: {
    backgroundColor: theme.colors.dark[4],
    boxShadow: theme.colorScheme === 'dark' ? '0px -1px 10px -8px rgba(0,0,0,0.5)' : '0px 0px 10px -8px rgba(0,0,0,0.1)',
    fontSize: '0.7rem'
  }
}));

/*
  BUTTON Props:
    - Object-like props: {
      tootip: string || ""
      type: [
        "play", "pause", "next", "prev", "share", "loop_list",
        "loop_track", "shuffle", "volume", "eq", "lyrics", "like"
      ], --------> set the button icon
      isDisable: boolean,
      isActive: boolean, ---> icon stays colored when active (optional arguement)
      size: ["sm", "m", "lg"],
      onClickHandler: () => {}
    }

  icon: {
    play: faplayicon ---> icon from react-icons library
  }
  --> icon[type]
*/

function AudioPlayerButton(props: Props): JSX.Element {
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
    <Tooltip
      classNames={{ tooltip: classes.tooltip }}
      label={tooltip}
      disabled={tooltip === ''}
      offset={8}
      transition="skew-down"
      transitionDuration={70}
      withArrow
      arrowSize={6}
    >
      <Button
        className={classes.button}
        onClick={onClickHandler}
        disabled={isDisable}
      >
        {icons[type]}
      </Button>
    </Tooltip>
  );
}

export default AudioPlayerButton;
