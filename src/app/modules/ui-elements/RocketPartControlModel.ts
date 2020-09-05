export enum ControlType {
  UnitSlider,
  NumberSlider,
  DropDown,
  TextInput
}

export interface IControl {
  label: string;
  value: any;
  controlType: ControlType;

  changeDetected: (newValue: number) => void;
}

export class DropDownControl implements IControl {
  public readonly controlType: ControlType = ControlType.DropDown;
  public label: string;
  public value: string;
  public options: { [key: string]: string } = {};

  public changeDetected: (newValue: number) => void;

  public addOption(variableText: string, userText: string) {
    this.options[userText] = variableText;
  }
}

export class UnitControl implements IControl {
  public readonly controlType: ControlType = ControlType.UnitSlider;
  public label: string;
  public value: number;
  public min: number;
  public max: number;
  public step: number;

  public changeDetected: (newValue: number) => void;
}

export class TextInputControl implements IControl {
  public readonly controlType: ControlType = ControlType.TextInput;
  public label: string;
  public value: string;

  public changeDetected: (newValue: number) => void;
}

export class RocketPartControlModel {
  public controlList: { [key: string]: IControl } = {};
}
