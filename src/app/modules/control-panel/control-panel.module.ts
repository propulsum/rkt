import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { ToolboxComponent } from './components/part-toolbox/toolbox.component';
import { PartEditorComponent } from './components/part-editor/part-editor.component';
import { MaterialModule } from '../_material/material.module';
import { PartDataComponent } from './components/part-data/part-data.component';
import { TreeDrawerComponent } from './components/tree-drawer/tree-drawer.component';
import { PartAppearanceComponent } from './components/part-appearance/part-appearance.component';

@NgModule({
  declarations: [
    ControlPanelComponent,
    ToolboxComponent,
    PartEditorComponent,
    PartDataComponent,
    TreeDrawerComponent,
    PartAppearanceComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [ControlPanelComponent]
})
export class ControlPanelModule {}
