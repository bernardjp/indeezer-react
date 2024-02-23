import * as PropTypes from 'prop-types';
import { AlbumCardPropType } from '../../types/CardDisplay.types';
import TemplateCard, { CardInfoType } from './CardTemplate';
import { ModalImagePropType } from '../Modal/ModalImage';

AlbumCard.propTypes = {
  data: PropTypes.shape({
    artist: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    cover: PropTypes.string,
    cover_medium: PropTypes.string,
    cover_xl: PropTypes.string,
    explicit_lyrics: PropTypes.bool,
    id: PropTypes.number,
    link: PropTypes.string,
    position: PropTypes.number,
    title: PropTypes.string,
    tracklist: PropTypes.string,
  }),
};

function AlbumCard(props: { data: AlbumCardPropType }) {
  const { data } = props;
  const curatedCardData: CardInfoType = {
    image: data.cover_medium,
    info: `by ${data.artist.name}`,
    link: data.link,
    title: data.title,
  };

  const modalImageSettings: ModalImagePropType = {
    imageURL: data.cover_xl,
    alt: `${curatedCardData.title} Cover Art`,
  };

  return (
    <TemplateCard
      playButtonCallback={() => {}}
      viewButtonSettings={modalImageSettings}
      isExplicit={data.explicit_lyrics}
      isRound={false}
      card={curatedCardData}
    />
  );
}

export default AlbumCard;
