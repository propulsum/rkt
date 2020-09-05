import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RocketDrawingViewModel } from '../rocket-drawing/rocket-drawing.viewmodel';
import { RocketPart } from 'core/domain/rocket-part';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { DrawingCoord } from 'core/domain/DrawingCoord';

@Injectable()
export class RocketManagerService {
  constructor() {
    this.drawing = new RocketDrawingViewModel();
  }

  private drawing: RocketDrawingViewModel;
  private drawingSubject = new Subject<RocketDrawingViewModel>();
  drawing$ = this.drawingSubject.asObservable();

  test1(newPart: RocketPart) {
    this.drawing = new RocketDrawingViewModel();
    this.drawing.addPart(newPart);
    this.drawingSubject.next(this.drawing);
  }

  updateDrawing() {
    this.drawingSubject.next(this.drawing);
  }

  addChild(part: RocketPart) {
    this.drawing.addPart(part);

    this.updateDrawing();
  }

  replaceChild(oldPart: RocketPart, newPart: RocketPart) {
    // this.drawing.addPart(part);

    this.updateDrawing();
  }

  deleteChild() {
    this.drawing.drawingPartViewModels.pop();
    this.updateDrawing();
  }
}
