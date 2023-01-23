/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { TrackType } from '../types/AudioPlayer.types';

interface TracksState {
  current: TrackType | null,
  next: boolean,
  previous: boolean
}

interface TracksStoreState extends TracksState {
  setTracks: (tracks: TracksState) => void
}

const useTracksStore = create<TracksStoreState>()((set) => ({
  current: null,
  next: true,
  previous: true,
  setTracks: (tracks: TracksState) => {
    set({
      current: tracks.current,
      next: tracks.next,
      previous: tracks.previous
    });
  }
}));

export default useTracksStore;
