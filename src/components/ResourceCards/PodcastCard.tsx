import * as PropTypes from 'prop-types';
import { PodcastCardPropTypes } from '../../types/CardDisplay.types';
import TemplateCard, { CardInfoType } from './CardTemplate';
import { ModalImagePropType } from '../Modal/ModalImage';

PodcastCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    link: PropTypes.string,
    picture_medium: PropTypes.string,
    picture_xl: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

function PodcastCard(props: { data: PodcastCardPropTypes }) {
  const { data } = props;
  const curatedCardData: CardInfoType = {
    title: data.title,
    info: data.description,
    image: data.picture_medium,
    link: data.link,
  };

  const modalImageSettings: ModalImagePropType = {
    imageURL: data.picture_xl,
    alt: `${curatedCardData.title} Podcast Picture`,
  };

  return (
    <TemplateCard
      playButtonCallback={() => {}}
      viewButtonSettings={modalImageSettings}
      isExplicit={false}
      isRound={false}
      card={curatedCardData}
    />
  );
}

export default PodcastCard;
