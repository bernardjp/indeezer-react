// eslint-disable-next-line no-unused-vars
import { ActionIcon, useMantineColorScheme, createStyles } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const useStyles = createStyles(() => ({
  button: {
    marginLeft: '1.5rem',
    transition: '0.15s'
  }
}));

function DarkThemeButton() {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div ref={ref}>
      <ActionIcon
        className={classes.button}
        color={dark ? 'gray' : 'dark'}
        radius="xl"
        variant={hovered ? 'default' : 'subtle'}
        onClick={() => toggleColorScheme()}
      >
        {dark ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />}
      </ActionIcon>
    </div>
  );
}

export default DarkThemeButton;
