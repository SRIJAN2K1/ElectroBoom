import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './Service/cart.service';
import { UserService } from './user.service';
import { Users } from './users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
