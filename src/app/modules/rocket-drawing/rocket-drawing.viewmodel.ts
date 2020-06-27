import { PixelCoord } from 'core/domain/PixelCoord';

export class RocketDrawingViewModel {
  // Screen Dimensions (px)
  public screenHeight: number;
  public screenWidth: number;

  // Drawing Dimensions (px)
  public drawingWidth: number;
  public drawingHeight: number;

  // Drawing Origin
  public drawingOrigin: PixelCoord;

  // Zoom properties
  public drawingScale = 40;
  public drawingScaleMin = 25;
  public drawingScaleMax = 100;
  public scrollWheelSpeed = 3;

  // Pan properties
  public lockPanY = true;
  public panStart: PixelCoord;
  public panStartOrigin: PixelCoord;
  public isPanning = false;
  public panMaxY = 10;
  public panMinY = -17;
  public panMaxX = 10;

  // Coordinate display properties
  public mouseLocation: PixelCoord;
  public displayCoords = '';

  // Cursor properties
  public showCursor = true;
  public cursorRadius = 20;

  // Grid Properties
  public numGridLines = 100;
  public showGridLines = true;
}
