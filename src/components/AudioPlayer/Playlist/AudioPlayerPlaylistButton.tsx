import { Image, createStyles } from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';
import { PlaceholderPlaylistIcon } from '../AudioPlayerIcons';

type Props = {
  active: boolean,
  currentTrack: TrackType | null,
  onClickHandler: () => void
}

const useStyles = createStyles((theme) => ({
  container: {
    marginLeft: '12px',
    display: 'flex',
    alignItems: 'center'

  },
  separator: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    marginRight: '20px',
    width: '1px',
    height: '28px'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[7],
    cursor: 'pointer',
    display: 'flex',
    fontSize: '0.75rem',
    gap: '12px',
    padding: '8px',
    borderRadius: '4px'
  },
  active: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
  }
}));

function AudioPlayerPlaylistButton(props: Props) {
  const { active, currentTrack, onClickHandler } = props;
  const { classes, cx } = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.separator} />
      <button
        className={cx(classes.button, { [classes.active]: active })}
        type="button"
        onClick={onClickHandler}
      >
        {
          currentTrack
            ? (
              <Image
                width={28}
                height={28}
                radius={4}
                src={currentTrack.albumThumbnail}
              />
            )
            : <PlaceholderPlaylistIcon />
          }
        Queue
      </button>
    </div>
  );
}

export default AudioPlayerPlaylistButton;
