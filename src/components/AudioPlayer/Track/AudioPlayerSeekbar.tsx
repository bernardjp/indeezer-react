import { Slider, createStyles } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import useTrackSlider from '../useTrackSlider';
import getFormatedTimer from '../../../utils/timeFormat';

type Props = {
  disabled: boolean,
  isPlaying: boolean
}

const useStyles = createStyles((theme, params: { disabled: boolean, hovered: boolean }) => ({
  seekbar: {
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[7],
    display: 'flex',
    fontSize: '0.65rem',
    gap: '8px',
    position: 'relative',
    width: '100%'
  },
  timer: {
    bottom: '-3px',
    color: `${params.disabled ? theme.colors.gray[5] : ''}`,
    position: 'absolute'
  },
  slide_root: {
    cursor: 'pointer',
    height: '10px',
    width: '100%'
  },
  slide_track: {
    height: '2px',

    '&::before': {
      top: params.hovered ? '-1px' : '',
      height: params.hovered ? '3px' : '2px',
      backgroundColor: '#cacaca'
    }
  },
  slide_bar: {
    background: params.hovered ? theme.colors.red[5] : theme.colors.red[6],
    display: params.disabled ? 'none' : 'block',
    height: params.hovered ? '3px' : '2px',
    top: params.hovered ? '-1px' : ''
  },
  slide_thumb: {
    backgroundColor: 'white',
    border: '1px solid #32323d',
    boxShadow: '0px 0px 19px -6px black',
    display: params.hovered ? 'block' : 'none',
    height: '19px',
    top: '0px',
    width: '19px'
  },
  slide_label: {
    right: '-10px'
  }
}));

function AudioPlayerSeekbar(props: Props): JSX.Element {
  const { disabled, isPlaying } = props;
  const { currentTime, duration, onChangeHandler } = useTrackSlider({ isPlaying });

  const { hovered, ref } = useHover();
  const { classes } = useStyles({ disabled, hovered });

  return (
    <div className={classes.seekbar} ref={ref}>
      <span style={{ left: '-35px' }} className={classes.timer}>
        {getFormatedTimer(currentTime)}
      </span>
      <Slider
        classNames={{
          root: classes.slide_root,
          track: classes.slide_track,
          thumb: classes.slide_thumb,
          bar: classes.slide_bar,
          label: classes.slide_label
        }}
        disabled={disabled}
        defaultValue={0}
        min={0}
        max={duration}
        step={0.01}
        value={currentTime}
        label={(value) => `${getFormatedTimer(value)}`}
        onChange={(e) => onChangeHandler(e)}
      />
      <span style={{ right: '-35px' }} className={classes.timer}>
        {getFormatedTimer(duration)}
      </span>
    </div>
  );
}

export default AudioPlayerSeekbar;
