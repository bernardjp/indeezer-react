import * as PropTypes from 'prop-types';
import TemplateCard, { CardInfoType } from './CardTemplate';

export type AlbumCardPropType = {
  artist: {
    id: number,
    name: string
  },
  cover: string,
  cover_medium: string,
  explicit_lyrics: boolean,
  id: number,
  link: string,
  position: number,
  title: string,
  tracklist: string
}

AlbumCard.propTypes = {
  data: PropTypes.shape({
    artist: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }),
    cover: PropTypes.string,
    cover_medium: PropTypes.string,
    explicit_lyrics: PropTypes.bool,
    id: PropTypes.number,
    link: PropTypes.string,
    position: PropTypes.number,
    title: PropTypes.string,
    tracklist: PropTypes.string
  })
};

function AlbumCard(props: { data: AlbumCardPropType }) {
  const { data } = props;
  const curatedCardData: CardInfoType = {
    image: data.cover_medium,
    info: `by ${data.artist.name}`,
    link: data.link,
    title: data.title
  };

  return (
    <TemplateCard
      playButtonCallback={() => console.log('Play music')}
      viewButtonCallback={() => console.log('Open cover art')}
      isExplicit={data.explicit_lyrics}
      isRound={false}
      card={curatedCardData}
    />
  );
}

export default AlbumCard;
