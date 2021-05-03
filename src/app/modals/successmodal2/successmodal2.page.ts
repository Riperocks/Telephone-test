import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-successmodal2',
  templateUrl: './successmodal2.page.html',
  styleUrls: ['./successmodal2.page.scss'],
})
export class Successmodal2Page implements OnInit {

  constructor(private navCtrl:NavController,private modalCtrk:ModalController) { }

  ngOnInit() {
    setTimeout(() => {
      this.modalCtrk.dismiss();
    this.navCtrl.navigateRoot('tabs/tab4');
    }, 2000);
  }

  goHome()
  {
    this.modalCtrk.dismiss();
    //this.modalCtrk.dismiss();
    this.navCtrl.navigateRoot('tabs');
  }

}
