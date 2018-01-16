import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';

const COMPONENTS = [LayoutComponent];
@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class LayoutModule {}
