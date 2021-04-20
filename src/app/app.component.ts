import { Component,OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'WebRTD';
  public isMenuCollapsed = true;
  isServiceActive:string
  isAboutActive:string
  isSched_MapsActive:string
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd ) {
        console.log(val.url)
        this.isServiceActive = val.url === "/service-page" ? "active" : ""
        this.isAboutActive = val.url === "/About" ? "active" : ""
        this.isSched_MapsActive = val.url === "/Schdules&Maps" ? "active" : ""
      }
  });
   }

  ngOnInit(): void {
    console.log(window.location.pathname)
  }
  

}
