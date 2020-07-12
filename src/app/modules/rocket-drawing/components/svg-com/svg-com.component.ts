import { Component, Input } from '@angular/core';
import { SvgComViewModel } from './svg-com.viewmodel';

@Component({
  selector: 'g[rkt-svg-com]',
  templateUrl: './svg-com.component.html',
  styleUrls: ['./svg-com.component.sass']
})
export class SvgComComponent {
  @Input() viewModel: SvgComViewModel;

  public radius = 0.25;
  public border = 0.025;
}
