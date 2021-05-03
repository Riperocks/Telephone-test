import { CartmodalPage } from './../modals/cartmodal/cartmodal.page';
import { ModalController, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { BehaviorSubject } from 'rxjs';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  @ViewChild('cart',{static:false,read:ElementRef})fab: ElementRef;
//  @ViewChild('cart',{static:false,read: ElementRef}) headerImage: ElementRef;
  products=[];
  cart = [];
  carItemCount: BehaviorSubject<number>
  constructor( private cartService:CartServiceService, private modalCtrl:ModalController,
    private renderer: Renderer2,private nativeAudio: NativeAudio,public platform: Platform) {
      this.platform.ready().then(() => {
        this.nativeAudio.preloadSimple('uniqueId1', 'assets/sounds/cart.wav').then((success)=>{
          console.log("success");
        },(error)=>{
          console.log(error);
        });
      });
     }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.carItemCount = this.cartService.getCartItemCount();
    console.log("ddddd"+this.carItemCount.value);

  }

  play(){
    this.nativeAudio.play('uniqueId1').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
  }

  addToCart(Product)
  {
    this.animateCss('tada');
    this.play();
    this.cartService.addProduct(Product);
    console.log('The product'+Product.pamount);
  }

  remove(product)
  {
    
    for (let [index,p] of this.products.entries())
    {
     
      if(p.pid === product.pid)
      {
        console.log(product.pid);
        if(p.pamount>0)
        {
          p.pamount -= 1;
          p.pprice = p.price*p.pamount;
        }
      
      }
    }
  }

  add(product)
  {
    
    for (let [index,p] of this.products.entries())
    {
     
      if(p.pid === product.pid)
      {
        console.log(product.pid);
        if(p.pamount>0)
        {
          p.pamount += 1;
          console.log(p.pprice);
          p.pprice = p.pprice*p.pamount;
        }
      
      }
    }
  }

  expandButton() //cart expanding method
  {
    this.renderer.setStyle(this.fab.nativeElement, 'transform', `scale3d(35,35,1)`);
    this.renderer.setStyle(this.fab.nativeElement, 'transition', '0.5s ease-in-out');
    
   
  }
  async openCart()
  {
   this.expandButton();
    const modal = await this.modalCtrl.create({
      component: CartmodalPage,
      backdropDismiss: true,
      cssClass:'cart-modal'
    });
    modal.onWillDismiss().then(()=>{
      this.renderer.removeStyle(this.fab.nativeElement, 'transform');
    })
    return await modal.present();
  }

  animateCss(animationName,keepAnimated = false)
  {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
      if(!keepAnimated)
      {
        node.classList.remove('animated', animationName)
      }
        node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }


}
