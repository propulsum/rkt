import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TextInputControl } from '../RocketPartControlModel';

@Component({
  selector: 'rkt-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class TextInputComponent {
  @Input() inputModel: TextInputControl = new TextInputControl();
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();

  changeDetected(afsd: string): void {
    this.inputModel.value = afsd;
    this.dataChange.emit(this.inputModel.value);
  }
}
