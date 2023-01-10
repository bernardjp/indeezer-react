import { Drawer, createStyles } from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import { AudioPlayerButton } from '../AudioPlayerButton';
import AudioPlayerPlaylistButton from '../AudioPlayerPlaylistButton';
import TrackInformation from './TrackInformation';
import PlaylistMainContainer from './MainContainer';

type Props = {
  tracks: {
    current: TrackType | null;
    nextDisable: boolean;
    prevDisable: boolean;
  },
  opened: boolean,
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = createStyles((theme) => ({
  root: {
    width: '100vw'
  },
  drawer: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    maxWidth: '100vw',
    padding: '0 2.5rem 80px 2.5rem !important',
    width: '100vw'
  },
  body: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0 4rem 80px 4rem'
  },
  headerOriginal: {
    display: 'none'
  },
  headerNew: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '54px',
    alignItems: 'center'
  },
  playlistBody: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
}));

function AudioPlayerPlaylistOverlay(props: Props): JSX.Element {
  const { tracks, opened, setOpened } = props;
  const { classes } = useStyles();

  return (
    <>
      <Drawer
        classNames={{
          root: classes.root,
          drawer: classes.drawer,
          header: classes.headerOriginal,
          body: classes.body
        }}
        position="bottom"
        opened={opened}
        onClose={() => setOpened(false)}
        transitionDuration={500}
        size="full"
        zIndex={3}
      >
        <div className={classes.headerNew}>
          <AudioPlayerButton
            tooltip="Close"
            isDisable={false}
            type="close"
            isActive={false}
            size="m"
            onClickHandler={() => setOpened(false)}
          />
        </div>
        <div className={classes.playlistBody}>
          <TrackInformation track={tracks.current} />
          <PlaylistMainContainer />
        </div>
      </Drawer>

      <AudioPlayerPlaylistButton
        active={opened}
        currentTrack={tracks.current}
        onClickHandler={() => setOpened((val) => !val)}
      />
    </>
  );
}

export default AudioPlayerPlaylistOverlay;
