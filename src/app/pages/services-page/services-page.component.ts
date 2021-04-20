import { Component, DoCheck, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/local-storage.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {
  

  constructor(private lsService: LocalStorageService) { 
    
  }

  ngOnInit(): void {
    // switch(window.location.pathname){
    //   case: ""

    //   break;
    // }

  }
 
}
