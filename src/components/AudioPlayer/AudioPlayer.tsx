/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import { useRef } from 'react';
import { Image } from '@mantine/core';
import { IoMusicalNotes } from 'react-icons/io5';
import useAudioPlayer from './useAudioPlayer';
import { AudioPlayerButton, AudioPlayerVolumeButton, AudioPlayerMenuButton } from './AudioPlayerButton';
import AudioPlayerTrack from './Track/AudioPlayerTrack';

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
            <AudioPlayerMenuButton
              size="m"
              type="eq"
              onClickHandler={() => console.log('Toggle Equalizer')}
              isDisable={false}
              isActive={false}
            >
              {}
            </AudioPlayerMenuButton>
          </div>

          <div style={{ marginLeft: '12px', paddingLeft: '20px', borderLeft: '1px solid #3e3e47' }}>
            <button
              style={{
                backgroundColor: 'transparent', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'white', fontSize: '0.75rem', gap: '8px'
              }}
              type="button"
              onClick={(e) => console.log(e)}
            >
              {
                tracks.current
                  ? (
                    <Image
                      width={28}
                      height={28}
                      radius={4}
                      src={tracks.current.albumThumbnail}
                    />
                  )
                  : (
                    <IoMusicalNotes style={{
                      width: '28px',
                      height: '28px',
                      padding: '6px',
                      backgroundColor: 'rgb(223, 222, 228)',
                      borderRadius: '4px',
                      color: 'rgb(200, 200, 200)'
                    }}
                    />
                  )
              }
              Queue
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AudioPlayer;
