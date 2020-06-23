import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialComponents = [
  MatSidenavModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSliderModule,
  MatSelectModule,
  MatMenuModule,
  OverlayModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
