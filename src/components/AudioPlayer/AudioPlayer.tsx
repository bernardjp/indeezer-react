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

  return (
    <div style={{ width: '100%' }}>
      {/* Core Audioplayer */}
      <div style={{ position: 'absolute', bottom: '100px' }}>
        <audio ref={audioPlayer} controls autoPlay={isPlaying} loop={isLooping === 'track' || false}>
          <source
            src="#"
            type="audio/mpeg"
          />
          <track kind="captions" />
        </audio>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'
      }}
      >

        {/* Audioplayer track control (prev, Play/Pause, next) */}
        <div style={{
          display: 'flex', gap: '8px', alignItems: 'center'
        }}
        >
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

        {/* Track slide, name, and timers */}
        <div>
          <p>{ tracks.current ? `${tracks.current.artistName} - ${tracks.current.trackTitle}` : ''}</p>
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

        <div>
          <button
            type="button"
            onClick={() => console.log('Queue window')}
            disabled={!tracks.current}
          >
            QUEUE
          </button>
        </div>

      </div>
    </div>
  );
}

export default AudioPlayer;
