import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RocketDrawingViewModel } from '../rocket-drawing/rocket-drawing.viewmodel';
import { RocketNose } from 'core/domain/nosecone/rocket-nose';
import { RocketPart } from 'core/domain/rocket-part';

@Injectable()
export class RocketManagerService {
  constructor() {}

  private drawing: RocketDrawingViewModel = new RocketDrawingViewModel();

  private drawingSubject = new Subject<RocketDrawingViewModel>();
  drawing$ = this.drawingSubject.asObservable();

  updateDrawing() {
    this.drawingSubject.next(this.drawing);
  }

  addChild(nc: RocketPart) {
    this.drawing.addPart(nc);
    this.updateDrawing();
  }
}
