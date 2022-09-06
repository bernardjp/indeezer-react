import * as PropTypes from 'prop-types';
import { PlaylistCardPropTypes } from '../../types/CardDisplay.types';
import TemplateCard, { CardInfoType } from './CardTemplate';
import { ModalImagePropType } from '../Modal/ModalImage';

PlaylistCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    link: PropTypes.string,
    nb_tracks: PropTypes.number,
    picture_medium: PropTypes.string,
    picture_xl: PropTypes.string,
    title: PropTypes.string,
    tracklist: PropTypes.string
  }).isRequired
};

function PlaylistCard(props: { data: PlaylistCardPropTypes }) {
  const { data } = props;
  const curatedCardData: CardInfoType = {
    image: data.picture_medium,
    info: `${data.nb_tracks - 5}+ tracks`,
    link: data.link,
    title: data.title
  };

  const modalImageSettings: ModalImagePropType = {
    imageURL: data.picture_xl,
    alt: `${curatedCardData.title} Playlist Picture`
  };

  return (
    <TemplateCard
      playButtonCallback={() => console.log('play music')}
      viewButtonSettings={modalImageSettings}
      isRound={false}
      isExplicit={false}
      card={curatedCardData}
    />
  );
}

export default PlaylistCard;
