import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForAndIfComponent } from './for-and-if/for-and-if.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'ngif', component: ForAndIfComponent },
  /* { path: 'customer', component: CustomerComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'newPage', component: NewPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'todos', component: TodoListComponent},
  { path: 'logout', component: LogoutComponent},

  { path: '**', component: ErrorComponent},
   */


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
