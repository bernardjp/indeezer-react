import { Badge, createStyles, BadgeVariant } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  fullBadge: {
    cursor: 'default',
    marginTop: '0.5rem',
    maxWidth: 'fit-content'
  },
  shortBadge: {
    alignItems: 'center',
    border: `1px solid ${theme.colors.dark[1]}`,
    borderRadius: '4px',
    color: theme.colors.dark[1],
    cursor: 'default',
    display: 'flex',
    fontSize: '0.65rem',
    height: '16px',
    justifyContent: 'center',
    marginRight: '1rem',
    width: '16px'
  }
}));

function StyledBadge(props: { text: string, variant: BadgeVariant }): JSX.Element {
  const { text, variant } = props;
  const { classes } = useStyles();
  return (
    <Badge className={classes.fullBadge} color="gray" radius="sm" variant={variant}>{text}</Badge>
  );
}

function StyledShortBadge(props: { text: string }) {
  const { text } = props;
  const { classes } = useStyles();
  return (
    <span className={classes.shortBadge}>{text}</span>
  );
}

export { StyledBadge, StyledShortBadge };
