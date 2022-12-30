/* eslint-disable no-unused-vars */
import { Slider, createStyles } from '@mantine/core';
import { AudioPlayerButton } from './AudioPlayerButton';
import { TrackType } from '../../types/AudioPlayer.types';

type Props = {
  audioPlayer: HTMLAudioElement | null,
  track: TrackType | null
}

const useStyles = createStyles((theme) => ({
  container: {
    width: '50%'
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '32px', // check height after final design implementation
    width: '100%'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
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
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.65rem',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[7]
  },
  slide: {
    width: '100%'
  }
}));

const DEEZER_URL = 'https://www.deezer.com/us';

function AudioPlayerTrack(props: Props) {
  const { audioPlayer, track } = props;
  const { classes } = useStyles();

  console.log(track);

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
        <span>00:00</span>
        <Slider className={classes.slide} />
        <span>00:00</span>
      </div>
    </div>
  );
}

export default AudioPlayerTrack;
