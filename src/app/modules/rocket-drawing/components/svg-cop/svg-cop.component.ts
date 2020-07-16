import { Component, Input } from '@angular/core';
import { SvgCopViewModel } from './svg-cop.viewmodel';

@Component({
  selector: 'g[rkt-svg-cop]',
  templateUrl: './svg-cop.component.html',
  styleUrls: ['./svg-cop.component.sass']
})
export class SvgCopComponent {
  @Input() viewModel: SvgCopViewModel;

  public radius = 0.25;
  public border = 0.025;
}
