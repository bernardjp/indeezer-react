/* eslint-disable no-unused-vars */
import * as PropTypes from 'prop-types';
import {
  Card, Image, Badge, Text, Group, createStyles
} from '@mantine/core';
// import { useHover } from '@mantine/hooks';
// import { FaPlay } from 'react-icons/fa';
// import { BsEye } from 'react-icons/bs';
// import RoundButton from '../Utils/RoundButton';

export type ArtistCardPropType = {
  id: number,
  name: string,
  link: string,
  picture: string,
  position: number,
  radio: boolean,
  tracklist: string,
  type: string
}

ArtistCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    picture: PropTypes.string,
    position: PropTypes.number,
    radio: PropTypes.bool,
    tracklist: PropTypes.string,
    type: PropTypes.string
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
    // height: '264px',
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

function ArtistCard(props: { data: ArtistCardPropType }) {
  const { data } = props;
  const { classes } = useStyles();
  // const { ref, hovered } = useHover();

  console.log(data.name);
  return (
    <Card className={classes.cardContainer}>
      {/* <Card.Section ref={ref} className={classes.imageSection}>
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
      </Card.Section> */}
    </Card>
  );
}

export default ArtistCard;
