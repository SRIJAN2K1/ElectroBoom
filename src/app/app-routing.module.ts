import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import{AdminDisplayComponent} from'./admin-display/admin-display.component';
import { AdminsearchComponent } from './adminsearch/adminsearch.component';
import { RegisterfirstComponent } from './registerfirst/registerfirst.component';
import { UpdateitemsComponent } from './updateitems/updateitems.component';
import { BillComponent } from './bill/bill.component';
import { AddressComponent } from './address/address.component';
const routes: Routes = [ 
{path: '',redirectTo:'AppComponent',pathMatch:'full'},{path: 'header/products',component:ProductsComponent},
{path: 'header/cart_1',component:CartComponent},{path: 'header',component:HeaderComponent}
,{path: 'user',component:UserComponent}
,{path:'header/admin',component:ProductsAdminComponent}
,{path:'header/search',component:SearchComponent},
{path:'adminheader',component:AdminHeaderComponent},
{path:'adminheader/display',component:AdminDisplayComponent}
,{path:'adminheader/search',component:AdminsearchComponent},
{path:'register',component:RegisterfirstComponent},
{path:'adminheader/update',component:UpdateitemsComponent},
{path:'header/bill',component:BillComponent},{path:"header/address",component:AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CartComponent,HeaderComponent];