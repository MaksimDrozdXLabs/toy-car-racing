import { Entity, WebsocketFrameObject } from '@/app/models/FieldCoords/types';
import { COLORS } from '@/app/shared/theme/colors';

export class FieldCoords implements Entity {
  public border: string;

  public color: string;

  public targetX?: number;

  public targetY?: number;

  public x: number;

  public y: number;

  constructor({
    border,
    color,
    targetX,
    targetY,
    x,
    y,
  }: {
    border: string;
    color: string;
    targetX?: number;
    targetY?: number;
    x: number;
    y: number;
  }) {
    this.border = border;
    this.color = color;
    this.targetX = targetX;
    this.targetY = targetY;
    this.x = x;
    this.y = y;
  }

  static fromMlWebsocket({
    y_top,
    x_top,
    type,
    width = 530,
    height = 315,
  }: WebsocketFrameObject) {
    const typeToColors: Record<number, { color: string; border: string }> = {
      0: {
        color: COLORS.mintGreen,
        border: COLORS.freshGreen,
      },
      1: {
        color: COLORS.silverGrey,
        border: COLORS.pureWhite,
      },
      2: {
        color: COLORS.softGoldenYellow,
        border: COLORS.goldenYellow,
      },
    };

    return new FieldCoords({
      x: x_top * width,
      y: y_top * height,
      ...typeToColors[type],
    });
  }
}
