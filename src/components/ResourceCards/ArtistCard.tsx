import * as PropTypes from 'prop-types';
import { ArtistCardPropType } from '../../types/CardDisplay.types';
import TemplateCard, { CardInfoType } from './CardTemplate';
import { ModalImagePropType } from '../Modal/ModalImage';

ArtistCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    picture_medium: PropTypes.string,
    picture_xl: PropTypes.string,
    position: PropTypes.number,
    radio: PropTypes.bool,
    tracklist: PropTypes.string,
    type: PropTypes.string
  })
};

function ArtistCard(props: { data: ArtistCardPropType }) {
  const { data } = props;
  const curatedCardData: CardInfoType = {
    image: data.picture_medium,
    info: `#${data.position} rank`,
    link: data.link,
    title: data.name
  };

  const modalImageSettings: ModalImagePropType = {
    imageURL: data.picture_xl,
    alt: `${curatedCardData.title} Picture`
  };

  return (
    <TemplateCard
      playButtonCallback={() => console.log('play music')}
      viewButtonSettings={modalImageSettings}
      isExplicit={false}
      isRound
      card={curatedCardData}
    />
  );
}

export default ArtistCard;
