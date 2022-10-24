import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CartItem } from '../../interfaces/cart-item';
import { Customer } from '../../interfaces/customer';
import { Item } from '../../interfaces/item'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.scss']
})
export class ListOfItemsComponent implements OnInit {

  @Input() listOfCustomers: Customer[] = [];
  @Input() listOfItems: Item[] = [];
  @Input() listOfCartItems: CartItem[] = [];
  @Input() isItemFormOpen: boolean = false;
  @Input() item: Item = {
    name: "",
    cost: 0
  }
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }
  @Input() quantity: number = 0;
  @Input() cart: Item[] = [];
  @Input() qty: number[] = [];
  @Input() shippingFee: number = 50;
  @Input() cartItem: CartItem;

  @Output() saveEvent: EventEmitter<Item> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<Item> = new EventEmitter();
  @Output() viewCartEvent : EventEmitter<number> = new EventEmitter();
  @Output() addToCartEvent : EventEmitter<CartItem> = new EventEmitter();
  @Output() changeOptionEvent : EventEmitter<Customer> = new EventEmitter();
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  handleDelete(it: Item): void {
    this.deleteEvent.emit(it);
  }

  handleSave(it: Item): void{
    this.saveEvent.emit(it);
    this.isItemFormOpen = false;
  }

  handleEdit(it: Item): void{
    let o = {...it}
    this.item = o;
    this.isItemFormOpen = true;  
  }

  handleAddToCart(cartItem: CartItem): void{
    //let sum = 0;
    this.cartItem = cartItem;
    this.cartItem.customerId = this.customer.id;

    for(let i=0; i<this.listOfCartItems.length; i++){
      let tempCart = this.listOfCartItems[i];
      if(tempCart.itemId == cartItem.itemId && tempCart.customerId == cartItem.customerId){
        this.cartItem.id = tempCart.id;  
      }
    }

    let cart = {...this.cartItem};
    this.cartService.addCartItem(cart).subscribe((c) => {
      this.addToCartEvent.emit(cart);
    })    
  }

  handleViewCart(id: number): void{
    this.viewCartEvent.emit(id);
  }

  handleChangeOption(customer: Customer): void{
    this.customer = customer;
    this.changeOptionEvent.emit(customer);
  }

}
