import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/home/components/about/about.component';
import { CategoryComponent } from './views/home/components/category/category.component';
import { TeamComponent } from './views/home/components/team/team.component';
import { AdoptionComponent } from './views/adoption/adoption.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RegisterComponent } from './views/home/components/register/register.component';
import { LoginComponent } from './views/home/components/login/login.component';
import { BannerComponent } from './views/home/components/banner/banner.component';
import { DogListComponent } from './views/home/components/dog-list/dog-list.component';
import { CatListComponent } from './views/home/components/cat-list/cat-list.component';
import { OtherListComponent } from './views/home/components/other-list/other-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    TeamComponent,
    AdoptionComponent,
    FooterComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    BannerComponent,
    DogListComponent,
    CatListComponent,
    OtherListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
