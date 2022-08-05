import * as PropTypes from 'prop-types';
import TemplateCard, { CardInfoType } from './CardTemplate';

export type ArtistCardPropType = {
  id: number,
  name: string,
  link: string,
  picture_medium: string,
  position: number,
  radio: boolean,
  tracklist: string,
  type: string
}

ArtistCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    link: PropTypes.string,
    picture_medium: PropTypes.string,
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

  return (
    <TemplateCard
      playButtonCallback={() => console.log('play music')}
      viewButtonCallback={() => console.log('view art')}
      isExplicit={false}
      isRound
      card={curatedCardData}
    />
  );
}

export default ArtistCard;
