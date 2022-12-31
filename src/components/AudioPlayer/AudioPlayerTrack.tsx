/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';
import { Slider, createStyles } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { AudioPlayerButton } from './AudioPlayerButton';
import { TrackType } from '../../types/AudioPlayer.types';
import useTrackSlider from './useTrackSlider';
import getFormatedTimer from '../../utils/timeFormat';

type Props = {
  audioPlayer: HTMLAudioElement | null,
  track: TrackType | null,
  isPlaying: boolean
}

const useStyles = createStyles(
  (theme, params: { hovered: boolean, disabled: boolean }) => ({
    container: {
      width: '45%'
    },
    heading: {
      display: 'flex',
      justifyContent: 'space-between',
      minHeight: '30px', // check height after final design implementation
      width: '100%',
      marginBottom: '5px'
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: '1px',
      fontSize: '0.9rem'
    },
    actions: {
      alignItems: 'center',
      display: 'flex',
      gap: '8px'
    },
    link: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[7],
      textDecoration: 'none'
    },
    label: {
      alignItems: 'center',
      border: `1px solid ${theme.colors.dark[1]}`,
      borderRadius: '4px',
      color: theme.colors.dark[1],
      display: 'flex',
      fontSize: '0.65rem',
      height: '16px',
      justifyContent: 'center',
      marginRight: '1rem',
      width: '16px'
    },
    seekbar: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      gap: '8px',
      fontSize: '0.65rem',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[7]
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
      display: params.disabled ? 'none' : 'block',
      background: params.hovered ? theme.colors.red[5] : theme.colors.red[6],
      height: params.hovered ? '3px' : '2px',
      top: params.hovered ? '-1px' : ''
    },
    slide_thumb: {
      display: params.hovered ? 'block' : 'none',
      border: '1px solid #32323d',
      backgroundColor: 'white',
      height: '19px',
      width: '19px',
      boxShadow: '0px 0px 19px -6px black',
      top: '0px'
    }
  })
);

const DEEZER_URL = 'https://www.deezer.com/us';

function AudioPlayerTrack(props: Props) {
  const { audioPlayer, track, isPlaying } = props;
  const { currentTime, duration, onChangeHandler } = useTrackSlider({ audioPlayer, isPlaying });

  const disabled = !track;
  const { hovered, ref } = useHover();
  const { classes } = useStyles({ hovered, disabled });

  return (
    <div className={classes.container}>
      {/*
        Check if the playlist dropdown is open.
        If it is, then the heading doesn't render
      */}

      <div className={classes.heading}>
        {track && (
          <>
            <div className={classes.title}>
              {track?.explicitLyrics && <span className={classes.label}>E</span> }

              <a
                className={classes.link}
                href={`${DEEZER_URL}/album/${track?.albumID}`}
                target="_blank"
                rel="noreferrer"
              >
                {`${track?.trackTitle} `}
              </a>
                &nbsp;·&nbsp;
              <a
                className={classes.link}
                href={`${DEEZER_URL}/artist/${track?.artistID}`}
                target="_blank"
                rel="noreferrer"
              >
                {` ${track?.artistName}`}
              </a>
            </div>
            <div className={classes.actions}>
              <AudioPlayerButton
                tooltip="View lyrics"
                size="m"
                type="lyrics"
                onClickHandler={() => console.log('show lyrics')}
                isDisable={false}
                isActive={false}
              />
              <AudioPlayerButton
                tooltip=""
                size="m"
                type="add"
                onClickHandler={() => console.log('show add to playlist menu')}
                isDisable={false}
                isActive={false}
              />
              <AudioPlayerButton
                tooltip="Add to Favorite tracks"
                size="m"
                type="like"
                onClickHandler={() => console.log('track added to favorites')}
                isDisable={false}
                isActive={false}
              />
            </div>
          </>
        )}
      </div>

      <div className={classes.seekbar}>
        <span style={{
          position: 'absolute',
          left: '-35px',
          bottom: '-3px'
        }}
        >{getFormatedTimer(currentTime)}
        </span>
        <Slider
          classNames={{
            root: classes.slide_root,
            track: classes.slide_track,
            thumb: classes.slide_thumb,
            bar: classes.slide_bar
          }}
          disabled={disabled}
          ref={ref}
          defaultValue={0}
          min={0}
          max={duration}
          step={0.01}
          value={currentTime}
          label={(value) => `${getFormatedTimer(value)}`}
          onChange={(e) => onChangeHandler(e)}
        />
        <span style={{
          position: 'absolute',
          right: '-35px',
          bottom: '-3px'
        }}
        >{getFormatedTimer(duration)}
        </span>
      </div>
    </div>
  );
}

export default AudioPlayerTrack;
