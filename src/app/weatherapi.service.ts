import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
	API_KEY = 'bf02fdb36e80cd761c8279289c978513';
	City:string="";
	
 
  constructor(private httpClient: HttpClient) {

            
	  }
	  
	 
	  
	    public getData(city){
			this.City=city;
			console.log(this.City);
   return this.httpClient.get(' http://api.openweathermap.org/data/2.5/weather?q='+this.City+'&appid=bf02fdb36e80cd761c8279289c978513');
	//return this.httpClient.get(' http://dummy.restapiexample.com/api/v1/employees ');
  }
}
