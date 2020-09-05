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

  private partSubject = new Subject<RocketPart>();
  public part$ = this.partSubject.asObservable();

  updatePart(newPart: RocketPart) {
    this.partSubject.next(newPart);
  }

  updateDrawing() {
    this.drawingSubject.next(this.drawing);
  }

  addChild(part: RocketPart) {
    const index = this.drawing.addPart(part);

    this.part$.subscribe(
      (x) => (this.drawing.drawingPartViewModels[index].rocketPart = x)
    );
    this.updateDrawing();
  }
}
