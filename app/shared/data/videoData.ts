import videojs from 'video.js';

const youtube = process.env.NEXT_PUBLIC_VIDEO_URL;
const fastly = 'https://stream-fastly.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8';
const mp4 = 'https://storage.googleapis.com/cv-bucket-public/demo/Minsk_05_07_2024_left_half1/Minsk_05_07_2024_left_half1_4k_pan-7258x1800.mp4';

const sources = [
  { src: fastly, type: '' },
  {
    src: youtube,
    type: 'video/youtube',
  },
  {
    src: mp4,
    type: 'application/x-mpegURL',
  },
];

export const defaultVideoOptions: typeof videojs.options = {
  autoplay: true,

  loop: true,
  muted: true,
  controls: true,
  // Render youtube options
  youtube: { ytControls: 0 },
  responsive: true,
  fluid: true,
  aspectRatio: '16:9',
  playbackRates: [0.5, 1, 1.5, 2],
  html5: {
    hls: {
      fastQualityChange: true,
      overrideNative: true,
      limitRenditionByPlayerDimensions: true,
      useDevicePixelRatio: true,
      // bandwidth: 16777216,
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false,
    useBandwidthFromLocalStorage: true,
  },
  volumePanel: {
    inline: false,
  },
  controlBar: {
    skipButtons: { backward: 10, forward: 10 },
    captionsButton: true,
    chaptersButton: true,
    qualitySelector: true,
    subtitlesButton: true,
    remainingTimeDisplay: true,
    currentTime: true,
    timeDivider: true,
    progressControl: {
      seekBar: true,
    },
  },
  sources,
};
