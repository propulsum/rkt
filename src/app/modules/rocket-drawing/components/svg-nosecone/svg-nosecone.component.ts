import { Component, Input } from '@angular/core';
import { SvgNoseconeViewModel } from './svg-nosecone.viewmodel';

@Component({
  selector: '[rkt-svg-nosecone]',
  templateUrl: './svg-nosecone.component.html',
  styleUrls: ['./svg-nosecone.component.sass']
})
export class SvgNoseconeComponent {
  @Input() viewModel: SvgNoseconeViewModel = new SvgNoseconeViewModel();

  draw(): string {
    let result = 'M ' + this.viewModel.origin.x + ' ' + this.viewModel.origin.y;
    result += ' L -' + this.viewModel.radius + ' ' + this.viewModel.length;
    result += ' h ' + this.viewModel.thickness;
    result +=
      ' L ' +
      this.viewModel.origin.x +
      ' ' +
      (this.viewModel.origin.y +
        this.viewModel.length * this.viewModel.thickness);
    result +=
      ' L ' +
      (this.viewModel.origin.x +
        this.viewModel.radius -
        this.viewModel.thickness) +
      ' ' +
      (this.viewModel.origin.y + this.viewModel.length);
    result += ' h ' + this.viewModel.thickness;
    result += ' L ' + this.viewModel.origin.x + ' ' + this.viewModel.origin.y;

    return result;
  }

  draw2(): string {
    let result = 'M ' + this.viewModel.origin.x + ' ' + this.viewModel.origin.y;
    result += ' L -' + this.viewModel.radius + ' ' + this.viewModel.length;
    result += ' h ' + 2 * this.viewModel.radius;
    return result;
  }
}
