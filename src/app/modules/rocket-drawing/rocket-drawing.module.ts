import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDrawingComponent } from './rocket-drawing.component';

@NgModule({
  declarations: [RocketDrawingComponent],
  imports: [CommonModule],
  exports: [RocketDrawingComponent]
})
export class RocketDrawingModule {}
