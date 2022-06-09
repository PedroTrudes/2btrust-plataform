import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './2btrust/forms/login/login.component';
// import { DashboardComponent } from './2btrust/views/dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo:'login', pathMatch:'full' },
  // {path: 'login', component: LoginComponent},
  // {path: 'dashboard', component: DashboardComponent}
  { path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
