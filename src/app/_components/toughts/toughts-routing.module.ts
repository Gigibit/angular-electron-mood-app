import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToughtsComponent } from './toughts.component';

const routes: Routes = [
  {
    path: 'toughts',
    component: ToughtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToughtsRoutingModule { }
