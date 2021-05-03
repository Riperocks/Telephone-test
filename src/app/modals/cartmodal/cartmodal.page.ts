import { ModalController, NavController } from '@ionic/angular';
import { Product, CartServiceService } from './../../services/cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.page.html',
  styleUrls: ['./cartmodal.page.scss'],
})
export class CartmodalPage implements OnInit {

  cart:Product[] = [];
  constructor(private cartService:CartServiceService,private modalCtrl:ModalController,
    public navCtrl:NavController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  deCreaseCartItem(product)
  {
    this.cartService.decreseProduct(product)
  }

  increaseCartItem(product)
  {
    this.cartService.addProduct(product);
  }

  removeCartItem(product)
  {
    this.cartService.removeProduct(product);
  }


  getTotal()
  {
    return this.cart.reduce((i,j)=>i+j.pprice * j.pamount,0)
  }


  close()
  {
    this.modalCtrl.dismiss();
  }

  goPayment()
  {
    this.close();
    this.navCtrl.navigateForward('payments');
  }

}
