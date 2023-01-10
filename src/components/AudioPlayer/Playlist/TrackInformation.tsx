import { useState } from 'react';
import {
  Image, Text, Group, createStyles
} from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import AudioPlayerLyricsOverlay from '../AudioPlayerLyrics';
import {
  AudioPlayerAddTrackButton, AudioPlayerButton, AudioPlayerOptionsButton
} from '../AudioPlayerButton';
import StyledBadge from '../../Utils/StyledBadge';

type Props = {
  track: TrackType | null
}

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cover: {
    filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 5.2392px 20.9569px) drop-shadow(rgba(0, 0, 0, 0.1) 0px 20.9569px 41.9137px)'
  },
  buttons: {
    margin: '20px 0 14px 0'
  },
  text: {
    marginBottom: '0.5rem',

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '3px'
    }
  },
  badgeContainer: {
    marginTop: '0.5rem'
  }
}));

function TrackInformation(props: Props): JSX.Element {
  const { track } = props;

  const [liked, setLiked] = useState(false);
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Image
        className={classes.cover}
        src={track!.albumCover}
        width={320}
        radius={4}
      />
      <Group spacing={4} className={classes.buttons}>
        <AudioPlayerLyricsOverlay image={track?.albumCover || ''} />
        <AudioPlayerAddTrackButton size="m" isDisable={false} />
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
      <Text
        className={classes.text}
        component="a"
        href={`https://www.deezer.com/us/album/${track?.albumID}`}
        weight="bolder"
        target="_blank"
        size={17}
      >
        {track?.trackTitle}
      </Text>
      <Text
        className={classes.text}
        component="a"
        href={`https://www.deezer.com/us/artist/${track?.artistID}`}
        weight="lighter"
        target="_blank"
        color="white"
      >
        {track?.artistName}
      </Text>
      <div className={classes.badgeContainer}>
        {track?.explicitLyrics && <StyledBadge text="EXPLICIT" variant="outline" />}
      </div>
    </div>
  );
}

export default TrackInformation;
