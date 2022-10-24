import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../interfaces/item';
import { CartItem } from '../../interfaces/cart-item';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() quantity: number;
  @Input() item: Item;
  @Input() cartItem: CartItem = {
    quantity: 0,
    cost: 0
  }
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }

  @Output() deleteEvent: EventEmitter<Item> = new EventEmitter();
  @Output() editEvent: EventEmitter<Item> = new EventEmitter();
  @Output() addToCartEvent : EventEmitter<CartItem> = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(): void{
    this.deleteEvent.emit(this.item);
  }

  handleEdit(): void{
    this.editEvent.emit(this.item);
  }

  addToCart(): void{ 
    if(this.quantity == undefined){
      this.quantity = 1;
    }
    this.cartItem.quantity = this.quantity;
    this.cartItem.cost = this.item.cost * this.quantity;
    this.cartItem.itemId = this.item.id;
    //debugger;
    this.addToCartEvent.emit(this.cartItem);
  }
}
