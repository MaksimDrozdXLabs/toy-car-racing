import Player from 'video.js/dist/types/player';

export interface IVideo extends Player {
    markers: (markers: {
        markerStyle: { 'background-color': string; margin: string; width: string; height: string };
        markers: { time: number; text: string }[] | undefined
    }) => void;

    currentTime(seconds?: number): number;

    el(): HTMLElement;

    hlsQualitySelector(param: { displayCurrentQuality: boolean }): void;
}
