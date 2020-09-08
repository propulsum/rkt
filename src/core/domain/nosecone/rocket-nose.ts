import { NoseShape } from './nose-shape';
import { RocketPart } from '../rocket-part';
import { DrawingCoord } from '../DrawingCoord';
import { PartType } from '../part-types';

export abstract class RocketNose extends RocketPart {
  protected radius: number;
  protected length: number;
  protected thickness: number;
  public readonly noseShape: NoseShape;

  static count = 1;

  constructor(shape: NoseShape) {
    super('Nose Cone ' + RocketNose.count++);
    this.noseShape = shape;
    this.partType = PartType.NoseCone;
  }

  copy(right: RocketNose): void {
    super.copy(right);

    this.setName(right.getName());
    this.setLength(right.getLength());
    this.setRadius(right.getRadius());
    this.setThickness(right.getThickness());
  }

  public getLength(): number {
    return this.length;
  }

  public setLength(newLength: number): void {
    this.clearCache();
    this.length = newLength;
    this.setConnectionPoint(
      new DrawingCoord(this.origin.x, this.origin.y + this.length)
    );
    for (let index = 0; index < this.children.length; index++) {
      const element = this.children[index];
      element.updateOrigin();
    }
  }

  public getConnectionPoint(): DrawingCoord {
    this.setConnectionPoint(
      new DrawingCoord(this.origin.x, this.origin.y + this.length)
    );
    return this.connectionPoint;
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

  getShape(): NoseShape {
    return this.noseShape;
  }
}
