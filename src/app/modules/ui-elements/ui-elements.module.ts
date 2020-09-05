import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnitSliderComponent } from './unit-slider/unit-slider.component';
import { NumberSliderComponent } from './number-slider/number-slider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextInputComponent } from './text-input/text-input.component';
import { MaterialModule } from '../_material/material.module';

@NgModule({
  declarations: [
    UnitSliderComponent,
    NumberSliderComponent,
    DropdownComponent,
    TextInputComponent
  ],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [
    UnitSliderComponent,
    NumberSliderComponent,
    DropdownComponent,
    TextInputComponent
  ]
})
export class UiElementsModule {}
