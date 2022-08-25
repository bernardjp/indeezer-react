import { ResourceType } from '../../types/CardDisplay.types';
import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import TrackCard from './TrackCard';
import PlaylistCard from './PlaylistCard';
import PodcastCard from './PodcastCard';

function getCardComponent(type: ResourceType): React.ElementType {
  const cardsComponents: { [key: string] : React.ElementType } = {
    artists: ArtistCard,
    albums: AlbumCard,
    tracks: TrackCard,
    playlists: PlaylistCard,
    podcasts: PodcastCard
  };

  return cardsComponents[type];
}

export default getCardComponent;
