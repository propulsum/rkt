import {
  IControl,
  UnitControl,
  DropDownControl,
  TextInputControl
} from 'app/modules/ui-elements/RocketPartControlModel';
import { RocketNose } from 'core/domain/nosecone/rocket-nose';
import { OgiveNose } from 'core/domain/nosecone/ogive-nose';
import { RocketPart } from 'core/domain/rocket-part';
import { DrawingCoord } from 'core/domain/DrawingCoord';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { NoseShape } from 'core/domain/nosecone/nose-shape';
import { PartEditorViewModel } from './part-editor.viewmodel';

export class NoseEditorViewModel extends PartEditorViewModel {
  public rocketPart: RocketNose;

  constructor(nose: RocketNose, update: (x: RocketPart) => void) {
    super();
    this.rocketPart = nose;

    const a0 = new TextInputControl();
    a0.label = 'Name';
    a0.value = this.rocketPart.getName();
    a0.changeDetected = (x) => {
      this.rocketPart.setName(x);
    };

    this.controlList[a0.label] = a0;

    // Shape Control
    const a1 = new DropDownControl();
    a1.label = 'Shape';
    a1.addOption(NoseShape[NoseShape.Conical], 'Conical');
    a1.addOption(NoseShape[NoseShape.Ogive], 'Ogive');
    a1.value = NoseShape[this.rocketPart.getShape()];
    a1.changeDetected = (x) => {
      let newNose: RocketNose;
      switch (x) {
        case NoseShape[NoseShape.Conical]:
          newNose = new ConicalNose();
          break;
        case NoseShape[NoseShape.Ogive]:
          newNose = new OgiveNose();
          break;
        default:
          throw new Error('NoseType not implemented');
      }

      this.rocketPart.parent.replaceChild(this.rocketPart, newNose);

      delete this.rocketPart;
      this.rocketPart = newNose;

      update(newNose);
    };

    this.controlList[a1.label] = a1;

    // Radius Control
    const a2 = new UnitControl();
    a2.label = 'Radius';
    a2.max = 10;
    a2.min = 1;
    a2.step = 0.01;
    a2.value = this.rocketPart.getRadius();
    a2.changeDetected = (x) => {
      this.rocketPart.setRadius(x);
    };

    this.controlList[a2.label] = a2;

    // Length Control
    const a3 = new UnitControl();
    a3.label = 'Length';
    a3.max = 10;
    a3.min = 1;
    a3.step = 0.01;
    a3.value = this.rocketPart.getLength();
    a3.changeDetected = (x) => {
      this.rocketPart.setLength(x);
    };

    this.controlList[a3.label] = a3;

    // Thickness Control
    const a4 = new UnitControl();
    a4.label = 'Wall Thickness';
    a4.max = 1;
    a4.min = 0.01;
    a4.step = 0.01;
    a4.value = this.rocketPart.getThickness();
    a4.changeDetected = (x) => {
      this.rocketPart.setThickness(x);
    };

    this.controlList[a4.label] = a4;
  }
}
