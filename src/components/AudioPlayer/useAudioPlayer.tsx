import {
  useState, useRef, useEffect, useContext
} from 'react';
import { TrackType } from '../../types/AudioPlayer.types';
import { PlaylistContext } from '../Context/PlaylistContext';
import { shuffleArray } from '../Context/usePlaylistContext';

type Props = {
  audioPlayer: HTMLAudioElement | null
}

const useAudioPlayer = (props: Props) => {
  const { audioPlayer } = props;
  const { playlist } = useContext(PlaylistContext);

  // States
  // Analyze the posibility of using useReducer to handle the state-bundle below.
  const [isLooping, setLoop] = useState<('track' | 'list' | false)>(false);
  const [isPlaying, setPlay] = useState<boolean>(false);
  const [isShuffled, setShuffle] = useState<boolean>(false);

  const [tracks, setTracks] = useState<{
    current: TrackType | null,
    nextDisable: boolean,
    prevDisable: boolean
  }>({
    current: null,
    nextDisable: true,
    prevDisable: true
  });

  // The order is decoupled from the playlist. This way we can shuffle the order of the
  // playlist without modifying the original playlist triggering a re-render.
  const order = useRef<Array<number>>([]);
  const index = useRef<number>(0);

  // Initialize the audio player when the first track is pushed into the playlist.
  useEffect(() => {
    if (playlist.length === 1 && audioPlayer!.src === '') {
      setOrder();
      updateTracks();
      setTrackSource();
      setPlay(true);
      setVolume(10); // Set to 50 in prod..
    }
  }, [playlist]);

  // This effect is checking on playlist changes.
  // Update the order of the tracks in the playlist when the latter is updated.
  useEffect(() => {
    isShuffled ? shuffleOrder() : setOrder();
    updateTracks();
  }, [isShuffled, playlist]);

  // This effect controls the behavior of the audioplayer when the track ends.
  useEffect(() => {
    audioPlayer?.addEventListener('ended', trackEndHandler);

    function trackEndHandler(): void {
      // Checks if it is the last track of the playlist.
      const isLastTrack = order.current.indexOf(index.current) === (order.current.length - 1);

      // Stop reproducing audio if its the last track of the playlist
      // and the loop option is set to disable
      if (isLooping === false && isLastTrack) {
        stopPlaying();
        return;
      }

      // Reset the index and start playing from the begining.
      if (isLooping === 'list' && isLastTrack) {
        index.current = 0;

        if (isShuffled) shuffleOrder();

        updateTracks();
        setTrackSource();
        setPlay(true);

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

  function updateTracks(): void {
    if (isLooping) {
      // if the list is looped then the value of the track object changes.
      // the next/prev nav-buttons are only disabled if the list contains just one track.
      setTracks({
        current: playlist[index.current],
        nextDisable: (order.current.length === 0),
        prevDisable: (order.current.length === 0)
      });
    } else {
      // "nextDisable" takes the current position of the "index" and checks if it is the last
      // value on the "order" array. This value is valid even if the "order" array is shuffled.
      // NOTE: During the first render the current index is -1 because the array is empty,
      // matching out current array's length (0 - 1).
      setTracks({
        current: playlist[order.current.indexOf(index.current)],
        nextDisable: (order.current.indexOf(index.current) === order.current.length - 1),
        prevDisable: (index.current === 0)
      });
    }
  }

  function setTrackSource(): void {
    audioPlayer!.src = playlist[order.current.indexOf(index.current)].source;
  }

  function setVolume(val: number): void {
    audioPlayer!.volume = val / 100;
  }

  function setOrder() : void {
    const updatedOrder = playlist.map((val, ind) => ind);
    order.current = updatedOrder;
  }

  function togglePlaying(): void {
    isPlaying ? stopPlaying() : resumePlaying();
  }

  function toggleLooping(): void {
    // if isLooping is 'list' then the 'prevTrack' and 'nextTack' have a added behavior:
    // - if the track is the last one (index.current === order.current.length - 1) then
    //   the next track is the first on the order array (order.current[0])
    // - if the track is the first one (index.current === 0) then
    //   the previous track is the last on the order array (order.current.length - 1)
    // this ensures the list navigation keeps working on list-loops.
    switch (isLooping) {
      case false:
        setLoop('track');
        break;
      case 'track':
        setLoop('list');
        break;
      case 'list':
        setLoop(false);
        break;

      default:
        setLoop(false);
        break;
    }
  }

  function toggleShuffle(): void {
    if (isShuffled) {
      setOrder();
    } else {
      shuffleOrder();
    }

    setShuffle((val) => !val);
  }

  function nextTrack(): void {
    // If the list is looping and is the last track of the list then set
    // the next index to 0 so the list starts again.
    if (isLooping && order.current.length - 1 === index.current) {
      index.current = 0;
      shuffleOrder();
    } else {
      index.current += 1;
    }

    updateTracks();
    setTrackSource();
  }

  function prevTrack(): void {
    // If the list is looping and is the first track of the list then set
    // the previuos index to the last place of the list, so the list loops backwards too.
    if (isLooping && order.current.indexOf(index.current) === 0) {
      index.current = order.current.length - 1;
    } else {
      index.current -= 1;
    }

    updateTracks();
    setTrackSource();
  }

  function stopPlaying(): void {
    audioPlayer!.pause();
    audioPlayer!.autoplay = false;

    setPlay((val) => !val);
  }

  function resumePlaying(): void {
    // console.log(tracks.current?.trackTitle);

    audioPlayer!.play();
    audioPlayer!.autoplay = true;

    setPlay((val) => !val);
  }

  function shuffleOrder(): void {
    // Copy the original order, disects this copy in 2 and shuffles the second part.
    // Then it concatenates both parts ---> [1st part not shuffled] * [2nd part shuffled]
    const originalOrder = [...order.current];
    const slice = originalOrder.splice(0, originalOrder.indexOf(index.current) + 1);
    const shuffledOrder = slice.concat(shuffleArray(originalOrder));

    order.current = shuffledOrder;

    console.log(order.current);
    console.log(index.current);
    console.log('shuffled rest', shuffledOrder);
  }

  return {
    isPlaying,
    isLooping,
    isShuffled,
    tracks,
    togglePlaying,
    toggleLooping,
    toggleShuffle,
    nextTrack,
    prevTrack
  };
};

export default useAudioPlayer;
