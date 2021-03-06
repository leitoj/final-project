import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProblemsComponent } from './pages/problems/problems.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { JoseComponent } from './experiences-pages/jose/jose.component';
import { LourdesComponent } from './experiences-pages/lourdes/lourdes.component';
import { WelcomeComponent } from './experiences-pages/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoTopComponent } from './shared/go-top/go-top.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExperienceComponent,
    ProblemsComponent,
    HomeComponent,
    PageNotFoundComponent,
    JoseComponent,
    LourdesComponent,
    WelcomeComponent,
    GoTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'problems', component: ProblemsComponent},
      {
        path:'experience',
        component: ExperienceComponent,
        children: [
          {
            path:'', 
            pathMatch: 'full',
            component: WelcomeComponent
          },
          {
            path:'jose', 
            component: JoseComponent
          },
          {
            path:'lourdes', 
            component: LourdesComponent
          }
        ]
      },
      {path:'', component: HomeComponent},
      {path:'**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
