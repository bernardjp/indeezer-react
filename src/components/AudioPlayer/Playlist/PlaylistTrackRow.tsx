import { useState } from 'react';
import {
  Image, createStyles, Text, Group
} from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import { StyledShortBadge } from '../../Utils/StyledBadge';
import { AudioPlayerButton, AudioPlayerOptionsButton } from '../AudioPlayerButton';
import AudioPlayerLyricsOverlay from '../AudioPlayerLyrics';

type Props = {
  track: TrackType,
  isCurrent: boolean
}

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    height: '56px',
    // gap: '2rem',
    padding: '0 0.5rem',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
    }
  },
  trackTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: '-moz-available' // Check attribute for other vendors
  },
  textContainer: {
    // minWidth: '240px',
    alignItems: 'baseline',
    flexWrap: 'nowrap',
    width: '-moz-available' // Check attribute for other vendors
  },
  buttonContainer: {
    gap: '7px'
    // minWidth: '112px'
  },
  titleText: {
    paddingBottom: '1px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  artistName: {
    // minWidth: '112px',
    width: '6.75rem',
    marginLeft: '2rem'
  }
}));

function PlaylistTrackRow(props: Props): JSX.Element {
  const { track, isCurrent } = props;

  // TO-DO: Move the state. Consider using state management library
  const [liked, setLiked] = useState(false);

  const { classes, cx } = useStyles();

  return (
    <li className={classes.container}>
      <div className={classes.trackTitle}>
        <Image src={track.albumThumbnail} height={40} width={40} radius={4} />
        <Group className={classes.textContainer}>
          <Text className={classes.titleText} color={isCurrent ? 'red' : ''}>
            {track.trackTitle}
          </Text>
          {/* TO.DO: Set tooltip compatibility */}
          {track.explicitLyrics && <StyledShortBadge text="E" />}
        </Group>
        <Group className={classes.buttonContainer}>
          <AudioPlayerLyricsOverlay image={track.albumCover} />
          <AudioPlayerButton
            tooltip={liked ? 'Remove from Favorite tracks' : 'Add to Favorite tracks'}
            size="m"
            type={liked ? 'like_full' : 'like_empty'}
            onClickHandler={() => setLiked((val) => !val)}
            isDisable={false}
            isActive={liked}
          />
          <AudioPlayerOptionsButton size="m" isDisable={false} />
        </Group>
      </div>
      <Text
        component="a"
        href={`https://www.deezer.com/us/artist/${track?.artistID}`}
        target="_blank"
        className={cx(classes.titleText, classes.artistName)}
        color={isCurrent ? 'red' : ''}
      >
        {track.artistName}
      </Text>
      <Text style={{ width: '40px', marginLeft: '2rem' }}>
        00:00
      </Text>
      <div style={{ marginLeft: '2rem' }}>
        <AudioPlayerButton
          tooltip="Close"
          isDisable={false}
          type="close"
          isActive={false}
          size="m"
          onClickHandler={() => console.log('Remove Track')}
        />
      </div>
    </li>
  );
}

export default PlaylistTrackRow;
