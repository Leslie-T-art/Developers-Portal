import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { ChangeLogComponent } from './change-log/change-log.component';
import { CodeSplitingComponent } from './code-spliting/code-spliting.component';
import { ColorsComponent } from './colors/colors.component';
import { CustomComponent } from './custom/custom.component';
import { CustomizationComponent } from './customization/customization.component';
import { HerosComponent } from './heros/heros.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { PluginsComponent } from './plugins/plugins.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { RoutingComponent } from './routing/routing.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bootstrap',
    pathMatch: 'full'
  },
  {
    path: 'introduction',
    component: IntroductionComponent
  },
  {
    path: 'quick-start',
    component: QuickStartComponent
  },
  {
    path: 'customization',
    component: CustomizationComponent
  },
  {
    path: 'change-log',
    component: ChangeLogComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'bootstrap',
    loadChildren: () => import('./bootstrap/bootstrap.module').then(m => m.BootstrapModule)
  },
  {
    path: 'custom',
    component: CustomComponent
  },
  {
    path: 'plugins',
    component: PluginsComponent
  },
  {
    path: 'navbars',
    component: NavbarsComponent
  },
  {
    path: 'heros',
    component: HerosComponent
  },
  {
    path: 'routing',
    component: RoutingComponent
  },
  {
    path: 'code-spliting',
    component: CodeSplitingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
