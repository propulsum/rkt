import { Component, Input } from '@angular/core';
import { SvgNoseconeViewModel } from './svg-nosecone.viewmodel';

@Component({
  selector: 'g[rkt-svg-nosecone]',
  templateUrl: './svg-nosecone.component.html',
  styleUrls: ['./svg-nosecone.component.sass']
})
export class SvgNoseconeComponent {
  @Input() viewModel: SvgNoseconeViewModel = new SvgNoseconeViewModel();

  draw(): string {
    // Move to origin
    let result = 'M ' + this.viewModel.origin.x + ' ' + this.viewModel.origin.y;
    // Left outer wall
    result += ' l -' + this.viewModel.radius + ' ' + this.viewModel.length;
    // wall
    result += ' h ' + this.viewModel.thickness;
    // left inner wall
    result +=
      ' L ' +
      this.viewModel.origin.x +
      ' ' +
      (this.viewModel.origin.y +
        (this.viewModel.length * this.viewModel.thickness) /
          this.viewModel.radius);
    // right inner wall
    result +=
      ' L ' +
      (this.viewModel.origin.x +
        this.viewModel.radius -
        this.viewModel.thickness) +
      ' ' +
      (this.viewModel.origin.y + this.viewModel.length);
    //right wall
    result += ' h ' + this.viewModel.thickness;
    // right outer wall
    result += ' L ' + this.viewModel.origin.x + ' ' + this.viewModel.origin.y;

    return result;
  }

  draw2(): string {
    let result = 'M ' + this.viewModel.origin.x + ' ' + this.viewModel.origin.y;
    result += ' l -' + this.viewModel.radius + ' ' + this.viewModel.length;
    result += ' h ' + 2 * this.viewModel.radius;
    return result;
  }
}
