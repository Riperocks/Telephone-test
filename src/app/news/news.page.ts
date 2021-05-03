import { NewsviewPage } from './../newsview/newsview.page';
import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { myFadeInAnimation } from '../animations/fade-in';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newss:any[];
  constructor(private navCtrl:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.newss = [
      {
        newsTitle:'Sarajevo Barbering Seminar',
        newsImgUrl:'assets/imgs/bnws1.jpg',
        newsDescription:' Hairdressing has long been not just an essential craft. Hairdressing is now a matter of prestige, inspiration,new art, a cult.'
      },
      {
        newsTitle:'Dear hairdressers, see you at Hairstyle News 2020!',
        newsImgUrl:'assets/imgs/bnws2.jpg',
        newsDescription:' Hairdressing has long been not just an essential craft. Hairdressing is now a matter of prestige, inspiration,new art, a cult.'
      },
      {
        newsTitle:'Hair style Festival',
        newsImgUrl:'assets/imgs/bnws3.jpg',
        newsDescription:'  Favorite moments of the show, inspirational hairdressing creations and hanging out with colleagues at the rich fair just some of the Festival moments that cheered the Festival organizers, and were delighted by our cameramen who made more than 30 hours of video material.'
      },
    ]
  }

  goDetails(news,ev)
  {
    console.log(ev);
    this.modalCtrl.create({
      component: NewsviewPage,
      enterAnimation: myFadeInAnimation,
      componentProps: {
        'coords': {
          x: ev.target.x,
          y: ev.target.y
        },
        'news':{
          newstitle: news.newsTitle,
          newsImg: news.newsImgUrl,
          newsDesc:news.newsDescription
        }
      },
    }).then((modal) => {
      modal.present();
    });

  }
  

}
