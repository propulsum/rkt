import { NoseShape } from './nose-shape';
import { RocketPart } from '../rocket-part';

export abstract class RocketNose extends RocketPart {
  protected radius: number;
  protected length: number;
  protected thickness: number;
  public readonly noseShape: NoseShape;

  protected cache: { [key: string]: number } = {};

  constructor(shape: NoseShape) {
    super();
    this.noseShape = shape;
  }

  protected clearCache(): void {
    this.cache = {};
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
