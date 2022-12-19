import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { SpringService } from '../Service/spring.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {
  public productList :any;temp:any;
  abcd="https://www.tutorialspoint.com/electronic_circuits/images/electronic_components.jpg";
Arduino="https://docs.arduino.cc/static/d0c28c5bd0894792476c6052dea5fa63/29114/board-anatomy.png";
Plc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrbYlmPfdfwljF1gJTlsxW-_qVBoQdLZESQ&usqp=CAU";
Sensors="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLRqsdZoe9RONWm7zKh0D6MwLzOCSfsA5VA&usqp=CAU";
HMI="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hRYsL2d0nCA5EHZ97TsQcImT1z-IsIrpoA&usqp=CAU";
Transistors="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKAVb-FRugWlKc2S5PuaVyM4mVVCvFR_QPQ&usqp=CAU";
Solenoid="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuxh2FLkW1YgafT2xoU4QIJ8XM56HOVyIkg&usqp=CAU";
ZSS="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBcTHNpbiRhwN_0BxZP_oHUf8B3Xv6NzTJQ&usqp=CAU";
LEDs="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zEexwOEykScnhGJlCMWmgLbsyLmfdoQIYw&usqp=CAU";
  xyz="https://www.tutorialspoint.com/electronic_circuits/images/electronic_components.jpg";

  TeslaCoil="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujXG2CXbM2v-u3a_fGlxjtZM71HABkm3ABg&usqp=CAU";
  Battery="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-FXRw7rbz953j_L4omsyrwAfu-WzACdtPw&usqp=CAU";

  constructor(public spring:SpringService, private cart:CartService,private route:Router) { }

  ngOnInit(): void {
this.spring.getPrac().subscribe((item:any)=>{console.log(item);});
this.spring.practice2.subscribe(productList=>this.productList=productList);
  }
updateItem(item:any){
  this.spring.setUpdateItem(item);
this.route.navigate(['adminheader/update']);
}
deleteItem(item:any){
this.spring.deleteNew(item).subscribe((items:any)=>{console.log(items)});
this.route.navigate(['adminheader/display']);
}
}
