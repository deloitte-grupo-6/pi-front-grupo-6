import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';

import { CatListComponent } from './views/home/components/cat-list/cat-list.component';
import { DogListComponent } from './views/home/components/dog-list/dog-list.component';
import { OtherListComponent } from './views/home/components/other-list/other-list.component';
import { HomeComponent } from './views/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'cachorro', component: DogListComponent },
  { path: 'gato', component: CatListComponent },
  { path: 'outros', component: OtherListComponent },
  { path: '', component: HomeComponent },
];

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot();
