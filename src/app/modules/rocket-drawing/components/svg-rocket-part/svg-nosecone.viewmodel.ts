import { SvgPartBaseViewModel } from './svg-part-base';
import { NoseType } from 'core/domain/nosecone/nose-type';
import { RocketNose } from 'core/domain/nosecone/rocket-nose';
import { OgiveNose } from 'core/domain/nosecone/ogive-nose';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { SvgComViewModel } from '../svg-com/svg-com.viewmodel';

export class SvgNoseconeViewModel extends SvgPartBaseViewModel {
  public rocketPart: RocketNose;

  constructor(part: RocketNose) {
    super();
    this.rocketPart = part;
    this.ComViewModel = new SvgComViewModel();
    this.ComViewModel.origin = part.getCenterOfMass();
  }

  public draw(): string {
    this.ComViewModel.origin = this.rocketPart.getCenterOfMass();
    switch (this.rocketPart.type) {
      case NoseType.Conical:
        return this.drawConical();
      case NoseType.Ogive:
        return this.drawOgive();
      default:
        throw new Error('NoseType not implemented');
    }
  }

  public drawConical(): string {
    const nose = this.rocketPart as ConicalNose;
    const vThk = nose.getTipThickness();
    // Move to origin
    let result = 'M ' + nose.origin.x + ' ' + nose.origin.y;
    // Left outer wall
    result += ' l -' + nose.radius + ' ' + nose.length;
    // wall
    result += ' h ' + nose.thickness;
    // left inner wall
    result += ' L ' + nose.origin.x + ' ' + (nose.origin.y + vThk);
    // right inner wall
    result +=
      ' L ' +
      (nose.origin.x + nose.radius - nose.thickness) +
      ' ' +
      (nose.origin.y + nose.length);
    //right wall
    result += ' h ' + nose.thickness;
    // right outer wall
    result += ' L ' + nose.origin.x + ' ' + nose.origin.y;

    return result;
  }

  public drawOgive(): string {
    const nose = this.rocketPart as OgiveNose;
    const r = nose.getRadiusOfCurvature();
    const vThk = nose.getTipThickness();

    // Move to origin
    let result = 'M ' + nose.origin.x + ' ' + nose.origin.y;
    //draw left outer
    result += ' a ';
    result += r + ' ';
    result += r + ' ';
    result += '0 0 0 -' + nose.radius + ' ' + nose.length;
    // draw h wall
    result += ' h ' + nose.thickness;
    //draw left inner
    result += ' a ' + r + ' ' + r + ' 0 0 1 ';
    result += nose.radius - nose.thickness + ' -' + (nose.length - vThk);
    //draw right inner
    result += ' a ' + r + ' ' + r + ' 0 0 1 ';
    result += nose.radius - nose.thickness + ' ' + (nose.length - vThk);
    // draw h wall
    result += ' h ' + nose.thickness;
    //draw right outer
    result += ' a ' + r + ' ' + r + ' 0 0 0 ';
    result += '-' + nose.radius + ' -' + nose.length;

    return result;
  }
}
