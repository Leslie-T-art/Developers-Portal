import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioGridComponent } from './portfolio-grid/portfolio-grid.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioMasonryComponent } from './portfolio-masonry/portfolio-masonry.component';

const routes: Routes = [
  { path: 'grid', component: PortfolioGridComponent },
  { path: 'masonry', component: PortfolioMasonryComponent },
  { path: 'item', component: PortfolioItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
