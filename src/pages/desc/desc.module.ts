import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescPage } from './desc';

@NgModule({
  declarations: [
    DescPage,
  ],
  imports: [
    IonicPageModule.forChild(DescPage),
  ],
})
export class DescPageModule {}
