import { Component } from '@angular/core';
import { RocketDrawingViewModel } from './modules/rocket-drawing/rocket-drawing.viewmodel';
import { SvgNoseconeViewModel } from './modules/rocket-drawing/components/svg-nosecone/svg-nosecone.viewmodel';

@Component({
  selector: 'rkt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public rocketDrawing: RocketDrawingViewModel = new RocketDrawingViewModel();

  constructor() {
    this.rocketDrawing.drawingPartViewModels.push(new SvgNoseconeViewModel());
  }
}
