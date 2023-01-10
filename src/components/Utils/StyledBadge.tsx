import { Badge, createStyles, BadgeVariant } from '@mantine/core';

const useStyles = createStyles(() => ({
  badge: {
    marginTop: '0.5rem',
    maxWidth: 'fit-content'
  }
}));

function StyledBadge(props: { text: string, variant: BadgeVariant }): JSX.Element {
  const { text, variant } = props;
  const { classes } = useStyles();
  return (
    <Badge className={classes.badge} color="gray" radius="sm" variant={variant}>{text}</Badge>
  );
}

export default StyledBadge;
