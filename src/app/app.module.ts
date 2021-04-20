import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SchedulesMapsComponent } from './pages/schedules-maps/schedules-maps.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceNavBtnComponent } from './Components/ServiceParts/service-nav-btn/service-nav-btn.component';
import { ServiceDropDownComponent } from './Components/ServiceParts/service-drop-down/service-drop-down.component';
import { VanGoComponent } from './components/ServiceParts/van-go/van-go.component';
import { DialARideComponent } from './components/ServiceParts/dial-a-ride/dial-a-ride.component';
import { CommuterComponent } from './components/ServiceParts/commuter/commuter.component';
import { CommuterCardComponent } from './components/ServiceParts/commuter-card/commuter-card.component';
import { LocalComponent } from './Components/ServiceParts/local/local.component';
import { HopperComponent } from './Components/ServiceParts/hopper/hopper.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SchedulesMapsComponent,
    ServicesPageComponent,
    ServiceNavBtnComponent,
    ServiceDropDownComponent,
    VanGoComponent,
    DialARideComponent,
    CommuterComponent,
    CommuterCardComponent,
    LocalComponent,
    HopperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
