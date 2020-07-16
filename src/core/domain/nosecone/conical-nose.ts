import { NoseShape } from './nose-shape';
import { RocketNose } from './rocket-nose';
import { DrawingCoord } from '../DrawingCoord';

export class ConicalNose extends RocketNose {
  constructor() {
    super(NoseShape.Conical);
  }

  getHorizontalWallThk(): number {
    const key = 'hwt';
    if (this.cache[key]) {
      return this.cache[key];
    }

    const R = this.radius;
    const L = this.length;

    this.cache[key] = this.thickness / L;
    this.cache[key] *= Math.sqrt(R * R + L * L);

    return this.cache[key];
  }

  public getTipThickness(): number {
    const key = 'Tip Thickness';
    if (this.cache[key]) {
      return this.cache[key];
    }

    const R = this.radius;
    const L = this.length;

    this.cache[key] = (L * this.getHorizontalWallThk()) / R;

    return this.cache[key];
  }

  public getVolume(): number {
    const key = 'Volume';
    if (this.cache[key]) {
      return this.cache[key];
    }

    const R = this.radius;
    const L = this.length;

    this.cache[key] = (Math.PI / 3) * L * Math.pow(R, 2);

    return this.cache[key];
  }

  public getVolumeInner(): number {
    const key = 'Inner Volume';
    if (this.cache[key]) {
      return this.cache[key];
    }

    const R = this.radius - this.getHorizontalWallThk();
    const L = this.length - this.getTipThickness();

    this.cache[key] = (Math.PI / 3) * L * Math.pow(R, 2);

    return this.cache[key];
  }

  getCentroid(): number {
    const key = 'Centroid';
    if (this.cache[key]) {
      return this.cache[key];
    }

    this.cache[key] = (3 / 4) * this.length;

    return this.cache[key];
  }

  getCentroidInner(): number {
    const key = 'Inner Centroid';
    if (this.cache[key]) {
      return this.cache[key];
    }

    const tip = this.getTipThickness();

    this.cache[key] = (3 / 4) * this.length + (1 / 4) * tip;

    return this.cache[key];
  }

  public getCenterOfMass(): DrawingCoord {
    const key = 'COM (y) (relative)';
    const cx = this.origin.x;
    const cy = this.origin.y;

    if (this.cache[key]) {
      return new DrawingCoord(cx, cy + this.cache[key]);
    }

    const V1: number = this.getVolume();
    const z1: number = this.getCentroid();
    const V2: number = this.getVolumeInner();
    const z2: number = this.getCentroidInner();

    this.cache[key] = (V1 * z1 - V2 * z2) / (V1 - V2);

    console.log(this);

    return new DrawingCoord(cx, cy + this.cache[key]);
  }

  public getCenterOfPressure(): DrawingCoord {
    const key = 'COP (y) (relative)';
    const cx = this.origin.x;
    const cy = this.origin.y;

    if (this.cache[key]) {
      return new DrawingCoord(cx, cy + this.cache[key]);
    }

    this.cache[key] = (2 / 3) * this.length;

    console.log(this);

    return new DrawingCoord(cx, cy + this.cache[key]);
  }
}
