import { Button, createStyles } from '@mantine/core';

type RoundButtonStyleType = {
  visible: boolean
}

type RoundButtonPropType = RoundButtonStyleType & {
  Icon: React.FC,
  onClickCallback: () => void
}

const useStyles = createStyles((theme, { visible }: RoundButtonStyleType) => ({
  button: {
    backgroundColor: 'white', // <-- checkear en Theme
    borderRadius: '50%',
    boxShadow: '0px 1px 8px #000000d1',
    color: 'black', // <-- checkear en Theme
    height: '36px',
    opacity: visible ? '100%' : '0%',
    padding: '0',
    transition: '0.2s',
    width: '36px',

    '&:hover': {
      transform: 'scale(120%)',
      backgroundColor: 'white' // <-- checkear en Theme
    }
  }
}));

function RoundButton(props: RoundButtonPropType) {
  const { visible, Icon, onClickCallback } = props;
  const { classes } = useStyles({ visible });

  return (
    <Button className={classes.button} onClick={onClickCallback}>
      <Icon /> {/* <-- checkear la escala de los iconos */}
    </Button>
  );
}

export default RoundButton;
