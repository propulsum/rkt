import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RocketDrawingViewModel } from '../rocket-drawing/rocket-drawing.viewmodel';
import { RocketPart } from 'core/domain/rocket-part';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { DrawingCoord } from 'core/domain/DrawingCoord';

@Injectable()
export class RocketManagerService {
  constructor() {}

  private drawing = new RocketDrawingViewModel();
  private drawingSubject = new Subject<RocketDrawingViewModel>();
  public drawing$ = this.drawingSubject.asObservable();

  updatePart(newPart: RocketPart) {
    for (
      let index = 0;
      index < this.drawing.drawingPartViewModels.length;
      index++
    ) {
      let element = this.drawing.drawingPartViewModels[index];

      if (newPart.id == element.rocketPart.id) {
        delete element.rocketPart;
        element.rocketPart = newPart;
      }
    }

    this.updateDrawing();
  }

  updateDrawing() {
    this.drawingSubject.next(this.drawing);
  }

  addPartToDrawing(part: RocketPart) {
    const index = this.drawing.addPart(part);

    this.updateDrawing();
  }
}
