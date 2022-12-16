import { createContext, useMemo } from 'react';
import { TrackType } from '../../types/AudioPlayer.types';
import { usePlaylistContext } from './usePlaylistContext';

type ChildrenType = React.ReactNode | null;

const PlaylistContext = createContext<{
  playlist: Array<TrackType>,
  addTrack: Function,
  removeTrack: Function,
  clearList: Function
    }>({
      playlist: [],
      addTrack: () => {},
      removeTrack: () => {},
      clearList: () => {}
    });

function PlaylistContextProvider(props: { children: ChildrenType | ChildrenType[] }) {
  const { children } = props;
  const {
    playlist, addTrack, removeTrack, clearList
  } = usePlaylistContext();

  // useMemo explanation:
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  const contextHandler = useMemo(() => ({
    playlist, addTrack, removeTrack, clearList
  }), [playlist]);

  return (
    <PlaylistContext.Provider value={contextHandler}>
      { children }
    </PlaylistContext.Provider>
  );
}

export { PlaylistContextProvider, PlaylistContext };
