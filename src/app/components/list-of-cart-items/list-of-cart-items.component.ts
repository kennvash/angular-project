import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-list-of-cart-items',
  templateUrl: './list-of-cart-items.component.html',
  styleUrls: ['./list-of-cart-items.component.scss']
})
export class ListOfCartItemsComponent implements OnInit {

  @Input() listOfCartItems: CartItem[] = [];
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }
  @Input() sum: number;

  @Output() deleteCartItemEvent : EventEmitter<CartItem> = new EventEmitter();
  @Output() clearCartEvent: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(cartItem: CartItem): void {
    this.deleteCartItemEvent.emit(cartItem);
  }

  handleClearCart(id: number): void {
    this.clearCartEvent.emit(id);
  }

}
