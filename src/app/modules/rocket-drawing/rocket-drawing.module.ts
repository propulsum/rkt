import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDrawingComponent } from './rocket-drawing.component';
import { SvgNoseconeComponent } from './components/svg-nosecone/svg-nosecone.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { SvgGirdlinesComponent } from './components/svg-girdlines/svg-girdlines.component';
import { SvgCenterlineComponent } from './components/svg-centerline/svg-centerline.component';

@NgModule({
  declarations: [
    RocketDrawingComponent,
    SvgNoseconeComponent,
    CursorComponent,
    SvgGirdlinesComponent,
    SvgCenterlineComponent
  ],
  imports: [CommonModule],
  exports: [RocketDrawingComponent]
})
export class RocketDrawingModule {}
