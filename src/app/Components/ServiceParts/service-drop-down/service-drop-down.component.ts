import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-drop-down',
  templateUrl: './service-drop-down.component.html',
  styleUrls: ['./service-drop-down.component.css']
})
export class ServiceDropDownComponent implements OnInit {
  public isCollapsed = true;
  @Input () Title: string;
  @Input() Body: string

  Icon:string = "fa-plus"
  constructor() { }

  ngOnInit(): void {
  }
  clickme(){
    if(!this.isCollapsed){
      this.Icon = "fa-plus"
    }else{
      this.Icon = "fa-minus"

    }
  }
}
