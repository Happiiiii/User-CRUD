import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ViewblogComponent } from './viewblog/viewblog.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'edit/:id',
    component : EditComponent
  },
  {
    path : 'viewblog',
    component : ViewblogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
