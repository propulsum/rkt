import { PixelCoord } from 'core/domain/PixelCoord';

export class CursorViewModel {
  public showCursor = true;
  public cursorRadius = 20;

  public mouseLocation: PixelCoord = new PixelCoord(0, 0);
  public cursorType: CursorType = CursorType.CrossHairs;
}

export enum CursorType {
  CrossHairs,
  VPan
}
