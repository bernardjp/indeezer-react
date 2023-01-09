import {
  Drawer, Image, Text, createStyles
} from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import AudioPlayerPlaylistButton from '../AudioPlayerPlaylistButton';

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
    background: `linear-gradient(233.13deg, rgb(246, 105, 60) 0%, ${theme.colors.red[6]} 89.29%)`,
    maxWidth: '100vw',
    padding: '2.5rem !important',
    width: '100vw'
  },
  header: {
    justifyContent: 'flex-start',
    margin: '0'
  },
  closeButton: {
    borderRadius: '50%',
    color: 'white',
    height: '40px',
    width: '40px',

    '&:hover': {
      backgroundColor: '#ffffff2e'
    },

    '& svg': {
      height: '32px',
      width: '32px'
    }
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'calc(100% - 80px)',
    padding: '0 4rem 80px 4rem'
  },
  cover: {
    filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 5.2392px 20.9569px) drop-shadow(rgba(0, 0, 0, 0.1) 0px 20.9569px 41.9137px)'
  },
  lyrics: {
    color: 'white',
    opacity: '0.65',
    textAlign: 'center',
    transition: '0.1s',
    width: '500px',

    '&:hover': {
      cursor: 'pointer',
      opacity: '1'
    }
  }
}));

function AudioPlayerPlaylistOverlay(props: Props): JSX.Element {
  const { tracks, opened, setOpened } = props;

  // const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Drawer
        classNames={{
          root: classes.root,
          drawer: classes.drawer,
          header: classes.header,
          closeButton: classes.closeButton,
          body: classes.body
        }}
        position="bottom"
        opened={opened}
        onClose={() => setOpened(false)}
        transitionDuration={500}
        size="full"
        zIndex={3}
      >
        <Image
          className={classes.cover}
          src={tracks.current?.albumCover}
          width={320}
          radius={16}
        />
        <Text
          className={classes.lyrics}
          size={42}
          fw="bolder"
        >Playlist
        </Text>
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
