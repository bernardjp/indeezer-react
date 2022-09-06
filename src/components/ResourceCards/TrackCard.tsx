import * as PropTypes from 'prop-types';
import { TrackCardPropType } from '../../types/CardDisplay.types';
import TemplateCard, { CardInfoType } from './CardTemplate';
import { ModalImagePropType } from '../Modal/ModalImage';

TrackCard.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
      cover_xl: PropTypes.string,
      title: PropTypes.string
    }),
    artist: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string
    }),
    duration: PropTypes.number,
    explicit_lyrics: PropTypes.bool,
    id: PropTypes.number,
    link: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

function TrackCard(props: { data: TrackCardPropType }) {
  const { data } = props;
  const curatedCardData: CardInfoType = {
    image: data.album.cover_medium,
    info: `by ${data.artist.name} | ${data.album.title}`,
    link: data.link,
    title: data.title
  };

  const modalImageSettings: ModalImagePropType = {
    imageURL: data.album.cover_xl,
    alt: `${curatedCardData.title} Playlist Picture`
  };

  return (
    <TemplateCard
      playButtonCallback={() => console.log('play music')}
      viewButtonSettings={modalImageSettings}
      isExplicit={data.explicit_lyrics}
      isRound
      card={curatedCardData}
    />
  );
}

export default TrackCard;
