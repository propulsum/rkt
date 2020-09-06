import { NoseShape } from './nose-shape';
import { RocketPart } from '../rocket-part';

export abstract class RocketNose extends RocketPart {
  protected radius: number;
  protected length: number;
  protected thickness: number;
  public readonly noseShape: NoseShape;

  static count = 1;

  constructor(shape: NoseShape) {
    super('Nose Cone ' + RocketNose.count++);
    this.noseShape = shape;
  }

  public getLength(): number {
    return this.length;
  }

  public setLength(newLength: number): void {
    this.clearCache();
    this.length = newLength;
  }

  public getRadius(): number {
    return this.radius;
  }

  public setRadius(newRadius: number): void {
    this.clearCache();
    this.radius = newRadius;
  }

  public getThickness(): number {
    return this.thickness;
  }

  public setThickness(newThickness: number): void {
    this.clearCache();
    this.thickness = newThickness;
  }
}
