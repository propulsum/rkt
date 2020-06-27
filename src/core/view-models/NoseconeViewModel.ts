import { ConicalNose } from 'core/domain/nosecone/conical-nose';
import { SvgNoseconeViewModel } from 'app/modules/rocket-drawing/components/svg-nosecone/svg-nosecone.viewmodel';

export class NoseconeViewModel {
  public rocketPart: ConicalNose;
  public drawingModel: SvgNoseconeViewModel;
}
