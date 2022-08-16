// Types for each card component
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

export type PlaylistCardPropTypes = {
  id: number,
  link: string,
  nb_tracks: number,
  picture_medium: string,
  title: string,
  tracklist: string
}

export type PodcastCardPropTypes = {
  description: string,
  id: number,
  link: string,
  picture_medium: string,
  title: string
}

export type TrackCardPropType = {
  album: {
    cover_medium: string,
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
export type AlbumList = { data: AlbumCardPropType[] };
export type ArtistList = { data: ArtistCardPropType[] };
export type TrackList = { data: TrackCardPropType[] };
export type PlaylistList = { data: PlaylistCardPropTypes[] };
export type PodcastList = { data: PodcastCardPropTypes[] };

// Type for the list of all resources
export type ResourceDataList = AlbumList | ArtistList | TrackList | PlaylistList | PodcastList;
