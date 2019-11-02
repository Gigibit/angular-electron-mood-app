import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeelingComponent } from './feeling.component';

const routes: Routes = [
  {
    path: 'feeling',
    component: FeelingComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeelingRoutingModule {}
