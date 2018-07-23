import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-desc',
  templateUrl: 'desc.html',
})
export class DescPage {

  name : String = this.navParams.get('name');

  url = 'https://horoscope-api.herokuapp.com/horoscope/today/' + this.name;
  horoscope: Observable<any>;
  date: any;
  horo : any;

  url1 = 'https://horoscope-api.herokuapp.com/horoscope/week/' + this.name;
  horoscope1: Observable<any>;
  date1: any;
  horo1 : any;


  url2 = 'https://horoscope-api.herokuapp.com/horoscope/month/' + this.name;
  horoscope2: Observable<any>;
  date2: any;
  horo2 : any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {

    this.horoscope = this.httpClient.get(this.url);
    this.horoscope
    .subscribe(data => {
    this.date = data.date;
    this.horo = data.horoscope;
    });


    this.horoscope1 = this.httpClient.get(this.url1);
    this.horoscope1
    .subscribe(data => {
    this.date1 = data.week;
    this.horo1 = data.horoscope;
    });

    this.horoscope2 = this.httpClient.get(this.url2);
    this.horoscope2
    .subscribe(data => {
    this.date2 = data.month;
    this.horo2 = data.horoscope;
    });
    
  }



}
