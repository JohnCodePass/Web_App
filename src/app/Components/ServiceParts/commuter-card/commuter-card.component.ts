import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commuter-card',
  templateUrl: './commuter-card.component.html',
  styleUrls: ['./commuter-card.component.css']
})
export class CommuterCardComponent implements OnInit {
  @Input() Text:string;
  @Input() Title:string;
  @Input() SVG:string;
  Money:boolean = false;
  Leaf:boolean = false;
  Happy:boolean = false;
  constructor() { }

  ngOnInit(): void {
    switch(this.SVG)
    {
      case "Money":
        this.Money = true
        break;
      case "Happy":
        this.Happy = true
        break;
      case "Leaf":
        this.Leaf = true
        break;
    }
  }

}
