import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// module
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { AccountRoutingModule } from './account-routing.module';

// component
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProfileWidgetComponent } from './dashboard/profile-widget/profile-widget.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { DashboardRevenueWidgetComponent } from './dashboard/revenue-widget/revenue-widget.component';
import { DashboardStatWidgetComponent } from './dashboard/stat-widget/stat-widget.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { AccountTabComponent } from './settings/account-tab/account-tab.component';
import { NotificationTabComponent } from './settings/notification-tab/notification-tab.component';
import { PasswordTabComponent } from './settings/password-tab/password-tab.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    DashboardStatWidgetComponent,
    DashboardRevenueWidgetComponent,
    DashboardProfileWidgetComponent,
    ProjectsComponent,
    TasksComponent,
    AccountTabComponent,
    PasswordTabComponent,
    NotificationTabComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    NavbarsModule,
    FooterModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
