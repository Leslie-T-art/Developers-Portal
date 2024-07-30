import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { SaasClassicComponent } from './classic/classic.component';
import { SaasModernComponent } from './modern/modern.component';

const routes: Routes = [
  { path: '1', component: SaasModernComponent, pathMatch: 'full' },
  { path: '2', component: SaasClassicComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaasRoutingModule { }
