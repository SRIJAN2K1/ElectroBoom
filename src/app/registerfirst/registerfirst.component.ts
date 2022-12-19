import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CartService } from '../Service/cart.service';
import { UserService } from '../user.service';
import { Users } from '../users.model';

@Component({
  selector: 'app-registerfirst',
  templateUrl: './registerfirst.component.html',
  styleUrls: ['./registerfirst.component.css']
})
export class RegisterfirstComponent implements OnInit {
  users =new Users();userreturn:any;showHead:boolean =true;res:any;myimage:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5X6veVD8Hz5XK_biqbN97uBjfc1a5-yFrYLcjMDL8Zcm6ZlK_jtQ8zlLhMGlDBRzIWg&usqp=CAU";
  constructor(private userserv:UserService,private cart:CartService,private route:Router,private admin:AdminService) { }
  ngOnInit(): void {
  }
  registerForm(user:any){this.admin.setAdmin(user);
    console.log(user);
   this.userserv.saveMe(user).subscribe(res=>{this.userreturn=res;console.log(this.userreturn);
    if(this.userreturn!=null){
      console.log(this.userreturn+"Hi");
    this.cart.addId(this.userreturn);
    this.showHead=false;
    if(user.user==='User'){
      this.showHead=false;
    this.route.navigate(["user"]);}
    else{this.showHead=false;
      this.route.navigate(["user"]);
    }
    }
    else{
      this.showHead=false;
      alert("You are already Registered, Please Login");
      this.route.navigate(["user"]);
    }
  });
    }
}
