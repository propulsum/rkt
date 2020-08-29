import { Component } from '@angular/core';
import { RocketManagerService } from '../rocket-manager/rocket-manager.service';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { DrawingCoord } from 'core/domain/DrawingCoord';

@Component({
  selector: 'rkt-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.sass']
})
export class ControlPanelComponent {
  private test: string;

  constructor(public rms: RocketManagerService) {}

  private static a: number = 1;

  testButton(): void {
    const nc = new ConicalNose();
    nc.setLength(ControlPanelComponent.a++);
    nc.setRadius(3);
    nc.setThickness(0.15);
    nc.origin = new DrawingCoord(0, 0);
    this.rms.addChild(nc);
  }
}
