import { DrawingCoord } from 'core/domain/DrawingCoord';

export class SvgNoseconeViewModel {
  public origin: DrawingCoord = new DrawingCoord(0, 0);

  // Geometric Properties
  public radius = 1;
  public length = 10;
  public thickness = 0.15;

  // Appearence Properties
  public color = '#000000ff';
}
