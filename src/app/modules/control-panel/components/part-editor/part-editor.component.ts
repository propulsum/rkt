import { Component, Output, EventEmitter, Input } from '@angular/core';
import { RocketPart } from 'core/domain/rocket-part';
import {
  UnitControl,
  ControlType
} from 'app/modules/ui-elements/RocketPartControlModel';
import { PartEditorViewModel } from './part-editor.viewmodel';

@Component({
  selector: 'rkt-part-editor',
  templateUrl: './part-editor.component.html',
  styleUrls: ['./part-editor.component.sass']
})
export class PartEditorComponent {
  @Input() viewModel: PartEditorViewModel;

  constructor() {}

  getControlType(type: ControlType): string {
    switch (type) {
      case ControlType.UnitSlider:
        return 'UnitSlider';
      case ControlType.DropDown:
        return 'DropDown';
      case ControlType.TextInput:
        return 'TextInput';
      default:
        return '';
    }
  }

  getArray(): string[] {
    return Object.keys(this.viewModel.controlList);
  }
}
