import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RocketPart } from 'core/domain/rocket-part';

@Component({
  selector: 'rkt-tree-drawer',
  templateUrl: './tree-drawer.component.html',
  styleUrls: ['./tree-drawer.component.sass']
})
export class TreeDrawerComponent {
  @Input() viewModel: RocketPart;
  @Output() edit: EventEmitter<RocketPart> = new EventEmitter<RocketPart>();
  @Input() treeDepth = 0;

  editClicked(value: RocketPart): void {
    this.edit.emit(value);
  }
}
