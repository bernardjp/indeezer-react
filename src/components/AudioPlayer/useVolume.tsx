import {
  useEffect, useState, useRef, useContext
} from 'react';
import { AudioPlayerContext } from '../Context/AudioPlayerContext';

type useVolumeHandler = {
  volume: number,
  setVolume: React.Dispatch<React.SetStateAction<number>>,
  toggleMute: () => void
}

const useVolume = (): useVolumeHandler => {
  const audioPlayerRef = useContext(AudioPlayerContext);
  const audioPlayer = audioPlayerRef?.current;
  const DEFAULT_VALUE = 10;

  const lastValue = useRef(DEFAULT_VALUE);
  const [volume, setVolume] = useState<number>(DEFAULT_VALUE);

  useEffect(() => {
    if (!audioPlayer) return;

    audioPlayer!.volume = volume / 100;
  }, [volume]);

  const muteVolume = (): void => {
    lastValue.current = volume;
    setVolume(0);
  };

  const unmuteVolume = (): void => {
    setVolume(lastValue.current);
  };

  const toggleMute = (): void => {
    volume === 0 ? unmuteVolume() : muteVolume();
  };

  return {
    volume, setVolume, toggleMute
  };
};

export default useVolume;
