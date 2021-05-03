import { AddappointmentPage } from './../addappointment/addappointment.page';
import { Component } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalCtrl: ModalController, public navCtrl:NavController,
    private platform: Platform,
    public admobFree: AdMobFree) {}


   openBookingModal()
  {
/* 
    const modal = await this.modalCtrl.create({
      component: AddappointmentPage,
      backdropDismiss: true
    });

    return await modal.present(); */
    if(this.platform.is("cordova"))
    {
      this.showInterstitialAds();
    }

    this.navCtrl.navigateForward('addappointment')
  }

  showInterstitialAds(){
    let interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: false, // Remove in production
        autoShow: true,
        id: "" // your ad id here
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
    }).catch(e => alert(e));
}

}
