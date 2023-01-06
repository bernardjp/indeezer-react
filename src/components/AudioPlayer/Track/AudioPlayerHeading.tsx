import { createStyles } from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import { AudioPlayerButton, AudioPlayerAddTrackButton } from '../AudioPlayerButton';

type Props = {
  track: TrackType | null,

}

const useStyles = createStyles((theme) => ({
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
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '3px'
    }
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
  }
}));

const DEEZER_URL = 'https://www.deezer.com/us'; // Move to .env file (?)

function AudioPlayerHeading(props: Props): JSX.Element {
  const { track } = props;
  const { classes } = useStyles();

  return (
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
          <AudioPlayerAddTrackButton
            size="m"
            isDisable={false}
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
  );
}

export default AudioPlayerHeading;
