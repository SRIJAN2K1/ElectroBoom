import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { Users } from './users.model';
import { CartComponent } from './cart/cart.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
saveUser(user: Users){
  console.log(this.http.post<Users>("/User/get",user));
return this.http.post<Users>("/User/get",user);
}
saveMe(user:Users){
  console.log(this.http.post<Users>("/User/check",user));
return this.http.post<Users>("/User/check",user);
}
}

