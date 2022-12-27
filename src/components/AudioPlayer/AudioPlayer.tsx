/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { Image } from '@mantine/core';
import { IoMusicalNotes } from 'react-icons/io5';
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
    isShuffled,
    togglePlaying,
    toggleLooping,
    toggleShuffle,
    nextTrack,
    prevTrack
  } = useAudioPlayer({ audioPlayer: audioPlayer.current });

  console.log(tracks);

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
              /*
                isLooping === false => {
                  tooltip: "Repeat all tracks in list",
                  type: "loop_list",
                  isActive: false
                }
                isLooping === "list" => {
                  tooltip: "Repeat the current track",
                  type: "loop_list",
                  isActive: true
                }
                isLooping === "track" => {
                  tooltip: "Turn off repeat",
                  type: "loop_list" + "point",
                  isActive: true
                }
              */
              tooltip="Repeat all tracks in list"
              size="m"
              type="loop_list"
              onClickHandler={() => toggleLooping()}
              isDisable={false}
              isActive={false}
            />
            <AudioPlayerButton
              tooltip={`Turn ${isShuffled ? 'off' : 'on'} Shuffle`}
              size="m"
              type="shuffle"
              onClickHandler={() => toggleShuffle()}
              isDisable={false}
              isActive={isShuffled}
            />
            <AudioPlayerButton
              tooltip=""
              size="m"
              type="volume_on"
              onClickHandler={() => console.log('Toggle volume')}
              isDisable={false}
              isActive={false}
            />
            <AudioPlayerButton
              tooltip=""
              size="m"
              type="eq"
              onClickHandler={() => console.log('Toggle Equalizer')}
              isDisable={false}
              isActive={false}
            />
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
