import { Image, createStyles } from '@mantine/core';
import * as PropTypes from 'prop-types';
import NavbarAnchor from '../Utils/NavbarAnchor';
import IconAlbum from '../../assets/icon_album.png';
import IconArtist from '../../assets/icon_artist.png';
import IconChart from '../../assets/icon_top_10.png';
import IconPlaylist from '../../assets/icon_playlist.png';
import IconPodcast from '../../assets/icon_podcast.png';
import IconTrack from '../../assets/icon_track.png';

type SideNavbarAnchorPropType = {
  route: string,
  text: string,
  theme: 'dark' | 'light',
  currentActiveType: string
}

SideNavbarAnchor.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  currentActiveType: PropTypes.string.isRequired
};

const useStyles = createStyles((theme) => ({
  anchor: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.9rem',
    borderLeft: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[0]}`,
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: '1.7rem',
    margin: '0.6rem 0',
    padding: '0 1.6rem',
    transition: '0.075s',
    justifyContent: 'left',

    img: {
      maxWidth: '25px',
      filter: 'invert(100%)'
    },

    '&:hover': {
      color: theme.colors.red[5],
      textDecoration: 'none',

      img: {
        filter: 'invert(64%) sepia(85%) saturate(3667%) hue-rotate(324deg) brightness(100%) contrast(101%)'
      }
    }
  },
  active: {
    borderLeft: `3px solid ${theme.colors.red[5]}`,
    color: theme.colors.red[5],
    textDecoration: 'none',

    img: {
      filter: 'invert(64%) sepia(85%) saturate(3667%) hue-rotate(324deg) brightness(100%) contrast(101%)'
    }
  }
}));

function SideNavbarAnchor(props: SideNavbarAnchorPropType) {
  const {
    // TO-DO: use the 'theme' argument to set Dark Mode / Light Mode
    // eslint-disable-next-line no-unused-vars
    route, text, theme, currentActiveType
  } = props;
  const { classes, cx } = useStyles();
  const icon = getIcon(route);

  return (
    <NavbarAnchor
      route={route}
      styleClasses={cx(classes.anchor, { [classes.active]: currentActiveType === route })}
      key={route}
    >
      {/*
        The image below is wrapped around a div because the width of the image cannot be
        adjusted through the style API of Mantine (probably due to a bug)
      */}
      <div style={{ width: 'auto' }}>
        <Image src={icon} alt={`${text}-icon`} />
      </div>
      {text}
    </NavbarAnchor>
  );
}

function getIcon(type: string) {
  let icon;

  switch (type) {
    case 'albums':
      icon = IconAlbum;
      break;
    case 'artists':
      icon = IconArtist;
      break;
    case 'playlists':
      icon = IconPlaylist;
      break;
    case 'podcasts':
      icon = IconPodcast;
      break;
    case 'tracks':
      icon = IconTrack;
      break;
    default:
      icon = IconChart;
      break;
  }

  return icon;
}

export default SideNavbarAnchor;
