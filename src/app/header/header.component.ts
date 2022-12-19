import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { FirstUser } from 'firstUser.model';
import { AdminService } from '../admin.service';
import { SpringService } from '../Service/spring.service';
import { Users } from '../users.model';
import { Search } from './search.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
search=new Search();images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsC-VdOsXeNE0uhQvzvuZrgCOpEmnls8N2Ow&usqp=CAU";
 myimg:string='assets/xyz.jpg';
constructor(private spring:SpringService,private route:Router) { }
user=new Users();
  ngOnInit(): void {
   
  }
registerForm(search:Search){
  console.log(search);
this.spring.searchName(search);
this.route.navigate(["/header/search"]);
}
}
