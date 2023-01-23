import { useContext, useEffect } from 'react';
import { shuffleArray } from '../Context/usePlaylistContext';
import { AudioPlayerContext } from '../Context/AudioPlayerContext';
import usePlaylistStore from '../../store/PlaylistStore';
import useTracksStore from '../../store/TracksStore';
import useAudioPlayerStore from '../../store/AudioPlayerStore';

const useAudioPlayer = () => {
  const audioPlayerRef = useContext(AudioPlayerContext);
  const audioPlayer = audioPlayerRef?.current;
  const BASE_URL = import.meta.env.VITE_BASE_SRC_URL;

  // States
  const playlist = usePlaylistStore((state) => state.playlist);
  const tracks = useTracksStore((state) => state);
  const {
    isLooping,
    isPlaying,
    isShuffled,
    order,
    index,
    nextTrack
  } = useAudioPlayerStore((state) => state);

  // Initialize the audio player when the first track is pushed into the playlist.
  useEffect(() => {
    if (playlist.length === 1 && audioPlayer!.src === BASE_URL) {
      setOrder();
      updateTracks();
      setTrackSource();
      setVolume(10);
      useAudioPlayerStore.setState({ isPlaying: true });
      resumePlaying();
    }
  }, [playlist]);

  // This effect is checking on playlist changes.
  // Update the order of the tracks in the playlist when the latter is updated.
  useEffect(() => {
    // Replacing the index with the value from the order list (at the 'index' position)
    // keeps the constant the current track -> the current track display doesn't change
    // if the order is shuffled.
    if (order.current.length > 0) {
      useAudioPlayerStore.setState({ index: order.current[index] });
    }

    setOrder();
    if (isShuffled) shuffleOrder();
    updateTracks();
  }, [isShuffled, playlist]);

  useEffect(() => {
    if (!audioPlayer) return;
    toggleAudioPlayerPlaying();
  }, [isPlaying]);

  // This effect updates the track when the looping option is changed
  useEffect(() => {
    updateTracks();
  }, [isLooping, playlist]);

  // This effect controls the behavior of the audioplayer when the track ends.
  useEffect(() => {
    audioPlayer?.addEventListener('ended', trackEndHandler);

    function trackEndHandler(): void {
      // Checks if it is the last track of the playlist.
      const isLastTrack = index === (order.current.length - 1);

      // Stop reproducing audio if its the last track of the playlist
      // and the loop option is set to disable
      if (isLooping === false && isLastTrack) {
        toggleAudioPlayerPlaying();
        useAudioPlayerStore.setState({ isPlaying: false });
        return;
      }

      // Reset the index and start playing from the begining.
      if (isLooping === 'list' && isLastTrack) {
        useAudioPlayerStore.setState({ index: 0 });

        if (isShuffled) shuffleOrder();

        updateTracks();
        setTrackSource();
        useAudioPlayerStore.setState({ isPlaying: true });
        audioPlayer!.autoplay = true;

        return;
      }

      // If the option of track-loop is disabled and the playlist is not finished then
      // skip to the next track.
      if (isLooping !== 'track' && !isLastTrack) {
        nextTrack();
      }
    }

    // Removes the old EventListener (multiples EventListeners can be attached to the same element
    // at the same time)
    return () => audioPlayer?.removeEventListener('ended', trackEndHandler);
  }, [isLooping, isShuffled, playlist]);

  // This effect handles the removal of tracks from the playlist
  useEffect(() => {
    // If the track removed is the last track of the playlist then reduce the index counter
    if (index === order.current.length && index !== 0) {
      useAudioPlayerStore.setState((state) => ({ index: state.index - 1 }));
      updateTracks();
    }

    if (playlist.length === 0) {
      setTrackSource();
    }
  }, [playlist, index]);

  useEffect(() => {
    updateTracks();
    setTrackSource();
  }, [index]);

  // ----- FUNCTIONS ----- //
  function updateTracks(): void {
    if (isLooping === 'list') {
      tracks.setTracks({
        current: playlist[order.current[index]],
        next: (order.current.length === 0),
        previous: (order.current.length === 0)
      });
    } else {
      tracks.setTracks({
        current: playlist[order.current[index]],
        next: (order.current.length === 0) || (index === (order.current.length - 1)),
        previous: (index === 0)
      });
    }
  }

  function setTrackSource(): void {
    if (!audioPlayer) return;

    if (playlist.length === 0) {
      audioPlayer!.src = BASE_URL;
    } else {
      audioPlayer!.src = playlist[order.current[index]].source;
    }
  }

  function toggleAudioPlayerPlaying(): void {
    isPlaying ? resumePlaying() : stopPlaying();
  }

  function stopPlaying(): void {
    audioPlayer!.pause();
    audioPlayer!.autoplay = false;
  }

  async function resumePlaying(): Promise<void> {
    await audioPlayer!.play();
    audioPlayer!.autoplay = true;
  }

  function setVolume(val: number): void {
    audioPlayer!.volume = val / 100;
  }

  function setOrder() : void {
    const updatedOrder = playlist.map((val, ind) => ind);
    order.current = updatedOrder;
  }

  function shuffleOrder(): void {
    const originalOrder = [...order.current];
    const slice = originalOrder.splice(0, originalOrder.indexOf(index) + 1);
    const shuffledOrder = slice.concat(shuffleArray(originalOrder));

    order.current = shuffledOrder;
  }
};

export default useAudioPlayer;
