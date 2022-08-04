import * as PropTypes from 'prop-types';
import {
  Card, Image, Badge, Text, Group, createStyles, Avatar
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaPlay } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import RoundButton from '../Utils/RoundButton';

type TemplateCardPropType = {
  playButtonCallback: () => void,
  viewButtonCallback: () => void,
  card: {
    image: string,
    info: string,
    link: string,
    title: string
  },
  isExplicit: boolean,
  isRound: boolean
}

TemplateCard.propTypes = {
  playButtonCallback: PropTypes.func,
  viewButtonCallback: PropTypes.func,
  card: PropTypes.shape({
    image: PropTypes.string,
    info: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string
  }),
  isExplicit: PropTypes.bool,
  isRound: PropTypes.bool
};

const useStyles = createStyles((theme, align: 'center' | '') => ({
  cardContainer: {
    maxWidth: '264px',
    backgroundColor: 'transparent'
  },
  imageSection: {
    alignItems: align,
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  image: {
    borderRadius: '50%',
    height: '100%',
    maxWidth: '264px',
    transition: '0.2s',
    width: '100%',

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
  textContainer: {
    alignItems: align,
    display: 'flex',
    flexDirection: 'column'
  },
  text: {
    color: 'gray', // <-- Change on theme
    fontSize: '0.8rem',
    display: 'flex'
  },
  textUnderlined: {
    fontSize: '0.8rem',

    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  explicitBadge: {
    marginTop: '0.3rem'
  }
}));

function TemplateCard(props: TemplateCardPropType) {
  const {
    playButtonCallback, viewButtonCallback, card, isExplicit, isRound
  } = props;
  const { classes } = useStyles(isRound ? 'center' : '');
  const { ref, hovered } = useHover();

  return (
    <Card className={classes.cardContainer}>
      <Card.Section ref={ref} className={classes.imageSection}>
        <Group className={classes.buttonContainer}>
          <RoundButton
            visible
            Icon={FaPlay}
            onClickCallback={playButtonCallback}
          />
          <RoundButton
            visible={hovered}
            Icon={BsEye}
            onClickCallback={viewButtonCallback}
          />
        </Group>
        {
          isRound
            ? <Avatar src={card.image} className={classes.image} alt={`${card.title} image`} />
            : <Image src={card.image} className={classes.image} alt={`${card.title} image`} />
        }
      </Card.Section>
      <Card.Section className={classes.textContainer}>
        <Text size="md" lineClamp={1} color="white">{card.title}</Text>
        <Text size="xs" lineClamp={2} color="gray">{card.info}</Text>
        {
          isExplicit
            && <Badge className={classes.explicitBadge} color="gray" radius="sm" variant="outline">EXPLICIT</Badge>
        }
      </Card.Section>
    </Card>
  );
}

export default TemplateCard;
