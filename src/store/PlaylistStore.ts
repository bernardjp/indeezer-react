/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { TrackType } from '../types/AudioPlayer.types';

type PlaylistStoreState = {
  playlist: Array<TrackType>,
  isOpen: boolean
}

type PlaylistStoreActions = {
  addTrack: (track: TrackType) => void,
  removeTrack: (id: number) => void,
  clearPlaylist: () => void,
  toggleOpenPlaylist: () => void,
  setOpen: (value: boolean) => void
}

// HELPER FUNCTIONS ---
const checkTrackDuplicates = (list: Array<TrackType>, newTrack: TrackType): boolean => {
  const duplicates = list.filter((track: TrackType) => track.trackID === newTrack.trackID);
  return Boolean(duplicates.length);
};

const filterTrackById = (list: Array<TrackType>, id: number): Array<TrackType> => {
  const filteredTracks = list.filter((track: TrackType) => track.trackID !== id);
  return filteredTracks;
};

const usePlaylistStore = create<PlaylistStoreState & PlaylistStoreActions>()((set) => ({
  playlist: [],
  isOpen: false,
  addTrack: (track) => {
    set((state) => {
      const isDuplicated = checkTrackDuplicates(state.playlist, track);

      if (!isDuplicated) return ({ playlist: [...state.playlist, track] });
      return ({ playlist: state.playlist });
    });
  },
  removeTrack: (id) => {
    set((state) => {
      const newPlaylist = filterTrackById(state.playlist, id);
      return ({ playlist: newPlaylist });
    });
  },
  clearPlaylist: () => set(() => ({ playlist: [] })),
  toggleOpenPlaylist: () => set((state) => ({ isOpen: !(state.isOpen) })),
  setOpen: (value) => set({ isOpen: value })
}));

export default usePlaylistStore;
