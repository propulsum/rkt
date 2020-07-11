import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { SvgNoseconeViewModel } from 'app/modules/rocket-drawing/components/svg-rocket-part/svg-nosecone.viewmodel';

export class NoseconeViewModel {
  public rocketPart: ConicalNose;
  public drawingModel: SvgNoseconeViewModel;
}
