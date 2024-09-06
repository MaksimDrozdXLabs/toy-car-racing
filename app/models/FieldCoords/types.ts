export const enum EntityType {
    DOT = 'dot',
    VECTOR = 'vector',
    PASSES = 'passes',
}

export interface Entity {
    type?: 'dot' | 'vector' | 'passes';
    x: number;
    y: number;
    targetX?: number;
    targetY?: number;
    color: string;
    border: string;
}

export interface WebsocketFrameObject {
    type: number;
    x_top: number;
    y_top: number;
    width?: number;
    height?: number;
    border: 'string',
    color:'string',
}

export interface WebsocketFrame {
    frameNumberInsideSec: number;
    objects: WebsocketFrameObject[];
}

export interface FromMlWebsocketData {
    boxes: WebsocketFrame[][];
}
