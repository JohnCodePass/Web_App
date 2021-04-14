import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SchedulesMapsComponent } from './pages/schedules-maps/schedules-maps.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
  {path: 'About', component :AboutComponent},
  {path: 'Schdules&Maps', component :SchedulesMapsComponent},
  {path: 'Services', component :ServicesPageComponent},
  {path: '**', component :HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
