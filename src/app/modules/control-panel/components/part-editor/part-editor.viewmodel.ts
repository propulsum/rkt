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
