import * as PropTypes from 'prop-types';
import TemplateCard, { CardInfoType } from './CardTemplate';

export type PlaylistCardPropTypes = {
  id: number,
  link: string,
  nb_tracks: number,
  picture_medium: string,
  title: string,
  tracklist: string
}

PlaylistCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    link: PropTypes.string,
    nb_tracks: PropTypes.number,
    picture_medium: PropTypes.string,
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

  return (
    <TemplateCard
      playButtonCallback={() => console.log('play music')}
      viewButtonCallback={() => console.log('view art')}
      isRound={false}
      isExplicit={false}
      card={curatedCardData}
    />
  );
}

export default PlaylistCard;
