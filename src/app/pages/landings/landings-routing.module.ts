import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
  { path: 'agency', loadChildren: () => import('./agency/agency.module').then(m => m.AgencyModule) },
  { path: 'saas', loadChildren: () => import('./saas/saas.module').then(m => m.SaasModule) },
  { path: 'coworking', loadChildren: () => import('./coworking/coworking.module').then(m => m.CoworkingModule) },
  { path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
  { path: 'startup', loadChildren: () => import('./startup/startup.module').then(m => m.StartupModule) },
  { path: 'software', loadChildren: () => import('./software/software.module').then(m => m.SoftwareModule) },
  { path: 'marketing', loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule) },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingsRoutingModule { }
