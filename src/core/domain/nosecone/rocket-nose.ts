import { NoseType } from './nose-type';
import { DrawingCoord } from '../DrawingCoord';
import { RocketPart } from '../rocket-part';

export abstract class RocketNose extends RocketPart {
  public radius: number;
  public length: number;
  public thickness: number;
  public type: NoseType;

  constructor(type: NoseType) {
    super();
    this.type = type;
  }
}
