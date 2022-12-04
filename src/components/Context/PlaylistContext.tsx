import { createContext, useMemo } from 'react';
import usePlaylistContext from './usePlaylistContext';

type ChildrenType = React.ReactNode | null;

const PlaylistContext = createContext<{
  playlist: Set<string>,
  setPlaylist: React.Dispatch<React.SetStateAction<Set<string>>>,
  addTrack: Function,
  removeTrack: Function
    }>({
      playlist: new Set(),
      setPlaylist: () => {},
      addTrack: () => {},
      removeTrack: () => {}
    });

function PlaylistContextProvider(props: { children: ChildrenType | ChildrenType[] }) {
  const { children } = props;
  const {
    playlist, setPlaylist, addTrack, removeTrack
  } = usePlaylistContext();

  // useMemo explanation:
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  const contextHandler = useMemo(() => ({
    playlist, setPlaylist, addTrack, removeTrack
  }), [playlist]);

  return (
    <PlaylistContext.Provider value={contextHandler}>
      { children }
    </PlaylistContext.Provider>
  );
}

export { PlaylistContextProvider, PlaylistContext };
