import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListOfItemsComponent } from './components/list-of-items/list-of-items.component';
import { ListOfCustomersComponent } from './components/list-of-customers/list-of-customers.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ItemComponent } from './components/item/item.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { CustomerSelectComponent } from './components/customer-select/customer-select.component';
import { ListOfCartItemsComponent } from './components/list-of-cart-items/list-of-cart-items.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartActionsComponent } from './components/cart-actions/cart-actions.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    FooterComponent,
    ListOfItemsComponent,
    ListOfCustomersComponent,
    CustomerComponent,
    CustomerFormComponent,
    ItemComponent,
    ItemFormComponent,
    CustomerSelectComponent,
    ListOfCartItemsComponent,
    CartItemComponent,
    CartActionsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
