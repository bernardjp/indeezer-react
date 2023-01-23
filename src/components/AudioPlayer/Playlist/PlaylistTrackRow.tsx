/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Image, createStyles, Text, Group
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { TrackType } from '../../../types/AudioPlayer.types';
import { StyledShortBadge } from '../../Utils/StyledBadge';
import { AudioPlayerButton, AudioPlayerOptionsButton, PlaylistTrackControlButton } from '../AudioPlayerButton';
import AudioPlayerLyricsOverlay from '../AudioPlayerLyrics';
import { getFormatedTimer } from '../../../utils/timeFormat';
import usePlaylistStore from '../../../store/PlaylistStore';
import useAudioPlayerStore from '../../../store/AudioPlayerStore';

type Props = {
  track: TrackType,
  trackIndex: number,
  isCurrent: boolean,
  onClickHandler: Function
}

const useStyles = createStyles((theme, params: { hovered: boolean }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    height: '56px',
    padding: '0 0.5rem',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
    }
  },
  trackTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
    width: '-moz-available' // Check attribute for other vendors
  },
  textContainer: {
    alignItems: 'baseline',
    flexWrap: 'nowrap',
    width: '-moz-available' // Check attribute for other vendors
  },
  buttonContainer: {
    gap: '7px',
    minWidth: '112px'
  },
  titleText: {
    fontSize: '15px',
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
    width: '6.75rem',
    marginLeft: '2rem'
  },
  trackDuration: {
    color: 'gray',
    fontSize: '14px',
    marginLeft: '2rem',
    width: '40px'
  },
  trackControl: {
    display: params.hovered ? 'flex' : 'none',
    background: 'white',
    color: 'black',
    left: '3px',
    position: 'absolute',
    zIndex: 1
  },
  active: {
    color: theme.colors.red[5]
  }
}));

function PlaylistTrackRow(props: Props): JSX.Element {
  const {
    track, trackIndex, isCurrent, onClickHandler
  } = props;

  // TO-DO: Move the state. Consider using state management library
  const [liked, setLiked] = useState(false);

  const removeTrack = usePlaylistStore((state) => state.removeTrack);
  const { isPlaying, togglePlaying } = useAudioPlayerStore((state) => ({
    isPlaying: state.isPlaying,
    togglePlaying: state.togglePlaying
  }));

  const { hovered, ref } = useHover();
  const { classes, cx } = useStyles({ hovered });

  return (
    <div className={classes.container} ref={ref} draggable>
      <div className={classes.trackTitle}>
        {(hovered || isCurrent) && (
        <PlaylistTrackControlButton
          size="m"
          type={!isCurrent ? 'play' : isPlaying ? 'pause' : 'play'}
          onClickHandler={
            isCurrent
              ? () => togglePlaying()
              : () => onClickHandler(trackIndex)
            }
          isDisable={false}
          isActive={isCurrent && isPlaying}
        />
        )}
        <Image src={track.albumThumbnail} height={40} width={40} radius={4} />
        <Group className={classes.textContainer}>
          <Text
            className={cx(classes.titleText, { [classes.active]: isCurrent })}
            onClick={
              isCurrent
                ? () => togglePlaying()
                : () => onClickHandler(trackIndex)
              }
          >
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
        className={cx(classes.titleText, classes.artistName, { [classes.active]: isCurrent })}
      >
        {track.artistName}
      </Text>
      <Text className={cx(classes.trackDuration, { [classes.active]: isCurrent })}>
        {getFormatedTimer(track.duration)}
      </Text>
      <div style={{ marginLeft: '2rem', opacity: '0.7' }}>
        <AudioPlayerButton
          tooltip=""
          isDisable={false}
          type="cross"
          isActive={false}
          size="m"
          onClickHandler={() => removeTrack(track.trackID)}
        />
      </div>
    </div>
  );
}

export default PlaylistTrackRow;
