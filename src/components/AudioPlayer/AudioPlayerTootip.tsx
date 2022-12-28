import { Tooltip, createStyles } from '@mantine/core';

type Props = {
  tooltip: string,
  children: React.ReactNode | null
}

const useStyles = createStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.colors.dark[4],
    boxShadow: theme.colorScheme === 'dark' ? '0px -1px 10px -8px rgba(0,0,0,0.5)' : '0px 0px 10px -8px rgba(0,0,0,0.1)',
    fontSize: '0.7rem'
  }
}));

function AudioPlayerTooltip(props: Props): JSX.Element {
  const {
    children,
    tooltip
  } = props;

  const { classes } = useStyles();
  console.log(tooltip);

  return (
    <Tooltip
      classNames={{ tooltip: classes.tooltip }}
      label={tooltip}
      disabled={tooltip === ''}
      offset={8}
      transition="skew-down"
      transitionDuration={70}
      withArrow
      arrowSize={6}
    >
      {children}
    </Tooltip>
  );
}

export default AudioPlayerTooltip;
