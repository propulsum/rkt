import { Component } from '@angular/core';
import { RocketDrawingViewModel } from './modules/rocket-drawing/rocket-drawing.viewmodel';
import { SvgNoseconeViewModel } from './modules/rocket-drawing/components/svg-rocket-part/svg-nosecone.viewmodel';
import { DrawingCoord } from 'core/domain/DrawingCoord';
import { OgiveNose } from 'core/domain/nosecone/ogive-nose';

@Component({
  selector: 'rkt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public rocketDrawing: RocketDrawingViewModel = new RocketDrawingViewModel();

  constructor() {
    const nc = new OgiveNose();
    nc.length = 10;
    nc.radius = 3;
    nc.thickness = 0.15;
    nc.origin = new DrawingCoord(0, 0);

    const s = new SvgNoseconeViewModel(nc);

    this.rocketDrawing.drawingPartViewModels.push(s);
  }
}
