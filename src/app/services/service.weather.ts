import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';


@Injectable()
export class WeatherService {
    public ruta: string;
    public url = '';
    public apiKey = '0ddc54b658a2e8c262e3ef41fde07816';
    

    constructor(
        private _http: HttpClient
    ){
        this.ruta = Global.ruta;
        this.url = `http://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}&units=metric&q=`;
    }

    getWeather(cityName: string, countryCode: string){
        return this._http.get(`${this.url}${cityName},${countryCode}`);

    }

    signup(user, gettoken= null): Observable<any>{
        if(gettoken != null){
            user.gettoken = gettoken;            
        }

        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.ruta+'login', params, {headers: headers});
    }

}