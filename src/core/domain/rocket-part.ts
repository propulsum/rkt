import { DrawingCoord } from './DrawingCoord';

export abstract class RocketPart {
  protected origin: DrawingCoord;
  public setOrigin(newOrigin: DrawingCoord) {
    this.origin = newOrigin;
    this.clearCache();
  }
  public getOrigin(): DrawingCoord {
    return this.origin;
  }

  public abstract getCenterOfMass(): DrawingCoord;
  public abstract getCenterOfPressure(): DrawingCoord;

  protected cache: { [key: string]: number } = {};
  public cacheId: string = '';

  protected clearCache(): void {
    this.cache = {};
    this.cacheId = Guid.newGuid();
  }
}

class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
