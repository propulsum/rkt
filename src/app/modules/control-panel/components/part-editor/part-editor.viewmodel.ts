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

export abstract class PartEditorViewModel {
  public controlList: { [key: string]: IControl } = {};
  public rocketPart: RocketPart;
}

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
    a1.value = NoseShape[NoseShape.Conical];
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

      newNose.setName(this.rocketPart.getName());
      newNose.setLength(this.rocketPart.getLength());
      newNose.setRadius(this.rocketPart.getRadius());
      newNose.setThickness(this.rocketPart.getThickness());
      newNose.setOrigin(this.rocketPart.getOrigin());

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
    a2.value = 4;
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
    a3.value = 4;
    a3.changeDetected = (x) => {
      this.rocketPart.setLength(x);
    };

    this.controlList[a3.label] = a3;
  }
}
