import { SvgPartBaseViewModel } from './svg-part-base';
import { NoseShape } from 'core/domain/nosecone/nose-shape';
import { RocketNose } from 'core/domain/nosecone/rocket-nose';
import { OgiveNose } from 'core/domain/nosecone/ogive-nose';
import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { SvgComViewModel } from '../svg-com/svg-com.viewmodel';
import { SvgCopViewModel } from '../svg-cop/svg-cop.viewmodel';
import { DrawingCoord } from 'core/domain/DrawingCoord';

export class SvgNoseconeViewModel extends SvgPartBaseViewModel {
  public rocketPart: RocketNose;

  constructor(part: RocketNose) {
    super();
    this.rocketPart = part;
    this.ComViewModel = new SvgComViewModel();
    this.ComViewModel.origin = part.getCenterOfMass();
    this.CopViewModel = new SvgCopViewModel();
    this.CopViewModel.origin = part.getCenterOfPressure();
  }

  public draw(): string {
    if (!this.needsToRedraw()) {
      return this.drawCache;
    }

    this.lastCacheId = this.rocketPart.cacheId;
    this.ComViewModel.origin = this.rocketPart.getCenterOfMass();
    this.CopViewModel.origin = this.rocketPart.getCenterOfPressure();
    switch (this.rocketPart.noseShape) {
      case NoseShape.Conical:
        this.drawCache = this.drawConical();
        break;
      case NoseShape.Ogive:
        this.drawCache = this.drawOgive();
        break;
      default:
        throw new Error('NoseType not implemented');
    }

    return this.drawCache;
  }

  private drawConical(): string {
    if (!(this.rocketPart instanceof ConicalNose)) {
      throw new Error(
        NoseShape[this.rocketPart.noseShape] +
          ' shape does not match instance ConicalNose'
      );
    }
    const nose = this.rocketPart as ConicalNose;
    const vThk = nose.getTipThickness();
    const L = nose.getLength();
    const R = nose.getRadius();
    const t = nose.getHorizontalWallThk();
    const o = nose.getOrigin();

    // Move to origin
    let result = 'M ' + o.x + ' ' + o.y;
    // Left outer wall
    result += ' l -' + R + ' ' + L;
    // wall
    result += ' h ' + t;
    // left inner wall
    result += ' L ' + o.x + ' ' + (o.y + vThk);
    // right inner wall
    result += ' L ' + (o.x + R - t) + ' ' + (o.y + L);
    //right wall
    result += ' h ' + t;
    // right outer wall
    result += ' L ' + o.x + ' ' + o.y;

    return result;
  }

  private drawOgive(): string {
    if (!(this.rocketPart instanceof OgiveNose)) {
      throw new Error(
        NoseShape[this.rocketPart.noseShape] +
          ' shape does not match instance OgiveNose'
      );
    }
    const nose = this.rocketPart as OgiveNose;
    const rho = nose.getRadiusOfCurvature();
    const vThk = nose.getTipThickness();
    const L = nose.getLength();
    const R = nose.getRadius();
    const t = nose.getThickness();
    const o = nose.getOrigin();

    // Move to origin
    let result = 'M ' + o.x + ' ' + o.y;
    //draw left outer
    result += ' a ';
    result += rho + ' ';
    result += rho + ' ';
    result += '0 0 0 -' + R + ' ' + L;
    // draw h wall
    result += ' h ' + t;
    //draw left inner
    result += ' a ' + rho + ' ' + rho + ' 0 0 1 ';
    result += R - t + ' -' + (L - vThk);
    //draw right inner
    result += ' a ' + rho + ' ' + rho + ' 0 0 1 ';
    result += R - t + ' ' + (L - vThk);
    // draw h wall
    result += ' h ' + t;
    //draw right outer
    result += ' a ' + rho + ' ' + rho + ' 0 0 0 ';
    result += '-' + R + ' -' + L;

    return result;
  }
}
