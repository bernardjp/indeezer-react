import { createStyles, Burger } from '@mantine/core';
import { useHover } from '@mantine/hooks';

type BurgerButtonPropType = {
  isOpened: boolean,
  onClickHandler: () => void
}

const useStyles = createStyles((theme) => ({
  button: {
    display: 'none',
    marginRight: '0.8rem',

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: 'block'
    }
  }
}));

function BurgerMenuButton(props: BurgerButtonPropType) {
  const { isOpened, onClickHandler } = props;
  const { hovered, ref } = useHover();
  const { classes, theme } = useStyles();
  const title = isOpened ? 'Close navigation' : 'Open navigation';

  return (
    <div ref={ref} style={{ zIndex: 2 }}>
      <Burger
        color={isOpened || hovered ? theme.colors.red[5] : ''}
        className={classes.button}
        opened={isOpened}
        onClick={onClickHandler}
        title={title}
      />
    </div>
  );
}

export default BurgerMenuButton;
