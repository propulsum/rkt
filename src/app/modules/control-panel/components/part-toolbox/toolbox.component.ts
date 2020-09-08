import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rkt-part-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.sass']
})
export class ToolboxComponent {
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
}
