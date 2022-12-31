/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';

// type Props = HTMLAudioElement | null
type Props = {
  audioPlayer: HTMLAudioElement | null,
  isPlaying: boolean
}

function useTrackSlider(props: Props) {
  const { audioPlayer, isPlaying } = props;
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
