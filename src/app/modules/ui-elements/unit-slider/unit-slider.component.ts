import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UnitControl } from '../RocketPartControlModel';

@Component({
  selector: 'rkt-unit-slider',
  templateUrl: './unit-slider.component.html',
  styleUrls: ['./unit-slider.component.sass']
})
export class UnitSliderComponent implements OnInit {
  @Input() inputModel: UnitControl = new UnitControl();

  @Output() dataChange: EventEmitter<number> = new EventEmitter<number>();

  public default: number;

  ngOnInit(): void {
    this.default = this.inputModel.value;
  }

  changeDetected(): void {
    this.dataChange.emit(this.inputModel.value);
  }
}
