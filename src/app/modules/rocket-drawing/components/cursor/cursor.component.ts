import { Component, Input } from '@angular/core';
import { CursorViewModel, CursorType } from './cursor.viewmodel';

@Component({
  selector: 'g[rkt-svg-cursor]',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.sass']
})
export class CursorComponent {
  @Input() viewModel: CursorViewModel = new CursorViewModel();

  draw(): string {
    switch (this.viewModel.cursorType) {
      case CursorType.VPan:
        return this.drawVPanCursor();
      case CursorType.CrossHairs:
        return this.drawCrosshairCursor();
      default:
        throw new Error('Cursor Type not implemented.');
    }
  }

  drawVPanCursor(): string {
    let result = '';
    const r = this.viewModel.cursorRadius;
    const w = r / 10;
    const v = r / 2;
    const h = r / 3;

    result +=
      'M ' +
      (this.viewModel.mouseLocation.x - w) +
      ' ' +
      this.viewModel.mouseLocation.y;
    result += ' v ' + v;
    result += ' h -' + h;
    result +=
      ' L ' +
      this.viewModel.mouseLocation.x +
      ' ' +
      (this.viewModel.mouseLocation.y + r);
    result += ' l ' + (h + w) + ' ' + (v - r);
    result += ' h -' + h;
    result += ' v -' + 2 * v;
    result += ' h ' + h;
    result +=
      ' L ' +
      this.viewModel.mouseLocation.x +
      ' ' +
      (this.viewModel.mouseLocation.y - r);
    result += ' l -' + (h + w) + ' ' + v;
    result += ' h ' + h;
    result += ' v ' + v;

    return result;
  }

  drawCrosshairCursor(): string {
    let result = '';

    result +=
      'M ' +
      (this.viewModel.mouseLocation.x - this.viewModel.cursorRadius) +
      ' ' +
      this.viewModel.mouseLocation.y;
    result += ' h ' + 2 * this.viewModel.cursorRadius;
    result +=
      ' M ' +
      this.viewModel.mouseLocation.x +
      ' ' +
      (this.viewModel.mouseLocation.y - this.viewModel.cursorRadius);
    result += ' v ' + 2 * this.viewModel.cursorRadius;

    return result;
  }
}
