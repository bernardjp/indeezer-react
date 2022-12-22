/* eslint-disable no-unused-vars */
import { Button, Tooltip } from '@mantine/core';
import { BsFillPlayFill, BsPause } from 'react-icons/bs';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';

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
  play: <BsFillPlayFill />,
  pause: <BsPause />,
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

  return (
    <Tooltip label={tooltip} disabled={tooltip === ''}>
      <Button
        onClick={onClickHandler}
        disabled={isDisable}
      >
        {icons[type]}
      </Button>
    </Tooltip>
  );
}

export default AudioPlayerButton;
