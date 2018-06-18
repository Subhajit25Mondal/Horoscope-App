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

    this.items=[{ name : 'Aries', date: 'Mar 21 - Apr 19', img : 'Aries.png'},
      { name : 'Taurus', date : 'Apr 20 - May 20', img : 'Taurus.png'},
      { name : 'Gemini', date : 'May 21 - June 20', img : 'Gemini.png'}, 
      { name : 'Cancer', date : 'June 21 - July 22', img : 'Cancer.png'},
      { name : 'Leo', date : 'July 23 - Aug 22', img : 'Leo.png'}, 
      { name : 'Virgo', date : 'Aug 23 - Sept 22', img : 'Virgo.png'},      
      { name : 'Libra', date : 'Sept 23 - Oct 22', img : 'Libra.png'},     
      { name : 'Scorpio', date : 'Oct 23 - Nov 21', img : 'Scorpio.png'},     
      { name : 'Sagittarius', date : 'Nov 22 - Dec 21', img : 'Sagittarius.png'},     
      { name : 'Capricorn', date : 'Dec 22 - Jan 19', img : 'Capricorn.png'},
      { name : 'Aquarius', date : 'Jan 20 - Feb 18', img : 'Aquarius.png'},  
      { name : 'Pisces', date : 'Feb 19 - Mar 20', img : 'Pisces.png'}];
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
