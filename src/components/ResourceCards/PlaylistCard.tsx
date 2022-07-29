import * as PropTypes from 'prop-types';
import {
  Card, Image, Text, Group, createStyles
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaPlay } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import RoundButton from '../Utils/RoundButton';

export type PlaylistCardPropTypes = {
  id: number,
  link: string,
  nb_tracks: number,
  picture_medium: string,
  title: string,
  tracklist: string
}

PlaylistCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    link: PropTypes.string,
    nb_tracks: PropTypes.number,
    picture_medium: PropTypes.string,
    title: PropTypes.string,
    tracklist: PropTypes.string
  }).isRequired
};

const useStyles = createStyles({
  cardContainer: {
    maxWidth: '264px',
    backgroundColor: 'transparent'
  },
  imageSection: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  image: {
    borderRadius: '25px',
    transition: '0.2s',
    maxWidth: '264px',
    filter: 'sepia(75%)',

    '&:hover': {
      cursor: 'pointer',
      filter: 'sepia(35%) brightness(75%)'
    }
  },
  buttonContainer: {
    gap: '14px',
    padding: '16px',
    position: 'absolute',
    zIndex: '1'
  },
  title: {
    color: 'white', // <-- Change on theme
    fontSize: '1rem',
    width: 'fit-content',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  artist: {
    color: 'gray', // <-- Change on theme
    fontSize: '0.8rem',
    display: 'flex'
  },
  artistName: {
    fontSize: '0.8rem',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  explicitBadge: {
    marginTop: '0.3rem'
  }
});

function PlaylistCard(props: { data: PlaylistCardPropTypes }) {
  const { data } = props;
  const { classes } = useStyles();
  const { ref, hovered } = useHover();

  return (
    <Card className={classes.cardContainer}>
      <Card.Section ref={ref} className={classes.imageSection}>
        <Group className={classes.buttonContainer}>
          <RoundButton
            visible
            Icon={FaPlay}
            onClickCallback={() => console.log('Play music')}
          />
          <RoundButton
            visible={hovered}
            Icon={BsEye}
            onClickCallback={() => console.log('Open cover art')}
          />
        </Group>
        <Image src={data.picture_medium} className={classes.image} alt={`${data.title} cover`} />
      </Card.Section>
      <Card.Section>
        <Text className={classes.title}>{data.title}</Text>
        <Text className={classes.artist}>{`${data.nb_tracks - 5}+ tracks`}</Text>
      </Card.Section>
    </Card>
  );
}

export default PlaylistCard;
