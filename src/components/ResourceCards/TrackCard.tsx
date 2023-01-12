import * as PropTypes from 'prop-types';
import { useContext } from 'react';
import { TrackType } from '../../types/AudioPlayer.types';
import { TrackCardPropType } from '../../types/CardDisplay.types';
import TemplateCard, { CardInfoType } from './CardTemplate';
import { ModalImagePropType } from '../Modal/ModalImage';
import { PlaylistContext } from '../Context/PlaylistContext';

TrackCard.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      id: PropTypes.number,
      cover_small: PropTypes.string,
      cover_medium: PropTypes.string,
      cover_xl: PropTypes.string,
      title: PropTypes.string
    }),
    artist: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture: PropTypes.string
    }),
    duration: PropTypes.number,
    explicit_lyrics: PropTypes.bool,
    id: PropTypes.number,
    link: PropTypes.string,
    preview: PropTypes.string,
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

  const { addTrack } = useContext(PlaylistContext);
  const playButtonHandler = () => {
    const trackData: TrackType = {
      albumID: data.album.id,
      albumCover: data.album.cover_medium,
      albumThumbnail: data.album.cover_small,
      albumTitle: data.album.title,
      artistID: data.artist.id,
      artistName: data.artist.name,
      duration: data.duration,
      explicitLyrics: data.explicit_lyrics,
      trackID: data.id,
      trackTitle: data.title,
      source: data.preview
    };

    addTrack(trackData);
  };

  return (
    <TemplateCard
      playButtonCallback={playButtonHandler}
      viewButtonSettings={modalImageSettings}
      isExplicit={data.explicit_lyrics}
      isRound
      card={curatedCardData}
    />
  );
}

export default TrackCard;
