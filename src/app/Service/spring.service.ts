import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {map} from 'rxjs/operators'
import { Search } from '../header/search.model';
import { Addit } from '../products-admin/addit.model';
import { Nupdate } from '../updateitems/nupdate.model';
import { Del } from './del.model';
@Injectable({
  providedIn: 'root'
})
export class SpringService {
  search=new Search();temp1 = new Nupdate();temp2:any;practice1=new BehaviorSubject<any>(null);
  practice2=this.practice1.asObservable();del=new Del();addit=new Addit();tempo1:any;
  image=[{img:"https://docs.arduino.cc/static/d0c28c5bd0894792476c6052dea5fa63/29114/board-anatomy.png"},
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrbYlmPfdfwljF1gJTlsxW-_qVBoQdLZESQ&usqp=CAU"},
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLRqsdZoe9RONWm7zKh0D6MwLzOCSfsA5VA&usqp=CAU"},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hRYsL2d0nCA5EHZ97TsQcImT1z-IsIrpoA&usqp=CAU"},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKAVb-FRugWlKc2S5PuaVyM4mVVCvFR_QPQ&usqp=CAU"},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuxh2FLkW1YgafT2xoU4QIJ8XM56HOVyIkg&usqp=CAU"},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBcTHNpbiRhwN_0BxZP_oHUf8B3Xv6NzTJQ&usqp=CAU"},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zEexwOEykScnhGJlCMWmgLbsyLmfdoQIYw&usqp=CAU"}
];
  constructor(private httpClient:HttpClient) {}
  searchName(search:Search){
this.search.name=search.name;
  }
  takeProduct(item:any){
    this.practice1.next(item);
  }
getProduct(){
 return this.httpClient.get<any>("/Items/ITEMS").pipe(map((res:any)=>{
  this.practice1.next(res);
  return res;
  }))
  ;
}getPrac(){
  this.getProduct().subscribe((item:any)=>{this.practice1.next(item);console.log(item+ ' yay')});
  return this.practice2;
}
getSearch(){
  console.log(this.search);
  return this.httpClient.post<Search>("/Items/search",this.search)
  .pipe(map((res:any)=>{
    return res;
  }))
}
 setUpdateItem(item:any){
this.temp2=item;
this.temp1.id=item.i;
console.log(this.temp1.id+" hey there");
 }
 getUpdateItem(){
  return this.temp2;
 }
 updateSpring(item:any){
  this.temp1.funct=item.funct;this.temp1.price=item.price;this.temp1.items=item.items;this.temp1.specs=item.specs;
  alert("Item details have been Updated");
this.update2(item).subscribe((item:any)=>{this.practice1.next(item)});
 return this.httpClient.post<Nupdate>("/Items/update",this.temp1);
}
update2(item:any){
  return this.httpClient.post<Nupdate>("/Items/update",this.temp1);
}
deleteNew(item:any){
this.delete2(item).subscribe((item:any)=>{this.practice1.next(item)});
return this.httpClient.post<Del>("/Items/delete",this.del);
}
delete2(item:any){
this.del.items=item.n;this.del.fun=item.f;this.del.price=item.p;this.del.specs=item.s;
  return this.httpClient.post<Del>("/Items/delete",this.del);
}
addNew(item:any){
  this.add2(item).subscribe((item:any)=>{this.practice1.next(item)});
  return this.httpClient.get<any>("/Items/ITEMS").pipe(map((res:any)=>{
    return res;
    }))
}
add2(item:any){
  this.addit.fun=item.fun;this.addit.items=item.items;this.addit.price=item.price;this.addit.specs=item.specs;
  console.log(this.addit);
  return this.httpClient.post<Addit>("/Items/add",this.addit);
}
}
