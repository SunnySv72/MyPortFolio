import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfoliDashboardComponent } from '../app/portfoli-dashboard/portfoli-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'dashboard', component: PortfoliDashboardComponent},
  {path: 'details', component: UserDetailsComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
