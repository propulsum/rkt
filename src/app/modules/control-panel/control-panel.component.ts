import { Component } from '@angular/core';
import { RocketManagerService } from '../rocket-manager/rocket-manager.service';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { DrawingCoord } from 'core/domain/DrawingCoord';
import { RocketPart } from 'core/domain/rocket-part';
import {
  PartEditorViewModel,
  NoseEditorViewModel
} from './components/part-editor/part-editor.viewmodel';
import { Subject } from 'rxjs';

@Component({
  selector: 'rkt-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.sass']
})
export class ControlPanelComponent {
  constructor(public rms: RocketManagerService) {
    const nc = new ConicalNose();
    nc.setLength(6);
    nc.setRadius(3);
    nc.setThickness(0.15);
    nc.setOrigin(DrawingCoord.DrawingOrigin);
    this.rms.addChild(nc);
    this.editorVM = new NoseEditorViewModel(nc, (x: RocketPart) => {
      this.rms.updatePart(x);
    });
    // this.editorVM = new NoseEditorViewModel(nc, this.currentPart$);
  }

  public editorVM: PartEditorViewModel;

  testButton(): void {
    this.rms.updateDrawing();
  }
}
