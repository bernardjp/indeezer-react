import { createStyles } from '@mantine/core';
import {
  IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPlaySharp, IoPauseSharp, IoHeartOutline
} from 'react-icons/io5';
import { TiArrowLoop, TiArrowShuffle } from 'react-icons/ti';
import { FaChromecast } from 'react-icons/fa';
import { FiVolume2, FiVolumeX, FiPlus } from 'react-icons/fi';
import { ImEqualizer } from 'react-icons/im';
import { BiMicrophone } from 'react-icons/bi';

const useStyles = createStyles((theme) => ({
  supportIcon: {
    fill: theme.colorScheme === 'dark' ? 'lightgray' : 'gray',
    width: '20px',
    marginRight: '0.7rem'
  }
}));

function SupportIconWrapper(props: { children: React.ReactNode }) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <svg className={classes.supportIcon} viewBox="0 0 16 16" focusable="false">
      {children}
    </svg>
  );
}

export function TrackMixIcon() {
  return (
    <SupportIconWrapper>
      <path d="m7 0 7 1.5V6L8 4.714V12c0 1.657-1.567 3-3.5 3S1 13.657 1 12s1.567-3 3.5-3c.98 0 1.865.345 2.5.9V0zM4.5 10C2.97 10 2 11.034 2 12s.97 2 2.5 2S7 12.966 7 12s-.97-2-2.5-2zM8 1.237v2.455l5 1.071V2.308L8 1.237zm7 10.688a5.98 5.98 0 0 1-1.55 4.025l-.687-.733A4.981 4.981 0 0 0 14 11.925a4.98 4.98 0 0 0-1.237-3.293l.687-.732A5.978 5.978 0 0 1 15 11.925zm-3 0a3.98 3.98 0 0 1-.502 1.942l-.732-.78a2.99 2.99 0 0 0 0-2.325l.732-.78c.32.576.502 1.238.502 1.943z" />
    </SupportIconWrapper>
  );
}

export function NotRecommendIcon() {
  return (
    <SupportIconWrapper>
      <path d="m6 0 7 1.5V6L7 4.714V12c0 1.657-1.567 3-3.5 3S0 13.657 0 12s1.567-3 3.5-3c.98 0 1.865.345 2.5.9V0zM3.5 10C1.97 10 1 11.034 1 12s.97 2 2.5 2S6 12.966 6 12s-.97-2-2.5-2zM7 1.237v2.455l5 1.071V2.308L7 1.237zM12.001 9c.652 0 1.255.208 1.746.56l-4.184 4.185A2.999 2.999 0 0 1 12 9zM15 11.999a2.999 2.999 0 0 1-4.728 2.45l4.18-4.179c.345.489.548 1.085.548 1.729zm1 0a3.999 3.999 0 1 0-7.998 0 3.999 3.999 0 0 0 7.998 0z" />
    </SupportIconWrapper>
  );
}

export function ShareIcon() {
  return (
    <SupportIconWrapper>
      <path d="M8 14.26v-4.195c-1.34.182-2.54.719-3.478 1.283-.576.347-1.038.694-1.354.953a8.783 8.783 0 0 0-.44.387l-.019.017-.002.002L.358 15.06l.662-3.259L2 12s.516-.518 1.404-1.123C4.478 10.145 6.096 9.284 8 9.057A8.051 8.051 0 0 1 9 9v3l2.553-2.32L14 7.5 9 3v2c-3.738.451-5.58 3.303-6.408 5.225C2.154 11.243 2 12 2 12l-.98-.199v-.004l.002-.007.005-.02a4.953 4.953 0 0 1 .073-.3 12.354 12.354 0 0 1 1.407-3.24C3.533 6.579 5.257 4.775 8 4.159V.755l7.499 6.748-3.277 2.92L8 14.26z" />
    </SupportIconWrapper>
  );
}

export function ReportIcon() {
  return (
    <SupportIconWrapper>
      <path d="M4 12v3l3-3h8V1H1v11h3zm-2-1V2h12v9H6.586L5 12.586V11H2zm10-5H4V5h8v1zM4 8h5V7H4v1z" />
    </SupportIconWrapper>
  );
}

const icons = {
  play: <IoPlaySharp style={{ paddingLeft: '3px' }} />,
  pause: <IoPauseSharp />,
  next: <IoPlaySkipForwardSharp />,
  prev: <IoPlaySkipBackSharp />,
  loop_list: <TiArrowLoop style={{ fontSize: '1.45rem' }} />,
  loop_track: <TiArrowLoop style={{ fontSize: '1.45rem', transform: 'rotate(66rad)' }} />,
  share: <FaChromecast style={{ fontSize: '1.15rem' }} />,
  shuffle: <TiArrowShuffle style={{ fontSize: '1.3rem' }} />,
  volume_on: <FiVolume2 style={{ fontSize: '1.1rem' }} />,
  volume_off: <FiVolumeX style={{ fontSize: '1.1rem' }} />,
  eq: <ImEqualizer style={{ fontSize: '0.95rem' }} />,
  lyrics: <BiMicrophone style={{ fontSize: '1.2rem' }} />,
  like: <IoHeartOutline style={{ fontSize: '1.2rem' }} />,
  add: <FiPlus style={{ fontSize: '1.2rem' }} />
};

export default icons;
