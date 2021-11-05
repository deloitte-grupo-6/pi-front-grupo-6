import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/home/components/details/details.component';
import { AuthGuard } from './views/home/guards/auth.guard';
import { MyPageComponent } from './views/home/components/my-page/my-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalhes', canActivate: [AuthGuard], component: DetailsComponent },
  { path: 'minhapagina', component: MyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
