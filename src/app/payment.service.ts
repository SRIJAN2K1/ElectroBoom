import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sum } from './cart/sum.model';
import { CartService } from './Service/cart.service';
import { Payu } from './Service/payu.model';
function _window() : any{
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class PaymentService {pay=new Payu();s=new Sum();x:any;pq=0;
get nativeWindow() :any{
  return _window();
}
  constructor(http:HttpClient) { }
  getDetails(p:Payu){
    this.pay.email=p.email;this.pay.name=p.name;
  }
  getTotal(item:any){
this.s.sum=item.sum;this.x=this.s.toString();this.x+=" paise";this.pq=item.sum;
  }
}
