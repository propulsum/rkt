import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rkt-number-slider',
  templateUrl: './number-slider.component.html',
  styleUrls: ['./number-slider.component.sass']
})
export class NumberSliderComponent implements OnInit {
  @Input() inputValue = 1;
  @Input() min = 1;
  @Input() max = 10;
  @Input() label = '';

  @Output() dataChange: EventEmitter<number> = new EventEmitter<number>();

  public default: number;

  ngOnInit(): void {
    this.default = this.inputValue;
  }

  changeDetected(): void {
    this.dataChange.emit(this.inputValue);
  }
}
