import { NoseType } from './nose-type';
import { RocketNose } from './rocket-nose';
import { DrawingCoord } from '../DrawingCoord';

export class ConicalNose extends RocketNose {
  constructor() {
    super(NoseType.Conical);
  }

  getTipThickness(): number {
    return (this.length * this.thickness) / this.radius;
  }

  public getCenterOfMass(): DrawingCoord {
    return new DrawingCoord(this.origin.x, this.origin.y + this.radius);
  }
}
