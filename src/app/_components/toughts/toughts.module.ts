import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToughtsRoutingModule } from './toughts-routing.module';
import { ToughtsComponent } from './toughts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ToughtsComponent],
  imports: [
    CommonModule,
    SharedModule, 
    ToughtsRoutingModule
  ]
})
export class ToughtsModule { }
