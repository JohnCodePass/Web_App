import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage/local-storage.service';

@Component({
  selector: 'app-schedules-maps',
  templateUrl: './schedules-maps.component.html',
  styleUrls: ['./schedules-maps.component.css']
})

export class SchedulesMapsComponent implements OnInit {
  FavoritesArray = this.lsService.GetValue();
  // initMap(): void {
  //   // The location of Uluru
  //   const uluru = { lat: -25.344, lng: 131.036 };
  //   // The map, centered at Uluru
  //   const map = new google.maps.Map(
  //     document.getElementById("map") as HTMLElement,
  //     {
  //       zoom: 4,
  //       center: uluru,
  //     }
  //   );
  
  //   // The marker, positioned at Uluru
  //   const marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map,
  //   });
  // }
  constructor(private lsService: LocalStorageService) { }

  ngOnInit(): void {
  }
  AddFav(value){
    if(value !== "" && !this.FavoritesArray.includes(value)){
      console.log(value+" has been added")
      this.lsService.AddValue(value);
    }else{
      console.log("Can't do that")
    }
  }
  
  RemoveFav(index){
    this.lsService.Remove(index)
  }


 FillInput(Input,value){
   console.log(value)
  Input.value = value;
 }
}
