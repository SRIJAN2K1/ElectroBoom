import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../Service/cart.service';
import { UserService } from '../user.service';
import { Users } from '../users.model';
import { RegisterComponent } from '../register/register.component';
import { RegisterfirstComponent } from '../registerfirst/registerfirst.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userserv:UserService,private cart:CartService,private route:Router,private admin:AdminService) { }
  users =new Users();userreturn:any;showHead:boolean =true;res:any;myimage:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5X6veVD8Hz5XK_biqbN97uBjfc1a5-yFrYLcjMDL8Zcm6ZlK_jtQ8zlLhMGlDBRzIWg&usqp=CAU";
  ngOnInit(): void {
  }
  registerForm(user:any){this.admin.setAdmin(user);
    console.log(user);
   this.userserv.saveUser(user).subscribe(res=>{this.userreturn=res;console.log(this.userreturn);
    if(this.userreturn!=null){
      console.log(this.userreturn+"Hi");
    this.cart.addId(this.userreturn);
    this.showHead=false;
    if(user.user==='User'){
    this.route.navigate(["header/products"]);}
    else{
      this.route.navigate(["adminheader/display"]);
    }
  }
    else{
      alert("Please Register Yourself");
      this.route.navigate(["user"]);
    }
  });
    }
    register(xyz:any){this.showHead=false;
      this.route.navigate(["register"]);
    }
}
