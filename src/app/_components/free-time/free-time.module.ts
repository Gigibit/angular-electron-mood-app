import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeTimeRoutingModule } from './free-time-routing.module';

import { FreeTimeComponent } from './free-time.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FreeTimeComponent],
  imports: [CommonModule, SharedModule, FreeTimeRoutingModule]
})
export class FreeTimeModule {}
