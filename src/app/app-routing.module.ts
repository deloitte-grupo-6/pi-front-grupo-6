import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/home/components/details/details.component';
import { AuthGuard } from './views/home/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalhes', canActivate: [AuthGuard], component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
