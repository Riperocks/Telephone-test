import { SuccessmodalPage } from './../successmodal/successmodal.page';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Successmodal2Page } from '../modals/successmodal2/successmodal2.page';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  paymethod:any = "card"
  constructor(private modalCtrl:ModalController,private navCtrl:NavController) { }

  ngOnInit() {
  }

  async openSuccessModal()
  {

    const modal = await this.modalCtrl.create({
      component: Successmodal2Page,
      backdropDismiss: true
    });

    return await modal.present();
  }

}
