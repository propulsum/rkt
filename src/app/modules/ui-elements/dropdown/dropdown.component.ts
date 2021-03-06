import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropDownControl } from '../RocketPartControlModel';

@Component({
  selector: 'rkt-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent {
  @Input() inputModel: DropDownControl = new DropDownControl();

  getDropDownoptions(): { [key: string]: string } {
    return this.inputModel.options;
  }

  getDropDownoptionsKeys(): string[] {
    return Object.keys(this.inputModel.options);
  }
}
