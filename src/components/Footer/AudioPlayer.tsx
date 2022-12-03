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

  // Manage playing state
  //  -> Play / Pause
  //  -> Loop track
  const { playing, togglePlaying } = useAudioPlayer(audioPlayer.current);

  // Manage track list:
  //  -> Prev / Next track button
  //  -> Track list
  //  -> Shuffle / Loop list

  return (
    <div>
      <button type="button" onClick={togglePlaying}>{ playing ? 'PAUSE' : 'PLAY' }</button>
      <audio ref={audioPlayer} controls>
        <source
          src="https://cdns-preview-4.dzcdn.net/stream/c-44d6ff72e0698f47ff61eebae62c7075-3.mp3"
          type="audio/mpeg"
        />
        <track kind="captions" />
      </audio>
    </div>
  );
}

export default AudioPlayer;
