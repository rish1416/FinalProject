import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermsComponent } from './components/terms/terms.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { PolicyComponent } from './components/policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AboutComponent,
    LandingPageComponent,
    NavbarComponent,
    TestimonialComponent,
    ContactsComponent,
    FooterComponent,
    TermsComponent,
    BodyComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
