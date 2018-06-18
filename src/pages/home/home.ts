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

    this.items=[{ name : 'Aries', date: 'March 21-April 19', img : 'Aries.png'},
      { name : 'Taurus', date : 'April 20-May 20', img : 'Taurus.png'},
      { name : 'Gemini', date : 'May 21-June 20', img : 'Gemini.png'}, 
      { name : 'Cancer', date : 'June 21-July 22', img : 'Cancer.png'},
      { name : 'Leo', date : 'July 23-August 22', img : 'Leo.png'}, 
      { name : 'Virgo', date : 'August 23-September 22', img : 'Virgo.png'},      
      { name : 'Libra', date : 'September 23-October 22', img : 'Libra.png'},     
      { name : 'Scorpio', date : 'October 23-November 21', img : 'Scorpio.png'},     
      { name : 'Sagittarius', date : 'November 22-December 21', img : 'Sagittarius.png'},     
      { name : 'Capricorn', date : 'December 22-January 19', img : 'Capricorn.png'},
      { name : 'Aquarius', date : 'January 20-February 18', img : 'Aquarius.png'},  
      { name : 'Pisces', date : 'February 19 to March 20', img : 'Pisces.png'}];
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
