import { RocketPart } from 'core/domain/rocket-part';
import { SvgComViewModel } from '../svg-com/svg-com.viewmodel';
import { SvgCopViewModel } from '../svg-cop/svg-cop.viewmodel';

export abstract class SvgPartBaseViewModel {
  public abstract rocketPart: RocketPart;

  public ComViewModel: SvgComViewModel;
  public CopViewModel: SvgCopViewModel;

  public abstract draw(): string;
}
