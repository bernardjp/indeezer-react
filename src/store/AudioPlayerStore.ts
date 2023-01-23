/* eslint-disable no-unused-vars */
import React, { createRef } from 'react';
import { create } from 'zustand';

type AudioPlayerState = {
  isPlaying: boolean,
  isLooping: 'list' | 'track' | false,
  isShuffled: boolean,
  order: React.MutableRefObject<number[]>,
  index: number
}

type AudioPlayerActions = {
  togglePlaying: () => void,
  toggleLooping: () => void,
  toggleShuffle: () => void,
  nextTrack: () => void,
  prevTrack: () => void,
  pickTrack: (trackID: number) => void
}

const order = createRef<number[]>() as React.MutableRefObject<number[]>;
order.current = [];

const useAudioPlayerStore = create<AudioPlayerState & AudioPlayerActions>()((set, get) => ({
  isLooping: false,
  isPlaying: false,
  isShuffled: false,
  index: 0,
  order,
  toggleLooping: () => set((state) => {
    if (state.isLooping === 'list') return { isLooping: 'track' };
    if (state.isLooping === 'track') return { isLooping: false };

    return { isLooping: 'list' };
  }),
  togglePlaying: () => set((state) => ({ isPlaying: !(state.isPlaying) })),
  toggleShuffle: () => set((state) => ({ isShuffled: !(state.isShuffled) })),
  nextTrack: () => {
    if (get().isLooping && order.current.length - 1 === get().index) {
      set(() => ({ index: 0 }));
    } else {
      set((state) => ({ index: state.index + 1 }));
    }
  },
  prevTrack: () => {
    if (get().isLooping && order.current.indexOf(get().index) === 0) {
      set(() => ({ index: order.current.length - 1 }));
    } else {
      set((state) => ({ index: state.index - 1 }));
    }
    console.log('index', get().index);
  },
  pickTrack: (trackIndex) => {
    console.log('track index', trackIndex);
    console.log('index', get().index);
    console.log('order', order.current);

    set(() => ({ index: order.current[trackIndex] }));
  }
}));

export default useAudioPlayerStore;
