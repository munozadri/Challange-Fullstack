import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/service.weather';
import { User } from './models/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  myDate : Date = new Date();
  weather;
  user: User;
  status: string;
  identity;
  token;

  constructor(
    
    private weatherService: WeatherService
  ){
    this.user = new User("","","","","");
  }
  
  ngOnInit(){    
  }

  getWeather(countryCode: string, cityName:string){
    this.weatherService.getWeather(countryCode, cityName)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res
        },
        err => console.log(err)
      );

  }

  submitLocation(countryCode: HTMLInputElement, cityName: HTMLInputElement){
    this.getWeather(countryCode.value, cityName.value);

    countryCode.value = '';
    cityName.value = '';
    countryCode.focus();

    return false    

  }

  onSubmit(){
    console.log(this.user);
    this.weatherService.signup(this.user).subscribe(
      response =>{
        this.identity = response.user;

        if(!this.identity || !this.identity._id){
          this.status = 'error';
        }else{
          this.status = 'success';
          //Persistir datos del usuario
          localStorage.setItem('identity', JSON.stringify(this.identity));

          //conseguir token
          this.getToken();
        }
        
        this.status = 'success';
        },
        error => {
          var errormessage = <any>error;
          console.log(errormessage);

          if(errormessage != null){
            this.status = 'error';
          }
        }
    );
  }

  getToken(){
    this.weatherService.signup(this.user, 'true').subscribe(
      response =>{
        this.token = response.token;
        console.log(this.token);

        if(this.token.length <= 0){
          this.status = 'error';
        }else{
          this.status = 'success';
          //Persistir token del usuario
          localStorage.setItem('token', this.token);
          
        }
        
        this.status = 'success';
        },
        error => {
          var errormessage = <any>error;
          console.log(errormessage);

          if(errormessage != null){
            this.status = 'error';
          }
        }
    );
  }
}