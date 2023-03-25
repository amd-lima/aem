import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { VideosComponent } from '../components/videos/videos.component';

const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'videos', component: VideosComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
