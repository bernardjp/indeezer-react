/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import useAudioPlayer from './useAudioPlayer';

/*
  UI
    - Previous track
    - Play / Stop
    - Next track

    (TOP)
    - Explicit icon
    - Track Name
    - Artist
    - Show lyrics (?)
    - Add to favourites
    ------
    (BOTTOM)
    - Current Time
    - Progression bar
    - Total Time

    - Loop complete track list -> Loop current track -> Don't repeat tracks
    - Shuffle tracks
    - Volume -> toggle mute
      - Volume slide
    -----
    - Track list
      -
*/

function AudioPlayer() {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const {
    tracks,
    isPlaying,
    isLooping,
    togglePlaying,
    toggleLooping,
    toggleShuffle,
    nextTrack,
    prevTrack
  } = useAudioPlayer({ audioPlayer: audioPlayer.current });

  // console.log(tracks);
  // console.log(isLooping);

  return (
    <div>
      <div>

        <div>
          <button
            type="button"
            onClick={() => prevTrack()}
            disabled={tracks.prevDisable}
          >
            PREV
          </button>
          <button
            type="button"
            onClick={() => togglePlaying()}
            disabled={!tracks.current}
          >
            { isPlaying ? 'PAUSE' : 'PLAY' }
          </button>
          <button
            type="button"
            onClick={() => nextTrack()}
            disabled={tracks.nextDisable}
          >
            NEXT
          </button>
          <button
            type="button"
            onClick={() => toggleLooping()}
            disabled={!tracks.current}
          >
            LOOP {isLooping || 'disable'}
          </button>
          <button
            type="button"
            onClick={() => toggleShuffle()}
            disabled={!tracks.current}
          >
            SHUFFLE
          </button>
        </div>

        <p>{ tracks.current ? `${tracks.current.artistName} - ${tracks.current.trackTitle}` : ''}</p>
      </div>

      <audio ref={audioPlayer} controls autoPlay={isPlaying} loop={isLooping === 'track' || false}>
        <source
          src="#"
          type="audio/mpeg"
        />
        <track kind="captions" />
      </audio>
    </div>
  );
}

export default AudioPlayer;
