export class DrawingCoord {
  constructor(public readonly x: number, public readonly y: number) {}

  print(): string {
    return '(' + this.x.toFixed(2) + ', ' + this.y.toFixed(2) + ')';
  }
}
