import { HoverCard, Slider, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  background: {
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0px 5px 30px -2px rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    padding: '16px'
  },
  root: {
    width: '210px'
  },
  thumb: { // .mantine-Slider-thumb
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.dark[1]}`,
    backgroundColor: '#fff',
    height: '20px',
    width: '20px',
    boxShadow: '0px 0px 19px -6px black'
  },
  bar: { // .mantine-Slider-bar  --->  Filled part of the track
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.red[5]
  },
  track: { // track  -->  .mantine-Slider-track  -->  Track element, contains all other elements
    height: '5px',

    '&::before': { // Unfilled part of the track
      backgroundColor: '#b2b2b2'
    }
  }
}));

type Props = {
  children: React.ReactNode | null,
  onChangeHandler: React.Dispatch<React.SetStateAction<number>>,
  volume: number
}

function AudioPlayerVolume(props: Props) {
  const { children, onChangeHandler, volume } = props;
  const { classes } = useStyles();

  return (
    <HoverCard position="top" width={240}>
      <HoverCard.Target>
        {children}
      </HoverCard.Target>
      <HoverCard.Dropdown className={classes.background}>
        <Slider
          classNames={{
            bar: classes.bar,
            root: classes.root,
            thumb: classes.thumb,
            track: classes.track
          }}
          size="sm"
          radius="md"
          label={null}
          onChange={(e) => onChangeHandler(e)}
          value={volume}
        />
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export default AudioPlayerVolume;
