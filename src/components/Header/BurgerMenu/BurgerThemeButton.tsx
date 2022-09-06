import {
  Switch, useMantineColorScheme, createStyles
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0.2rem'
  },
  switch: {
    cursor: 'pointer'
  }
}));

function BurgerThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const dark = colorScheme === 'dark';

  return (
    <div className={classes.container}>
      Dark Theme
      <Switch
        classNames={{ input: classes.switch }}
        color="red"
        checked={dark}
        aria-label="Dark theme toggle"
        onChange={() => toggleColorScheme()}
      />
    </div>
  );
}

export default BurgerThemeButton;
