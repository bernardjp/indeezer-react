import * as PropTypes from 'prop-types';
import TemplateCard from './CardTemplate';

export type PodcastCardPropTypes = {
  description: string,
  id: number,
  link: string,
  picture_medium: string,
  title: string
}

PodcastCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    link: PropTypes.string,
    picture_medium: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

function PodcastCard(props: { data: PodcastCardPropTypes }) {
  const { data } = props;
  const curatedCardData = {
    title: data.title,
    info: data.description,
    image: data.picture_medium,
    link: data.link
  };

  return (
    <TemplateCard
      playButtonCallback={() => console.log('Play music')}
      viewButtonCallback={() => console.log('Open cover art')}
      isExplicit={false}
      isRound={false}
      card={curatedCardData}
    />
  );
}

export default PodcastCard;
