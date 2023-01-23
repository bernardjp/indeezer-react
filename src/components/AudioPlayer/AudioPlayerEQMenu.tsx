import { useState } from 'react';
import {
  Menu, Switch, Radio, createStyles, keyframes
} from '@mantine/core';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  children: React.ReactNode | null
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
    boxShadow: '0px 5px 20px -6px rgba(0,0,0,0.3)',
    padding: '16px',
    paddingTop: '0'
  },
  label: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.dark[5],
    fontSize: '0.75rem',
    marginTop: '0.4rem',
    padding: '0',
    width: '13rem'
  },
  item: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5],
    cursor: 'default',
    marginTop: '1.1rem',
    padding: '0',
    width: '13rem',

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
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5],
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none'
  },
  radio: {
    borderRadius: '50%',
    cursor: 'pointer',
    height: '15px',
    width: '15px',
    position: 'absolute',
    right: '0',
    top: '3px'
  },
  radioIcon: {
    color: theme.colors.red[5],
    height: '10px',
    top: '6px',
    width: '10px',
    position: 'absolute',
    right: '3px',
    left: '-12px'
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
    border: theme.colorScheme === 'dark' ? '1px solid transparent' : '1px solid lightgray',
    cursor: 'pointer',
    height: '16px',
    width: '32px',
    minWidth: '32px'
  }
}));

function AudioPlayerEqualizer(props: Props): JSX.Element {
  const { children } = props;

  const [checked, setChecked] = useState<boolean>(true);
  const { classes } = useStyles();

  return (
    <Menu
      classNames={classes}
      position="top"
      closeOnItemClick={false}
      transition="pop"
    >
      <Menu.Target>
        {children}
      </Menu.Target>
      <Menu.Dropdown>
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
      </Menu.Dropdown>
    </Menu>
  );
}

export default AudioPlayerEqualizer;
