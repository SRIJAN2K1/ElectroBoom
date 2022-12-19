import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstUser } from 'firstUser.model';
import { AdminService } from '../admin.service';
import { SpringService } from '../Service/spring.service';
import { Users } from '../users.model';
import { Addit } from './addit.model';
import { AddItem } from './addItem.model';
import { Operation } from './operation.model';
import { Temp } from './temp.model';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {
firstUser=new FirstUser(); i:any;temp:any;use=new Users();addit=new Addit();
addItem = new AddItem();
operation=new Operation();productList:any;try:any;
  constructor(private route:Router, private admin:AdminService,private spring:SpringService) { 
  }

  ngOnInit(): void {
  }
registerForm(item:any){
  console.log(item);
   this.spring.addNew(item).subscribe((res:any)=>{this.temp=res});
   alert("Item has been added!");
   this.route.navigate(['adminheader/display']);
}}
