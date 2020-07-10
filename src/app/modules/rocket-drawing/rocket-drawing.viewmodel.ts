import { PixelCoord } from 'core/domain/PixelCoord';
import { CursorViewModel } from './components/cursor/cursor.viewmodel';
import { SvgGridLinesViewModel } from './components/svg-girdlines/svg-gridlines.viewmodel';
import { SvgCenterlineViewModel } from './components/svg-centerline/svg-centerline.viewmodel';
import { SvgPartBaseViewModel } from './components/_common/svg-part-base';

export class RocketDrawingViewModel {
  // Screen Dimensions (px)
  public screenHeight: number;
  public screenWidth: number;

  // Drawing Dimensions (px)
  public drawingWidth: number;
  public drawingHeight: number;

  // Drawing Origin
  public drawingOrigin: PixelCoord = new PixelCoord(0, 0);

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
  public mouseLocation: PixelCoord = new PixelCoord(0, 0);
  public displayCoords = '';

  /*
   *
   * SVG View Models
   *
   */

  // Cursor SVG
  public cursorViewModel: CursorViewModel = new CursorViewModel();

  // Centerline SVG
  public centerlineViewModel: SvgCenterlineViewModel = new SvgCenterlineViewModel();

  // Grid SVG
  public gridLinesViewModel: SvgGridLinesViewModel = new SvgGridLinesViewModel();

  // Rocket Parts
  public drawingPartViewModels: SvgPartBaseViewModel[] = [];
}
