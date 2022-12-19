import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirstUser } from 'firstUser.model';
import { UpdateDTO } from 'src/updateDTO.model';
import { AddItem } from './products-admin/addItem.model';
import { Users } from './users.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  firstUser=new FirstUser();addItem=new AddItem();users =new Users(); 
  constructor(private http:HttpClient) { }
  logName(item:any){
    this.firstUser=item;
  }
  setAdmin(user:Users){
    this.users=user;
  }
  save(addItem:AddItem){
    console.log(addItem);
    return this.http.post<AddItem>("/Items/add",addItem);}
    
    update(update:UpdateDTO){
      console.log(update);
      return this.http.post<UpdateDTO>("/Items/update",update);}
    
    delete(addItem:AddItem){
      return this.http.post<AddItem>("/Items/delete",addItem);
    }
    
  }