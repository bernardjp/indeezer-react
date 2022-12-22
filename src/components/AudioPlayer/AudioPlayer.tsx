/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import useAudioPlayer from './useAudioPlayer';
import AudioPlayerButton from './AudioPlayerButton';

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
      {/* Core Audioplayer */}
      <audio ref={audioPlayer} controls autoPlay={isPlaying} loop={isLooping === 'track' || false}>
        <source
          src="#"
          type="audio/mpeg"
        />
        <track kind="captions" />
      </audio>

      <div>
        <div>

          {/* Audioplayer track control (prev, Play/Pause, next) */}
          <div>
            <AudioPlayerButton
              tooltip=""
              size="m"
              type="prev"
              onClickHandler={() => prevTrack()}
              isDisable={tracks.prevDisable}
              isActive={false}
            />
            <AudioPlayerButton
              tooltip=""
              size="lg"
              type={isPlaying ? 'pause' : 'play'}
              onClickHandler={() => togglePlaying()}
              isDisable={!tracks.current}
              isActive={false}
            />
            <AudioPlayerButton
              tooltip=""
              size="m"
              type="next"
              onClickHandler={() => nextTrack()}
              isDisable={tracks.nextDisable}
              isActive={false}
            />
          </div>

          {/* Playlist a misc. controls (volume, looping, shuffling, sharing, eq, etc.) */}
          <div>
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

        </div>

        <p>{ tracks.current ? `${tracks.current.artistName} - ${tracks.current.trackTitle}` : ''}</p>
      </div>

    </div>
  );
}

export default AudioPlayer;
