import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { countrypipe } from './country.pipe';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { SearchComponent } from './search/search.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { AdminsearchComponent } from './adminsearch/adminsearch.component';
import { RegisterfirstComponent } from './registerfirst/registerfirst.component';
import { UpdateitemsComponent } from './updateitems/updateitems.component';
import { BillComponent } from './bill/bill.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    countrypipe,CartComponent,HeaderComponent,
    routingComponents,
    ProductsComponent,
    UserComponent,
    ProductsAdminComponent,
    SearchComponent,RegisterComponent, AdminHeaderComponent, AdminDisplayComponent, AdminsearchComponent, RegisterfirstComponent, UpdateitemsComponent, BillComponent, AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,HttpClientModule,
  ],
  providers: [ProductsAdminComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
