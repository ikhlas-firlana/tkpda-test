import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculateMinimumComponent } from './calculate-minimum/calculate-minimum.component';

const routes: Routes = [
  { path: '', component: CalculateMinimumComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
