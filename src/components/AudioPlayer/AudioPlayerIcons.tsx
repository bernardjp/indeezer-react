import {
  IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPlaySharp, IoPauseSharp, IoHeartOutline
} from 'react-icons/io5';
import { TiArrowLoop, TiArrowShuffle } from 'react-icons/ti';
import { FaChromecast } from 'react-icons/fa';
import { FiVolume2, FiVolumeX, FiPlus } from 'react-icons/fi';
import { ImEqualizer } from 'react-icons/im';
import { BiMicrophone } from 'react-icons/bi';

const icons = {
  play: <IoPlaySharp style={{ paddingLeft: '3px' }} />,
  pause: <IoPauseSharp />,
  next: <IoPlaySkipForwardSharp />,
  prev: <IoPlaySkipBackSharp />,
  loop_list: <TiArrowLoop style={{ fontSize: '1.4rem' }} />,
  share: <FaChromecast style={{ fontSize: '1.2rem' }} />,
  shuffle: <TiArrowShuffle style={{ fontSize: '1.3rem' }} />,
  volume_on: <FiVolume2 style={{ fontSize: '1.1rem' }} />,
  volume_off: <FiVolumeX style={{ fontSize: '1.1rem' }} />,
  eq: <ImEqualizer style={{ fontSize: '1rem' }} />,
  lyrics: <BiMicrophone style={{ fontSize: '1.2rem' }} />,
  like: <IoHeartOutline style={{ fontSize: '1.2rem' }} />,
  add: <FiPlus style={{ fontSize: '1.2rem' }} />
};

export default icons;
