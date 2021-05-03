import { SuccessmodalPage } from './../successmodal/successmodal.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides, NavController, Platform } from '@ionic/angular';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.page.html',
  styleUrls: ['./addappointment.page.scss'],
})
export class AddappointmentPage implements OnInit {
  @ViewChild('theslides',{static:true}) slides: IonSlides;
  activeIndex: number = 0;
  paymethod:any = "card"
  buttonText:any = "Next";
  services:any[];
  barbers:any[];
  total:any =0.00;
  date:any;
  numbers:any;
  numberss:any;
  timeslot:any;
  steps:any[] = ["Select Service","Select Barber","Select Date","Select Time","Set Payment"];
  constructor(private modalCtrl:ModalController,private navCtrl:NavController,
    private platform: Platform,
    public admobFree: AdMobFree) { }

  ngOnInit() {
    this.services = [
      {
        serviceId:'1',
        serviceName: "Hair cut",
        servicePrice: 50,
        serviceTime: '30',
        serviceValue: "hc",
        serviceDes: "All haircuts included"
      },
      {
        serviceId:'2',
        serviceName: "Hair Color",
        servicePrice: 50,
        serviceTime: '30',
        serviceValue: "hcr",
        serviceDes: "All haircuts included"
      },
      {
        serviceId:'3',
        serviceName: "Hair Massage",
        servicePrice: 60,
        serviceTime: '30',
        serviceValue: "hm",
        serviceDes: "All haircuts included"
      }
    ]
    this.barbers = [
      {
        barberId:'1',
        barberName: "Hair cut",
        barberPrice: 50,
        barberImg: '30',
        barberValue: "hc",
        serviceDes: "All haircuts included"
      },
      {
        serviceId:'2',
        serviceName: "Hair Color",
        servicePrice: 50,
        serviceTime: '30',
        serviceValue: "hcr",
        serviceDes: "All haircuts included"
      },
      {
        serviceId:'3',
        serviceName: "Hair Massage",
        servicePrice: 60,
        serviceTime: '30',
        serviceValue: "hm",
        serviceDes: "All haircuts included"
      }
    ]
  

    this.slides.length()
    .then(num=>{
      this.numbers = num;
      
      this.numberss = Array(this.numbers).fill(0).map((x,i)=>i);
      console.log(this.numberss);
    })
  }

  changeTotal(price)
  {
    console.log(price);
    this.total = 0;
    this.total = this.total + price;
  }
  dismiss() {
    this.navCtrl.navigateRoot('tabs');
  }

  onSlideChange() {
    this.slides.getActiveIndex()
      .then(index => {
        this.activeIndex = index;
        console.log(this.activeIndex);
        if (index == 4) {
          this.buttonText = 'Pay';
        }
        else
        {
          this.buttonText = 'Next'
        }
      })
  }

  switchMethod()
  {

  }


  checkIsend()
  {
   this.slides.isEnd()
   .then(result=>{
     console.log(result);
     this.switchFunctions(result);
   }) 
  }

  switchFunctions(result)
  {
    if(result)
    {
      if(this.platform.is("cordova"))
    {
      this.showInterstitialAds();
    }
     this.showSuccessModal();
    }

    else
    {
      this.slides.slideNext();
    }

  }

  async showSuccessModal()
  {
    const modal = await this.modalCtrl.create({
      component: SuccessmodalPage,
      backdropDismiss: true
    });

    return await modal.present();
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
