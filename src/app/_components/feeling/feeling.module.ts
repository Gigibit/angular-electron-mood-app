import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeelingRoutingModule } from './feeling-routing.module';

import { FeelingComponent } from './feeling.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeelingComponent],
  imports: [CommonModule, SharedModule, FeelingRoutingModule]
})
export class FeelingModule {}
