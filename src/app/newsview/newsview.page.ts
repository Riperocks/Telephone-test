import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-newsview',
  templateUrl: './newsview.page.html',
  styleUrls: ['./newsview.page.scss'],
})
export class NewsviewPage implements OnInit {
  @ViewChild('header',{static:true}) headerImage: ElementRef;
  newsImg:any;
  newsTitle:any;
  newsDescription:any;
  constructor(
    private modalCtrl: ModalController, 
    private navParams: NavParams, 
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    let coords = this.navParams.get('coords');
    let news = this.navParams.get('news');
    this.newsTitle = news.newstitle;
    this.newsImg = news.newsImg;
    this.newsDescription = news.newsDesc;
    this.renderer.setStyle(this.headerImage.nativeElement, 'transform', `translateY(0px)`);
    this.renderer.setStyle(this.headerImage.nativeElement, 'width', `200px`);
    this.renderer.setStyle(this.headerImage.nativeElement, 'transition', '0.5s ease-in-out');
   

    setTimeout(() => {
      this.renderer.setStyle(this.headerImage.nativeElement, 'width',`100%`);
     // this.renderer.removeStyle(this.headerImage.nativeElement, 'transform');
    }, 50);
    
  }

  close(){
    this.modalCtrl.dismiss();
  }

  getDetails(event)
  {
    console.log("newvpage"+event.target.y);
  }

}
