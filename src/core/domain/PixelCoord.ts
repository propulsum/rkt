export class PixelCoord {
  constructor(public x: number, public y: number) {}

  print(): string {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
