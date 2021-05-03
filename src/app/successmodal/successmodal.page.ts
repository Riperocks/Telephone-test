import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successmodal',
  templateUrl: './successmodal.page.html',
  styleUrls: ['./successmodal.page.scss'],
})
export class SuccessmodalPage implements OnInit {

  constructor(private navCtrl:NavController,private modalCtrk:ModalController) { }

  ngOnInit() {
  }

  goHome()
  {
    this.modalCtrk.dismiss();
    //this.modalCtrk.dismiss();
    this.navCtrl.navigateRoot('tabs');
  }

}
