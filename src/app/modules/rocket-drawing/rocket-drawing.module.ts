import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDrawingComponent } from './rocket-drawing.component';
import { SvgNoseconeComponent } from './components/svg-nosecone/svg-nosecone.component';

@NgModule({
  declarations: [RocketDrawingComponent, SvgNoseconeComponent],
  imports: [CommonModule],
  exports: [RocketDrawingComponent]
})
export class RocketDrawingModule {}
