import { useState } from 'react';
import {
  Menu, Switch, Radio, createStyles, keyframes
} from '@mantine/core';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  type: 'eq' | 'add',
  children: React.ReactNode | null,
  opened: boolean
}

const iconSlide = keyframes({
  'from, to': { transform: 'translate3d(0, 0, 0)' },
  '50%': { transform: 'translate3d(3px, 0, 0)' }
});

const useStyles = createStyles((theme) => ({
  dropdown: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    border: 'none',
    borderRadius: '10px',
    padding: '16px',
    paddingTop: '0',
    boxShadow: '0px 5px 30px -2px rgba(0,0,0,0.3)'
  },
  label: {
    fontSize: '0.75rem',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[5],
    width: '13rem',
    padding: '0',
    marginTop: '0.4rem'
  },
  item: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5],
    width: '13rem',
    padding: '0',
    marginTop: '1.1rem',

    '&[data-hovered]': {
      backgroundColor: 'transparent'
    }
  },
  divider: {
    margin: '0',
    marginTop: '1.1rem'
  },
  itemLabel: {
    fontSize: '0.75rem'
  },
  input: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5],
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  radio: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    cursor: 'pointer'
  },
  radioIcon: {
    color: theme.colors.red[5],
    height: '9px',
    width: '9px',
    top: '3px',
    right: '3px'
  },
  actionSpan: {
    alignItems: 'end',
    color: theme.colorScheme === 'dark' ? '#FFAD00' : theme.colors.red[5],
    display: 'flex',

    '&:hover': {
      '& svg': {
        animation: `${iconSlide} 0.3s`
      }
    }
  },
  switchTrack: {
    width: '38px',
    border: theme.colorScheme === 'dark' ? '1px solid transparent' : '1px solid lightgray',
    height: '16px',
    cursor: 'pointer'
  }
}));

function AudioPlayerMenuWrapper(props: Props): JSX.Element {
  const { type, children, opened } = props;
  const { classes } = useStyles();

  return (
    <Menu classNames={classes} opened={opened} position="top">
      <Menu.Target>
        {children}
      </Menu.Target>
      <Menu.Dropdown>
        {type === 'eq' ? EqualizerMenu() : AddTrackMenu()}
      </Menu.Dropdown>
    </Menu>
  );
}

function EqualizerMenu(): JSX.Element {
  const { classes } = useStyles();
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <>
      <Menu.Item>Audio Quality</Menu.Item>
      <Menu.Item>
        <Radio
          classNames={{
            body: classes.input,
            label: classes.itemLabel,
            radio: classes.radio,
            icon: classes.radioIcon
          }}
          label="Standard Quality"
          labelPosition="left"
          color="gray"
          checked
          readOnly
        />
      </Menu.Item>
      <Menu.Item>
        <a
          className={classes.input}
          href="https://www.deezer.com/us/offers?origin=audio_setting_premium"
          target="_blank"
          rel="noreferrer"
        >
          High Fidelity
          <span className={classes.actionSpan}>
            Try it
            <IoIosArrowForward />
          </span>
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Switch
          classNames={{
            body: classes.input,
            label: classes.itemLabel,
            track: classes.switchTrack
          }}
          label="Normalize Audio"
          labelPosition="left"
          color="red"
          checked={checked}
          onChange={() => setChecked((val) => !val)}
        />
      </Menu.Item>
      <Menu.Label>Adjusts sound to maintain the same volume level</Menu.Label>
    </>
  );
}

function AddTrackMenu(): JSX.Element {
  return (
    <div>Menu</div>
  );
}

export default AudioPlayerMenuWrapper;
