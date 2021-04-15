import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private StrgValue:string[] = this.getFromLocalStorage('Favorites') ? this.getFromLocalStorage('Favorites') : [];

  constructor() { }

  GetValue(): string[] {
    return this.StrgValue;
  }
  saveToLocalStorage(value):void {
    console.log('saving to local storage...' + value)
    localStorage.setItem('Favorites', JSON.stringify(value));
  }
  getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
  }
  
  AddValue(entry: string):void {
    this.StrgValue.push(entry);
    this.saveToLocalStorage(this.StrgValue);
  }
  Remove(index: number){
    this.StrgValue.splice(index,1);
    localStorage.setItem('Favorites',JSON.stringify(this.StrgValue))
  }
}
