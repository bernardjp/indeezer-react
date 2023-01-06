import { Menu, Input, createStyles } from '@mantine/core';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

type Props = {
  children: React.ReactNode | null
}

const useStyles = createStyles((theme) => ({
  // Menu default style override
  dropdown: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0px 5px 30px -2px rgba(0,0,0,0.3)',
    padding: '0'
  },
  item: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5],
    width: '20.5rem',
    padding: '0 1rem',
    minHeight: '3rem',
    transition: '0.2s',

    '&[data-hovered]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
    }
  },
  divider: {
    margin: '0'
  },
  itemLabel: {
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center'
  },
  // Custom styles
  inputContainer: {
    padding: '0.5rem 1rem'
  },
  searchInput: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    fontSize: '1rem',
    height: '2.1rem',
    minHeight: '2.1rem',
    transition: '0.1s',

    '&:hover': {
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[6]
    },

    '&:focus': {
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[6]
    },

    '&::placeholder': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.dark[5]
    }
  },
  title: {
    minHeight: '3rem',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5],

    '&:hover': {
      color: theme.colors.red[5],
      cursor: 'pointer'
    }
  },
  addPlaylist: {
    fontWeight: 'bold',
    color: theme.colors.red[5]
  },
  list: {
    minHeight: '8rem',
    margin: '0',
    padding: '0'
  }
}));

function AddTrackMenu(props: Props): JSX.Element {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <Menu classNames={classes} position="top" closeOnItemClick={false}>
      <Menu.Target>
        {children}
      </Menu.Target>
      <Menu.Dropdown>
        <SupportMenu>
          <Menu.Label className={classes.title}>
            <IoIosArrowBack style={{ marginRight: '0.5rem' }} />
            Back
          </Menu.Label>
        </SupportMenu>
        <Menu.Divider />
        <Menu.Label className={classes.inputContainer}>
          <Input
            classNames={{ input: classes.searchInput }}
            icon={<FiSearch style={{ fontSize: '1rem' }} />}
            placeholder="Search"
          />
        </Menu.Label>
        <Menu.Item className={classes.addPlaylist}>
          <FiPlus style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
          New Playlist
        </Menu.Item>
        <ul className={classes.list}>
          <Menu.Item component="li">Favorite Tracks</Menu.Item>
        </ul>
      </Menu.Dropdown>
    </Menu>
  );
}

function SupportMenu(props: { children: React.ReactNode | null }): JSX.Element {
  const { children } = props;

  return (
    <Menu>
      <Menu.Target>
        {children}
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>launch Track mix</Menu.Item>
        <Menu.Item>Don&apos;t recommend this track</Menu.Item>
        <Menu.Item>Share</Menu.Item>
        <Menu.Item>Report a problem</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default AddTrackMenu;
