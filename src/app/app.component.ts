import { Component } from '@angular/core';
import { RocketDrawingViewModel } from './modules/rocket-drawing/rocket-drawing.viewmodel';
import { SvgNoseconeViewModel } from './modules/rocket-drawing/components/svg-rocket-part/svg-nosecone.viewmodel';
import { DrawingCoord } from 'core/domain/DrawingCoord';
import { OgiveNose } from 'core/domain/nosecone/ogive-nose';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';

@Component({
  selector: 'rkt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor() {}
}
