import * as PropTypes from 'prop-types';
import {
  Card, Image, Text, Group, createStyles
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaPlay } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import RoundButton from '../Utils/RoundButton';

export type PodcastCardPropTypes = {
  description: string,
  id: number,
  link: string,
  picture_medium: string,
  title: string
}

PodcastCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    link: PropTypes.string,
    picture_medium: PropTypes.string,
    title: PropTypes.string
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
  explicitBadge: {
    marginTop: '0.3rem'
  }
});

function PodcastCard(props: any) {
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
        <Text size="md" lineClamp={1} color="white">{data.title}</Text>
        <Text size="xs" lineClamp={2} color="gray">{data.description}</Text>
      </Card.Section>
    </Card>
  );
}

export default PodcastCard;
