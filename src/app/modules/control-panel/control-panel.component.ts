import { Component } from '@angular/core';
import { RocketManagerService } from '../rocket-manager/rocket-manager.service';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { DrawingCoord } from 'core/domain/DrawingCoord';
import { RocketPart } from 'core/domain/rocket-part';
import { PartEditorViewModel } from './components/part-editor/part-editor.viewmodel';
import { Subject } from 'rxjs';
import { NoseEditorViewModel } from './components/part-editor/nose-editor.viewmodel';
import { Rocket } from 'core/domain/rocket';
import { RocketEditorViewModel } from './components/part-editor/rocket-editor.viewmodel';
import { PartType } from 'core/domain/part-types';
import { RocketNose } from 'core/domain/nosecone/rocket-nose';

@Component({
  selector: 'rkt-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.sass']
})
export class ControlPanelComponent {
  constructor(public rms: RocketManagerService) {
    const ro = new Rocket();
    // this.rms.addChild(ro);
    this.editorVM = new RocketEditorViewModel(ro, (x: RocketPart) => {
      this.rms.updatePart(x);
    });
    this.rocket = ro;
  }

  public editorVM: PartEditorViewModel;
  public rocket: Rocket;

  addChild(): void {
    const nc = new ConicalNose();
    nc.setLength(6);
    nc.setRadius(3);
    nc.setThickness(0.15);
    this.rms.addPartToDrawing(nc);

    this.editorVM.rocketPart.addChild(nc);

    this.editorVM = new NoseEditorViewModel(nc, (x: RocketPart) => {
      this.rms.updatePart(x);
    });
    this.rms.updateDrawing();
  }

  drawerButton(selectedPart: RocketPart) {
    switch (selectedPart.getPartType()) {
      case PartType.Rocket:
        this.editorVM = new RocketEditorViewModel(
          selectedPart as Rocket,
          (x: RocketPart) => {
            this.rms.updatePart(x);
          }
        );
        break;
      case PartType.NoseCone:
        this.editorVM = new NoseEditorViewModel(
          selectedPart as RocketNose,
          (x: RocketPart) => {
            this.rms.updatePart(x);
          }
        );
        break;
      default:
        throw new Error('Part type not implemented');
    }
  }
}
