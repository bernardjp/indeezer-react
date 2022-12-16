import { useState } from 'react';
import { TrackType } from '../../types/AudioPlayer.types';

// HELPER FUNCTIONS ---
const checkTrackDuplicates = (list: Array<TrackType>, newTrack: TrackType): boolean => {
  const duplicates = list.filter((track: TrackType) => track.trackID === newTrack.trackID);
  return Boolean(duplicates.length);
};

const filterTrackById = (list: Array<TrackType>, id: number): Array<TrackType> => {
  const filteredTracks = list.filter((track: TrackType) => track.trackID !== id);
  return filteredTracks;
};

// Richard Durstenfeld modern version of the Fisher-Yates algorithm to
// shuffle arrays designed for computer use.
// TO-DO: Move to UTILS folder
// eslint-disable-next-line no-unused-vars
export const shuffleArray = (list: Array<number>) => {
  const newList = [...list];

  for (let i = newList.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newList[i];
    newList[i] = newList[j];
    newList[j] = temp;
  }

  return newList;
};

function usePlaylistContext() {
  const [playlist, setPlaylist] = useState<Array<TrackType>>([]);

  // const getTrack = (index: number): TrackType => playlist[index];

  const addTrack = (track: TrackType): void => {
    const isDuplicated = checkTrackDuplicates(playlist, track);
    if (!isDuplicated) setPlaylist([...playlist, track]);
  };

  const removeTrack = (id: number): void => {
    const newPlaylist = filterTrackById(playlist, id);
    setPlaylist(newPlaylist);
  };

  const clearList = (): void => {
    setPlaylist([]);
  };

  return {
    playlist, addTrack, removeTrack, clearList
  };
}

export { usePlaylistContext };
