import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartdelete } from './cartdelete.model';
import { getCurrencySymbol } from '@angular/common';
import { Total } from './total.model';
import { BehaviorSubject, map } from 'rxjs';
import { PaymentService } from '../payment.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {pq=0;
product:any;userr:any;x:any;cartdel= new Cartdelete();semp=new Total();exp:any;xyz:any =[];showhead:boolean=true;temp=0; 
emptyCart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwA6lJzjxTVhVJRtear5nDtl3GmXEPwpB6g&usqp=CAU";
abcd="https://www.tutorialspoint.com/electronic_circuits/images/electronic_components.jpg";
Arduino="https://docs.arduino.cc/static/d0c28c5bd0894792476c6052dea5fa63/29114/board-anatomy.png";
Plc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrbYlmPfdfwljF1gJTlsxW-_qVBoQdLZESQ&usqp=CAU";
Sensors="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLRqsdZoe9RONWm7zKh0D6MwLzOCSfsA5VA&usqp=CAU";
HMI="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hRYsL2d0nCA5EHZ97TsQcImT1z-IsIrpoA&usqp=CAU";
Transistors="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKAVb-FRugWlKc2S5PuaVyM4mVVCvFR_QPQ&usqp=CAU";
Solenoid="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuxh2FLkW1YgafT2xoU4QIJ8XM56HOVyIkg&usqp=CAU";
ZSS="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBcTHNpbiRhwN_0BxZP_oHUf8B3Xv6NzTJQ&usqp=CAU";
LEDs="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zEexwOEykScnhGJlCMWmgLbsyLmfdoQIYw&usqp=CAU";

TeslaCoil="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujXG2CXbM2v-u3a_fGlxjtZM71HABkm3ABg&usqp=CAU";
Battery="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-FXRw7rbz953j_L4omsyrwAfu-WzACdtPw&usqp=CAU";

constructor(public cart:CartService,public route:Router,private rout:ActivatedRoute,private payment:PaymentService) {  
// this.route.routeReuseStrategy.shouldReuseRoute=()=>false;
  }
  ngOnInit():void{
    this.cart.displayCart().subscribe((item:any)=>{this.cart.seeTotal(item),console.log(item+ "BeatBox");});
    this.cart.practice2.subscribe(product=>this.product=product);
    
  }
deleteCart(item:any){
  console.log(item);
this.cart.deleteCart(item).subscribe((res)=>{console.log(res);
});
}
navigate(){
  this.route.navigate(["/header/cart_1"]); 
}
shift(){
this.route.navigate(["header/products"]);
}
options = {
  "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
  "amount": 50000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Acme Corp",
  "email":'',
  "description": "Test Transaction",
  "image": "https://example.com/your_logo",
  "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "prefill": {
      "name": '',
      "email": "lor@1234",
      "contact": "9999999999"
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};
rzp1:any;paymentHandler: any = null;
pay(){this.route.navigate(['header/address']);
// this.options.name=this.payment.pay.name;this.options.email=this.payment.pay.email;
// // this.options.amount=this.payment.x;
// this.rzp1 = new this.payment.nativeWindow.Razorpay(this.options);
// this.rzp1.open();

  // const paymentHandler = (<any>window).StripeCheckout.configure({
  //   key: 'pk_test_51MGFumSF5JHb9m1dmd0tOGyFMlhWYk35QwzTMyuG0R6sU33m2cx0OWmXURgsx5dtH87FOmFmNWrMgvToGBGzWNTQ00oMECFIdg',
  //   locale: 'auto',
  //   token: function (stripeToken: any) {
  //     console.log(stripeToken);
  //     alert('Stripe token generated!');
  //   },
  // });
  // paymentHandler.open({
  //   name: this.payment.pay.name,
  //   description: this.payment.pay.email,
  //   amount: this.cart.mee * 100,
  // });
}

// invokeStripe() {
//   if (!window.document.getElementById('stripe-script')) {
//     const script = window.document.createElement('script');
//     script.id = 'stripe-script';
//     script.type = 'text/javascript';
//     script.src = 'https://checkout.stripe.com/checkout.js';
//     script.onload = () => {
//       this.paymentHandler = (<any>window).StripeCheckout.configure({
//         key: 'pk_test_51MGFumSF5JHb9m1dmd0tOGyFMlhWYk35QwzTMyuG0R6sU33m2cx0OWmXURgsx5dtH87FOmFmNWrMgvToGBGzWNTQ00oMECFIdg',
//         locale: 'auto',
//         token: function (stripeToken: any) {
//           console.log(stripeToken);
//           alert('Payment has been successfull!'+stripeToken);
//         },
//       });
//     };
//     window.document.body.appendChild(script);
//   }


// }




qty:number=0;
i=0;
plus(item:any){console.log(item.qty+ "sheldon");console.log(item.qty+" Stunner");
this.qty=+this.qt(item);
this.i=+this.qt(item);
console.log(this.i +" xyz"+this.qty);
if(this.i !=15){
  this.i++;this.qty=this.i;console.log(this.i +" xyz"+this.qty);this.cart.setMe(this.i);
 this.cart.deleteCart(item).subscribe((items:any)=>{console.log(items+" The Rock")});
}
}
minus(item:any){
this.qty=+this.qt(item);
this.i=+this.qt(item);
if(this.i !=0){
  this.i--;this.qty=this.i;this.cart.setMe(this.i);
 this.cart.deleteCart(item).subscribe((items:any)=>{console.log(items+" The Rock")});if(this.i===0){
  this.product=null;
 }
}
}
qt(item:any){
return item.qty;
}


}
