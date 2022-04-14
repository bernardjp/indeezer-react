import * as PropTypes from 'prop-types';
import {
  Card, Image, Badge, Text, Group, createStyles
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaPlay } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import RoundButton from '../Utils/RoundButton';

export type AlbumCardPropType = {
  artist: {
    id: number,
    name: string
  },
  cover: string,
  cover_medium: string,
  explicit_lyrics: boolean,
  id: number,
  link: string,
  position: number,
  title: string,
  tracklist: string
}

AlbumCard.propTypes = {
  data: PropTypes.shape({
    artist: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }),
    cover: PropTypes.string,
    cover_medium: PropTypes.string,
    explicit_lyrics: PropTypes.bool,
    id: PropTypes.number,
    link: PropTypes.string,
    position: PropTypes.number,
    title: PropTypes.string,
    tracklist: PropTypes.string
  })
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
    borderRadius: '8px',
    height: '264px',
    transition: '0.2s',
    width: '264px',

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
  }
});

function AlbumCard(props: { data: AlbumCardPropType }) {
  const { data } = props;
  const { classes } = useStyles();
  const { ref, hovered } = useHover();

  // console.log(data);
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
        <Image src={data.cover_medium} className={classes.image} alt={`${data.title} cover`} />
      </Card.Section>
      <Card.Section>
        <Text className={classes.title}>{data.title}</Text>
        <Text className={classes.artist}>
          by&nbsp;
          <Text className={classes.artistName}>{data.artist.name}</Text>
        </Text>
        {data.explicit_lyrics && <Badge color="gray" radius="sm" variant="outline">EXPLICIT</Badge>}
      </Card.Section>
    </Card>
  );
}

export default AlbumCard;
