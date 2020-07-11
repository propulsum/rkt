import { NoseType } from './nose-type';
import { RocketNose } from './rocket-nose';
import { DrawingCoord } from '../DrawingCoord';

export class OgiveNose extends RocketNose {
  constructor() {
    super(NoseType.Ogive);
  }

  getRadiusOfCurvature(): number {
    return (
      (Math.pow(this.length, 2) + Math.pow(this.radius, 2)) / (2 * this.radius)
    );
  }

  getTipThickness(): number {
    let vThk: number = this.length;
    let temp: number = this.thickness - 1;
    temp *= this.thickness - Math.pow(this.length, 2);
    vThk -= Math.sqrt(temp);

    return vThk / this.radius;
  }

  public getCenterOfMass(): DrawingCoord {
    return new DrawingCoord(this.origin.x, this.origin.y + this.radius);
  }
}
