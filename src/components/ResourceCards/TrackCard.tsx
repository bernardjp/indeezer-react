import * as PropTypes from 'prop-types';
import { TrackCardPropType } from '../../types/CardDisplay.types';
import TemplateCard, { CardInfoType } from './CardTemplate';

TrackCard.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      cover_medium: PropTypes.string,
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

  return (
    <TemplateCard
      playButtonCallback={() => console.log('play music')}
      viewButtonCallback={() => console.log('view art')}
      isExplicit={data.explicit_lyrics}
      isRound
      card={curatedCardData}
    />
  );
}

export default TrackCard;
