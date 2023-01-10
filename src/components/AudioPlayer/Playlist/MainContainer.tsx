import { useContext } from 'react';
import { TrackType } from '../../../types/AudioPlayer.types';
import { PlaylistContext } from '../../Context/PlaylistContext';

function PlaylistMainContainer(): JSX.Element {
  const { playlist } = useContext(PlaylistContext);
  console.log(playlist);

  return (
    <div>
      <div>Playlist</div>
      <ul>
        {
          playlist.map((track: TrackType): JSX.Element => (
            <li key={track.trackID}>{track.trackTitle}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default PlaylistMainContainer;
