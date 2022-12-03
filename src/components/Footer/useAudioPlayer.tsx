import { useState } from 'react';

type Props = HTMLAudioElement | null;

const useAudioPlayer = (audioPlayer: Props) => {
  const [playing, setPlay] = useState<boolean>(false);

  const togglePlaying = (): void => {
    if (playing) {
      audioPlayer?.pause();
    } else {
      audioPlayer?.play();
    }

    setPlay((val) => !val);
  };

  return { playing, togglePlaying };
};

export default useAudioPlayer;
