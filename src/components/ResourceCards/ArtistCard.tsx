import * as PropTypes from 'prop-types';
import {
  Card, Avatar, Text, Group, createStyles
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaPlay } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import RoundButton from '../Utils/RoundButton';

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
    width: 'fit-content',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  text: {
    color: 'gray', // <-- Change on theme
    fontSize: '0.8rem',
    display: 'flex'
  }
});

function ArtistCard(props: { data: ArtistCardPropType }) {
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
          src={data.picture}
          className={classes.image}
          alt={`${data.name} picture`}
        />
      </Card.Section>
      <Card.Section className={classes.textSection}>
        <Text className={classes.artist}>{data.name}</Text>
        <Text className={classes.text}>Algo de texto...</Text>
      </Card.Section>
    </Card>
  );
}

export default ArtistCard;
