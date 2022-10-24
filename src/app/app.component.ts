import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../app/interfaces/customer';
import { Item } from '../app/interfaces/item';
import { CustomerService } from '../app/services/customer.service';
import { ItemService } from '../app/services/item.service';
import { CartService } from '../app/services/cart.service';
import { CartItem } from './interfaces/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-project';
  @Input() listOfCustomers: Customer[] = [];
  @Input() listOfItems: Item[] = [];
  @Input() listOfCartItems: CartItem[] = [];
  @Input() showItems: boolean = true;
  @Input() showCustomers: boolean = false;
  @Input() showCartItems: boolean = false;
  @Input() isFormOpen: boolean = false;
  @Input() isItemFormOpen: boolean = false;
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }
  @Input() item: Item = {
    name: "",
    cost: 0
  }
  @Input() cartItem: CartItem = {
    quantity: 0,
    cost: 0
  }
  @Input() sum: number;

  constructor(private customerService: CustomerService, private itemService: ItemService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.listOfCustomers = customers;
    })
    this.itemService.getItems().subscribe((items) => {
      this.listOfItems = items;      
    })
  }

  toggleCustomerView(message: string): void {
    this.showItems = false;
    this.showCustomers = true;
    this.showCartItems = false;
    if(message=="view"){
      this.isFormOpen = false;
    }
    else{
      this.isFormOpen = true;
    }
  }

  toggleItemsView(message: string): void {
    this.showCustomers = false;
    this.showItems = true;
    this.showCartItems = false;
    if(message=="view"){
      this.isItemFormOpen = false;
    }
    else{
      this.isItemFormOpen = true;
    }
  }

  handleSave(cust: Customer) : void {
    let updated = false;

    for(let i = 0; i<this.listOfCustomers.length; i++){
      let tempId = this.listOfCustomers[i].id;

      if (tempId && tempId == cust.id){
        this.listOfCustomers[i] = cust;
        updated = true;
      }
    }

    if(!updated){
      this.listOfCustomers.push(cust);
    }
  }

  handleSaveItem(it: Item): void {
    let updated = false;

    for(let i = 0; i<this.listOfItems.length; i++){
      let tempId = this.listOfItems[i].id;

      if (tempId && tempId == it.id){
        this.listOfItems[i] = it;
        updated = true;
      }
    }

    if(!updated){
      this.listOfItems.push(it);
    }
  }

  handleDelete(cust: Customer): void {
    this.customer = cust;
    this.customerService.deleteCustomer(cust).subscribe((c) => {
      this.listOfCustomers = this.listOfCustomers.filter((c) => {
        return this.customer.id != c.id;
      })
    })
  }

  handleDeleteItem(it: Item): void {
    this.item = it;
    this.itemService.deleteCustomer(it).subscribe((i) => {
      this.listOfItems = this.listOfItems.filter((i) => {
        return this.item.id != i.id;
      })
    })
  }

  handleViewCart(id: number): void{
    this.showCustomers = false;
    this.showItems = false;
    this.showCartItems = true;
    this.sum = 0;
    this.customerService.getCustomer(id).subscribe((c) => {
      this.customer = c;
    });

    this.getCartItems(id);
    this.getCartSum();
  }

  handleClearCart(id: number): void {
    this.cartService.clearCart(id).subscribe((c) => {
      if(c){
        this.listOfCartItems = [];
        this.sum = 0;
      }
    })
  }

  getCartSum(): void{
    this.listOfCartItems.forEach(c => this.sum += c.cost);
  }

  getCartItems(id: number): void{
    this.cartService.getCartItems(id).subscribe((cart) =>{
      this.listOfCartItems = cart;
    })
  }

  handleAddToCart(cartItem: CartItem): void{
    let updated = false;

    for(let i = 0; i<this.listOfCartItems.length; i++){
      let tempCartId = this.listOfCartItems[i].id;

      if (tempCartId && tempCartId == cartItem.id){
        this.listOfCartItems[i] = cartItem;
        updated = true;
      }
    }

    if(!updated){
      this.listOfCartItems.push(cartItem);
    }
  }

  handleChangeOption(customer: Customer): void{
    let id = customer.id;
    this.getCartItems(id!);
  }

  handleDeleteCartItem(cart: CartItem): void{
    this.cartItem = cart;
    this.cartService.deleteCartItem(cart).subscribe((c) => {
      this.listOfCartItems = this.listOfCartItems.filter((c) => {
        return this.cartItem.id != c.id;
      })  
    })
    debugger;
  }
}
