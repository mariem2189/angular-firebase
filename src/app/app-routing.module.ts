import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VideosComponent } from './components/videos/videos.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'videos', component:VideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
