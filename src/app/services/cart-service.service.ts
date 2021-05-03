import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  pid: number,
  pname: string,
  pprice:number,
  pImage:string,
  pamount:number
}
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  data: Product[] = [
    {
      pid:1,
      pname:'Anti Mark Targeted Correcting Roll On',
      pprice:52,
      pImage:'assets/imgs/products/product1.png',
      pamount:1
    },
    {
      pid:2,
      pname:'By My Beard Conditioner Face Moisturiser 300ml',
      pprice:30,
      pImage:'assets/imgs/products/product2.png',
      pamount:1
    },
    {
      pid:3,
      pname:'Gillette 2 Twin Blade Disposable Razors Pack of 5',
      pprice:20,
      pImage:'assets/imgs/products/product3.png',
      pamount:1
    },
    {
      pid:4,
      pname:'David Beckham Beyond Forever Aftershave Lotion 60ml',
      pprice:40,
      pImage:'assets/imgs/products/product4.png',
      pamount:1
    },
    
  ]


  private cart = [];
  private cartItemCount = new BehaviorSubject(0)
  constructor() { }


  getProducts()
  {
    return this.data;
  }

  getCart()
  {
    return this.cart
  }

  getCartItemCount()
  {
    return this.cartItemCount;
  }

  addProduct(product)
  {

    console.log(product);
    let added = false;
    for (let p of this.cart)
    {
      if(p.pid === product.pid)
      {
        p.pamount +=1;
        added = true;
        break
      }
    }

    if(!added)
    {
      this.cart.push(product);
    }

    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreseProduct(product)
  {
    for (let [index,p] of this.cart.entries())
    {
      if(p.pid === product.pid)
      {
        p.pamount -= 1;
        if(p.pamount == 0)
        {
          this.cart.splice(index,1);
        }
      }
    }

    this.cartItemCount.next(this.cartItemCount.value - 1);
  }


  removeProduct(product)
  {
    for(let [index,p] of this.cart.entries())
    {
      if(p.pid === product.pid)
      {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index,1);
      }
    }
  }
}
