import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DescPage } from '../desc/desc';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  open(name : string){

    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();


    this.navCtrl.push(DescPage,{
      'name' : name
    });
  }

}
