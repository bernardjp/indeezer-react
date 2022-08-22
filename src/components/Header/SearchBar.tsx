import { TextInput, Button, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FiSearch } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';

type searchFormValues = {
  search: string
}

const useStyles = createStyles((theme, _params: searchFormValues, getRef) => ({
  searchBarContainer: {
    alignItems: 'center',
    display: 'flex',
    margin: '0 auto 0 0',
    paddingLeft: '220px',
    width: '60%',

    '&:hover': {
      [`.${getRef('resetBtn')}`]: {
        visibility: _params.search === '' ? 'hidden' : 'visible',
        opacity: '100%'
      }
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: '0'
    }
  },
  searchIcon: {
    backgroundColor: 'transparent',
    color: theme.colors.dark[2],
    height: 'fit-content',
    padding: '3px 0 0 24px',
    transform: 'scale(1.1)',

    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'inherit'
    }
  },
  searchInputContainer: {
    width: ['-moz-available', '-webkit-fill-available']
  },
  searchInput: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : 'black',
    fontSize: '17px',
    padding: '0 14px',

    '::placeholder': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : 'black'
    }
  },
  resetIcon: {
    ref: getRef('resetBtn'),
    backgroundColor: theme.colors.dark[4],
    borderRadius: '50%',
    height: '24px',
    opacity: '0',
    padding: '0',
    transition: '0.15s',
    visibility: 'hidden',
    width: 'auto',
    marginTop: '2px',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.dark[5]
    },

    svg: {
      height: '20px',
      width: '20px',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[3],

      '&:hover': {
        color: theme.colors.dark[1]
      }
    }
  }
}));

function SearchBar() {
  const form = useForm({
    initialValues: {
      search: ''
    }
  });
  const { classes } = useStyles(form.values);

  const onSubmitHandler = (val: searchFormValues) => console.log(val);
  const onResetHandler = () => form.reset();

  return (
    <form
      className={classes.searchBarContainer}
      onSubmit={form.onSubmit((values) => onSubmitHandler(values))}
    >
      <Button type="submit" className={classes.searchIcon}>
        <FiSearch />
      </Button>
      <TextInput
        aria-label="Search"
        placeholder="Search"
        styles={{ input: classes.searchInput, root: classes.searchInputContainer }}
        variant="unstyled"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...form.getInputProps('search')}
      />
      <Button
        type="reset"
        className={classes.resetIcon}
        onClick={onResetHandler}
      >
        <VscClose />
      </Button>
    </form>
  );
}

export default SearchBar;
