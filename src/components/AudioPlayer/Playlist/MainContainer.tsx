/* eslint-disable no-unused-vars */
import {
  createStyles, Group, Switch, Text
} from '@mantine/core';
import { useState } from 'react';
import { TrackType } from '../../../types/AudioPlayer.types';
import PlaylistTrackRow from './PlaylistTrackRow';
import usePlaylistStore from '../../../store/PlaylistStore';
import useAudioPlayerStore from '../../../store/AudioPlayerStore';
import { getFullFormatedTimer } from '../../../utils/timeFormat';

type Props = {
  currentTrack: TrackType | null
}

const useStyles = createStyles((theme) => ({
  container: {
    marginLeft: '3rem',
    maxWidth: '1280px',
    width: 'calc(100% - 320px)',

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      marginLeft: '0',
      width: '100%'
    }

    // [`@media (max-width: ${theme.breakpoints.xs}px)`]: {

    // }
  },
  titleContainer: {
    alignItems: 'center',
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]}`,
    display: 'flex',
    fontSize: '15px',
    height: '50px',
    justifyContent: 'space-between'
  },
  playlistContainer: {
    padding: '0',
    margin: '0'
  },
  switchTrack: {
    border: theme.colorScheme === 'dark' ? '1px solid transparent' : '1px solid lightgray',
    cursor: 'pointer',
    height: '16px',
    width: '32px',
    minWidth: '32px'
  },
  input: {
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5],
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      display: 'none'
    }
  }
}));

function PlaylistMainContainer(props: Props): JSX.Element {
  const { currentTrack } = props;
  const playlist = usePlaylistStore((state) => state.playlist);
  const pickTrack = useAudioPlayerStore((state) => state.pickTrack);

  const [checked, setChecked] = useState(true);
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Group spacing={0}>
          <Text>Queue</Text>
          <Text c="dimmed">
            &nbsp;·&nbsp;
            {playlist.length} {playlist.length > 1 ? 'tracks' : 'track' }
          </Text>
          <Text c="dimmed">
            &nbsp;·&nbsp;
            {getFullFormatedTimer(
              playlist.reduce((acc, track) => acc + track.duration, 0)
            )}
          </Text>
        </Group>
        <Group>
          <Switch
            classNames={{
              body: classes.input,
              track: classes.switchTrack
            }}
            label="Automated recommendations"
            labelPosition="left"
            color="red"
            checked={checked}
            onChange={() => setChecked((val) => !val)}
          />
        </Group>
      </div>
      <ul className={classes.playlistContainer}>
        {
          playlist.map((track: TrackType, index: number): JSX.Element => {
            const isCurrent = track.trackID === currentTrack?.trackID;

            return (
              <PlaylistTrackRow
                key={track.trackID}
                track={track}
                trackIndex={index}
                isCurrent={isCurrent}
                onClickHandler={pickTrack}
              />
            );
          })
        }
      </ul>
    </div>
  );
}

export default PlaylistMainContainer;
