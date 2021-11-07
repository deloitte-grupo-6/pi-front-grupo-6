import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/home/components/about/about.component';
import { CategoryComponent } from './views/home/components/category/category.component';
import { TeamComponent } from './views/home/components/team/team.component';
import { AdoptionComponent } from './views/home/components/adoption/adoption.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RegisterComponent } from './views/home/components/register/register.component';
import { LoginComponent } from './views/home/components/login/login.component';
import { BannerComponent } from './views/home/components/banner/banner.component';
import { DogListComponent } from './views/home/components/dog-list/dog-list.component';
import { CatListComponent } from './views/home/components/cat-list/cat-list.component';
import { OtherListComponent } from './views/home/components/other-list/other-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetsListComponent } from './views/home/components/pets-list/pets-list.component';
import { PetRegisterComponent } from './views/home/components/pet-register/pet-register.component';
import { DetailsComponent } from './views/home/components/details/details.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { MyPageComponent } from './views/home/components/my-page/my-page.component';

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
    OtherListComponent,
    PetRegisterComponent,
    DetailsComponent,
    MyPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AlifeFileToBase64Module,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
