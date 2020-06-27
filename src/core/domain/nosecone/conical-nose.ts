import { NoseType } from './nose-type';

export class ConicalNose {
  public noseType: NoseType;

  constructor() {
    this.noseType = NoseType.Conical;
  }

  public cache: { [key: string]: number } = {};

  clearCache(): void {
    this.cache = {};
  }

  getVolume(): number {
    if (this.cache['Volume']) {
      return this.cache['Volume'];
    }

    this.cache['Volume'] = 1;

    return this.cache['Volume'];
  }
}
