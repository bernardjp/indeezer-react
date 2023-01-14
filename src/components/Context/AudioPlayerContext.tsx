import { createContext, createRef } from 'react';

type ChildrenType = React.ReactNode | null;

const AudioPlayerContext = createContext<React.RefObject<HTMLAudioElement> | null>(null);
const AudioPlayerRef = createRef<HTMLAudioElement>();

function AudioPlayerContextProvider(props: { children: ChildrenType | ChildrenType[] }) {
  const { children } = props;

  return (
    <AudioPlayerContext.Provider value={AudioPlayerRef}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export { AudioPlayerContextProvider, AudioPlayerContext };
