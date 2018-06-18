import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items : any[];


  constructor(public navCtrl: NavController) {

    this.items=[{ name : 'Aries', date: 'March 21-April 19)'},
      { name : 'Taurus', date : 'April 20-May 20'},
      { name : 'Gemini', date : 'May 21-June 20'}, 
      { name : 'Cancer', date : 'June 21-July 22'},
      { name : 'Leo', date : 'July 23-August 22'}, 
      { name : 'Virgo', date : 'August 23-September 22'},      
      { name : 'Libra', date : 'September 23-October 22'},     
      { name : 'Scorpio', date : 'October 23-November 21'},     
      { name : 'Sagittarius', date : 'November 22-December 21'},     
      { name : 'Capricorn', date : 'December 22-January 19'},
      { name : 'Aquarius', date : 'January 20-February 18'},  
      { name : 'Pisces', date : 'February 19 to March 20'}];
}

openAbout() {

  this.navCtrl.push(AboutPage);
 
}

openContact() {

    this.navCtrl.push(ContactPage);
}

openResults(name :String) {
  this.navCtrl.push(ResultPage,name);
}

}
