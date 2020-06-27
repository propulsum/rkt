import { Component, Input } from '@angular/core';
import { SvgCenterlineViewModel } from './svg-centerline.viewmodel';

@Component({
  selector: 'g[rkt-svg-centerline]',
  templateUrl: './svg-centerline.component.html',
  styleUrls: ['./svg-centerline.component.sass']
})
export class SvgCenterlineComponent {
  @Input() viewModel: SvgCenterlineViewModel = new SvgCenterlineViewModel();
}
