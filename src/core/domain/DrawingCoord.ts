export class DrawingCoord {
  constructor(public readonly x: number, public readonly y: number) {}

  public static DrawingOrigin: DrawingCoord = new DrawingCoord(0, 0);

  print(): string {
    return '(' + this.x.toFixed(2) + ', ' + this.y.toFixed(2) + ')';
  }
}
