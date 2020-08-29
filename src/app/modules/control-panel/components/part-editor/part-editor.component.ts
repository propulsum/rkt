import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rkt-part-editor',
  templateUrl: './part-editor.component.html',
  styleUrls: ['./part-editor.component.sass']
})
export class PartEditorComponent {
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
}
