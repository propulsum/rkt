import {
  IControl,
  UnitControl,
  DropDownControl,
  TextInputControl
} from 'app/modules/ui-elements/RocketPartControlModel';
import { RocketPart } from 'core/domain/rocket-part';
import { PartEditorViewModel } from './part-editor.viewmodel';
import { Rocket } from 'core/domain/rocket';

export class RocketEditorViewModel extends PartEditorViewModel {
  public rocketPart: Rocket;

  constructor(nose: Rocket, update: (x: RocketPart) => void) {
    super();
    this.rocketPart = nose;

    const a0 = new TextInputControl();
    a0.label = 'Name';
    a0.value = this.rocketPart.getName();
    a0.changeDetected = (x) => {
      this.rocketPart.setName(x);
    };

    this.controlList[a0.label] = a0;
  }
}
