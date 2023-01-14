import { useContext } from 'react';
import { createStyles } from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import { PlaylistContext } from '../../Context/PlaylistContext';
import PlaylistTrackRow from './PlaylistTrackRow';

type Props = {
  currentTrack: TrackType | null
}

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    marginLeft: '3rem'
  }
}));

function PlaylistMainContainer(props: Props): JSX.Element {
  const { currentTrack } = props;
  const { playlist } = useContext(PlaylistContext);
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div>Playlist</div>
      <ul style={{ padding: '0' }}>
        {
          playlist.map((track: TrackType): JSX.Element => {
            const isCurrent = track.trackID === currentTrack?.trackID;

            return <PlaylistTrackRow key={track.trackID} track={track} isCurrent={isCurrent} />;
          })
        }
      </ul>
    </div>
  );
}

export default PlaylistMainContainer;
