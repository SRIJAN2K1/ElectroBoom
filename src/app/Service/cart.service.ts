import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators'
import { CartDTO } from 'src/cartDTO.model';
import { CartUser } from 'src/cartUser.model';
import { Cartdelete } from '../cart/cartdelete.model';
import { Sum } from '../cart/sum.model';
import { Total } from '../cart/total.model';
import { PaymentService } from '../payment.service';
import { Payu } from './payu.model';
import { Products } from './products.model';
import { Updbutton } from './updbutton.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {practice1=new BehaviorSubject<any>(null);
  practice2=this.practice1.asObservable();usd=new Updbutton();
  imagemania=['Arduino','Plc','Sensors','HMI','Transistors','Solenoid','ZSS','LEDs'];
  image=[{Arduino:"https://docs.arduino.cc/static/d0c28c5bd0894792476c6052dea5fa63/29114/board-anatomy.png"},
  {Plc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrbYlmPfdfwljF1gJTlsxW-_qVBoQdLZESQ&usqp=CAU"},
  {Sensors:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLRqsdZoe9RONWm7zKh0D6MwLzOCSfsA5VA&usqp=CAU"},
{HMI:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hRYsL2d0nCA5EHZ97TsQcImT1z-IsIrpoA&usqp=CAU"},
{Transistors:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKAVb-FRugWlKc2S5PuaVyM4mVVCvFR_QPQ&usqp=CAU"},
{Solenoid:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuxh2FLkW1YgafT2xoU4QIJ8XM56HOVyIkg&usqp=CAU"},
{ZSS:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBcTHNpbiRhwN_0BxZP_oHUf8B3Xv6NzTJQ&usqp=CAU"},
{LEDs:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zEexwOEykScnhGJlCMWmgLbsyLmfdoQIYw&usqp=CAU"}
];

  cartdel=new Cartdelete();abc:any;practice:any;ltemp:any=[];mee:any;
  xyz:any;java:any;trial:any=[];temporary:any=[];pay=new Payu();
  cartUser = new CartUser();quantity:any=[];stemp=new Sum();
  products= new Products();pq=0;
  cartDTO=new CartDTO();abcd=new Total();
dataList:any =[];
productList=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient,private payment:PaymentService) {
  
  }
getTotal(xyz:any){let sum=0;
  for(let i=0;i<xyz.length;i++){
    sum+=xyz[i].item.price;
  }
return sum;
}
 seeTotal(item:any){let sum=0;
  for(let i=0;i<item.length;i++){
    sum+=item[i].item.price*item[i].qty;
   }
   this.stemp.sum = sum;
   console.log(sum+" Totality");
//   this.payment.getTotal(this.stemp);
this.mee=sum;
return sum;
 }
setPractice(item:any){
this.practice=item;
}
addId(u:any){
  this.cartUser.uid=u.i;this.cartdel.uid=u.i;this.usd.uid=u.i;
  this.cartDTO.uid=u.i;this.pay.name=u.n;this.pay.email=u.e;
  console.log(this.cartUser.uid);this.payment.getDetails(this.pay);
}
addPid(item:any){
  this.cartUser.productid=item.i;this.cartUser.qty=1;
  console.log(this.cartUser.uid);
  console.log(this.cartUser.productid);
  this.add2(item).subscribe((xyz:any)=>{console.log(xyz+ ' yay')});
  this.display1().subscribe((item:any)=>{this.practice1.next(item);console.log(item+ ' yay')});
  return this.practice2;
}
add2(item:any){ this.cartUser.productid=item.i;this.cartUser.qty=1;
  return this.http.post<any>("/place/order",this.cartUser);
}
display1(){
  return this.http.post<any>("/place/display",this.cartDTO);
}
displayCart(){
  this.display1().subscribe((item:any)=>{this.practice1.next(item);console.log(item+ ' yay')});
  return this.practice2;
}
deleteCart(item:any){
this.delete2(item).subscribe((item:any)=>{this.practice1.next(item);
  console.log(item+ ' yay')});
return this.http.get<any>("/place/display").pipe(map((res:any)=>{this.practice1.next(res);
  return res;
  })) 
}
delete2(item:any){
  console.log(this.usd.qty+" Bazzinga");
  this.usd.productid=item.p;
  return this.http.post<Cartdelete>("/place/button",this.usd);
}
setMe(item:number){
  this.usd.qty=item;
}
// ngOnDestroy(){
//   this.CartService.practice2.unsubscribe();
// }





  }
