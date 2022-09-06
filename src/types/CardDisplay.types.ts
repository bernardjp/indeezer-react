// Base resource types
export type ResourceType = 'artists' | 'albums' | 'tracks' | 'playlists' | 'podcasts'

// Types for each card component
export type AlbumCardPropType = {
  artist: {
    id: number,
    name: string
  },
  cover: string,
  cover_medium: string,
  cover_xl: string,
  explicit_lyrics: boolean,
  id: number,
  link: string,
  position: number,
  title: string,
  tracklist: string
}

export type ArtistCardPropType = {
  id: number,
  name: string,
  link: string,
  picture_medium: string,
  picture_xl: string,
  position: number,
  radio: boolean,
  tracklist: string,
  type: string
}

export type PlaylistCardPropTypes = {
  id: number,
  link: string,
  nb_tracks: number,
  picture_medium: string,
  picture_xl: string,
  title: string,
  tracklist: string
}

export type PodcastCardPropTypes = {
  description: string,
  id: number,
  link: string,
  picture_medium: string,
  picture_xl: string,
  title: string
}

export type TrackCardPropType = {
  album: {
    cover_medium: string,
    cover_xl: string,
    title: string
  },
  artist: {
    name: string,
    picture: string
  },
  duration: number,
  explicit_lyrics: boolean,
  id: number,
  link: string,
  title: string
}

// Types for each individual resource list (Albums, Artists, Podcast, etc)
export type AlbumList = AlbumCardPropType[];
export type ArtistList = ArtistCardPropType[];
export type TrackList = TrackCardPropType[];
export type PlaylistList = PlaylistCardPropTypes[];
export type PodcastList = PodcastCardPropTypes[];

// Type for the list of all resources
export type ResourceDataList = AlbumList | ArtistList | TrackList | PlaylistList | PodcastList;

// API JSON response type
export type APIJsonResponseType = {
  resourceList: { [key: string]: ResourceDataList },
  resourceType: ResourceType[]
}
