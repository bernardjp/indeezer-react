import {
  useState, useEffect, useRef, useContext
} from 'react';
import { AudioPlayerContext } from '../Context/AudioPlayerContext';
import useAudioPlayerStore from '../../store/AudioPlayerStore';

function useTrackSlider() {
  const audioPlayerRef = useContext(AudioPlayerContext);
  const audioPlayer = audioPlayerRef!.current;

  const isPlaying = useAudioPlayerStore((state) => state.isPlaying);

  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const animationRef = useRef<number>(0);

  // Setup the seekbar when the audio is loaded and ready to play
  useEffect(() => {
    setDuration(audioPlayer?.duration || 0);
  }, [audioPlayer?.onloadedmetadata, audioPlayer?.readyState]);

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      cancelAnimationFrame(animationRef.current);
    }
  }, [isPlaying]);

  function whilePlaying(): void {
    setCurrentTime(audioPlayer!.currentTime);
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  function onChangeHandler(val: number): void {
    setCurrentTime(val);
    audioPlayer!.currentTime = val;
  }

  return {
    currentTime,
    duration,
    onChangeHandler
  };
}

export default useTrackSlider;
