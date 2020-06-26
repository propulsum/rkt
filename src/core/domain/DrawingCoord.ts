export class DrawingCoord {
  constructor(public x: number, public y: number) {}

  print(): string {
    return '(' + this.x.toFixed(2) + ', ' + this.y.toFixed(2) + ')';
  }
}
