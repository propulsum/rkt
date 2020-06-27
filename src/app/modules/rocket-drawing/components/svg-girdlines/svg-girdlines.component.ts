import { Component, Input } from '@angular/core';
import { SvgGridLinesViewModel } from './svg-gridlines.viewmodel';

@Component({
  selector: 'g[rkt-svg-girdlines]',
  templateUrl: './svg-girdlines.component.html',
  styleUrls: ['./svg-girdlines.component.sass']
})
export class SvgGirdlinesComponent {
  @Input() viewModel: SvgGridLinesViewModel = new SvgGridLinesViewModel();

  getIntegerArray(): number[] {
    const result = [];

    for (
      let index = -this.viewModel.numGridLines * 0.5;
      index < this.viewModel.numGridLines * 1.5;
      index++
    ) {
      result.push(index);
    }

    return result;
  }
}
