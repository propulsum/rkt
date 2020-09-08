import { RocketPart } from './rocket-part';
import { DrawingCoord } from './DrawingCoord';
import { PartType } from './part-types';

export class Rocket extends RocketPart {
  constructor() {
    super('My Model Rocket');
    this.setOrigin(DrawingCoord.DrawingOrigin);
    this.setConnectionPoint(DrawingCoord.DrawingOrigin);
    this.parent = null;
    this.partType = PartType.Rocket;
  }

  public getCenterOfMass(): DrawingCoord {
    throw new Error('Method not implemented.');
  }
  public getCenterOfPressure(): DrawingCoord {
    throw new Error('Method not implemented.');
  }
}
