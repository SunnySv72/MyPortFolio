import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfoliDashboardComponent } from '../app/portfoli-dashboard/portfoli-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'dashboard', component: PortfoliDashboardComponent},
  {path: 'details', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
