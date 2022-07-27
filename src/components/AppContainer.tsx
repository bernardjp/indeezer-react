import { Container, createStyles } from '@mantine/core';

// this type is shared with the StyleProvider Component
type ChildrenType = JSX.Element | React.FC | null;

const useStyles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    maxWidth: '100%',
    minHeight: '100vh',
    padding: '0'
  }
});

function AppContainer(props: { children: ChildrenType | ChildrenType[] }) {
  const { classes } = useStyles();
  const { children } = props;

  return (
    <Container className={classes.container}>
      { children }
    </Container>
  );
}

export default AppContainer;
