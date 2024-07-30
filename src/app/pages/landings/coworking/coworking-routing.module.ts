import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoworkingComponent } from './coworking.component';

const routes: Routes = [{ path: '', component: CoworkingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoworkingRoutingModule { }
