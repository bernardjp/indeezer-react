/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { Button, Tooltip, createStyles } from '@mantine/core';
import {
  IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPlaySharp, IoPauseSharp
} from 'react-icons/io5';

type Props = {
  tooltip: string,
  type: 'play' | 'pause' | 'next' | 'prev',
  // | 'share' | 'loop_list' | 'loop_track' | 'shuffle' | 'volume' | 'eq' | 'lyrics' | 'like',
  isDisable: boolean,
  isActive: boolean,
  size: 'sm' | 'm' | 'lg',
  onClickHandler: () => void
}

const icons = {
  play: <IoPlaySharp style={{ paddingLeft: '3px' }} />,
  pause: <IoPauseSharp />,
  next: <IoPlaySkipForwardSharp />,
  prev: <IoPlaySkipBackSharp />
  // share: '',
  // loop_list: '',
  // loop_track: '',
  // shuffle: '',
  // volume: '',
  // eq: '',
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
    color: 'white',
    display: 'flex',
    fontSize: params.size === 'lg' ? '1.8rem' : params.size === 'm' ? '1.2rem' : '1rem',
    height: params.size === 'lg' ? '48px' : params.size === 'm' ? '36px' : '24px',
    justifyContent: 'center',
    padding: '0',
    textAlign: 'center',
    width: params.size === 'lg' ? '48px' : params.size === 'm' ? '32px' : '24px',
    transition: '0.25s',

    '&:hover': {
      backgroundColor: '#42424c'
    },

    '&:disabled': {
      backgroundColor: 'transparent',
      color: '#3e3e47'
    }
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
    <Tooltip label={tooltip} disabled={tooltip === ''}>
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
