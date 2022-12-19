import { Component, OnInit } from '@angular/core';

import { SpringService } from '../Service/spring.service';
import { Router } from '@angular/router';
import { Search } from '../header/search.model';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  search=new Search();
  constructor(private spring:SpringService,private route:Router) { }

  ngOnInit(): void {
  }
  registerForm(search:Search){
    console.log(search);
  this.spring.searchName(search);
  this.route.navigate(["/adminheader/search"]);
  }
}
