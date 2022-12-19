import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstUser } from 'firstUser.model';
import { UpdateDTO } from 'src/updateDTO.model';
import { AdminService } from '../admin.service';
import { AddItem } from '../products-admin/addItem.model';
import { SpringService } from '../Service/spring.service';
import { Users } from '../users.model';

@Component({
  selector: 'app-updateitems',
  templateUrl: './updateitems.component.html',
  styleUrls: ['./updateitems.component.css']
})
export class UpdateitemsComponent implements OnInit {
  firstUser=new FirstUser(); i:any;temp:any;use=new Users();x:any;
  addItem = new AddItem();update=new UpdateDTO();
productList:any;
  constructor(private route:Router, private admin:AdminService,private spring:SpringService) {
this.temp = this.spring.getUpdateItem();

   }

  ngOnInit(): void {
  }
  registerForm(item:any){
    this.spring.updateSpring(item).subscribe(res=>{
      console.log(res);
      this.x=res;
    });
    this.route.navigate(['adminheader/display']);
  }
}
