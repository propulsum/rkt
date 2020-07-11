import { RocketPart } from 'core/domain/rocket-part';
import { SvgComViewModel } from '../svg-com/svg-com.viewmodel';

export abstract class SvgPartBaseViewModel {
  public abstract rocketPart: RocketPart;

  public ComViewModel: SvgComViewModel;

  public abstract draw(): string;
}
