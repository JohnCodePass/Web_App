import { Component, DoCheck, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/local-storage.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {
  ArticleNum: number = 1;
  BTRExpress: string = this.ArticleNum === 1 ? "true" : ""
  Local: string = this.ArticleNum === 2 ? "true" : ""
  Hooper: string = this.ArticleNum === 3 ? "true" : ""
  Commuter: string = this.ArticleNum === 4 ? "true" : ""
  VanGo: string = this.ArticleNum === 5 ? "true" : ""
  DAR: string = this.ArticleNum === 6 ? "true" : ""
  constructor(private lsService: LocalStorageService) { 
    
  }

  ngOnInit(): void {
    // switch(window.location.pathname){
    //   case: ""

    //   break;
    // }

  }
  SelectArticle(num){
    this.ArticleNum = num
    this.BTRExpress= this.ArticleNum === 1 ? "true" : ""
    this.Local= this.ArticleNum === 2 ? "true" : ""
    this.Hooper= this.ArticleNum === 3 ? "true" : ""
    this.Commuter= this.ArticleNum === 4 ? "true" : ""
    this.VanGo= this.ArticleNum === 5 ? "true" : ""
    this.DAR= this.ArticleNum === 6 ? "true" : ""
  }

  SelectedButton(ArticleNum){

  }
  
}
