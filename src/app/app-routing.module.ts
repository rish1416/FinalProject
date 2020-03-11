import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TermsComponent} from './components/terms/terms.component';
import {AppComponent} from './app.component';
import {BodyComponent} from './components/body/body.component';
import {PolicyComponent} from './components/policy/policy.component';

const routes: Routes = [
  {path: 'terms' , component: TermsComponent},
  {path: 'home' , component: BodyComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' } ,
  {path: 'policy' , component: PolicyComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
