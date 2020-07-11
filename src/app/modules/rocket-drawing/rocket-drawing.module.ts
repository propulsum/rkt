import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDrawingComponent } from './rocket-drawing.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { SvgGirdlinesComponent } from './components/svg-girdlines/svg-girdlines.component';
import { SvgCenterlineComponent } from './components/svg-centerline/svg-centerline.component';
import { SvgRocketPartComponent } from './components/svg-rocket-part/svg-rocket-part.component';
import { SvgComComponent } from './components/svg-com/svg-com.component';

@NgModule({
  declarations: [
    RocketDrawingComponent,
    CursorComponent,
    SvgGirdlinesComponent,
    SvgCenterlineComponent,
    SvgRocketPartComponent,
    SvgComComponent
  ],
  imports: [CommonModule],
  exports: [RocketDrawingComponent]
})
export class RocketDrawingModule {}
