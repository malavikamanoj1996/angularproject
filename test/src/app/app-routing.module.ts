import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { AdminPageComponent } from './modules/admin-page/admin-page.component';

const routes: Routes = [
  { path: 'malavika', component: LoginPageComponent },
  { path: '', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
