import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@demo-app/material';

const COMPONENTS = [LayoutComponent];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class LayoutModule {}
