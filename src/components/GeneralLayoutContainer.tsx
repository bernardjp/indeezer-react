import { Container, createStyles } from '@mantine/core';

// this type is shared with the StyleProvider Component
type ChildrenType = React.ReactNode | null;

const useStyles = createStyles({
  container: {
    display: 'flex',
    flexGrow: 1,
    margin: '0',
    maxWidth: '100%',
    padding: '0'
  }
});

function GeneralLayoutContainer(props: { children: ChildrenType | ChildrenType[] }) {
  const { classes } = useStyles();
  const { children } = props;

  return (
    <Container className={classes.container}>
      { children }
    </Container>
  );
}

export default GeneralLayoutContainer;
