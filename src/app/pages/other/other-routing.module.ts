import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'post',
        loadChildren: () => import('./blog-post/blog-post.module').then(m => m.BlogPostModule)
      },
    ]
  },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'career', loadChildren: () => import('./career/career.module').then(m => m.CareerModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
  { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
