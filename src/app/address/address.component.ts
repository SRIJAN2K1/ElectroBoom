import { Component, OnInit } from '@angular/core';
import { Finaladdress } from './finaladdress.model';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
final=new Finaladdress();
  constructor(public cart:CartService,private payment:PaymentService,private route:Router) { }

  ngOnInit(): void {  this.invokeStripe();
  }
  paymentHandler: any = null;
registerForm(){
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51MGFumSF5JHb9m1dmd0tOGyFMlhWYk35QwzTMyuG0R6sU33m2cx0OWmXURgsx5dtH87FOmFmNWrMgvToGBGzWNTQ00oMECFIdg',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: this.payment.pay.name,
    description: this.payment.pay.email,
    amount: this.cart.mee * 100,
  });

}

invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51MGFumSF5JHb9m1dmd0tOGyFMlhWYk35QwzTMyuG0R6sU33m2cx0OWmXURgsx5dtH87FOmFmNWrMgvToGBGzWNTQ00oMECFIdg',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!'+stripeToken);
        },
      });
    };
    window.document.body.appendChild(script);
  }

}

}
