import * as PropTypes from 'prop-types';
import {
  Card, Image, Text, Group, createStyles, Avatar
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaPlay } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import RoundButton from '../Utils/RoundButton';
import { StyledBadge } from '../Utils/StyledBadge';
import { useModalImage, ModalImagePropType } from '../Modal/ModalImage';

export type CardInfoType = {
  image: string,
  info: string,
  link: string,
  title: string
}

type TemplateCardPropType = {
  playButtonCallback: () => void,
  viewButtonSettings: ModalImagePropType,
  card: CardInfoType,
  isExplicit: boolean,
  isRound: boolean
}

TemplateCard.propTypes = {
  playButtonCallback: PropTypes.func,
  viewButtonSettings: PropTypes.shape({
    imageURL: PropTypes.string,
    alt: PropTypes.string
  }),
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
    backgroundColor: 'transparent',
    margin: '0.5rem'
  },
  imageSection: {
    alignItems: align,
    display: 'flex',
    flexDirection: 'column-reverse',
    marginBottom: '0.3rem'
  },
  image: {
    borderRadius: '50%',
    height: '100%',
    transition: '0.2s',
    width: '100%',

    '&:hover': {
      cursor: 'pointer',
      filter: theme.colorScheme === 'dark' ? 'brightness(75%)' : 'contrast(60%) brightness(120%)'
    }
  },
  buttonContainer: {
    gap: '14px',
    padding: '16px',
    position: 'absolute',
    zIndex: 1
  },
  textContainer: {
    alignItems: align,
    display: 'flex',
    flexDirection: 'column'
  }
}));

function TemplateCard(props: TemplateCardPropType) {
  const {
    playButtonCallback, viewButtonSettings, card, isExplicit, isRound
  } = props;
  const { classes } = useStyles(isRound ? 'center' : '');
  const { ref, hovered } = useHover();
  const modalHandler = useModalImage(viewButtonSettings);

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
            onClickCallback={modalHandler}
          />
        </Group>
        {/*
          The images are hosted so we need to implement a RequestHandler in case the link
          to them is broken or the host isn't working.
          SEE: onLoad & onError events
        */}
        {
          isRound
            ? <Avatar src={card.image} className={classes.image} alt={`${card.title} image`} />
            : <Image src={card.image} className={classes.image} alt={`${card.title} image`} />
        }
      </Card.Section>
      <Card.Section className={classes.textContainer}>
        <Text size="md" lineClamp={1} align={isRound ? 'center' : 'left'}>{card.title}</Text>
        <Text size="xs" lineClamp={2} color="dimmed" align={isRound ? 'center' : 'left'}>{card.info}</Text>
        {isExplicit && <StyledBadge text="EXPLICIT" variant="outline" />}
      </Card.Section>
    </Card>
  );
}

export default TemplateCard;
