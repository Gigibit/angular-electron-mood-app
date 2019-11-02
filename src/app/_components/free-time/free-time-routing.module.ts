import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FreeTimeComponent } from './free-time.component';

const routes: Routes = [
  {
    path: 'free-time',
    component: FreeTimeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeTimeRoutingModule {}
