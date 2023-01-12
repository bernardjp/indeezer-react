import { createStyles } from '@mantine/core';
import {
  IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPlaySharp, IoPauseSharp, IoMusicalNotes
} from 'react-icons/io5';
import { FaChromecast } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  supportIcon: {
    fill: theme.colorScheme === 'dark' ? 'lightgray' : 'gray',
    width: '20px',
    marginRight: '0.7rem'
  },
  playlistControlIcon: {
    fill: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[7],
    width: '16px'
  },
  playlistPlaceholderIcon: {
    backgroundColor: 'rgb(223, 222, 228)',
    borderRadius: '4px',
    color: 'rgb(175, 175, 175)',
    height: '28px',
    padding: '6px',
    width: '28px'
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

function PlaylistControlIcons(props: { children: React.ReactNode }) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <svg className={classes.playlistControlIcon} viewBox="0 0 16 16" focusable="false">
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

export function PlaceholderPlaylistIcon() {
  const { classes } = useStyles();
  return <IoMusicalNotes className={classes.playlistPlaceholderIcon} />;
}

function ShuffleIcon() {
  return (
    <PlaylistControlIcons>
      <path d="m16 5-4-3v2h-2v1h6zm-12.553.007c.377-.015 1.169-.044 1.935.231.434.156.83.403 1.12.787.285.38.498.938.498 1.774 0 1.009.248 1.805.673 2.422.423.614.996 1.013 1.59 1.272.976.426 2.054.492 2.737.502V14l4-3h-2v-.003h-1.647c-.627 0-1.74-.005-2.69-.42-.465-.203-.873-.497-1.167-.924C8.204 9.23 8 8.64 8 7.8c0-1.014-.262-1.793-.7-2.375-.435-.579-1.013-.923-1.58-1.127-.982-.353-2.02-.304-2.34-.29-.04.003-.07.004-.086.004H0v1h3.294l.153-.004zM5 12H0v-1h5v1z" />
    </PlaylistControlIcons>
  );
}

function LoopListIcon() {
  return (
    <PlaylistControlIcons>
      <path d="M9 5H4a3 3 0 0 0 0 6h1.2v1H4a4 4 0 0 1 0-8h1V2l4 3zm3 6a3 3 0 0 0 0-6h-1.2V4H12a4 4 0 0 1 0 8h-1v2l-4-3h5z" />
    </PlaylistControlIcons>
  );
}

function LoopTrackIcon() {
  return (
    <PlaylistControlIcons>
      <path d="M5.2 5H9L5 2v2H4a4 4 0 1 0 0 8h1.2v-1H4a3 3 0 0 1 0-6h1.2zm6.8 6H7l4 3v-2h1a4.002 4.002 0 0 0 3.874-3h-1.045A3.001 3.001 0 0 1 12 11zm4-6a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 2h1V3h-1.002l-1.275.946v.96l1.21-.833H13V7z" />
    </PlaylistControlIcons>
  );
}

function EqualizerIcon() {
  return (
    <PlaylistControlIcons>
      <path d="M5.937 4a2 2 0 0 1-3.874 0H0V3h2.063a2 2 0 0 1 3.874 0H16v1H5.937zM5 3.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm.937 9.5H16v1H5.937a2 2 0 0 1-3.874 0H0v-1h2.063a2 2 0 0 1 3.874 0zM5 13.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM13.937 8H16v1h-2.063a2 2 0 0 1-3.874 0H0V8h10.063a2 2 0 0 1 3.874 0zM13 8.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
    </PlaylistControlIcons>
  );
}

function VolumeOnIcon() {
  return (
    <PlaylistControlIcons>
      <path d="M5.894 9.8H2V6.2h3.894L9 3.301V12.7L5.894 9.8zM1 10.8h4.5L10 15V1L5.5 5.2H1v5.6zm14-3.145a5.117 5.117 0 0 1-1.504 3.63l-.687-.728A4.118 4.118 0 0 0 14 7.655a4.116 4.116 0 0 0-1.013-2.71l.708-.708A5.112 5.112 0 0 1 15 7.655zm-2.094.108c0 .784-.33 1.49-.857 1.99l-.687-.727a1.734 1.734 0 0 0 .036-2.491l.707-.707a2.73 2.73 0 0 1 .801 1.935z" />
    </PlaylistControlIcons>
  );
}

function VolumeOffIcon() {
  return (
    <PlaylistControlIcons>
      <path d="M5.894 9.8H2V6.2h3.894L9 3.301V12.7L5.894 9.8zM1 10.8h4.5L10 15V1L5.5 5.2H1v5.6zm10-4.467L12.667 8 11 9.667l.833.833L13.5 8.833l1.667 1.667.833-.833L14.333 8 16 6.333l-.833-.833L13.5 7.167 11.833 5.5 11 6.333z" />
    </PlaylistControlIcons>
  );
}

function LikeTrackIcon() {
  return (
    <PlaylistControlIcons>
      <path d="m8 4.79-.755-.869c-1.17-1.348-2.252-1.832-3.093-1.9-.836-.067-1.59.263-2.164.858C.802 4.108.528 6.283 2.04 7.812a245.96 245.96 0 0 0 4.775 4.7c.482.46.882.837 1.186 1.122.304-.285.704-.663 1.186-1.123a238.026 238.026 0 0 0 4.771-4.695 3.545 3.545 0 0 0 .057-4.963c-.572-.589-1.324-.915-2.161-.843-.843.072-1.926.562-3.098 1.911L8 4.791zm6.672 3.725C10.78 12.452 8 15 8 15s-2.78-2.548-6.672-6.485c-3.717-3.76 1.043-10.549 5.976-5.972.232.215.464.455.696.723.232-.267.464-.508.696-.723C13.63-2.04 18.39 4.68 14.672 8.515z" />
      <path d="m8 4.79-.755-.869c-1.17-1.348-2.252-1.832-3.093-1.9-.836-.067-1.59.263-2.164.858C.802 4.108.528 6.283 2.04 7.812a245.96 245.96 0 0 0 4.775 4.7c.482.46.882.837 1.186 1.122.304-.285.704-.663 1.186-1.123a238.026 238.026 0 0 0 4.771-4.695 3.545 3.545 0 0 0 .057-4.963c-.572-.589-1.324-.915-2.161-.843-.843.072-1.926.562-3.098 1.911L8 4.791zm6.672 3.725C10.78 12.452 8 15 8 15s-2.78-2.548-6.672-6.485c-3.717-3.76 1.043-10.549 5.976-5.972.232.215.464.455.696.723.232-.267.464-.508.696-.723C13.63-2.04 18.39 4.68 14.672 8.515z" />
    </PlaylistControlIcons>
  );
}

function LikeTrackFullIcon() {
  return (
    <PlaylistControlIcons>
      <path d="M8 3.266C2.837-2.68-2.564 4.578 1.328 8.516 5.22 12.451 8 15 8 15s2.78-2.548 6.672-6.485C18.564 4.501 13.162-2.679 8 3.265z" />
    </PlaylistControlIcons>
  );
}

function LyricsIcon() {
  return (
    <PlaylistControlIcons>
      <path d="M15 4.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm1 0a4.5 4.5 0 0 1-5.099 4.46L3.048 15 0 12l7-7.58v.08a4.5 4.5 0 1 1 9 0zM7.166 5.715l-5.774 6.252 1.736 1.71 6.57-5.053a4.511 4.511 0 0 1-2.532-2.91z" />
    </PlaylistControlIcons>
  );
}

function MoreOptionsIcon() {
  return (
    <PlaylistControlIcons>
      <path d="M5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </PlaylistControlIcons>
  );
}

function CloseIcon() {
  return (
    <PlaylistControlIcons>
      <path d="m8 11.5 6-6.277-.69-.723L8 10.054 2.691 4.5l-.69.723L8 11.5z" />
    </PlaylistControlIcons>
  );
}

function CrossIcon() {
  return (
    <PlaylistControlIcons>
      <path d="m8.002 8.71 6.295 6.294.707-.707L8.71 8.002l6.294-6.295L14.297 1 8.002 7.295 1.707 1 1 1.707l6.295 6.295L1 14.297l.707.707L8.002 8.71z" />
    </PlaylistControlIcons>
  );
}

const icons = {
  play: <IoPlaySharp style={{ paddingLeft: '3px' }} />,
  pause: <IoPauseSharp />,
  next: <IoPlaySkipForwardSharp />,
  prev: <IoPlaySkipBackSharp />,
  loop_list: <LoopListIcon />,
  loop_track: <LoopTrackIcon />,
  share: <FaChromecast style={{ fontSize: '1rem' }} />,
  shuffle: <ShuffleIcon />,
  volume_on: <VolumeOnIcon />,
  volume_off: <VolumeOffIcon />,
  eq: <EqualizerIcon />,
  lyrics: <LyricsIcon />,
  like_empty: <LikeTrackIcon />,
  like_full: <LikeTrackFullIcon />,
  add: <FiPlus style={{ fontSize: '1.2rem' }} />,
  close: <CloseIcon />,
  options: <MoreOptionsIcon />,
  cross: <CrossIcon />
};

export default icons;
