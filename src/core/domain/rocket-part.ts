import { DrawingCoord } from './DrawingCoord';

export abstract class RocketPart {
  public origin: DrawingCoord;

  public abstract getCenterOfMass(): DrawingCoord;
  public abstract getCenterOfPressure(): DrawingCoord;
}
