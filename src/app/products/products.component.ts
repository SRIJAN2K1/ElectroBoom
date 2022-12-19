import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../Service/cart.service';
import { SpringService } from '../Service/spring.service';
import { Images } from './images.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productList :any;temp:any;
xyz="https://www.tutorialspoint.com/electronic_circuits/images/electronic_components.jpg";
images=[{img:"https://docs.arduino.cc/static/d0c28c5bd0894792476c6052dea5fa63/29114/board-anatomy.png"}
,{img:"https://www.toshiba.com/tic/product_images/plcs/type1-light/_ASR5088.jpg"},
{img:"https://www.maxbotix.com/wp-content/uploads/2017/01/MB1200-XL-Ultrasonic-Sensor-Iso.jpg"},
{img:"https://play-lh.googleusercontent.com/CE3Wx9eMPp7I6R1z8vCI5YuKE0JFxz5wIv5hRXGQd2_aIGewYqw5wDSd8v5ppTANMw=w2560-h1440-rw"},
{img:"https://www.tutorialspoint.com/electronic_circuits/images/electronic_components.jpg"},
{img:"https://m.media-amazon.com/images/I/91-2FBoN8sL._SX355_.jpg"}]; 

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
constructor(public spring:SpringService, private cart:CartService) { 
  }

  ngOnInit(): 
  
  void {
    this.spring.getPrac().subscribe((item:any)=>{console.log(item);});
    this.spring.practice2.subscribe(productList=>this.productList=productList);
    
  }
addCart(item:any){
this.cart.addPid(item).subscribe((res)=>{
  console.log(res);
  this.temp=res;
});;
}
}
