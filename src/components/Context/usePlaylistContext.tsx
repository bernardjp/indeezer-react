import { useState } from 'react';

function usePlaylistContext() {
  const [playlist, setPlaylist] = useState<Set<string>>(new Set());

  const addTrack = (track: string): void => {
    const newPlaylist = new Set(playlist).add(track);
    setPlaylist(newPlaylist);
  };

  const removeTrack = (track: string): void => {
    const newPlaylist = new Set(playlist);
    newPlaylist.delete(track);

    setPlaylist(newPlaylist);
  };

  return {
    playlist, setPlaylist, addTrack, removeTrack
  };
}

export default usePlaylistContext;
