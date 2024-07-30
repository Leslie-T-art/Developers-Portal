import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// module
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { ContactRoutingModule } from './contact-routing.module';

// component
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactComponent } from './contact.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    ContactComponent,
    HeroComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LeafletModule,
    NavbarsModule,
    FooterModule,
    UiModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
