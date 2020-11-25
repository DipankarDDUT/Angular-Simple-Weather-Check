import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from './weatherapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Weather-APP';
  City:string=null;
  data=null;
  
  getName(city){
	  this.City=city;
	   this.apiService.getData(city).subscribe((data)=>{
      this.data=data;
	  console.log(this.data);
      
    });
		
  }
  
   constructor(private apiService: WeatherapiService) {
	
			
	   }
	   //subscribing to observable
	     ngOnInit() {

  }
}
