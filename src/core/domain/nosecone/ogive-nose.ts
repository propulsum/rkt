import { NoseShape } from './nose-shape';
import { RocketNose } from './rocket-nose';
import { DrawingCoord } from '../DrawingCoord';

export class OgiveNose extends RocketNose {
  constructor() {
    super(NoseShape.Ogive);
  }

  getRadiusOfCurvature(): number {
    const key = 'Radius of Curvature';
    if (this.cache[key]) {
      return this.cache[key];
    }

    const R = this.radius;
    const L = this.length;

    this.cache[key] = (Math.pow(L, 2) + Math.pow(R, 2)) / (2 * R);

    return this.cache[key];
  }

  getTipThickness(): number {
    const key = 'Tip Thickness';
    if (this.cache[key]) {
      return this.cache[key];
    }

    let vThk: number = this.length;
    let temp: number = this.thickness - 1;
    temp *= this.thickness - Math.pow(this.length, 2);
    vThk -= Math.sqrt(temp);

    this.cache[key] = vThk / this.radius;

    return this.cache[key];
  }

  public getCenterOfMass(): DrawingCoord {
    const key = 'COM (y) (relative)';
    const cx = this.origin.x;
    const cy = this.origin.y;

    if (this.cache[key]) {
      return new DrawingCoord(cx, cy + this.cache[key]);
    }

    this.cache[key] = this.getRadius();

    return new DrawingCoord(cx, cy + this.cache[key]);
  }

  public getCenterOfPressure(): DrawingCoord {
    const key = 'COP (y) (relative)';
    const cx = this.origin.x;
    const cy = this.origin.y;

    if (this.cache[key]) {
      return new DrawingCoord(cx, cy + this.cache[key]);
    }

    this.cache[key] = 1;

    return new DrawingCoord(cx, cy + this.cache[key]);
  }
}
