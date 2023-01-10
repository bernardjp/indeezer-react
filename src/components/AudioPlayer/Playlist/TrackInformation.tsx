import { Image, createStyles } from '@mantine/core';
import { TrackType } from '../../../types/AudioPlayer.types';

type Props = {
  track: TrackType | null
}

const useStyles = createStyles(() => ({
  cover: {
    filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 5.2392px 20.9569px) drop-shadow(rgba(0, 0, 0, 0.1) 0px 20.9569px 41.9137px)'
  }
}));

function TrackInformation(props: Props): JSX.Element {
  const { track } = props;

  const { classes } = useStyles();

  return (
    <Image
      className={classes.cover}
      src={track!.albumCover}
      width={320}
      radius={16}
    />
  );
}

export default TrackInformation;
