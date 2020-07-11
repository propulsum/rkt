import { Component, Input } from '@angular/core';
import { SvgPartBaseViewModel } from './svg-part-base';

@Component({
  selector: 'g[rkt-svg-rocket-part]',
  templateUrl: './svg-rocket-part.component.html',
  styleUrls: ['./svg-rocket-part.component.sass']
})
export class SvgRocketPartComponent {
  @Input() viewModel: SvgPartBaseViewModel;
}
