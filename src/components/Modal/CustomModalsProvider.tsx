import { ModalProps, createStyles } from '@mantine/core';
import { ModalsProvider, ModalsProviderProps } from '@mantine/modals';

const useStyles = createStyles(() => ({
  inner: {
    alignItems: 'center',
    '--removed-scroll-width': '0px'
  },
  modal: {
    backgroundColor: 'white',
    display: 'flex',
    height: 'auto',
    justifyContent: 'center',
    maxWidth: '600px',
    width: '100%',
    padding: '5px !important'
  },
  header: {
    margin: '0',
    position: 'absolute',
    right: '10px',
    top: '10px',
    zIndex: 2
  }
}));

function CustomModalProvider(props: ModalsProviderProps) {
  const { children } = props;
  const { classes } = useStyles();

  const modalsCustomProps: ModalProps = {
    classNames: { modal: classes.modal, header: classes.header, inner: classes.inner },
    opened: false,
    onClose: () => {},
    overlayColor: '#191922',
    overlayOpacity: 0.8
  };

  return (
    <ModalsProvider modalProps={modalsCustomProps}>
      { children }
    </ModalsProvider>
  );
}

export default CustomModalProvider;
