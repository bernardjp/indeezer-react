/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import { useState, useRef } from 'react';
import useAudioPlayer from './useAudioPlayer';
import { AudioPlayerButton, AudioPlayerVolumeButton, AudioPlayerEQButton } from './AudioPlayerButton';
import AudioPlayerTrack from './Track/AudioPlayerTrack';
import AudioPlayerPlaylistOverlay from './Playlist/PlaylistOverlay';

function AudioPlayer() {
  // CONSIDERATION: Move the useAudioPlayer inside each button to avoid re-rendering
  // the whole component. e.g: togglePlaying --> play_button, toggleShuffle --> shuffle_list
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const {
    tracks,
    isPlaying,
    isLooping,
    isShuffled,
    togglePlaying,
    toggleLooping,
    toggleShuffle,
    nextTrack,
    prevTrack
  } = useAudioPlayer({ audioPlayer: audioPlayer.current });

  const [playlistOpened, setOpened] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      {/* Core Audioplayer. Hide after development */}
      <div>
        <audio ref={audioPlayer} autoPlay={isPlaying} loop={isLooping === 'track' || false}>
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
        <AudioPlayerTrack
          audioPlayer={audioPlayer.current}
          track={tracks.current}
          isPlaying={isPlaying}
          opened={playlistOpened}
        />

        {/* Playlist a misc. controls (volume, looping, shuffling, sharing, eq, etc.) */}
        <div style={{
          display: 'flex', alignItems: 'center'
        }}
        >
          <div style={{
            display: 'flex', gap: '8px', alignItems: 'center'
          }}
          >
            <AudioPlayerButton
              tooltip="Chromecast"
              size="m"
              type="share"
              onClickHandler={() => console.log('Sharing track')}
              isDisable={false}
              isActive={false}
            />
            <AudioPlayerButton
              tooltip={
                !isLooping
                  ? 'Repeat all tracks in list'
                  : isLooping === 'track'
                    ? 'Repeat the current track'
                    : 'Turn off repeat'
              }
              size="m"
              type={isLooping === 'list' ? 'loop_track' : 'loop_list'}
              onClickHandler={() => toggleLooping()}
              isDisable={false}
              isActive={Boolean(isLooping)}
            />
            <AudioPlayerButton
              tooltip={`Turn ${isShuffled ? 'off' : 'on'} Shuffle`}
              size="m"
              type="shuffle"
              onClickHandler={() => toggleShuffle()}
              isDisable={false}
              isActive={isShuffled}
            />
            <AudioPlayerVolumeButton
              audioPlayer={audioPlayer?.current}
              size="m"
              isDisable={false}
            />
            <AudioPlayerEQButton
              size="m"
              isDisable={false}
            />
          </div>

          <AudioPlayerPlaylistOverlay
            tracks={tracks}
            opened={playlistOpened}
            setOpened={setOpened}
          />
        </div>

      </div>
    </div>
  );
}

export default AudioPlayer;
