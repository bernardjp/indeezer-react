import * as PropTypes from 'prop-types';
import {
  Card, Badge, Avatar, Text, Group, createStyles
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaPlay } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import RoundButton from '../Utils/RoundButton';

export type TrackCardPropType = {
  album: {
    cover_medium: string,
    title: string
  },
  artist: {
    name: string,
    picture: string
  },
  duration: number,
  explicit_lyrics: boolean,
  id: number,
  link: string,
  title: string
}

TrackCard.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
      title: PropTypes.string
    }),
    artist: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string
    }),
    duration: PropTypes.number,
    explicit_lyrics: PropTypes.bool,
    id: PropTypes.number,
    link: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

const useStyles = createStyles({
  cardContainer: {
    maxWidth: '264px',
    backgroundColor: 'transparent'
  },
  imageSection: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  image: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    transition: '0.2s',
    maxWidth: '264px',

    '&:hover': {
      cursor: 'pointer',
      filter: 'brightness(75%)'
    }
  },
  buttonContainer: {
    gap: '14px',
    padding: '16px',
    position: 'absolute',
    zIndex: '1'
  },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  artist: {
    color: 'white', // <-- Change on theme
    fontSize: '1rem',
    textAlign: 'center',
    width: 'fit-content',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  text: {
    color: 'gray', // <-- Change on theme
    fontSize: '0.8rem',
    textAlign: 'center'
  },
  explicitBadge: {
    marginTop: '0.5rem'
  }
});

function TrackCard(props: { data: TrackCardPropType }) {
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
        <Avatar
          src={data.album.cover_medium}
          className={classes.image}
          alt={`${data.title} picture`}
        />
      </Card.Section>
      <Card.Section className={classes.textSection}>
        <Text className={classes.artist} lineClamp={1}>{data.title}</Text>
        <Text className={classes.text} lineClamp={2}>
          {`by ${data.artist.name} | ${data.album.title}`}
        </Text>
        {data.explicit_lyrics && <Badge className={classes.explicitBadge} color="gray" radius="sm" variant="outline">EXPLICIT</Badge>}
      </Card.Section>
    </Card>
  );
}

export default TrackCard;
