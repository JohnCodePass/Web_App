import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-service-nav-btn',
  templateUrl: './service-nav-btn.component.html',
  styleUrls: ['./service-nav-btn.component.css']
})
export class ServiceNavBtnComponent implements OnInit {
  @Input () busName: string;
  @Input () Selected: string;

  btnClass: string = "";
  arrowClass: string = ""
  constructor() { }
  
  ngOnInit(): void {
    if(this.Selected === "true"){
      this.arrowClass = "Selected-bus"
      this.btnClass = "Selected-ServiceNavBtn"
    }else{
      this.arrowClass = "Unselected-bus"
      this.btnClass = "ServiceNavBtn"
    }
  }
  
}
